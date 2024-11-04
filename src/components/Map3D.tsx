import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';
import * as THREE from 'three';
import { STATES_UT } from '../data/locations';

const StateGeometry = ({ state, zone, highlightColor = '#ff0000' }) => {
  const meshRef = useRef();
  const glowRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y += delta * 0.5;
    }
  });

  // Create a more complex geometry based on the state
  const getStateGeometry = () => {
    switch (state) {
      case 'Jammu and Kashmir':
        return new THREE.OctahedronGeometry(2, 1);
      case 'Delhi':
        return new THREE.TorusGeometry(1.5, 0.5, 16, 100);
      case 'Gujarat':
        return new THREE.DodecahedronGeometry(2, 1);
      default:
        return new THREE.BoxGeometry(2, 2, 2);
    }
  };

  return (
    <group>
      <mesh ref={meshRef} geometry={getStateGeometry()}>
        <meshStandardMaterial
          color={zone ? highlightColor : '#ffffff'}
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1}
        />
      </mesh>
      <mesh ref={glowRef} scale={1.2} geometry={getStateGeometry()}>
        <meshStandardMaterial
          color={zone ? highlightColor : '#ffffff'}
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
      <Text
        position={[0, 3, 0]}
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {state}
      </Text>
    </group>
  );
};

interface Map3DProps {
  selectedState?: string;
  selectedZone?: string;
}

export default function Map3D({ selectedState, selectedZone }: Map3DProps) {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <color attach="background" args={['#000']} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <StateGeometry state={selectedState} zone={selectedZone} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}