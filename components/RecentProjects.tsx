"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const openSocialMedia = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="py-20 bg-gradient-to-gray-800 text-white">
      <h1 className="heading text-4xl font-bold text-center mb-10">
        Collaborative {" "}
        <span className="text-blue-500">Projects and Achievements</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] transform transition-transform duration-300 hover:scale-105 hover:rotate-1 bg-gray-800 rounded-3xl shadow-lg"
            key={item.id}
          >
            <PinContainer
              title={item.link}
              href={item.href}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 rounded-3xl shadow-lg">
                <div
                  className="relative w-full h-full overflow-hidden rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="background" className="object-cover w-full h-full opacity-50" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 transform transition-transform duration-500 hover:scale-110"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-center text-white">
                {item.title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-center text-gray-400 mt-2 mb-4">
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-gray-700 rounded-full bg-gray-700 shadow-lg lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center transform transition-transform duration-300 hover:scale-110"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                      onClick={() => openSocialMedia(icon.url)}
                    >
                      <img src={icon.img} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center cursor-pointer" onClick={() => openSocialMedia(item.href)}>
                  <p className="flex lg:text-xl md:text-xs text-sm text-blue-500">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;