import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
};

const ModelViewer = () => {
  return (
    <Canvas>
      {/* Neutral Environment */}
      <color attach="background" args={['#ffffff']} />
      
      {/* Linear Tone Mapping and Exposure */}
      <fog attach="fog" args={['#ffffff', 0, 40]} />
      <hemisphereLight intensity={0.3} color="#ffffff" />
      <directionalLight intensity={2.5} position={[5, 10, 5]} />
      
      {/* Model */}
      <Model url="/assets/scene.glb" />
      
      {/* Orbit Controls */}
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;
