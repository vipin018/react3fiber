import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";

const Model = () => {
  const { scene } = useGLTF("/portal.glb"); // Load 3D model
  const modelRef = useRef(); // Reference for rotation

  // 🔄 Animate rotation
  useFrame(({ clock }) => {
    if (modelRef.current) {
    //   modelRef.current.rotation.z = Math.cos(clock.getElapsedTime()*2); // Adjust speed if needed
    }
  });

  // ✅ Position & Scale Controls using Leva
  const { x, y, z, scale } = useControls("Model Settings", {
    x: { value: 0, min: -10, max: 10, step: 0.1, label: "X Position" },
    y: { value: -2, min: -10, max: 10, step: 0.1, label: "Y Position" },
    z: { value: 0, min: -10, max: 10, step: 0.1, label: "Z Position" },
    scale: { value: 5, min: 0.1, max: 50, step: 0.1, label: "Scale" },
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={scale}
      position={[x, y, z]}
    />
  );
};

export default Model;
