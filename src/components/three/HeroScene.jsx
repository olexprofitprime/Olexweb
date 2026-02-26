import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function HeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x34D399, 2, 20);
    pointLight1.position.set(3, 3, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0A3D2E, 2, 20);
    pointLight2.position.set(-3, -2, 2);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x6EE7B7, 1.5, 15);
    pointLight3.position.set(0, 4, -2);
    scene.add(pointLight3);

    // Glass material
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x34D399,
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.9,
      thickness: 1.5,
      transparent: true,
      opacity: 0.6,
      envMapIntensity: 1,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    });

    const darkGlassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0A3D2E,
      metalness: 0.2,
      roughness: 0.05,
      transmission: 0.85,
      thickness: 2,
      transparent: true,
      opacity: 0.5,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
    });

    // Create morphing spheres
    const spheres = [];
    const geometries = [
      new THREE.IcosahedronGeometry(1.2, 4),
      new THREE.OctahedronGeometry(0.8, 3),
      new THREE.DodecahedronGeometry(0.6, 3),
      new THREE.IcosahedronGeometry(0.4, 2),
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.TorusGeometry(0.7, 0.3, 16, 50),
    ];

    const materials = [glassMaterial, darkGlassMaterial, glassMaterial, darkGlassMaterial, glassMaterial, darkGlassMaterial];
    const positions = [
      { x: -2.2, y: 0.5, z: 0 },
      { x: 2, y: -0.5, z: -1 },
      { x: 0, y: 1.8, z: -0.5 },
      { x: -1, y: -1.5, z: 0.5 },
      { x: 2.5, y: 1.5, z: -0.8 },
      { x: -2.5, y: -1, z: -1 },
    ];

    geometries.forEach((geo, i) => {
      const mesh = new THREE.Mesh(geo, materials[i]);
      mesh.position.set(positions[i].x, positions[i].y, positions[i].z);
      scene.add(mesh);
      spheres.push({ mesh, baseY: positions[i].y, baseX: positions[i].x, speed: 0.3 + Math.random() * 0.5, phase: Math.random() * Math.PI * 2 });
    });

    // Mouse interaction
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animation
    const clock = new THREE.Clock();
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      spheres.forEach((s, i) => {
        s.mesh.position.y = s.baseY + Math.sin(t * s.speed + s.phase) * 0.4;
        s.mesh.position.x = s.baseX + Math.cos(t * s.speed * 0.7 + s.phase) * 0.2;
        s.mesh.rotation.x = t * 0.2 * (i % 2 === 0 ? 1 : -1);
        s.mesh.rotation.y = t * 0.3 * (i % 2 === 0 ? -1 : 1);

        // Morph vertices
        const geo = s.mesh.geometry;
        const pos = geo.attributes.position;
        if (pos && geo.userData.original) {
          for (let j = 0; j < pos.count; j++) {
            const ox = geo.userData.original[j * 3];
            const oy = geo.userData.original[j * 3 + 1];
            const oz = geo.userData.original[j * 3 + 2];
            const noise = Math.sin(t * 1.5 + ox * 3 + s.phase) * 0.04 + Math.cos(t * 1.2 + oy * 3) * 0.04;
            pos.setXYZ(j, ox + ox * noise, oy + oy * noise, oz + oz * noise);
          }
          pos.needsUpdate = true;
          geo.computeVertexNormals();
        }
      });

      // Store original positions
      spheres.forEach(s => {
        const geo = s.mesh.geometry;
        if (!geo.userData.original) {
          const pos = geo.attributes.position;
          geo.userData.original = new Float32Array(pos.array);
        }
      });

      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.03;
      camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    // Store originals first
    spheres.forEach(s => {
      const pos = s.mesh.geometry.attributes.position;
      s.mesh.geometry.userData.original = new Float32Array(pos.array);
    });

    animate();

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
}