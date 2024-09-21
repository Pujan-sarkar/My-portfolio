import React from "react";
import AboutImg from "../../assets/4516859.jpg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div id="About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-8">About</h2>
        <div className="md:flex flex-wrap items-center">
          <img
            className="md:h-80 md:w-auto w-full mb-6 md:mb-0 rounded-lg"
            src={AboutImg}
            alt="About img"
          />

          <ul className="md:ml-8">
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-full md:w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Open Source Contributor
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  optio aliquid modi laboriosam? Animi quisquam dicta
                  voluptatem! Repellendus ducimus reiciendis iusto ab molestias
                  illo nobis reprehenderit eveniet doloremque, aut dolores.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-full md:w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Web Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  optio aliquid modi laboriosam? Animi quisquam dicta
                  voluptatem! Repellendus ducimus reiciendis iusto ab molestias
                  illo nobis reprehenderit eveniet doloremque, aut dolores.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-full md:w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend Enthusiast
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  optio aliquid modi laboriosam? Animi quisquam dicta
                  voluptatem! Repellendus ducimus reiciendis iusto ab molestias
                  illo nobis reprehenderit eveniet doloremque, aut dolores.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
