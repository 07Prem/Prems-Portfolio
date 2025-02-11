"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimationControls,
} from "framer-motion";

const getRandomHeight = () => {
  return `${Math.random() * 100}vh`;
};

const NyanCat = () => {
  const [divs, setDivs] = useState<{ id: string }[]>([]);

  const spawnDiv = () => {
    const newDiv = {
      id: (Math.random() * 100000).toFixed(),
    };
    setDivs((prevDivs) => [...prevDivs, newDiv]);
  };

  // Add keydown event listener only once on mount
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "n") spawnDiv();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // empty dependency array

  return (
    <div className="fixed left-0 top-0 w-screen h-screen overflow-hidden z-[-1]">
      <AnimatePresence>
        {divs.length > 0 && (
          <div className="fixed w-screen flex left-0 top-16">{divs.length}</div>
        )}
      </AnimatePresence>
      {divs.map((div) => (
        <AnimatedDiv
          key={div.id}
          id={div.id}
          onClick={() => console.log("clicked")}
          onCompleted={() => {
            setDivs((prev) => prev.filter((d) => d.id !== div.id));
          }}
        />
      ))}
    </div>
  );
};

const AnimatedDiv = ({
  id,
  onClick,
  onCompleted,
}: {
  id: string;
  onClick: () => void;
  onCompleted: () => void;
}) => {
  // Compute the random Y position once and keep it stable
  const [randY] = useState(getRandomHeight);
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: "100vw",
      y: randY,
      transition: { duration: 5, ease: "linear" },
    });
  }, [controls, randY]); // include randY so the effect runs with its stable value

  const handlePause = () => {
    onClick();
  };

  return (
    <motion.div
      key={id}
      initial={{ x: "-20vw", y: randY }}
      animate={controls}
      onAnimationComplete={onCompleted}
      onClick={handlePause}
    >
      <img
        src="/assets/nyan-cat.gif"
        className={cn("fixed z-10 h-40 w-auto")}
        alt="Nyan Cat"
      />
    </motion.div>
  );
};

export default NyanCat;
