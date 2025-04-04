"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useMotionValueEvent, useScroll } from "framer-motion";

function ScrollTop() {
  const { scrollY } = useScroll();

  const [ctaHidden, setCTAHidden] = useState(true);
  const [scrollValue, setScrollValue] = useState();

  useMotionValueEvent(scrollY, "change", (latest) => setScrollValue(latest));

  useEffect(() => {
    if (scrollValue > 300) {
      setCTAHidden(false);
    } else {
      setCTAHidden(true);
    }
  }, [scrollValue]);

  const handleScrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  return (
    <button
      className={
        ctaHidden
          ? "w-12 h-12 bg-primary rounded-full hidden bottom-6 right-6 justify-center items-center"
          : "group w-12 h-12 bg-primary rounded-full fixed bottom-6 right-6 flex justify-center items-center hover:bg-third transition-all"
      }
      onClick={() => handleScrollTop()}
    >
      <ArrowUpIcon className="size-6 text-white group-hover:animate-pulse" />
    </button>
  );
}

export default ScrollTop;
