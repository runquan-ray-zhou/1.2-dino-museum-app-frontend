import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"

export default function Trex(){
    
    const fbx = useLoader(FBXLoader, "Trex.fbx");
  
    return <primitive object={fbx} scale={0.0005} position={[3, -0.6, 7]}/>;
  };