"use client";

import { useRef, type FC } from "react";
import { motion, useInView } from "motion/react";
import { fadeInUp } from "@/animations/scroll-animations";
import { HERO_LOCATION, HERO_NAME } from "@/constants/hero-constants";

export const AboutBio: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.7 }}
      className="glass gradient-border p-8 md:p-10 lg:col-span-7"
    >
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-400">
        About Us
      </p>
      <h3 className="mb-4 text-2xl font-bold md:text-3xl">
        Creative Technologies · {HERO_LOCATION}
      </h3>
      <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
        <span className="font-semibold text-white">Creative Technologies</span>{" "}
        is a leading software development company with{" "}
        <span className="font-semibold text-white">10+ years</span> of experience
        delivering innovative software solutions. We specialize in building 
        cutting-edge web and mobile applications that drive business growth.
      </p>
      <p className="mt-4 leading-relaxed text-neutral-400">
        Based in{" "}
        <span className="text-white">Santapatta Tagarapuvalasa</span>,
        we have grown into a trusted partner for businesses seeking digital 
        transformation. Our team combines technical excellence with creative 
        problem-solving to deliver solutions that exceed expectations and help 
        our clients succeed in the digital age.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#contact" className="btn-primary">
          <span>Get in touch</span>
          <span aria-hidden>→</span>
        </a>
        <a href="#work" className="btn-ghost">
          <span>View our work</span>
        </a>
      </div>
    </motion.div>
  );
};
