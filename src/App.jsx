import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Box } from '@react-three/drei'
import { DirectionalLight, MeshStandardMaterial } from 'three'
import { OrbitControls } from '@react-three/drei'

const Cube = ({position,size,color}) => {
  return (
    <mesh position={position}>
      <boxGeometry args={size}/>
      <meshStandardMaterial
        color={color}
      />
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas>
      <OrbitControls/>
      {/* <directionalLight position={[0,0,2]}/> */}
      <ambientLight intensity={0.8}/>
      <group  position={[-1,-1,1]}>
      <Cube position={[0,0,0]} size={[1,1,1]} color={"blue"}/>
      <Cube position={[0,2,0]} size={[1,1,1]} color={"red"}/>
      <Cube position={[3,0,0]} size={[1,1,1]} color={"green"}/>
      <Cube position={[3,2,0]} size={[1,1,1]} color={"yellow"}/>
      </group>
      </Canvas>
  )
}

export default App