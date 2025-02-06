import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Box } from '@react-three/drei'
import { CylinderGeometry, MeshBasicMaterial, MeshStandardMaterial } from 'three'
import { OrbitControls } from '@react-three/drei'

const Cube = ({position,size,color}) => {
  return (
    <mesh position={position}>
      <boxGeometry args={size}/>
      <meshBasicMaterial
        color={color}
      />
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas>
      <Cube position={[1,2,0]} size={[2,1,1]} color={"blue"}/>
      </Canvas>
  )
}

export default App