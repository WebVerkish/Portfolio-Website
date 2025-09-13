// import React, { Suspense, useRef, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useGLTF } from "@react-three/drei";

// function Globe({ hovered }) {
//   const { scene } = useGLTF("/earth_globe_hologram_2mb_looping_animation.glb");
//   const globeRef = useRef();

//   useFrame(() => {
//     if (globeRef.current) {
//       if (!hovered) {
//         globeRef.current.rotation.y += 0.005; // rotate normally
//       }

//       // scale effect (hover = shrink)
//       const targetScale = hovered ? 0.05 : 2.5;
//       globeRef.current.scale.lerp(
//         { x: targetScale, y: targetScale, z: targetScale },
//         0.1
//       );
//     }
//   });

//   return <primitive ref={globeRef} object={scene} position={[0, 0.5, 0]} />;
// }

// function AIModel({ hovered }) {
//   const { scene } = useGLTF("/miibot_3d_model.glb"); // 👈 apna AI model path
//   const modelRef = useRef();

//   useFrame(() => {
//     if (modelRef.current) {
//       if (hovered) {
//         // Neeche se nikalna
//         modelRef.current.position.lerp({ x: 0, y: 1, z: 0 }, 0.05);
//         modelRef.current.scale.lerp({ x: 1.2, y: 1.2, z: 1.2 }, 0.05);
//       } else {
//         // Wapas andar
//         modelRef.current.position.lerp({ x: 0, y: 0, z: 0 }, 0.05);
//         modelRef.current.scale.lerp({ x: 0, y: 0, z: 0 }, 0.05);
//       }
//     }
//   });

//   return <primitive ref={modelRef} object={scene} scale={0} position={[0, 0, 0]} />;
// }

// export default function ModelViewer() {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
//       <ambientLight intensity={0.8} />
//       <directionalLight position={[5, 5, 5]} intensity={1.2} />

//       <Suspense fallback={null}>
//         <group
//           onPointerOver={() => setHovered(true)}
//           onPointerOut={() => setHovered(false)}
//         >
//           <Globe hovered={hovered} />
//           <AIModel hovered={hovered} />
//         </group>
//       </Suspense>
//     </Canvas>
//   );
// }

// import React, { Suspense, useRef, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useGLTF, Stars, Text } from "@react-three/drei";

// // Globe component
// function Globe({ hovered }) {
//   const { scene } = useGLTF("/earth_globe_hologram_2mb_looping_animation.glb");
//   const globeRef = useRef();

//   useFrame(() => {
//     if (globeRef.current) {
//       if (!hovered) globeRef.current.rotation.y += 0.005;
//       const targetScale = hovered ? 0.05 : 2.5;
//       globeRef.current.scale.lerp(
//         { x: targetScale, y: targetScale, z: targetScale },
//         0.1
//       );
//     }
//   });

//   return <primitive ref={globeRef} object={scene} position={[0, 0.5, 0]} />;
// }

// // AI Model component
// function AIModel({ hovered }) {
//   const { scene } = useGLTF("/miibot_3d_model.glb");
//   const modelRef = useRef();

//   useFrame(() => {
//     if (modelRef.current) {
//       if (hovered) {
//         modelRef.current.position.lerp({ x: 0, y: 1, z: 0 }, 0.05);
//         modelRef.current.scale.lerp({ x: 1.2, y: 1.2, z: 1.2 }, 0.05);
//       } else {
//         modelRef.current.position.lerp({ x: 0, y: 0, z: 0 }, 0.05);
//         modelRef.current.scale.lerp({ x: 0, y: 0, z: 0 }, 0.05);
//       }
//     }
//   });

//   return (
//     <primitive ref={modelRef} object={scene} scale={0} position={[0, 0, 0]} />
//   );
// }

// // Floating Tech Text component
// function FloatingTechText({ label, radius, speed, angleOffset, color }) {
//   const ref = useRef();
//   const angle = useRef(angleOffset);

//   useFrame(() => {
//     angle.current += speed;
//     const x = radius * Math.cos(angle.current);
//     const z = radius * Math.sin(angle.current);
//     const y = Math.sin(angle.current * 2) * 0.5; // floating up-down
//     if (ref.current) {
//       ref.current.position.set(x, y, z);
//       ref.current.rotation.y += 0.01; // rotation
//     }
//   });

//   return (
//     <Text
//       ref={ref}
//       fontSize={0.5}
//       color={color}
//       anchorX="center"
//       anchorY="middle"
//     >
//       {label}
//     </Text>
//   );
// }

// // Main Viewer
// export default function ModelViewer() {
//   const [hovered, setHovered] = useState(false);

//   const techItems = [
//     { label: "Node", color: "#3C873A" },
//     { label: "AI", color: "#FFD700" },
//     { label: "React", color: "#61DBFB" },
//     { label: "JS", color: "#F0DB4F" },
//     { label: "HTML", color: "#E34C26" },
//     { label: "Python", color: "#306998" },
//     { label: "Java", color: "#b07219" },
//     { label: "C++", color: "#00599C" },
//     { label: "PHP", color: "#777bb3" },
//     { label: "TypeScript", color: "#007ACC" },
//     { label: "MongoDB", color: "#47A248" },
//     { label: "SQL", color: "#f29111" },
//     { label: "Docker", color: "#2496ED" },
//     { label: "Kubernetes", color: "#326CE5" },
//     { label: "Git", color: "#F05032" },
//     { label: "GraphQL", color: "#E10098" },
//     { label: "AWS", color: "#FF9900" },
//     { label: "Firebase", color: "#FFCA28" },
//   ];

//   return (
//     <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
//       {/* Stars background */}
//       <Stars
//         radius={100}
//         depth={50}
//         count={5000}
//         factor={4}
//         saturation={0}
//         fade
//         speed={1}
//       />

//       <ambientLight intensity={0.8} />
//       <directionalLight position={[5, 5, 5]} intensity={1.2} />

//       <Suspense fallback={null}>
//         <group
//           onPointerOver={() => setHovered(true)}
//           onPointerOut={() => setHovered(false)}
//         >
//           {/* Globe */}
//           <Globe hovered={hovered} />

//           {/* AI Model */}
//           <AIModel hovered={hovered} />

//           {/* Floating Tech Languages */}
//           {techItems.map((item, idx) => (
//             <FloatingTechText
//               key={idx}
//               label={item.label}
//               color={item.color}
//               radius={3.5 + Math.random() * 0.5} // small random distance for natural spread
//               speed={0.01 + idx * 0.002} // orbit speed variation
//               angleOffset={(idx * (Math.PI * 2)) / techItems.length} // distribute evenly around circle
//             />
//           ))}
//         </group>
//       </Suspense>
//     </Canvas>
//   );
// }


import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stars, Text } from "@react-three/drei";
import * as THREE from "three";

// Globe component
function Globe({ hovered }) {
  const { scene } = useGLTF("/earth_globe_hologram_2mb_looping_animation.glb");
  const globeRef = useRef();

  useFrame(() => {
    if (globeRef.current) {
      if (!hovered) globeRef.current.rotation.y += 0.003; // slower rotation
      const targetScale = hovered ? 0.05 : 7; // bigger globe
      globeRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }
  });

  return <primitive ref={globeRef} object={scene} position={[0, 0.5, 0]} />;
}

// AI Model component
function AIModel({ hovered }) {
  const { scene } = useGLTF("/miibot_3d_model.glb");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      const targetPos = hovered ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(0, 0, 0);
      modelRef.current.position.lerp(targetPos, 0.05);

      const targetScale = hovered ? new THREE.Vector3(1.2, 1.2, 1.2) : new THREE.Vector3(0.5, 0.5, 0.5);
      modelRef.current.scale.lerp(targetScale, 0.05);
    }
  });

  return <primitive ref={modelRef} object={scene} scale={new THREE.Vector3(0.5, 0.5, 0.5)} position={[0, 0, 0]} />;
}

// Floating Tech Text component (spherical orbit)
function FloatingTechText({ label, radius, speed, theta, phi, color }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const rotationSpeed = speed * 0.05; // slower
    theta += rotationSpeed;

    // const waveHeight = Math.sin(time * 0.5) * 0.3;

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi) + Math.sin(time * 0.5) * 0.3; // slower vertical float
    // const y = waveHeight; // same vertical float for all
    const z = radius * Math.sin(phi) * Math.sin(theta);

    if (ref.current) {
      ref.current.position.set(x, y, z);
      // ref.current.lookAt(0.5, 0.5, 0.5); // always face globe center
      ref.current.rotation.set(0, 0, 0);
    }
  });

  return (
    <Text
      ref={ref}
      fontSize={0.7}
      color={color}
      anchorX="center"
      anchorY="middle"
    >
      {label}
    </Text>
  );
}

// Main Viewer
export default function ModelViewer() {
  const [hovered, setHovered] = useState(false);

  const techItems = [
    { label: "Node", color: "#3C873A" },
    { label: "AI", color: "#FFD700" },
    { label: "React", color: "#61DBFB" },
    { label: "JS", color: "#F0DB4F" },
    { label: "HTML", color: "#E34C26" },
    { label: "Python", color: "#306998" },
    { label: "Java", color: "#b07219" },
    { label: "C++", color: "#00599C" },
    { label: "PHP", color: "#777bb3" },
    { label: "TypeScript", color: "#007ACC" },
    { label: "MongoDB", color: "#47A248" },
    { label: "SQL", color: "#f29111" },
    { label: "Docker", color: "#2496ED" },
    { label: "Kubernetes", color: "#326CE5" },
    { label: "Git", color: "#F05032" },
    { label: "GraphQL", color: "#E10098" },
    { label: "AWS", color: "#FF9900" },
    { label: "Firebase", color: "#FFCA28" },
  ];

  return (
    <Canvas camera={{ position: [0, 0, 16], fov: 45 }} style={{ background: "#111" }}>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />

      <Suspense fallback={null}>
        <group
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <Globe hovered={hovered} />
          <AIModel hovered={hovered} />

          {techItems.map((item, idx) => {
            const theta = (idx * (Math.PI * 2)) / ( techItems.length - 5); // horizontal angle
            const phi = Math.acos(-0.8 + (1.6 * idx) / (techItems.length - 5));  // vertical angle
            return (
              <FloatingTechText
                key={idx}
                label={item.label}
                color={item.color}
                radius={6} // bigger orbit
                speed={0.01 + idx * 0.001}
                theta={theta}
                phi={phi}
              />
            );
          })}
        </group>
      </Suspense>
    </Canvas>
  );
}
