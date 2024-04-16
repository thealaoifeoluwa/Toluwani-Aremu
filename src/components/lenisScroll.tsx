"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
// import { gsap } from "gsap/dist/gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import MouseFollower from "mouse-follower";
import "../styles/mouse.scss";
MouseFollower.registerGSAP(gsap);

import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./header";
import Gradient from "@/icons/gradient";
import FixedButtons from "./fixedButtons";

const LenisScroll = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const lenis = useLenis();

  // INITIALIZE MOUSE FOLLOWER
  useEffect(() => {
    if (typeof window == "undefined") return;

    const details = navigator.userAgent;
    const regexp = /android|iphone|kindle|ipad/i;

    const isMobileDevice = regexp.test(details);
    if (isMobileDevice) return;

    const cursor = new MouseFollower({});

    const cursorCont = document.querySelectorAll(".mf-cursor");
    cursorCont.forEach((cursor) => {
      cursor?.classList.remove("-pointer");
      cursor?.classList.remove("-text");
    });
  }, [pathname]);

  // INITIALIZE ANIMATE ON SCROLL
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: "ease",
      once: false,
    });
  }, []);

  // FIX SCROLL TO TOP ERROR WHEN ENTERING ANOTHER PAGE
  // useEffect(() => {
  //   if (lenis) {
  //     lenis.scrollTo(0, { immediate: true });
  //   }
  // }, [pathname, lenis]);

  // UPDATE LOADING ANIMATION FOR EVERY PAGE
  useEffect(() => {
    const loader = document.querySelector("#loader");

    setTimeout(() => {
      loader?.classList.add("close");
      // document.body.className = "";
    }, 2000);
  }, [pathname]);

  return (
    <ReactLenis root options={{ duration: 2 }}>
      <Gradient />
      <Header />
      {children}
      <FixedButtons />
    </ReactLenis>
  );
};

export default LenisScroll;
