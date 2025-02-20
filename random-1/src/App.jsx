import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Leva, useControls } from "leva";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

const Cube = () => {
  // ✅ Load Texture for Cube
  const texture = useLoader(THREE.TextureLoader, "/text.jpg"); // Replace with your texture

  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const App = () => {
  const {
    environment,
  } = useControls("Scene Settings", {
    environment: { options: ["studio", "sunset", "forest", "city"] },
  });
  return (
    <div className="w-full text-white h-screen bg-gray-900">
      <Leva collapsed />
      <Canvas
        className="w-full h-full"
      >
        <OrbitControls />
        <Cube /> {/* ✅ Render Cube with Texture */}
        <Environment preset={environment} />
      </Canvas>
    </div>
  );
};

export default App;
