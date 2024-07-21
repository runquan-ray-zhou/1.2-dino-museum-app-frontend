import { useRef, useState } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { useNavigate } from 'react-router-dom';

// Room Data
import rooms from '../Data/rooms.js';

// Dinosaur Component
import Apatosaurus from '../Dinos/Apatosaurus.jsx';
import Parasaurolophus from '../Dinos/Parasaurolophus.jsx';
import Stegosaurus from '../Dinos/Stegosaurus.jsx';
import Trex from '../Dinos/Trex.jsx';
import Triceratops from '../Dinos/Triceratops.jsx';
import Velociraptor from '../Dinos/Velocirapton.jsx';

// Room Name Text Component
import RoomText from './RoomText.jsx';

extend({ TextGeometry })

function Room(props) {
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
      // onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'lightgrey'} />
    </mesh>
  )
}

export default function Room3DMap() {

  const [allRooms, setAllRooms] = useState(rooms)
 
  let navigate = useNavigate()

  return (
    <Canvas>
      // Rooms
      {allRooms.map((eachRoom) => {
        return <Room onClick={() => navigate("/entranceroom")} position={eachRoom.position} />
      })}

      // Room Text
      {allRooms.map((eachRoom) => {
        return <RoomText eachRoom={eachRoom}/>
      })}
      
      // Lighting
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[1, 100, 1]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

      // Dinos
      <Apatosaurus />
      <Parasaurolophus />
      <Stegosaurus />
      <Trex />
      <Triceratops />
      <Velociraptor />

      <OrbitControls />
    </Canvas>
  )
}
