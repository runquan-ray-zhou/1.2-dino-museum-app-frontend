import { useState } from 'react'
import { FontLoader } from "three/examples/jsm/loaders/FontLoader"
import optimer from "three/examples/fonts/optimer_regular.typeface.json"

export default function RoomText( {eachRoom} ){

    const [hovered, hover] = useState(false)

    const optimerRegular = new FontLoader().parse(optimer)
  
    const textOptions = {
      font: optimerRegular,
      size: 0.5,
      depth: 0.1
    }
    
    return(
      <mesh 
      position={eachRoom.textPosition} 
      rotation={[0, 0, 0]}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}>
        <textGeometry attach='geometry' args={[`${(eachRoom.name).replaceAll(" ", "\n")}`, textOptions]}/>
        <meshLambertMaterial attach='material' color={hovered ? 'lightblue' : 'orange'}/>
      </mesh>
    )
  
  }