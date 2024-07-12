import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Suspense } from "react";

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const Dino = () => {
  const fbx = useLoader(FBXLoader, "Apatosaurus.fbx");

  return <primitive object={fbx} scale={0.005} />;
};

export default function Room() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      // Entrance Room
      <Box position={[0, 0, -6]} />
      <Dino />
      // Ticket Center
      <Box position={[0, 0, -4]} />
      // Ellis Family Hall
      <Box position={[2, 0, -4]} />
      // Coat Check Room
      <Box position={[-2, 0, -4]} />
      // Kit Hopkins Education Wing
      <Box position={[0, 0, -2]} />
      // Terrell Leon Lecture Room
      <Box position={[2, 0, -2]} />
      // Cabrera Hall
      <Box position={[2, 0, 0]} />
      // Haley Hall
      <Box position={[0, 0, 0]} />
      // Roberts Room
      <Box position={[2, 0, 2]} />
      // Paxton Decker Terrace
      <Box position={[0, 0, 2]} />
      // Blackwell Amphitheater
      <Box position={[0, 0, 4]} />
      // Reyes Hall
      <Box position={[2, 0, 4]} />
      // Bryan Decker Hall
      <Box position={[4, 0, 4]} />
      // Owen Family Room
      <Box position={[2, 0, 6]} />
      <OrbitControls />
    </Canvas>
  )
}
