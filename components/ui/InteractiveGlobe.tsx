"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import createGlobe from "cobe";
import {
  Globe2,
  Sparkles,
  MapPin,
  Play,
  Pause,
  RotateCcw,
  Navigation,
  ArrowRight,
  CheckCircle2,
  Zap,
  Users,
} from "lucide-react";

// Hub coordinates and telemetry data
interface HubData {
  id: string;
  name: string;
  flag: string;
  role: string;
  location: [number, number];
  targetPhi: number;
  targetTheta: number;
  stat1: { label: string; value: string };
  stat2: { label: string; value: string };
  badge: string;
  focusDomains: string[];
}

const HUBS: HubData[] = [
  {
    id: "india",
    name: "India",
    flag: "🇮🇳",
    role: "Strategic Delivery & Talent HQ",
    location: [20.5937, 78.9629],
    targetPhi: 1.35,
    targetTheta: 0.35,
    stat1: { label: "Screened Talent", value: "50,000+" },
    stat2: { label: "Avg. Turnaround", value: "7-14 Days" },
    badge: "Primary Sourcing Center",
    focusDomains: ["Java", "Python", "Cloud/DevOps", "AI/ML", "React"],
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    role: "Client Partnership & Tech Corridor",
    location: [51.5074, -0.1278],
    targetPhi: 6.2,
    targetTheta: 0.85,
    stat1: { label: "Hiring Focus", value: "Permanent & Contract" },
    stat2: { label: "Compliance", value: "IR35 & Managed" },
    badge: "London & Remote Search",
    focusDomains: ["Enterprise Software", "Fintech", "Data", "Cybersecurity"],
  },
  {
    id: "europe",
    name: "Europe",
    flag: "🇪🇺",
    role: "Cross-Border Enterprise Network",
    location: [50.1109, 8.6821],
    targetPhi: 0.05,
    targetTheta: 0.8,
    stat1: { label: "Coverage", value: "DACH, Benelux, Nordics" },
    stat2: { label: "Model", value: "Offshore & Nearshore" },
    badge: "EU Talent Exchange",
    focusDomains: ["SAP/ERP", "Cloud Infra", "QA Automation", "Full Stack"],
  },
];

export default function InteractiveGlobe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Motion & Physics State Refs
  const phiRef = useRef(1.35); // Initial longitude
  const thetaRef = useRef(0.35); // Initial latitude
  const targetPhiRef = useRef<number | null>(null);
  const targetThetaRef = useRef<number | null>(null);
  const velocityRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const lastPointerRef = useRef<{ x: number; y: number; time: number } | null>(null);

  // UI States
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeHubId, setActiveHubId] = useState<string>("india");
  const [isInteracting, setIsInteracting] = useState(false);
  const [mouseTilt, setMouseTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const activeHub = HUBS.find((h) => h.id === activeHubId) || HUBS[0];

  // Smooth focus on region with physics easing
  const focusRegion = useCallback((hubId: string) => {
    const hub = HUBS.find((h) => h.id === hubId);
    if (!hub) return;
    setActiveHubId(hubId);
    targetPhiRef.current = hub.targetPhi;
    targetThetaRef.current = hub.targetTheta;
    setAutoRotate(false);
  }, []);

  // Reset to default view
  const resetView = useCallback(() => {
    setActiveHubId("india");
    targetPhiRef.current = 1.35;
    targetThetaRef.current = 0.35;
    setAutoRotate(true);
  }, []);

  useEffect(() => {
    let width = 0;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onResize = () => {
      if (canvas) {
        width = canvas.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    let globeInstance: ReturnType<typeof createGlobe> | null = null;

    try {
      globeInstance = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: width * 2,
        height: width * 2,
        phi: phiRef.current,
        theta: thetaRef.current,
        dark: 1,
        diffuse: 1.4,
        mapSamples: 22000, // Dense, ultra-sharp dot resolution
        mapBrightness: 8.5,
        mapBaseBrightness: 0.12,
        baseColor: [0.32, 0.46, 0.98], // Radiant electric cyan/indigo dots
        markerColor: [1.0, 0.82, 0.15], // Luminous golden amber pins
        glowColor: [0.18, 0.28, 0.85], // Atmospheric cosmic halo
        markers: [
          { location: [20.5937, 78.9629], size: 0.095 }, // India Main Hub
          { location: [12.9716, 77.5946], size: 0.07 }, // Bengaluru Tech Hub
          { location: [51.5074, -0.1278], size: 0.085 }, // London UK
          { location: [50.1109, 8.6821], size: 0.08 }, // Frankfurt EU
          { location: [52.3676, 4.9041], size: 0.065 }, // Amsterdam EU
        ],
        arcs: [
          // India (Bengaluru) to UK (London)
          {
            from: [12.9716, 77.5946],
            to: [51.5074, -0.1278],
            color: [1.0, 0.8, 0.18],
          },
          // India (Bengaluru) to Europe (Frankfurt)
          {
            from: [12.9716, 77.5946],
            to: [50.1109, 8.6821],
            color: [1.0, 0.8, 0.18],
          },
          // UK (London) to Europe (Frankfurt)
          {
            from: [51.5074, -0.1278],
            to: [50.1109, 8.6821],
            color: [0.45, 0.65, 1.0],
          },
        ],
        arcWidth: 1.6,
        arcHeight: 0.36,
        opacity: 0.96,
        scale: 1.06,
      });

      // Physics animation loop with momentum and spring easing
      let animationFrameId: number;
      const animate = () => {
        // If smooth target animating to selected hub
        if (targetPhiRef.current !== null && targetThetaRef.current !== null) {
          let diffPhi = targetPhiRef.current - phiRef.current;
          // Normalize angle difference for shortest rotation
          diffPhi = Math.atan2(Math.sin(diffPhi), Math.cos(diffPhi));

          const diffTheta = targetThetaRef.current - thetaRef.current;

          phiRef.current += diffPhi * 0.08;
          thetaRef.current += diffTheta * 0.08;

          if (Math.abs(diffPhi) < 0.005 && Math.abs(diffTheta) < 0.005) {
            targetPhiRef.current = null;
            targetThetaRef.current = null;
          }
        } else if (!isDraggingRef.current) {
          // Apply inertia momentum damping
          if (Math.abs(velocityRef.current.x) > 0.0001 || Math.abs(velocityRef.current.y) > 0.0001) {
            phiRef.current += velocityRef.current.x;
            thetaRef.current = Math.max(-0.6, Math.min(1.2, thetaRef.current + velocityRef.current.y));
            velocityRef.current.x *= 0.94;
            velocityRef.current.y *= 0.94;
          } else if (autoRotate) {
            // Smooth constant auto-rotation
            phiRef.current += 0.0035;
          }
        }

        if (globeInstance) {
          globeInstance.update({
            phi: phiRef.current,
            theta: thetaRef.current,
          });
        }
        animationFrameId = requestAnimationFrame(animate);
      };
      animate();

      return () => {
        window.removeEventListener("resize", onResize);
        cancelAnimationFrame(animationFrameId);
        if (globeInstance) {
          globeInstance.destroy();
        }
      };
    } catch (err) {
      console.error("Globe initialization error:", err);
    }
  }, [autoRotate]);

  // Pointer drag event handlers with velocity calculation
  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    isDraggingRef.current = true;
    setIsInteracting(true);
    targetPhiRef.current = null;
    targetThetaRef.current = null;
    velocityRef.current = { x: 0, y: 0 };
    lastPointerRef.current = {
      x: e.clientX,
      y: e.clientY,
      time: performance.now(),
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (isDraggingRef.current && lastPointerRef.current) {
      const now = performance.now();
      const dt = Math.max(1, now - lastPointerRef.current.time);
      const deltaX = e.clientX - lastPointerRef.current.x;
      const deltaY = e.clientY - lastPointerRef.current.y;

      // Update position immediately
      phiRef.current += deltaX * 0.0075;
      thetaRef.current = Math.max(-0.6, Math.min(1.2, thetaRef.current - deltaY * 0.0055));

      // Calculate throwing velocity
      velocityRef.current = {
        x: (deltaX / dt) * 0.12,
        y: (-deltaY / dt) * 0.08,
      };

      lastPointerRef.current = {
        x: e.clientX,
        y: e.clientY,
        time: now,
      };
    } else if (containerRef.current) {
      // Subtle 3D perspective parallax tilt when hovering
      const rect = containerRef.current.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;
      setMouseTilt({ x: normX * 8, y: -normY * 8 });
    }
  };

  const onPointerUp = () => {
    isDraggingRef.current = false;
    setIsInteracting(false);
    lastPointerRef.current = null;
  };

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col items-center select-none ${className}`}
      onPointerMove={onPointerMove}
      onMouseLeave={() => setMouseTilt({ x: 0, y: 0 })}
    >
      {/* ── Top Status HUD ── */}
      <div className="flex w-full items-center justify-between px-3 pt-2">
        {/* Pulsing Live Beacon */}
        <div className="flex items-center gap-2 rounded-full border border-amber/30 bg-navy/80 px-3.5 py-1.5 shadow-lg backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-gold">
            Live Talent Corridors
          </span>
        </div>

        {/* Quick Toolbar (Auto-Spin / Reset) */}
        <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setAutoRotate((prev) => !prev)}
            aria-label={autoRotate ? "Pause auto-rotation" : "Play auto-rotation"}
            className="flex h-7 w-7 items-center justify-center rounded-full text-white/75 transition-colors hover:bg-white/15 hover:text-gold"
            title={autoRotate ? "Pause rotation" : "Auto-rotate"}
          >
            {autoRotate ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          </button>
          <button
            type="button"
            onClick={resetView}
            aria-label="Reset globe view"
            className="flex h-7 w-7 items-center justify-center rounded-full text-white/75 transition-colors hover:bg-white/15 hover:text-gold"
            title="Reset position"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* ── 3D Globe Stage with Atmospheric Orbital Rings ── */}
      <div
        className="relative my-1 w-full aspect-square max-w-[300px] sm:max-w-[350px] xl:max-w-[380px] mx-auto flex items-center justify-center"
        style={{
          transform: `perspective(1000px) rotateX(${mouseTilt.y}deg) rotateY(${mouseTilt.x}deg)`,
          transition: isDraggingRef.current ? "none" : "transform 0.4s ease-out",
        }}
      >
        {/* Outer Animated Orbital Rings */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-[-14px] rounded-full border border-dashed border-indigo/35 animate-spin-slow opacity-60"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-[-28px] rounded-full border border-amber/15 animate-spin-slow-reverse opacity-40"
        />

        {/* Nebula Background Glow Behind Sphere */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-6 rounded-full bg-gradient-to-tr from-indigo/35 via-tech-purple/20 to-amber/15 blur-2xl opacity-75"
        />

        {/* Canvas Element with Drag Control */}
        <canvas
          ref={canvasRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className={`relative z-10 w-full h-full object-contain cursor-grab active:cursor-grabbing transition-opacity ${
            isInteracting ? "opacity-100" : "opacity-95"
          }`}
        />

        {/* Floating Interaction Hint on Hover */}
        <div className="pointer-events-none absolute bottom-4 z-20 hidden sm:flex items-center gap-1.5 rounded-full border border-white/20 bg-navy/70 px-3 py-1 text-[11px] font-medium text-white/75 shadow-md backdrop-blur-md">
          <Navigation className="h-3 w-3 text-amber animate-spin" style={{ animationDuration: "8s" }} />
          <span>Click &amp; drag 360° to explore</span>
        </div>
      </div>

      {/* ── Interactive Hub Focus Switcher Pills ── */}
      <div className="z-10 mt-1 flex flex-wrap items-center justify-center gap-2 px-2">
        {HUBS.map((hub) => {
          const isActive = activeHubId === hub.id;
          return (
            <button
              key={hub.id}
              type="button"
              onClick={() => focusRegion(hub.id)}
              className={`group inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-amber to-gold text-navy shadow-lg shadow-amber/30 scale-105 ring-2 ring-white/50"
                  : "border border-white/20 bg-white/10 text-white/80 hover:bg-white/20 hover:text-white hover:border-amber/40"
              }`}
            >
              <span>{hub.flag}</span>
              <span>{hub.name}</span>
              {isActive && <span className="h-1.5 w-1.5 rounded-full bg-navy animate-pulse" />}
            </button>
          );
        })}
      </div>

      {/* ── Dynamic Corridor Telemetry Card ── */}
      <div className="z-10 mt-4 w-full rounded-2xl border border-white/15 bg-white/5 p-4 shadow-xl backdrop-blur-md transition-all duration-300">
        <div className="flex items-start justify-between gap-2 border-b border-white/10 pb-2.5">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base">{activeHub.flag}</span>
              <h4 className="text-sm font-bold text-white">{activeHub.name} Hub</h4>
              <span className="rounded-full bg-amber/20 px-2 py-0.5 text-[10px] font-bold text-gold">
                {activeHub.badge}
              </span>
            </div>
            <p className="mt-0.5 text-xs text-white/65">{activeHub.role}</p>
          </div>
          <div className="flex items-center text-xs font-bold text-amber">
            <Zap className="h-3.5 w-3.5" />
          </div>
        </div>

        {/* 2-Metric Telemetry Row */}
        <div className="mt-3 grid grid-cols-2 gap-2 text-left">
          <div className="rounded-xl border border-white/10 bg-white/5 p-2.5">
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/50">
              {activeHub.stat1.label}
            </span>
            <span className="mt-0.5 block text-sm font-black text-amber">
              {activeHub.stat1.value}
            </span>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-2.5">
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/50">
              {activeHub.stat2.label}
            </span>
            <span className="mt-0.5 block text-sm font-black text-white">
              {activeHub.stat2.value}
            </span>
          </div>
        </div>

        {/* Tech Stack Tags for Selected Corridor */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">
            Key Stacks:
          </span>
          {activeHub.focusDomains.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-gold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
