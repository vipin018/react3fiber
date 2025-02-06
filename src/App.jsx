import React from 'react'
import { Canvas, useFrame  } from '@react-three/fiber'
import { Box } from '@react-three/drei'
import { DirectionalLight, MeshStandardMaterial } from 'three'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

const Cube = ({position,size,color}) => {
const ref = useRef()
  useFrame((state,delta) => {
    ref.current.rotation.x += delta
  })

  return (
    <mesh position={position} ref={ref}>
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
      <directionalLight position={[0,0,2]}/>
      {/* <ambientLight intensity={0.8}/> */}
<Cube position={[0,0,0]} size={[1,1,1]} color={"blue"} />

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