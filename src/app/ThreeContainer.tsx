"use client"

import { OrbitControls, PerspectiveCamera, SpotLight } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

const CarShow = () => {
    return (
        <>
            <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
            <PerspectiveCamera fov={50} position={[3, 2, 5]} makeDefault />
            <color args={[0, 0, 0]} attach={"background"}></color>
            <spotLight
                color={[1, 0.24, 0.7]}
                intensity={1.5}
                angle={0.6}
                penumbra={0.5}
                position={[5, 5, 0]}
                castShadow
                shadow-bias={-0.0001} />
            <spotLight
                color={[0.14, 0.5, 1]}
                intensity={2}
                angle={0.6}
                penumbra={0.5}
                position={[-5, 5, 0]}
                castShadow
                shadow-bias={-0.0001} />
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshPhysicalMaterial color={["red"]} />
            </mesh>
        </>
    )
}
const ThreeContainer = () => {
    return (
        <Suspense fallback={null}>
            <Canvas shadows>
                <CarShow />
            </Canvas>
        </Suspense>
    )
}

export default ThreeContainer