'use client'

import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

function ParallaxPlane() {
  const meshRef = useRef<THREE.Mesh>(null)
  const texture = useTexture('/agri_footer_landscape.jpg')
  const { viewport } = useThree()
  
  // Make the plane completely cover the viewport
  const scale = Math.max(viewport.width, viewport.height * (16/9)) * 1.1 // Overscale slightly to hide edges
  const planeArgs: [number, number, number, number] = [scale, scale / (16/9), 64, 64]

  const uniforms = useMemo(() => ({
    uTexture: { value: texture },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uTime: { value: 0 }
  }), [texture])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse to -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      // Update target (we'll lerp to this in useFrame)
      (window as any).targetMouse = { x, y };
    };
    
    (window as any).targetMouse = { x: 0, y: 0 };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    uniforms.uTime.value += delta
    
    const target = (window as any).targetMouse || { x: 0, y: 0 }
    // Lerp mouse
    uniforms.uMouse.value.x += (target.x - uniforms.uMouse.value.x) * 0.05
    uniforms.uMouse.value.y += (target.y - uniforms.uMouse.value.y) * 0.05
  })

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={planeArgs} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={`
          uniform vec2 uMouse;
          uniform float uTime;
          varying vec2 vUv;
          
          void main() {
            vUv = uv;
            vec3 pos = position;
            
            // Depth map based on Y. Bottom is closer (1.0), top is far (0.0)
            float depth = 1.0 - uv.y;
            
            // Create distinct "layers" effect using steps
            float layer = floor(depth * 5.0) / 5.0; // 5 distinct depth layers
            
            // Mix smooth and stepped for a stylized layer effect
            float effect = mix(pow(depth, 2.0), layer, 0.5) * 1.2;
            
            // Parallax displacement
            pos.x += uMouse.x * effect * 2.0;
            pos.y += uMouse.y * effect * 1.0;
            
            // Slight organic breathing
            pos.z += sin(uTime * 0.5 + uv.x * 10.0) * effect * 0.1;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          uniform sampler2D uTexture;
          varying vec2 vUv;
          void main() {
            gl_FragColor = texture2D(uTexture, vUv);
          }
        `}
      />
    </mesh>
  )
}

export default function ThreeLandscape() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ParallaxPlane />
      </Canvas>
    </div>
  )
}
