import React, { useEffect, useRef, useState } from "react";
import { Hands } from "@mediapipe/hands";
import * as drawingUtils from "@mediapipe/drawing_utils";
import { Camera } from "@mediapipe/camera_utils";

export default function SignLanguageDetection() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [recognizedSign, setRecognizedSign] = useState("");

  // Helper function to process landmarks
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

  // Function to send processed landmarks to the backend for prediction
  const predictSign = async (dataAux) => {
    try {
      const response = await fetch("http://localhost:5001/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ landmarks: dataAux })
      });
      const json = await response.json();
      if (json.prediction) {
        setRecognizedSign(json.prediction);
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
      maxNumHands: 1, // Use one hand for prediction; adjust if needed
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.5,
    });

    hands.onResults((results) => {
      const canvasCtx = canvasRef.current.getContext("2d");
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;

      canvasCtx.save();
      // Clear the canvas and draw the video frame
      canvasCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      canvasCtx.drawImage(
        results.image,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );

      if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        // Process the first detected hand
        const landmarks = results.multiHandLandmarks[0];
        drawingUtils.drawConnectors(
          canvasCtx,
          landmarks,
          Hands.HAND_CONNECTIONS,
          { color: "#00FFFF", lineWidth: 5 }
        );
        drawingUtils.drawLandmarks(
          canvasCtx,
          landmarks,
          { color: "#00FFFF", lineWidth: 2 }
        );

        // Process landmarks for prediction
        const dataAux = processLandmarks(landmarks);
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
    // Run this effect only once
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
      {/* Display recognized sign via HTML overlay */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          fontSize: "48px",
          color: "red",
          fontWeight: "bold",
        }}
      >
        {recognizedSign}
      </div>
    </div>
  );
}
