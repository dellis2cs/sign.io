"use client";

import { useEffect, useRef } from "react";

export default function Camera() {
  const videoRef = useRef(null);

  useEffect(() => {
    async function enableCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing the camera:", error);
      }
    }
    enableCamera();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto ">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full rounded-lg border border-slate-200 shadow-lg"
      />
    </div>
  );
}
