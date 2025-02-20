import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Leva, useControls } from "leva";
import { EffectComposer, Bloom, DepthOfField, Noise, Vignette } from "@react-three/postprocessing";
import Model from "./Model";

const App = () => {
  // ✅ Scene & Post-Processing Controls
  const { environment } = useControls("Scene Settings", {
    environment: { options: ["studio", "sunset", "forest", "city", "night", "dawn", "dusk"] },
  });

  const { enableEffects } = useControls("Post-Processing", {
    enableEffects: { value: true, label: "Enable Effects" }, // ✅ Checkbox to toggle all effects
  });

  const { enableBloom, bloomIntensity, bloomThreshold, bloomSmoothing, bloomColor } = useControls("Bloom Settings", {
    enableBloom: { value: true, label: "Enable Bloom" },
    bloomIntensity: { value: 0.5, min: 0, max: 3, step: 0.01, label: "Intensity" },
    bloomThreshold: { value: 0.5, min: 0, max: 1, step: 0.01, label: "Threshold" },
    bloomSmoothing: { value: 0.1, min: 0, max: 1, step: 0.01, label: "Smoothing" },
    bloomColor: { value: "#ffffff", label: "Bloom Color" },
  });

  const { enableDOF, focusDistance, focalLength, bokehScale } = useControls("Depth of Field", {
    enableDOF: { value: true, label: "Enable DOF" },
    focusDistance: { value: 0, min: 0, max: 1, step: 0.01, label: "Focus Distance" },
    focalLength: { value: 0.02, min: 0, max: 0.1, step: 0.001, label: "Focal Length" },
    bokehScale: { value: 2, min: 0, max: 10, step: 0.1, label: "Bokeh Scale" },
  });

  const { enableNoise, noiseOpacity } = useControls("Noise Settings", {
    enableNoise: { value: true, label: "Enable Noise" },
    noiseOpacity: { value: 0.02, min: 0, max: 1, step: 0.01, label: "Opacity" },
  });

  const { enableVignette, vignetteOffset, vignetteDarkness } = useControls("Vignette Settings", {
    enableVignette: { value: true, label: "Enable Vignette" },
    vignetteOffset: { value: 0.1, min: 0, max: 1, step: 0.01, label: "Offset" },
    vignetteDarkness: { value: 1.1, min: 0, max: 3, step: 0.1, label: "Darkness" },
  });

  return (
    <div className="w-full text-white h-screen bg-gray-900">
      <Leva collapsed />
      <Canvas className="w-full h-full">
        <OrbitControls />
        <Model />
        <Environment preset={environment} />
        
        {/* ✅ Toggle EffectsComposer with enableEffects checkbox */}
        {enableEffects && (
          <EffectComposer>
            {enableDOF && (
              <DepthOfField 
                focusDistance={focusDistance} 
                focalLength={focalLength} 
                bokehScale={bokehScale} 
                height={480} 
              />
            )}
            {enableBloom && (
              <Bloom
                intensity={bloomIntensity}
                threshold={bloomThreshold}
                luminanceSmoothing={bloomSmoothing}
                color={bloomColor}
              />
            )}
            {enableNoise && <Noise opacity={noiseOpacity} />}
            {enableVignette && <Vignette eskil={false} offset={vignetteOffset} darkness={vignetteDarkness} />}
          </EffectComposer>
        )}
      </Canvas>
    </div>
  );
};

// ✅ Preload the Model for Performance
useGLTF.preload("/model.glb");

export default App;
