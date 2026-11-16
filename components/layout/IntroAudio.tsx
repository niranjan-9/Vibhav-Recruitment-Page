"use client";

import { useEffect, useRef } from "react";

export default function IntroAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Ensure audio only plays once per session
    try {
      if (sessionStorage.getItem("vibha_audio_has_played") === "true") {
        return;
      }
    } catch {
      // Ignore sessionStorage access restrictions in private modes
    }

    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = false;

    let hasStarted = false;

    const cleanup = () => {
      window.removeEventListener("pointerdown", onInteraction);
      window.removeEventListener("keydown", onInteraction);
      window.removeEventListener("touchstart", onInteraction);
      window.removeEventListener("click", onInteraction);
    };

    const onInteraction = () => {
      // Prevent multiple triggers when clicking rapidly
      if (hasStarted) return;
      hasStarted = true;
      cleanup();

      try {
        sessionStorage.setItem("vibha_audio_has_played", "true");
      } catch {
        // Ignore
      }

      audio
        .play()
        .catch(() => {
          // If browser policy blocks, do not retry repeatedly
        });
    };

    // Attempt autoplay if browser policy permits
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          hasStarted = true;
          cleanup();
          try {
            sessionStorage.setItem("vibha_audio_has_played", "true");
          } catch {}
        })
        .catch(() => {
          // Autoplay blocked without user gesture: attach listener for the first interaction only
          window.addEventListener("pointerdown", onInteraction, { once: true });
          window.addEventListener("keydown", onInteraction, { once: true });
          window.addEventListener("touchstart", onInteraction, { once: true });
          window.addEventListener("click", onInteraction, { once: true });
        });
    }

    return () => {
      cleanup();
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/output.wav"
      preload="auto"
      loop={false}
      className="hidden"
    />
  );
}
