import React, { useEffect } from "react";
import anime from "animejs";
import "./animate.css";

const AnimatedLogo = () => {
  useEffect(() => {
    const { matches } = window.matchMedia("prefers-reduced-motion: reduce");

    if (!matches) {
      const text = document.querySelector("svg text");
      const textLength = text.getAttribute("textLength");
      text.innerHTML = text.textContent
        .split("")
        .map((letter) => `<tspan textLength="${textLength}">${letter}</tspan>`)
        .join("");

      const animation = anime.timeline();

      animation.add({
        targets: "text tspan",
        opacity: [0, 1],
        duration: 425,
        easing: "easeInOutQuad",
        delay: (d, i) => 150 * i + 500,
      });

      animation.add(
        {
          targets: "mask circle",
          scale: [1, 0],
          duration: 2000,
          easing: "easeInOutSine",
        },
        500
      );

      window.addEventListener("click", () => animation.restart());
    }
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-75 0 250 82.5"
      width="500"
      height="165"
    >
      <defs>
        <path
          id="path-foreground"
          d="M 0 65 a 200 200 0 0 1 150 -65 160 160 0 0 0 -125 65"
        />
        <path id="path-background" d="M 60 65 l -60 -45 h 22.5 l 60 45 z" />

        <mask id="mask-path">
          <rect width="150" height="100" fill="hsl(0, 0%, 100%)" />
          <g fill="hsl(0, 0%, 0%)">
            <use transform="translate(-3.5 -3.5)" href="#path-foreground" />
            <use transform="translate(3 3)" href="#path-foreground" />
          </g>
        </mask>

        <mask id="mask-path-foreground">
          <rect width="150" height="100" fill="hsl(0, 0%, 100%)" />
          <g fill="hsl(0, 0%, 0%)">
            <g transform="translate(150 0)">
              <circle transform="scale(0)" r="175" />
            </g>
          </g>
        </mask>

        <mask id="mask-path-background">
          <rect width="150" height="100" fill="hsl(0, 0%, 100%)" />
          <g fill="hsl(0, 0%, 0%)">
            <circle transform="scale(0)" r="125" />
          </g>
        </mask>
      </defs>

      <g fill="currentColor" stroke="none">
        <g mask="url(#mask-path-background)">
          <g mask="url(#mask-path)">
            <use href="#path-background" />
          </g>
        </g>
        <g mask="url(#mask-path-foreground)">
          <use href="#path-foreground" />
        </g>
        <g transform="translate(0 82.5)">
          <text textLength="82.5">starlink</text>
        </g>
      </g>
    </svg>
  );
};

export default AnimatedLogo;
