import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";

const Model = () => {
  const { scene } = useGLTF("/glow.glb"); // Load 3D model
  const modelRef = useRef(); // Reference for rotation

  // 🔄 Animate rotation
  useFrame(({ clock }) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = clock.getElapsedTime(); // Adjust speed if needed
    }
  });

  // ✅ Light Controls from Leva
  const { color, intensity, x, y, z } = useControls("Light Settings", {
    color: { value: "#ffffff", label: "Color" },
    intensity: { value: 2, min: 0, max: 10, step: 0.1, label: "Intensity" },
    x: { value: 5, min: -10, max: 10, step: 0.1, label: "X Position" },
    y: { value: 5, min: -10, max: 10, step: 0.1, label: "Y Position" },
    z: { value: 5, min: -10, max: 10, step: 0.1, label: "Z Position" },
  });

  return (
    <>
      {/* ✅ 3D Model with Rotation */}
      <primitive ref={modelRef} object={scene} scale={1.5} position={[0, 0, 0]} />

      {/* ✅ Light with Dynamic Controls */}
      <directionalLight color={color} intensity={intensity} position={[x, y, z]} castShadow />
    </>
  );
};

export default Model;
