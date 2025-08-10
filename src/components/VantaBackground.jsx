import { useEffect, useRef } from "react";

export default function VantaBackground() {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!window.VANTA || !window.VANTA.CLOUDS) {
      console.error("Vanta scripts not loaded");
      return;
    }

    const effect = window.VANTA.CLOUDS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
        backgroundColor: 0x050a10,    // very dark night sky
  skyColor: 0x0a1824,           // deep blue night
  cloudColor: 0x1e2a38,         // subtle dark clouds (optional)
  cloudShadowColor: 0x050a10,   // dark shadows
  sunColor: 0x4a4a6d,           // low-intensity dark blue-gray (moon color)
  sunGlareColor: 0x2e2e44,      // very faint glow around moon
  sunlightColor: 0x1a1a2d,      // subtle ambient moonlight
      minHeight: window.innerHeight,
      minWidth: window.innerWidth,
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
