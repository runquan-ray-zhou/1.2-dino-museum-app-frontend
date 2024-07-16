import { FontLoader } from "three/examples/jsm/loaders/FontLoader"
import optimer from "three/examples/fonts/optimer_regular.typeface.json"

export default function BryanDeckerHallText(){

    const optimerRegular = new FontLoader().parse(optimer)
  
    const textOptions = {
      font: optimerRegular,
      size: 0.5,
      depth: 0.1
    }
    
    return(
      <mesh position={[-3.5, 2.5, -4]} rotation={[0, 0, 0]}>
        <textGeometry attach='geometry' args={["Bryan\nDecker\nHall", textOptions]}/>
        <meshLambertMaterial attach='material' color={'orange'}/>
      </mesh>
    )
  
  }