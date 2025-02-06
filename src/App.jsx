import React, { useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box, Sphere } from '@react-three/drei'
import { DirectionalLight, MeshStandardMaterial } from 'three'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { SkyGeometry } from 'three/examples/jsm/Addons.js'

const Cube = ({ position, size, color }) => {
  const ref = useRef()

  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [scale, setScale] = useState(1)
  useFrame((state, delta) => {
    const speed = hovered ? 10 : 0.5
    ref.current.rotation.y += delta * speed;
    // ref.current.position.z += Math.sin(state.clock.getElapsedTime()) / 20
  })

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(), setHovered(true))} 
      onPointerLeave={(event) => (event.stopPropagation(), setHovered(false))}
      onClick={(event) => (event.stopPropagation(), setClicked(!clicked))}
      scale={clicked ? 2.5 : 1}
      onPointerDown={(event) => (event.stopPropagation(), setScale(2.5))}
      onPointerUp={(event) => (event.stopPropagation(), setScale(1))}
      >
      <sphereGeometry args={size} />
      <meshStandardMaterial
        color={color}
        wireframe={true}
        
      />
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas>
      <OrbitControls />
      {/* <directionalLight position={[0,0,2]}/> */}
      <ambientLight intensity={0.8} />
      <Cube position={[0, 0, 0]} size={[1]} color={"burlywood"} />

      {/* <group  position={[-1,-1,1]}>
      <Cube position={[0,0,0]} size={[1,1,1]} color={"blue"}/>
      <Cube position={[0,2,0]} size={[1,1,1]} color={"red"}/>
      <Cube position={[3,0,0]} size={[1,1,1]} color={"green"}/>
      <Cube position={[3,2,0]} size={[1,1,1]} color={"yellow"}/>
      </group> */}
    </Canvas>
  )
}

export default App