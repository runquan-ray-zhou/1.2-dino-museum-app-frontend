import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"

export default function Triceratops(){
    
    const fbx = useLoader(FBXLoader, "Triceratops.fbx");
  
    return <primitive object={fbx} scale={0.0005} position={[4, -0.6, 7]}/>;
  };