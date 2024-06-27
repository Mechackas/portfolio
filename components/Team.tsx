"use client";

import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/Pin";

// ... rest of your component code

const teamMembers = [
  {
    id: 1,
    name: "Albin",
    role: "Software Engineer",
    image: "/pic1.png",
    speciality: "React & UI/UX",
    bio: "Passionate about creating beautiful and intuitive user interfaces.",
    socialLinks: [
      { icon: FaLinkedin, url: "https://linkedin.com" },
      { icon: FaGithub, url: "https://github.com" },
      { icon: FaEnvelope, url: "mailto:alex@example.com" },
    ],
  },
  {
    id: 2,
    name: "Shema",
    role: "Data & Security",
    image: "/pic2.png",
    speciality: "Software & Databases",
    bio: "Expert in building scalable and efficient server-side applications.",
    socialLinks: [
      { icon: FaLinkedin, url: "https://linkedin.com" },
      { icon: FaGithub, url: "https://github.com" },
      { icon: FaEnvelope, url: "mailto:sam@example.com" },
    ],
  },
  {
    id: 3,
    name: "Asher",
    role: "Full Stack Developer",
    image: "/pic3.png",
    speciality: "JavaScript & DevOps",
    bio: "Bridging the gap between frontend and backend with full-stack expertise.",
    socialLinks: [
      { icon: FaLinkedin, url: "https://linkedin.com" },
      { icon: FaGithub, url: "https://github.com" },
      { icon: FaEnvelope, url: "mailto:morgan@example.com" },
    ],
  },
];

const Team = () => {
  const openSocialMedia = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="py-20">
      <h1 className="heading">
        Meet Our <span className="text-primary">Dream Team</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
        {teamMembers.map((member) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={member.id}
          >
            <PinContainer title={` ${member.role}`} href="#">
            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
  <div
    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
    style={{ backgroundColor: "#0B3D30" }}
  >
    <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover" />
  </div>
  <div className="absolute inset-0 flex items-center justify-center">
    <img
      src={member.image}
      alt={member.name}
      className="z-10 rounded-full w-32 h-32 object-cover border-4 border-green"
    />
  </div>
</div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {member.name}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#28A745",
                  margin: "1vh 0",
                }}
              >
                {member.speciality}
              </p>

              <p className="text-sm text-white/70 mt-2 mb-4">{member.bio}</p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {member.socialLinks.map((link, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center cursor-pointer hover:bg-purple transition-colors duration-300"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                      onClick={() => openSocialMedia(link.url)}
                    >
                      <link.icon className="text-white" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-green">
                    View Profile
                  </p>
                  <FaLocationArrow className="ms-3" color="#28A745" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;