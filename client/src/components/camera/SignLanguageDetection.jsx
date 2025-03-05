"use client";

import React, { useEffect, useRef } from "react";
import { Hands } from "@mediapipe/hands";
import * as drawingUtils from "@mediapipe/drawing_utils";
import { Camera } from "@mediapipe/camera_utils";

export default function SignLanguageDetection() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Initialize MediaPipe Hands
    const hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.5,
    });

    // Callback: When results are received from MediaPipe
    hands.onResults((results) => {
      const canvasCtx = canvasRef.current.getContext("2d");
      // Set canvas dimensions to match the video element
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;

      // Clear the canvas
      canvasCtx.save();
      canvasCtx.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height,
      );

      // Optionally, draw the current video frame as the background
      canvasCtx.drawImage(
        results.image,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height,
      );

      // Draw hand landmarks and connectors if hands are detected
      if (results.multiHandLandmarks) {
        for (const landmarks of results.multiHandLandmarks) {
          drawingUtils.drawConnectors(
            canvasCtx,
            landmarks,
            Hands.HAND_CONNECTIONS,
            {
              color: "#00FF00",
              lineWidth: 5,
            },
          );
          drawingUtils.drawLandmarks(canvasCtx, landmarks, {
            color: "#FF0000",
            lineWidth: 2,
          });
        }
      }
      canvasCtx.restore();
    });

    // Initialize the MediaPipe Camera utility to handle video input
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
