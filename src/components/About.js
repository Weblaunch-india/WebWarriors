import Profile from "../images/profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="about" className="hero mt-10">
      <div className="flex my-10 ">
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="150"
          data-aos-offset="0"
          className="wid ml-[10%] block about shadow-lg relative shadow-white/10"
        >
          <div className="py-[5%] px-[5%] ">
            <p
              className="text-white about-text w-fit text-xl shadow-lg shadow-emerald-500/60 rounded-lg py-3 px-5"
              data-aos="fade-down"
            >
              About Us
            </p>
          </div>
          <div className="py-[5%] px-[5%] ">
            <p className="text-slate-300 about-sub leading-7 text-xl font-normal">
              We are on a mission to provide world class intel on the growth
              patterns of various crops from the top most scientists in the
              world. Ever thought of growing crops but did not know the topology
              or geography in which they grow ? Well, worry not, TechAgro comes
              to your rescue.
            </p>
            <p className="text-slate-300 py-7 about-sub leading-7 text-xl font-normal">
              We provide you with various useful details for growing a plethora
              of plants or crops. The details range from the season in which
              they grow to the amount of water they need to grow in a particular
              day.
            </p>
            <p className="text-slate-300 pb-7 about-sub leading-7 text-xl font-normal">
              Now don't think too much about planting crops either in fields or
              in your appartments, especially when your personal crop assistant,
              TechAgro is busy helping your plants grow well. Bye Bye
              traditional books, and welcome the revolution of Artificial
              Intelligence.
            </p>
            <p className="text-2xl font-light mt-10 tilt-text">
              Simple efforts, revolutionary fruits. 💚
            </p>
          </div>

          <div className="absolute insert-x-0 bottom-10 left-10">
            <div className="flex inline" data-aos="fade-right">
              <img
                className="w-[7%] h-[7%] rounded-full shadow-lg shadow-white/40"
                src={Profile}
                alt="Rounded avatar"
              />
              <div className="pl-3  text-white font-normal inline">
                <p className="pb-0.25">Yogesh Bhutkar</p>
                <p>Web Programmer and UI/ UX designer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="font-normal items-center pl-10 ml-10 flex grid grid-rows-3 text-center">
          <div
            className=" my-10 py-5 px-3 h-fit w-full about-1 shadow-lg shadow-emerald-500/70 rounded-lg "
            data-aos="fade-down"
          >
            <p className="text-white font-bold text-2xl">$15 Billion</p>
            <p className="text-white text-xl">
              crops saved through pollination by bees.
            </p>
          </div>
          <div
            className="h-fit w-full py-5 px-3 about-1 shadow-lg shadow-emerald-500/60 rounded-lg "
            data-aos="fade-down"
          >
            <p className="text-white font-bold text-2xl">2.9 Million</p>
            <p className="text-white text-xl">farmers worldwide.</p>
          </div>
          <div
            className="h-fit w-full my-10 py-5 px-3 about-1 shadow-lg shadow-emerald-500/60 rounded-lg "
            data-aos="fade-down"
          >
            <p className="text-white font-bold text-2xl">914 Million</p>
            <p className="text-white text-xl">acres of farmland just in U.S</p>
          </div>
        </div>
      </div>
    </section>
  );
}
