"use client";

import { skills } from "@/constants/skills";
import { motion } from "framer-motion";

const Skills = () => {
  const texts = skills.map((sk) => sk.name);

  const directions = texts.map(() => {
    return {
      x: [-1000, 1000],
      y: [
        Math.floor(Math.random() * (600 - -600 + 1)) - 600,
        Math.floor(Math.random() * (600 - -600 + 1)) - 600,
      ],
    };
  });

  return (
    <section
      id="skills"
      className="w-full flex items-center justify-center flex-col"
    >
      <div
        className="flex items-center justify-center flex-col"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          // backgroundColor: "#f0f0f0",
        }}
      >
        {texts.map((text, index) => (
          <motion.div
            key={index}
            style={{
              position: "absolute",
              fontSize: "24px",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
            animate={directions[index % directions.length]}
            transition={{
              duration: Math.random() * (10 - 6.5 + 1) + 6.5, // Duration of one cycle
              repeat: Infinity, // Repeat infinitely
              ease: "linear", // Linear motion
            }}
          >
            {text}
          </motion.div>
        ))}
        <h1 className="h1 text-color-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Skills
        </h1>
      </div>
    </section>
  );
};

export default Skills;
