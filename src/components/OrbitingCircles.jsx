/* src/components/OrbitingCircles.js */

import React from 'react';
import { twMerge } from "tailwind-merge";

export const OrbitingCircles = ({
  className,
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
}) => {
  const calculatedDuration = duration / speed;

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute h-full w-full"
        >
          <circle
            className="stroke-white/10 stroke-1"
            cx="95%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}

      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;

        return (
          <div
            style={{
              "--duration": `${calculatedDuration}s`,
              "--radius": `${radius}px`,
              "--angle": `${angle}deg`,
              "--icon-size": `${iconSize}px`,
              animation: `orbit var(--duration) linear infinite ${reverse ? 'reverse' : ''}`,
            }}
            className={twMerge(
              "absolute flex items-center justify-center h-[var(--icon-size)] w-[var(--icon-size)] transform-gpu rounded-full",
              className
            )}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}