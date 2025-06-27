import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Characters to simulate hacker code rain
const CHARACTERS = "01";

const CodeRain = () => {
  const meshRef = useRef();
  const count = 1000; // Number of code drops

  // Positions and speeds for each drop
  const data = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20; // x spread
      positions[i * 3 + 1] = Math.random() * 20; // y start position (height)
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z depth
      speeds[i] = 0.01 + Math.random() * 0.03; // falling speed
    }
    return { positions, speeds };
  }, [count]);

  useFrame(() => {
    const positions = data.positions;
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 1] -= data.speeds[i]; // move down
      if (positions[i * 3 + 1] < -10) {
        positions[i * 3 + 1] = 10; // reset to top
        positions[i * 3] = (Math.random() - 0.5) * 20; // random x on reset
      }
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  // Create texture with green characters
  const texture = useMemo(() => {
    const size = 64;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, size, size);
    ctx.font = "48px monospace";
    ctx.fillStyle = "#00ff00";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)], size / 2, size / 2);
    const tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.LinearFilter;
    return tex;
  }, []);

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={data.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        map={texture}
        size={0.15}
        sizeAttenuation
        transparent
        color="#00ff00"
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const GlitchLights = () => {
  const groupRef = useRef();
  const count = 30;

  const positions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push((Math.random() - 0.5) * 20); // x
      arr.push(Math.random() * 10);         // y
      arr.push((Math.random() - 0.5) * 10); // z
    }
    return new Float32Array(arr);
  }, [count]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    groupRef.current.children.forEach((light, i) => {
      light.intensity = 0.5 + Math.sin(time * 10 + i) * 0.5;
    });
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: count }).map((_, i) => (
        <pointLight
          key={i}
          position={[
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2],
          ]}
          color="#00ff00"
          intensity={1}
          distance={5}
          decay={2}
        />
      ))}
    </group>
  );
};

const HackerBackground = () => (
  <div className="w-full h-full absolute inset-0 z-[-1] bg-black">
    <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
      <ambientLight intensity={0.1} />
      <GlitchLights />
      <CodeRain />
    </Canvas>
    {/* Overlay with your name and tagline */}
    <div className="absolute top-10 left-0 w-full flex justify-center z-10 pointer-events-none">
      <div className="bg-black bg-opacity-70 rounded-xl px-8 py-4 shadow-lg text-green-400 text-center font-mono">
        <h1 className="text-4xl font-extrabold tracking-widest">Vaibhav Chavan</h1>
        <p className="text-lg mt-2">Cybersecurity Enthusiast & Business Development Professional</p>
      </div>
    </div>
  </div>
);

export default HackerBackground;
