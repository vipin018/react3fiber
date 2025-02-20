import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Leva, useControls } from "leva";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
// import Model from "./Model";
import Cube from "./Cube";



const App = () => {
  const { environment } = useControls("Scene Settings", {
    environment: { options: ["studio", "sunset", "forest", "city"] },
  });

  return (
    <div className="w-full text-white h-screen bg-gray-900">
      <Leva collapsed />
      <Canvas className="w-full h-full">
        <OrbitControls />
        {/* <Model /> ✅ Load the GLB Model */}
        <Cube  />  
        <Environment preset={environment} />
      </Canvas>
    </div>
  );
};

// ✅ Preload the Model for Performance
useGLTF.preload("/model.glb");

export default App;
