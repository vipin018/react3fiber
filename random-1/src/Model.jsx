import React from 'react'
import { useGLTF } from "@react-three/drei";

const Model = () => {
  return (
    <div>
        const { scene } = useGLTF("/model.glb"); // Ensure this file is in public/models

  return <primitive object={scene} scale={1.5} position={[-1, 0, 0]} />;
    </div>
  )
}

export default Model