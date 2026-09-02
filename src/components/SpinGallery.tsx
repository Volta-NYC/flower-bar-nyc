"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";

type GalleryImage = {
  alt: string;
  src: string;
};

export function SpinGallery({ images }: { images: GalleryImage[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const previousRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const loopedImages = useMemo(() => [...images, ...images, ...images], [images]);

  useEffect(() => {
    const track = trackRef.current;
    const wrap = wrapRef.current;
    const previous = previousRef.current;
    const next = nextRef.current;

    if (!track || !wrap || !previous || !next || images.length === 0) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cardDistance = 390;
    let loopWidth = cardDistance * images.length;
    let currentX = 0;
    let animationId = 0;
    let isTouching = false;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartXPosition = 0;
    let isHorizontalSwipe = false;

    const measure = () => {
      const firstCard = track.querySelector<HTMLElement>(".spin-gallery-card");
      if (!firstCard) {
        return;
      }

      const styles = window.getComputedStyle(firstCard);
      const marginRight = parseFloat(styles.marginRight || "0");
      cardDistance = firstCard.offsetWidth + marginRight;
      loopWidth = cardDistance * images.length;

      if (currentX === 0) {
        currentX = loopWidth;
      }
    };

    const normalize = () => {
      if (loopWidth <= 0) {
        return;
      }

      while (currentX >= loopWidth * 2) currentX -= loopWidth;
      while (currentX < loopWidth) currentX += loopWidth;
    };

    const nudge = (amount: number) => {
      currentX += amount;
      normalize();
      track.style.transform = `translate3d(${-currentX}px, 0, 0)`;
    };

    const animate = () => {
      if (!reducedMotion && !isTouching) {
        currentX += 0.38;
      }

      normalize();
      track.style.transform = `translate3d(${-currentX}px, 0, 0)`;
      animationId = requestAnimationFrame(animate);
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      nudge(event.deltaY || event.deltaX);
    };

    const onTouchStart = (event: TouchEvent) => {
      isTouching = true;
      touchStartX = event.touches[0]?.clientX ?? 0;
      touchStartY = event.touches[0]?.clientY ?? 0;
      touchStartXPosition = currentX;
      isHorizontalSwipe = false;
    };

    const onTouchMove = (event: TouchEvent) => {
      const currentTouchX = event.touches[0]?.clientX ?? touchStartX;
      const currentTouchY = event.touches[0]?.clientY ?? touchStartY;
      const deltaX = touchStartX - currentTouchX;
      const deltaY = touchStartY - currentTouchY;

      if (!isHorizontalSwipe && Math.abs(deltaY) > Math.abs(deltaX)) {
        return;
      }

      isHorizontalSwipe = true;
      currentX = touchStartXPosition + deltaX;
      normalize();
      track.style.transform = `translate3d(${-currentX}px, 0, 0)`;
    };

    const onTouchEnd = () => {
      isTouching = false;
    };

    const onPrevious = () => nudge(-cardDistance);
    const onNext = () => nudge(cardDistance);

    measure();
    normalize();
    window.addEventListener("resize", measure);
    wrap.addEventListener("wheel", onWheel, { passive: false });
    wrap.addEventListener("touchstart", onTouchStart, { passive: true });
    wrap.addEventListener("touchmove", onTouchMove, { passive: true });
    wrap.addEventListener("touchend", onTouchEnd);
    previous.addEventListener("click", onPrevious);
    next.addEventListener("click", onNext);
    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", measure);
      wrap.removeEventListener("wheel", onWheel);
      wrap.removeEventListener("touchstart", onTouchStart);
      wrap.removeEventListener("touchmove", onTouchMove);
      wrap.removeEventListener("touchend", onTouchEnd);
      previous.removeEventListener("click", onPrevious);
      next.removeEventListener("click", onNext);
    };
  }, [images.length]);

  return (
    <section className="spin-gallery-section" aria-labelledby="gallery-title">
      <div className="spin-gallery-header reveal">
        <p className="kicker">3 · Gallery</p>
        <div>
          <h2 id="gallery-title">A fuller look at <i>the flower bar.</i></h2>
          <p className="section-deck">Recent Google Maps photos of bouquets, custom arrangements, and the shop’s fresh daily stems.</p>
        </div>
        <div className="spin-gallery-controls" aria-label="Gallery controls">
          <button aria-label="Previous gallery image" className="spin-gallery-control" ref={previousRef} type="button">
            <ChevronLeft size={20} />
          </button>
          <button aria-label="Next gallery image" className="spin-gallery-control" ref={nextRef} type="button">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="spin-gallery-track-wrap reveal delay-one" ref={wrapRef}>
        <div className="spin-gallery-track" ref={trackRef}>
          {loopedImages.map((image, index) => (
            <figure aria-hidden={index >= images.length} className="spin-gallery-card" key={`${image.src}-${index}`}>
              <Image alt={index < images.length ? image.alt : ""} fill sizes="(max-width: 800px) 78vw, 380px" src={image.src} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
