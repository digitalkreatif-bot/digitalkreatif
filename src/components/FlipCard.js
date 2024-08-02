// src/components/FlipCard.js

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const FlipCard = ({ frontContent, backContent, isFlipped }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(1, 1);
    const materialFront = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const materialBack = new THREE.MeshBasicMaterial({ color: 0x0000ff });

    const front = new THREE.Mesh(geometry, materialFront);
    const back = new THREE.Mesh(geometry, materialBack);

    back.rotation.y = Math.PI;

    scene.add(front);
    scene.add(back);

    camera.position.z = 2;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    // Handle flip animation
  }, [isFlipped]);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default FlipCard;