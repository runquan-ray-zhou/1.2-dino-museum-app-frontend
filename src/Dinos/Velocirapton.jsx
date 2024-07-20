import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"

export default function Velociraptor(){
    
    const fbx = useLoader(FBXLoader, "Velociraptor.fbx");
  
    return <primitive object={fbx} scale={0.0005} position={[5, -0.6, 7]}/>;
  };