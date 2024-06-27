import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="green" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black-100/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // change the bg to bg-black-100, so it matches the bg color and will blend in
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Logo */}
      <div className="absolute top-1 left-2 md:top-2 md:left-2">
        <Image
          src="/review.png"
          alt="Logo"
          width={250}
          height={250}
          className=""
        />
      </div>

      <div className="relative z-10 flex justify-center my-20">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <p className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
          Bridging Data Silos And App ideas into Unified Solutions
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Software Enginnering And Mobile Apps Development"
            className="mt-4 text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="mt-2 mb-4 text-center text-sm md:text-lg lg:text-2xl md:tracking-wider">
          Hi! We&apos;are a team of, Software Engineers Based In Kigali.
          </p>

          <motion.a
            href="#about"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MagicButton
              title="Learn More About Us"
              icon={<FaLocationArrow />}
              position="right"
            />
          </motion.a>
        </div>
      </div>

      <motion.div
        className="absolute right-10 top-1/2 transform -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
      >
        <Image
          src="" // Adjust the path based on your image location in the public folder
          alt="Emmanuel"
          width={250}
          height={250}
          className="rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default Hero;

