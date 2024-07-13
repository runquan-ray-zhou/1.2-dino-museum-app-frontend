import { useRef, useState } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"
import { FontLoader } from "three/examples/jsm/loaders/FontLoader"
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import optimer from "three/examples/fonts/optimer_regular.typeface.json"

extend({ TextGeometry })

function Texts(){

  const optimerRegular = new FontLoader().parse(optimer)

  const textOptions = {
    font: optimerRegular,
    size: 0.5,
    depth: 0.1
  }
  
  return(
    <mesh position={[-3, 1, -6]} rotation={[0, 0, 0]}>
      <textGeometry attach='geometry' args={["Owen Family Room", textOptions]}/>
      <meshLambertMaterial attach='material' color={'orange'}/>
    </mesh>
  )

}

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
      scale={1.5}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'lightgrey'} />
    </mesh>
  )
}

const Apatosaurus = () => {
  const fbx = useLoader(FBXLoader, "Apatosaurus.fbx");

  return <primitive object={fbx} scale={0.0005} position={[0, -0.6, 7]}/>;
};

const Parasaurolophus = () => {
  const fbx = useLoader(FBXLoader, "Parasaurolophus.fbx");

  return <primitive object={fbx} scale={0.0005} position={[1, -0.6, 7]}/>;
};

const Stegosaurus = () => {
  const fbx = useLoader(FBXLoader, "Stegosaurus.fbx");

  return <primitive object={fbx} scale={0.0005} position={[2, -0.6, 7]}/>;
};

const Trex = () => {
  const fbx = useLoader(FBXLoader, "Trex.fbx");

  return <primitive object={fbx} scale={0.0005} position={[3, -0.6, 7]}/>;
};

const Triceratops = () => {
  const fbx = useLoader(FBXLoader, "Triceratops.fbx");

  return <primitive object={fbx} scale={0.0005} position={[4, -0.6, 7]}/>;
};

const Velociraptor = () => {
  const fbx = useLoader(FBXLoader, "Velociraptor.fbx");

  return <primitive object={fbx} scale={0.0005} position={[5, -0.6, 7]}/>;
};

export default function Room() {

  return (
    <Canvas>
      <Texts />
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[1, 100, 1]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Apatosaurus/>
      <Parasaurolophus />
      <Stegosaurus />
      <Trex />
      <Triceratops />
      <Velociraptor />
      // Owen Family Room
      <Box position={[0, 0, -6]} />
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
      // Entrance Room
      <Box position={[2, 0, 6]} />
      <OrbitControls />
    </Canvas>
  )
}
