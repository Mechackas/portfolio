import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading text-4xl font-bold text-center mb-10">
        OUR <span className="text-blue-600">Work Experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "linear-gradient(135deg, #0047ab, #0088ff)",
              borderRadius: `calc(1.75rem * 0.96)`,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 transform hover:scale-105 hover:shadow-lg"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16 rounded-full"
              />
              <div className="lg:ml-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;

