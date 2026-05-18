"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function FounderVideoButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative shrink-0 cursor-pointer"
        style={{ width: "clamp(70px, 8vw + 10px, 137px)", height: "clamp(70px, 8vw + 10px, 137px)" }}
        aria-label="Смотреть видео о клубе"
      >
        <Image
          src="/images/founder/elipse.png"
          alt=""
          width={137}
          height={137}
          className="absolute inset-0 z-0 w-full h-full"
        />
        <Image
          src="/images/founder/play.svg"
          alt=""
          width={31}
          height={31}
          className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: "clamp(14px, 2vw + 4px, 31px)", height: "clamp(14px, 2vw + 4px, 31px)" }}
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl leading-none hover:opacity-70 transition-opacity"
              aria-label="Закрыть"
            >
              ×
            </button>
            <video
              src="/video/video.mp4"
              controls
              autoPlay
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
