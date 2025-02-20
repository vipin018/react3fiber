import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const Cube = () => {
    // ✅ Load Texture for Cube
    const texture = useLoader(THREE.TextureLoader, "/text.jpg"); // Ensure this file is in public/
  
    return (
      <mesh> {/* Move to avoid overlapping with model */}
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    );
  };

  export default Cube;