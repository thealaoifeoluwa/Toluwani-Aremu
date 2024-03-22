import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
// import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export const useAnimateHeaderDropdown = () => {
  const timelineRef = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    timelineRef.current = gsap.timeline({
      defaults: { ease: "none" },
    });

    timelineRef.current
      .to("#dropdown", {
        autoAlpha: 1,
        visibility: "visible",
        duration: 0.3,
      })
      .fromTo(
        "#menu > *, #info",
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.4,
          duration: 0.5,
        }
      )
      .fromTo(
        "#menuLinks",
        {
          opacity: 0,
          x: 50,
        },
        {
          delay: 0.2,
          opacity: 1,
          x: 0,
          duration: 0.4,
        }
        // "<"
      );
  }, []);

  return timelineRef;
};

export const useDrag = () => {
  useEffect(() => {
    const box = document.querySelector("#draggable") as HTMLElement;

    let isDown = false;
    let startX: number;
    let startY: number;
    let scrollLeft: number;
    let scrollTop: number;

    box?.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - box.offsetLeft;
      startY = e.pageY - box.offsetTop;
      scrollLeft = box.scrollLeft;
      scrollTop = box.scrollTop;
      box.style.cursor = "grabbing";
    });

    box?.addEventListener("mouseleave", () => {
      isDown = false;
      box.style.cursor = "grab";
    });

    box?.addEventListener("mouseup", () => {
      isDown = false;
      box.style.cursor = "grab";
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDown || !box) return;

      e.preventDefault();
      const x = e.pageX - box.offsetLeft;
      const y = e.pageY - box.offsetTop;
      const walkX = (x - startX) * 1; // Change this number to adjust the scroll speed
      const walkY = (y - startY) * 1; // Change this number to adjust the scroll speed
      box.scrollLeft = scrollLeft - walkX;
      box.scrollTop = scrollTop - walkY;
    });
  }, []);
};

// data-cursor-stick="#stick-me"
// id="stick-me"
// data-cursor-text=" "
// data-cursor="-inverse"
// data-cursor="-hidden"
// data-cursor-img="/img/example.png"
// data-cursor-video="/video/example.mp4"
