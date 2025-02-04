import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading text-center text-5xl font-extrabold text-white mb-20">
        Our <span className="text-primary">Approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-10">
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          des="We'll collaborate to map out your software, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, security and content requirements."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
            colors={[[50, 115, 220], [50, 215, 215], [50, 50, 220]]}
          />
        </Card>
        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon order="Phase 2" />}
          des="Once we agree on the plan, We cue our lofi playlist and dive into
          coding. From initial sketches to polished code, We keep you updated
          every step of the way."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[[136, 78, 160], [190, 98, 255], [136, 78, 160]]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          des="This is where the magic happens! Based on the approved design, 
          We translate everything into functional code, building your software
          from the ground up."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[255, 94, 58], [255, 201, 71], [255, 94, 58]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-gray-700 group/canvas-card flex items-center justify-center
       dark:border-gray-500 max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl bg-gradient-to-r from-gray-800 to-gray-900"
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-gray-600 text-gray-400 opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-gray-600 text-gray-400 opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-gray-600 text-gray-400 opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-gray-600 text-gray-400 opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-white mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};