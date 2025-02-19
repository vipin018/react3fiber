import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import Rotate from './Rotate'
const App = () => {
  return (

    <div className='w-full text-white h-full bg-gray-900'>
      <div className=' w-full h-full'>
        <img className='w-full h-full object-cover object-center' src="https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8fDB8fHwy" alt="" />
      </div>
      <div className='w-1/2 h-full bg-blue-800'>
        <Canvas className='w-full h-full'>
          {/* <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial
            roughness={0}
            metalness={1}
            toneMapped={true} // this will make the scene look more realistic it has to be true or if it is false the scene will look like a cartoon
          />
          <OrbitControls />
        </mesh> */}
          <Environment preset="studio" />
          <Rotate />
        </Canvas>
        <div className='w-full h-full bg-green-800 flex justify-center items-center'>
          <Canvas className='w-full h-full'>
            <Environment preset="sunset" />
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial

                toneMapped={true}
                metalness={0}
                roughness={1}
              />
            </mesh>
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </div>
  )
}

export default App