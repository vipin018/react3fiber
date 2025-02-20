import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Leva, useControls } from "leva";

const App = () => {
  const {
    showGrid,
    gridSize,
    environment,
    color,
    emissive,
    emissiveIntensity,
    metalness,
    roughness,
    opacity,
    transparent, // ✅ Added to useControls
    fog,
    fogColor,
    fogDensity,
    fogNear,
    fogFar,
  } = useControls("Scene Settings", {
    environment: { options: ["studio", "sunset", "forest", "city"] },
    showGrid: { value: false },
    gridSize: { value: 10, min: 5, max: 50, step: 1 },
    color: { value: "#ff0000" },
    emissive: { value: "#000000" },
    emissiveIntensity: { value: 0.5, min: 0, max: 1 },
    metalness: { value: 0.5, min: 0, max: 1 },
    roughness: { value: 0.5, min: 0, max: 1 },
    opacity: { value: 1, min: 0, max: 1 },
    transparent: { value: false }, // ✅ Added here
    fog: { value: false },
    fogColor: { value: "#000000" },
    fogDensity: { value: 0.01, min: 0, max: 1 },
    fogNear: { value: 0, min: 0, max: 100 },
    fogFar: { value: 100, min: 0, max: 100 },
  });

  return (
    <div className="w-full text-white h-screen bg-gray-900">
      <Leva collapsed />
      <Canvas className="w-full h-full">
        <OrbitControls />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial
            color={color}
            emissive={emissive}
            emissiveIntensity={emissiveIntensity}
            metalness={metalness}
            roughness={roughness}
            opacity={opacity}
            transparent={transparent}
            fog={fog}
            fogColor={fogColor}
            fogDensity={fogDensity}
            fogNear={fogNear}
            fogFar={fogFar}
          />
        </mesh>
        <Environment preset={environment} /> {/* ✅ Use dynamic environment */}
      </Canvas>
    </div>
  );
};

export default App;
