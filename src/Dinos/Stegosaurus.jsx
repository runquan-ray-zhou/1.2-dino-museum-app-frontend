import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"

export default function Stegosaurus(){
    
    const fbx = useLoader(FBXLoader, "Stegosaurus.fbx");
  
    return <primitive object={fbx} scale={0.0005} position={[2, -0.6, 7]}/>;
  };