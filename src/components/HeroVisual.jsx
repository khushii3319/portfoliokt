import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroVisual() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // 1. Scene & Camera setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Central Glowing Node
    const centralGroup = new THREE.Group();
    scene.add(centralGroup);

    // Central Sphere Core
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xec4899, // Neon pink core
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    centralGroup.add(coreMesh);

    // Inner Glowing Core
    const innerGeo = new THREE.SphereGeometry(1.0, 16, 16);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b, // Amber glow core
      transparent: true,
      opacity: 0.6,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    centralGroup.add(innerMesh);

    // 4. Floating Geometric Tiles (18-22 elements)
    const floatingTiles = [];
    const colors = [0xf59e0b, 0xa855f7, 0xec4899, 0x3b82f6, 0x10b981];

    const geometries = [
      new THREE.BoxGeometry(0.8, 0.8, 0.8),
      new THREE.OctahedronGeometry(0.7),
      new THREE.TetrahedronGeometry(0.7),
      new THREE.TorusGeometry(0.5, 0.2, 12, 24),
      new THREE.IcosahedronGeometry(0.6, 0),
    ];

    const count = 22;
    for (let i = 0; i < count; i++) {
      const geo = geometries[i % geometries.length];
      const color = colors[i % colors.length];

      // Outline wireframe mesh
      const mat = new THREE.MeshBasicMaterial({
        color: color,
        wireframe: true,
        transparent: true,
        opacity: Math.random() * 0.5 + 0.35,
      });

      const mesh = new THREE.Mesh(geo, mat);

      // Random spherical distribution around center
      const radius = Math.random() * 5.5 + 3.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      mesh.position.x = radius * Math.sin(phi) * Math.cos(theta);
      mesh.position.y = radius * Math.sin(phi) * Math.sin(theta);
      mesh.position.z = radius * Math.cos(phi);

      // Initial rotation & animation metadata
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      scene.add(mesh);

      floatingTiles.push({
        mesh,
        rotSpeedX: (Math.random() - 0.5) * 0.012,
        rotSpeedY: (Math.random() - 0.5) * 0.012,
        floatSpeed: Math.random() * 0.008 + 0.003,
        floatPhase: Math.random() * Math.PI * 2,
        basePos: mesh.position.clone(),
      });
    }

    // 5. Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 2;
      mouseY = -(y / rect.height) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 500;
      const h = container.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 6. Animation Loop
    let clock = new THREE.Clock();
    let animId;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Rotate Central Node
      centralGroup.rotation.y = elapsedTime * 0.3;
      centralGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.2;
      innerMesh.scale.setScalar(1 + Math.sin(elapsedTime * 2) * 0.08);

      // Mouse parallax camera tilt
      camera.position.x += (mouseX * 2.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 2.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Animate floating tiles
      floatingTiles.forEach((tile) => {
        tile.mesh.rotation.x += tile.rotSpeedX;
        tile.mesh.rotation.y += tile.rotSpeedY;

        // Subtle floating pulse movement
        tile.mesh.position.y =
          tile.basePos.y + Math.sin(elapsedTime * 1.5 + tile.floatPhase) * 0.4;
        tile.mesh.position.x =
          tile.basePos.x + Math.cos(elapsedTime * 1.2 + tile.floatPhase) * 0.3;
      });

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] lg:h-[550px] flex items-center justify-center pointer-events-auto">
      {/* Background glow ambient rings */}
      <div className="absolute w-72 h-72 rounded-full bg-pink-500/10 blur-[90px] animate-pulse pointer-events-none" />
      <div className="absolute w-80 h-80 rounded-full bg-amber-500/10 blur-[110px] pointer-events-none" />
      
      {/* 3D WebGL Canvas */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}
