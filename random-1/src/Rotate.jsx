import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Rotate = () => {
    
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);    
    
  const meshRef = useRef();

  // Rotate the cube on every frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01; // Rotate around Y-axis
    //   meshRef.current.rotation.x += 0.005; // Rotate around X-axis
      
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry 
      args={[2, 0.1, 128, 32]} />
      <meshStandardMaterial
        roughness={0}
        metalness={1}
        emissive={"red"}
        emissiveIntensity={1}
        fog={true}  
        toneMapped={true}
        color="white"
      />
    </mesh>
  );
};

export default Rotate;
