import { useEffect, useRef } from "react";

export default function VantaBirds() {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!window.VANTA || !window.VANTA.BIRDS) {
      console.error("Vanta Birds scripts not loaded");
      return;
    }

    const effect = window.VANTA.BIRDS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: window.innerHeight,
      minWidth: window.innerWidth,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x000000,   // pure black background
  backgroundAlpha: 1,
color1: 0x10B981,
color2: 0x047857,           // darker cyan #0f807d for bird shading, // keep consistent dark night sky
    });

    return () => effect.destroy();
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -10,
      }}
    />
  );
}
