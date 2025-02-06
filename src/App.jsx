import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, GradientTexture, useCursor } from '@react-three/drei'

function Flag() {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame(() => {
    ref.current.distort = THREE.MathUtils.lerp(ref.current.distort, hovered ? 0.3 : 0, hovered ? 0.05 : 0.01)
  })
  return (
    <mesh position={[0, 0, 1]} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} scale={[2, 4, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <MeshDistortMaterial ref={ref} speed={6} factor={1.2}>
      <GradientTexture stops={[1, 0.6, 0]} colors={['#2d6a4f', '#52b788', '#d8f3dc']} size={200} />

      </MeshDistortMaterial>
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <Flag />
    </Canvas>
  )
}
