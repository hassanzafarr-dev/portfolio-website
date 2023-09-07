"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-2">
        As a teenager, I was the guy other approached about issues with their
        phone or laptop. I was the go-to guy for fixing any technical problems.
        I'm a <span className="font-medium">software engineer</span> who loves
        to solve problems and build things. I have 3+ years of software
        development experience. I've worked on several technologies over the
        years. I'm a certified blockchain developer who is fully invested in
        this game changing technology. Currently employed as a Software Engineer
        II at Jumppace
      </p>
      <p>
        I’m hands on in all stages of the software development cycle, from
        planning and design to testing and deployment. No two days are the same
        for me; my tasks may involve analysing algorithms, altering code, fixing
        bugs, brainstorming ideas or integrating new systems.
      </p>
      {/* <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. */}

      {/* <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
    </motion.section>
  );
}
