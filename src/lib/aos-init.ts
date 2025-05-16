"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      duration: 1600,
      throttleDelay: 0,
      offset: 0,
      once: true,
    });
  }, []);

  return null;
};
