import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, MeshWobbleMaterial, MeshDistortMaterial, useHelper } from '@react-three/drei'
import * as THREE from 'three'

const Sphere = ({ position, size, color }) => {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useFrame((state, delta) => {
    const speed = hovered ? 10 : 0.5
    ref.current.rotation.y += delta * speed
  })

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(), setHovered(true))}
      onPointerLeave={(event) => (event.stopPropagation(), setHovered(false))}
      onClick={(event) => (event.stopPropagation(), setClicked(!clicked))}
      scale={clicked ? 2.5 : 1}
    >
      <sphereGeometry args={size} />
      <meshStandardMaterial color={color} wireframe={true} />
    </mesh>
  )
}

// ✅ Fixed: Renamed to `TorusKnot` & corrected geometry args
const TorusKnot = ({ position, size, color }) => {
  return (
    <mesh position={position}>
      <torusKnotGeometry args={size} />
      <MeshDistortMaterial speed={6} factor={1.0} color={color} />
    </mesh>
  )
}

// ✅ Added: Cube Component
const Cube = ({ position, size, color }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

const Scene = () => {
  const directionalLightRef = useRef()

  // useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, "white") // ✅ Fixed typo

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={1.8} />
      <directionalLight position={[10, 10, 10]} intensity={1} ref={directionalLightRef} />
      <group position={[0, 0, 0]}>
        <Cube position={[-1, 0, 0]} size={[2, 2, 2]} color={"red"} /> {/* ✅ Added Cube */}
        <TorusKnot position={[3, 0, 0]} size={[1.2, 0.5, 100, 16]} color={"green"} /> {/* ✅ Moved TorusKnot */}
      </group>
    </>
  )
}

const App = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  )
}

export default App



// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
// import { motion } from 'framer-motion';

// export default function LandingPage() {
//   return (
//     <div className="relative w-full h-screen bg-black flex items-center justify-center text-white">
//       <Canvas className="absolute inset-0 z-0">
//         <OrbitControls enableZoom={false} />
//         <ambientLight intensity={0.5} />
//         <pointLight position={[2, 2, 2]} intensity={10} />
//         <Sphere args={[1, 100, 200]} scale={1.5}>
//           <MeshDistortMaterial 
//             color="#2FEB79" 
//             attach="material" 
//             distort={0.7} 
//             speed={3} 
//             metalness={0.5}
//             roughness={0}
            
//           />
//         </Sphere>
//       </Canvas>
      
//       <motion.div 
//         className="relative z-10 text-center"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-5xl font-bold">Beyond Reality</h1>
//         <p className="text-lg mt-4">Step into the future with interactive 3D experiences.</p>
//         <motion.button 
//           className="mt-6 px-6 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-500 transition"
//           whileHover={{ scale: 1.1 }}
//         >
//           Explore Now
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// }
