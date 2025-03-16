import React, { useEffect, useRef, useState } from "react";
import { Hands } from "@mediapipe/hands";
import * as drawingUtils from "@mediapipe/drawing_utils";
import { Camera } from "@mediapipe/camera_utils";

export default function SignLanguageDetection() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [recognizedSign, setRecognizedSign] = useState("");
  // Ref to store the latest recognized sign for drawing callback
  const recognizedSignRef = useRef("");

  // Helper function to compute an angle (in degrees) given three points
  const computeAngle = (a, b, c) => {
    const ba = { x: a.x - b.x, y: a.y - b.y };
    const bc = { x: c.x - b.x, y: c.y - b.y };
    const dot = ba.x * bc.x + ba.y * bc.y;
    const normBA = Math.sqrt(ba.x * ba.x + ba.y * ba.y);
    const normBC = Math.sqrt(bc.x * bc.x + bc.y * bc.y);
    let cosineAngle = dot / (normBA * normBC);
    cosineAngle = Math.min(1, Math.max(-1, cosineAngle)); // Clamp to [-1,1]
    const angleRad = Math.acos(cosineAngle);
    return angleRad * (180 / Math.PI);
  };

  // Process landmarks to compute normalized coordinates (42 features)
  const processLandmarks = (landmarks) => {
    const xValues = landmarks.map((point) => point.x);
    const yValues = landmarks.map((point) => point.y);
    const minX = Math.min(...xValues);
    const minY = Math.min(...yValues);
    const processed = [];
    for (let i = 0; i < landmarks.length; i++) {
      processed.push(landmarks[i].x - minX);
      processed.push(landmarks[i].y - minY);
    }
    return processed;
  };

  // Send processed landmarks to the backend for prediction
  const predictSign = async (dataAux) => {
    try {
      const response = await fetch("http://localhost:5001/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ landmarks: dataAux })
      });
      const json = await response.json();
      if (json.prediction) {
        setRecognizedSign(json.prediction);
        recognizedSignRef.current = json.prediction;
      }
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  useEffect(() => {
    const hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.3,
      minTrackingConfidence: 0.5,
    });
    
    hands.onResults((results) => {
      const canvas = canvasRef.current;
      const canvasCtx = canvas.getContext("2d");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
    
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
      canvasCtx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
    
      if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        const landmarks = results.multiHandLandmarks[0];
    
        // Draw a bounding box around the hand (optional)
        const xValues = landmarks.map((point) => point.x);
        const yValues = landmarks.map((point) => point.y);
        const minX = Math.min(...xValues) * canvas.width;
        const minY = Math.min(...yValues) * canvas.height;
        const maxX = Math.max(...xValues) * canvas.width;
        const maxY = Math.max(...yValues) * canvas.height;
        const padding = 10;
        canvasCtx.strokeStyle = "black";
        canvasCtx.lineWidth = 4;
        canvasCtx.strokeRect(
          minX - padding,
          minY - padding,
          (maxX - minX) + 2 * padding,
          (maxY - minY) + 2 * padding
        );
    
        // Draw recognized sign text
        canvasCtx.font = "48px Arial";
        canvasCtx.fillStyle = "black";
        canvasCtx.fillText(recognizedSignRef.current, minX, minY - 15);
    
        // Process landmarks: get 42 normalized coordinate features
        const dataAux = processLandmarks(landmarks);
    
        // Now compute the additional 9 angle features in the same order as training:
        const angleIndex1 = computeAngle(landmarks[5], landmarks[6], landmarks[7]);
        const angleIndex2 = computeAngle(landmarks[6], landmarks[7], landmarks[8]);
        const angleMiddle1 = computeAngle(landmarks[9], landmarks[10], landmarks[11]);
        const angleMiddle2 = computeAngle(landmarks[10], landmarks[11], landmarks[12]);
        const angleRing1 = computeAngle(landmarks[13], landmarks[14], landmarks[15]);
        const angleRing2 = computeAngle(landmarks[14], landmarks[15], landmarks[16]);
        const anglePinky1 = computeAngle(landmarks[17], landmarks[18], landmarks[19]);
        const anglePinky2 = computeAngle(landmarks[18], landmarks[19], landmarks[20]);
        const angleThumb = computeAngle(landmarks[1], landmarks[2], landmarks[3]);
    
        // Append the 9 angle features (total features = 42 + 9 = 51)
        dataAux.push(
          angleIndex1, angleIndex2,
          angleMiddle1, angleMiddle2,
          angleRing1, angleRing2,
          anglePinky1, anglePinky2,
          angleThumb
        );
    
        // Send the processed 51-feature vector for prediction
        predictSign(dataAux);
      }
      canvasCtx.restore();
    });
    
    if (videoRef.current) {
      const camera = new Camera(videoRef.current, {
        onFrame: async () => {
          await hands.send({ image: videoRef.current });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <video
        ref={videoRef}
        className="w-full rounded-lg border border-slate-200 shadow-lg"
      />
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full rounded-lg pointer-events-none"
      />
    </div>
  );
}
