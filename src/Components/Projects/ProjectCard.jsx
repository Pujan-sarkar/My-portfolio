import React from "react";

const ProjectCard = ({ title, main, imgSrc }) => {
  return (
    <div className="p-4 md:p-6 flex flex-col bg-[#0c0c19] shadow-xl shadow-slate-900 rounded-2xl min-w-[250px] max-w-[350px] w-full h-full">
      {/* Displaying dynamic image through imgSrc prop */}
      <img className="w-full h-48 object-cover rounded-t-2xl" src={imgSrc} alt={title} />
      
      <div className="px-4 py-2">
        <h3 className="text-xl md:text-2xl font-bold leading-normal mb-2">
          {title}
        </h3>
        <p className="text-sm md:text-md leading-tight">
          {main}
        </p>
      </div>
      
      <div className="mt-auto p-4 flex justify-between gap-4">
        <button className="text-white py-2 px-4 text-sm md:text-lg bg-[#465697] hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl">
          Demo
        </button>
        <button className="text-white py-2 px-4 text-sm md:text-lg bg-[#465697] hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl">
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;


