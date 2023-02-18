import React from "react";

import heroImage from "../images/hero.jpg";
import "animate.css";

export default function Home() {
  return (
    <section id="home" className="hero">
      <div className="text-center pt-10">
        <div className="content">
          <h1 className="animate__animated animate__fadeInDown md:text-7xl lg:text-7xl xl:text-7xl text-5xl bg-gradient-to-r from-emerald-400 p-2 to-cyan-400 bg-clip-text text-transparent ">
            Your agriculture assistant.
          </h1>
        </div>
        <p className="animate__animated animate__fadeIn animate__delay-0.5s animate__slower hero-subtext text-slate-400 md:px-[30%] lg:px-[30%] xl:px-[30%] px-7 pt-4 text-2xl opacity-15">
          Manage the plantation in your farm land by determining the suitable
          weather for every crop. Put a full stop to dying plants by turining up
          to TechAgro<span className="dot">.</span>
        </p>
      </div>
      <div className="animate__animated animate__fadeIn animate__slower md:max-w-[50%] lg:max-w-[50%] xl:max-w-[50%] max-w-[85%] pt-8 block mx-auto">
        <img
          src={heroImage}
          className="rounded-2xl shadow-xl shadow-white/40"
          alt="vector-farming"
        />
      </div>
    </section>
  );
}
