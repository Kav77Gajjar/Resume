'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Item {
  title: string;
  description: string;
  link: string;
}

export function HoverEffect({ items }: { items: Item[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setContainerDimensions({ width, height });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8"
    >
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={item.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          target="_blank"
        >
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition duration-500"
            initial={false}
            animate={hoveredIndex === idx ? { opacity: 0.2 } : { opacity: 0 }}
          />
          <motion.div
            className="relative z-10 p-5 rounded-xl bg-white/[0.8] dark:bg-gray-900/[0.8] backdrop-blur-sm shadow-xl border border-gray-200 dark:border-gray-800 h-full"
            initial={false}
            animate={
              hoveredIndex === idx
                ? {
                    y: -5,
                    x: 0,
                    scale: 1.02,
                    rotateX: 0,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }
                : {
                    y: 0,
                    x: 0,
                    scale: 1,
                    rotateX: 0,
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  }
            }
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <div className="h-full flex flex-col justify-between">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{item.description}</p>
              <div className="mt-4 flex justify-end">
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  Learn more →
                </span>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
