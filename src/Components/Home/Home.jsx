import React from "react";
import avatarImg from "../../assets/avatar.jpeg";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
          Hii👋, Myself Pujan Sarkar
        </h1>
        <p className="text-sm md:text-2xl mt-5 tracking-tighter">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          nam, deleniti maiores consequuntur corruption.
        </p>
        
        {/* Wrap buttons in a flex container */}
        <div className="flex flex-col md:flex-row gap-4 mt-5 md:mt-10">
          <button className="text-white py-3 px-6 text-lg md:text-xl bg-[#465697] hover:bg-[#3b4d8b] duration-300 hover:scale-105 font-semibold rounded-full shadow-lg">
            Contact me
          </button>
          <button className="text-white py-3 px-6 text-lg md:text-xl bg-[#4CAF50] hover:bg-[#43a047] duration-300 hover:scale-105 font-semibold rounded-full shadow-lg">
            Download Resume
          </button>
        </div>
      </div>
      <div>
        <img
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
          src={avatarImg}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Home;
