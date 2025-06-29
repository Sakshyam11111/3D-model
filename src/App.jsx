import React from 'react'
import { Canvas } from "@react-three/fiber"
import Expericence from './components/Expericence'
import Interface from './components/Interface'

const App = () => {
  return (
    <>
      <Canvas camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows>
        <Expericence />
      </Canvas>
      <Interface />
    </>
  )
}

export default App
