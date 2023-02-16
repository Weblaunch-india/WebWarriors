import React from "react";
import heroImage from "../images/hero.jpg";

export default function Body() {
  return (
    <div className="hero">
      <div className="text-center pt-10">
        <div className="content">
          <h1 className="text-7xl bg-gradient-to-r from-emerald-400 p-2 to-cyan-400 bg-clip-text text-transparent">
            Your agriculture assistant.
          </h1>
        </div>
        <p className="hero-subtext text-white px-[30%] pt-4 text-2xl opacity-75">
          Manage the plantation in your farm land by determining the suitable
          weather for every crop. Put a full stop to dying plants by turining up
          to TechAgro<span className="dot">.</span>
        </p>
      </div>
      <div className="max-w-[50%] pt-8 block mx-auto">
        <img
          src={heroImage}
          className="rounded-2xl shadow-xl shadow-white/40"
          alt="vector-farming"
        />
      </div>
    </div>
  );
}
