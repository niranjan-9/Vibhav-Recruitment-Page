"use client";

import { useEffect, useRef } from "react";

export default function IntroAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let played = false;

    const attempt = () => {
      if (played) return;
      audio
        .play()
        .then(() => {
          played = true;
          window.removeEventListener("pointerdown", attempt);
          window.removeEventListener("keydown", attempt);
        })
        .catch(() => {
          window.addEventListener("pointerdown", attempt);
          window.addEventListener("keydown", attempt);
        });
    };

    attempt();

    return () => {
      window.removeEventListener("pointerdown", attempt);
      window.removeEventListener("keydown", attempt);
    };
  }, []);

  return <audio ref={audioRef} src="/output.wav" preload="auto" className="hidden" />;
}
