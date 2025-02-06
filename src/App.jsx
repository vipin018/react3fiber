import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Box } from '@react-three/drei'
import { DirectionalLight, MeshStandardMaterial } from 'three'

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
      <directionalLight position={[0,0,2]}/>
      <Cube position={[0,0,0]} size={[2,1,1]} color={"blue"}/>
      <Cube position={[0,2,0]} size={[2,1,1]} color={"red"}/>
      </Canvas>
  )
}

export default App