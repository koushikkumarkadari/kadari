import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import { useEffect, useRef } from 'react';

function Cube() {
  const meshRef = useRef();
  useEffect(() => {
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <Box args={[9, 9, 9]} ref={meshRef}>
      <meshBasicMaterial color="white" wireframe />
    </Box>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex flex-col md:flex-row items-center justify-center text-center py-4 md:py-0 px-4 md:px-0 md:pr-16 bg-gray-900 text-white bg-opacity-90  bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 255, 255, 0.05) 10px, rgba(255, 255, 255, 0.05) 20px)`,
      }}>
      <Canvas className="absolute inset-0 z-0" camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={1.0} />
        <Cube />
        <OrbitControls enableZoom={true} />
      </Canvas>
      <div className="relative z-1">
        <h1 className="text-5xl md:text-6xl font-bold text">Koushik Kumar Kadari</h1>
        <p className="text-2xl md:text-3xl mt-4">Web Developer</p>
        <a href="#projects" className="mt-6 inline-block bg-gray-900 hover:bg-white text-white hover:text-black py-3 px-6 rounded-lg">
          View My Work
        </a>
      </div>
    </section>
  );
}