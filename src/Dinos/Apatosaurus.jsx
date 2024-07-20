import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"

export default function Apatosaurus(){

    const fbx = useLoader(FBXLoader, "Apatosaurus.fbx");
  
    return <primitive object={fbx} scale={0.0005} position={[0, -0.6, 7]}/>;

  };