import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Rotate from "./Rotate";
import { Leva, useControls } from "leva";

const App = () => {
  // Leva GUI Controls
  const { showGrid, gridSize, environment } = useControls("Scene Settings", {
    showGrid: true,
    gridSize: { value: 10, min: 5, max: 50, step: 1 },
    environment: { options: ["studio", "sunset", "forest", "city"] },
  });

  return (
    <div className="w-full text-white h-full bg-gray-900">
      <Leva collapsed /> {/* Leva Panel */}
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover object-center"
          src="https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8fDB8fHwy"
          alt=""
        />
      </div>

      {/* First Canvas - Rotating Cube with Dynamic Environment */}
      <div className="w-1/2 h-full bg-blue-800">
        <Canvas className="w-full h-full">
          <Environment preset={environment} />
          <Rotate />
          {showGrid && <gridHelper args={[gridSize, gridSize]} />}
        </Canvas>

        {/* Second Canvas - Static Cube */}
        <div className="w-full h-full bg-green-800 flex justify-center items-center">
          <Canvas className="w-full h-full">
            <Environment preset="sunset" />
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial toneMapped={true} metalness={0} roughness={1} />
            </mesh>
            <OrbitControls />
            {showGrid && <gridHelper args={[gridSize, gridSize]} />}
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default App;
