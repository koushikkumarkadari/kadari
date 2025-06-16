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
    <Box args={[3, 3, 3]} ref={meshRef}>
      <meshBasicMaterial color="white" wireframe />
    </Box>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex flex-col md:flex-row items-center justify-center text-center text-white hero-background p-24">
      <Canvas className="absolute inset-0 z-0" camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={1.0} />
        <Cube />
        <OrbitControls enableZoom={true} />
      </Canvas>
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text">Koushik Kumar Kadari</h1>
        <p className="text-2xl md:text-3xl mt-4">Web Developer</p>
        <a href="#projects" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg">
          View My Work
        </a>
      </div>
    </section>
  );
}