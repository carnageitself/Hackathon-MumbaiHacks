import React from "react";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";

const Hero = () => {
  return (
    <div>
      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-2 text-lg leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-600 h-10 w-full flex gap-3 shadow-lg hover:scale-105 hover:shadow-xl">
            <div className="ml-3 flex flex-1">
            Join the Elite Ranks at Mumbai Eng College: Ignite Your Dreams in the City of Opportunities!
            </div>{" "}
            <Link>
              <div className="font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 inline-block text-transparent bg-clip-text">
                <span className="absolute inset-0" aria-hidden="true" />
                Register <span aria-hidden="true">&rarr;</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="text-center flex items-center justify-center flex-col">
          <h1 className="text-2xl tracking-tight sm:text-6xl bg-gradient-to-r from-cyan-300 to-blue-600 inline-block text-transparent bg-clip-text md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-semibold h-56">
            "Unlock Your Potential, Embrace Your Future: Your Journey Starts
            Here!"
          </h1>

          <div className=" flex items-center justify-center gap-x-10">
            <Link>
              <Tilt>
                <div className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shadow-lg relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur-xl opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 w-28 -z-10"></div>
                  Get started
                </div>
              </Tilt>
            </Link>
            <Link to="/aboutus">
              <Tilt>
                <div className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shadow-lg relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur-xl opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 w-28 -z-10"></div>
                  Learn more
                </div>
              </Tilt>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
