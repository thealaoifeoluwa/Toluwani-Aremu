"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
// import { gsap } from "gsap/dist/gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Header from "./header";
import Gradient from "@/icons/gradient";
import FixedButtons from "./fixedButtons";
import Loader from "./loader";

gsap.registerPlugin(ScrollTrigger);

import MouseFollower from "mouse-follower";
import "../styles/mouse.scss";
MouseFollower.registerGSAP(gsap);

import AOS from "aos";
import "aos/dist/aos.css";

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
      offset: 50,
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

  // UPDATE DARK MODE
  useEffect(() => {
    if (
      localStorage.toluwaniTheme === "dark" ||
      (!("toluwaniTheme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // UPDATE LOADING ANIMATION FOR EVERY PAGE
  useEffect(() => {
    const loader = document.querySelector("#loader");

    setTimeout(() => {
      loader?.classList.add("close");

      document.body.style.height = "auto";
    }, 6000);
  }, [pathname]);

  return (
    <ReactLenis root options={{ duration: 2 }}>
      <Gradient />
      <Loader />
      <Header />
      {children}
      <FixedButtons />
    </ReactLenis>
  );
};

export default LenisScroll;
