import React from "react";
import { useGLTF } from "@react-three/drei";

const Model = () => {
  // ✅ Load the 3D Model (Hook must be used before JSX)
  const { scene } = useGLTF("/model.glb"); 

  return <primitive object={scene} scale={30} position={[0, 0, 0]} />;
};

export default Model;
