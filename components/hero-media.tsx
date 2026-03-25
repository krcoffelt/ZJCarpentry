"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { MediaAsset } from "@/lib/site-data";

type HeroMediaProps = {
  image: MediaAsset;
  videoSrc: string;
  alt: string;
};

export function HeroMedia({ image, videoSrc, alt }: HeroMediaProps) {
  const [shouldRenderVideo, setShouldRenderVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 901px)");
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let idleId: number | undefined;
    const browserWindow = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    const scheduleVideoLoad = () => {
      setShouldRenderVideo(false);
      setVideoReady(false);

      if (!mediaQuery.matches) {
        return;
      }

      const loadVideo = () => setShouldRenderVideo(true);

      if (browserWindow.requestIdleCallback) {
        idleId = browserWindow.requestIdleCallback(loadVideo, { timeout: 1500 });
        return;
      }

      timeoutId = globalThis.setTimeout(loadVideo, 250);
    };

    scheduleVideoLoad();

    const onChange = () => scheduleVideoLoad();
    mediaQuery.addEventListener("change", onChange);

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }

      if (idleId && browserWindow.cancelIdleCallback) {
        browserWindow.cancelIdleCallback(idleId);
      }

      mediaQuery.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <div className="desktop-hero-media">
      <Image
        alt={alt}
        src={image.src}
        fill
        priority
        quality={82}
        sizes="100vw"
        className="desktop-hero-image"
      />
      {shouldRenderVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          aria-hidden="true"
          className={`desktop-hero-video${videoReady ? " desktop-hero-video-ready" : ""}`}
          onLoadedData={() => setVideoReady(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
