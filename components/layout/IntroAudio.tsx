"use client";

import { useEffect } from "react";

// In-memory singleton for the active browser page load
let globalAudio: HTMLAudioElement | null = null;
let hasStartedPlayback = false;

export default function IntroAudio() {
  useEffect(() => {
    // If audio playback was already initiated for this page load/refresh, do not start again
    if (hasStartedPlayback) return;
    hasStartedPlayback = true;

    if (!globalAudio) {
      globalAudio = new Audio("/output.wav");
      globalAudio.loop = false;
      globalAudio.preload = "auto";
    }

    const audio = globalAudio;

    const cleanup = () => {
      window.removeEventListener("pointerdown", startOnGesture);
      window.removeEventListener("keydown", startOnGesture);
      window.removeEventListener("touchstart", startOnGesture);
      window.removeEventListener("click", startOnGesture);
    };

    const startOnGesture = () => {
      cleanup();
      // Only play if audio hasn't started and hasn't ended
      if (audio.paused && audio.currentTime === 0 && !audio.ended) {
        audio.play().catch(() => {});
      }
    };

    // Attempt direct autoplay
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          cleanup();
        })
        .catch(() => {
          // If browser policy blocks autoplay without user interaction, start on first gesture
          window.addEventListener("pointerdown", startOnGesture, { once: true });
          window.addEventListener("keydown", startOnGesture, { once: true });
          window.addEventListener("touchstart", startOnGesture, { once: true });
          window.addEventListener("click", startOnGesture, { once: true });
        });
    }

    return () => {
      // Keep globalAudio playing uninterrupted as user navigates between pages
      cleanup();
    };
  }, []);

  return null;
}
