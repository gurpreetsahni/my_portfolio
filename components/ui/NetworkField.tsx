"use client";

// Signature visual: a slowly rotating node/edge topology — a direct nod to the
// service meshes and cluster graphs this portfolio's subject designs for a living.
// Implemented with raw three.js (no extra scene-graph deps) for a small, reliable bundle.

import { useEffect, useRef } from "react";

export default function NetworkField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const container = containerRef.current;
    if (!container || prefersReduced) return;

    let renderer: any;
    let animationId: number;
    let cleanupResize: () => void;

    (async () => {
      const THREE = await import("three");

      const width = container.clientWidth;
      const height = container.clientHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
      camera.position.z = 9;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const NODE_COUNT = 42;
      const positions = new Float32Array(NODE_COUNT * 3);
      const nodes: { x: number; y: number; z: number }[] = [];

      for (let i = 0; i < NODE_COUNT; i++) {
        const x = (Math.random() - 0.5) * 10;
        const y = (Math.random() - 0.5) * 6;
        const z = (Math.random() - 0.5) * 4;
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
        nodes.push({ x, y, z });
      }

      const pointsGeo = new THREE.BufferGeometry();
      pointsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const pointsMat = new THREE.PointsMaterial({
        color: 0x9c8bff,
        size: 0.07,
        transparent: true,
        opacity: 0.9,
      });
      const points = new THREE.Points(pointsGeo, pointsMat);
      scene.add(points);

      // Connect nearby nodes to form the "cluster mesh"
      const linePositions: number[] = [];
      const MAX_DIST = 2.6;
      for (let i = 0; i < NODE_COUNT; i++) {
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
          if (dist < MAX_DIST) {
            linePositions.push(a.x, a.y, a.z, b.x, b.y, b.z);
          }
        }
      }
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(linePositions), 3));
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x4c8dff,
        transparent: true,
        opacity: 0.15,
      });
      const lines = new THREE.LineSegments(lineGeo, lineMat);
      scene.add(lines);

      const group = new THREE.Group();
      group.add(points);
      group.add(lines);
      scene.add(group);

      let mouseX = 0;
      let mouseY = 0;
      const onMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 0.4;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 0.4;
      };
      window.addEventListener("mousemove", onMouseMove);

      const animate = () => {
        group.rotation.y += 0.0009;
        group.rotation.x += (mouseY - group.rotation.x) * 0.02;
        group.rotation.y += (mouseX - group.rotation.y) * 0.0002;
        renderer.render(scene, camera);
        animationId = requestAnimationFrame(animate);
      };
      animate();

      const handleResize = () => {
        if (!container) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", handleResize);
      cleanupResize = () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousemove", onMouseMove);
      };
    })();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (cleanupResize) cleanupResize();
      if (renderer) {
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 opacity-70"
      aria-hidden="true"
    />
  );
}
