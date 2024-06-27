import React, { useState } from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="py-20 w-full text-foreground">
      <h1 className="heading text-4xl font-bold text-center mb-10">
        Our Shared <span className="text-primary">Development Experience</span>
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
            className="flex-1 text-foreground border-border transform hover:scale-105 hover:shadow-lg"
            onClick={() => toggleExpand(card.id)}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-32 md:w-20 w-16 rounded-full"
              />
              <div className="lg:ml-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
            {expandedCard === card.id && (
              <div className="extra-info-container p-5 bg-card rounded-lg mt-4 text-card-foreground">
                <p>{card.extraInfo}</p>
              </div>
            )}
          </Button>
        ))}
      </div>

      <style jsx>{`
        .extra-info-container {
          max-height: 10rem;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        .extra-info-container p {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default Experience;
