import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Leva, useControls } from "leva";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Model from "./Model";
// import Cube from "./Cube";



const App = () => {
  const { environment, bloom, bloomIntensity, bloomThreshold, bloomMipmapBlur, bloomKernelSize, bloomSmoothing } = useControls("Scene Settings", {
    environment: { options: ["studio", "sunset", "forest", "city", "night", "dawn", "dusk"] },
    bloom: { value: true, label: "Bloom" },
    bloomIntensity: { value: 0.1, min: 0, max: 1, step: 0.01, label: "Bloom Intensity" },
    bloomThreshold: { value: 0.5, min: 0, max: 1, step: 0.01, label: "Bloom Threshold" },
    bloomMipmapBlur: { value: true, label: "Bloom Mipmap Blur" },
    bloomKernelSize: { value: 1.5, min: 0, max: 10, step: 0.1, label: "Bloom Kernel Size" },
    bloomSmoothing: { value: 0.025, min: 0, max: 1, step: 0.001, label: "Bloom Smoothing" },
  });

  return (
    <div className="w-full text-white h-screen bg-gray-900">
      <Leva collapsed />
      <Canvas className="w-full h-full">
        <OrbitControls />
        {/* <Cube  />   */}
        <Model />
        <Environment preset={environment} />
        <EffectComposer>
          <Bloom 
          intensity={bloom ? bloomIntensity : 0}
           threshold={bloomThreshold}
           mipmapBlur={bloomMipmapBlur}
           luminanceThreshold={bloomThreshold}
           luminanceSmoothing={bloomSmoothing}
           />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

// ✅ Preload the Model for Performance
useGLTF.preload("/model.glb");

export default App;
