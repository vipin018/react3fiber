import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Rotate from "./Rotate";
import { Leva, useControls } from "leva";

const App = () => {
  // Leva GUI Controls
  const { showGrid, gridSize, environment, color } = useControls("Scene Settings", {
    environment: { options: ["studio", "sunset", "forest", "city"] },
    showGrid: { value: false },
    gridSize: { value: 10, min: 5, max: 50, step: 1 },
    showLeva: { value: true },
    color: { value: "#000000" },
    emissive: { value: "#000000" },
    emissiveIntensity: { value: 0.5 },
    metalness: { value: 0.5 },
    roughness: { value: 0.5 },
    opacity: { value: 1 },
    transparent: { value: false },
    side: { options: ["front", "back", "double"], value: "front" },
    wireframe: { value: false },
    
  });

  return (
    <div className="w-full text-white h-full bg-gray-900">
      <Leva collapsed /> {/* Leva Panel */}
      {/* First Canvas - Rotating Cube with Dynamic Environment */}
      <div className="w-full h-full">
        <Canvas className="w-full h-full">
          <Environment preset={environment} />
          <Rotate />
          {showGrid && <gridHelper args={[gridSize, gridSize]} />}
        </Canvas>  
      </div>
    </div>
  );
};

export default App;
