import { useLayoutEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { scrollState } from "../state/common";
import Lenis from "@studio-freight/lenis";

export function useScroll() {
  const lenis = new Lenis({
    duration: 0.8,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  const [scroll, setScroll] = useRecoilState(scrollState);

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  useLayoutEffect(() => {
    lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
      setScroll((prev) => {
        return { ...prev, scroll, limit, velocity, direction, progress };
      });
    });
  }, [setScroll]);

  return lenis;
}
