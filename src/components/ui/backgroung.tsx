import { HeroHighlight } from "./hero-highlight";
import { motion } from "framer-motion";
export const Background = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroHighlight className="h-screen w-screen">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl w-screen h-screen flex justify-between px-20 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white  leading-relaxed lg:leading-snug  mx-auto "
      >
        {children}
      </motion.h1>
    </HeroHighlight>
  );
};
