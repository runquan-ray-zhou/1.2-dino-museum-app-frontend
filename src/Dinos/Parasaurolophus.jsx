import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"

export default function Parasaurolophus(){

    const fbx = useLoader(FBXLoader, "Parasaurolophus.fbx");
  
    return <primitive object={fbx} scale={0.0005} position={[1, -0.6, 7]}/>;
  };