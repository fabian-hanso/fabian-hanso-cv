"use client";

import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="relative bg-white min-h-screen flex items-center justify-center py-32 md:py-0">
      <div>
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row-reverse md:gap-y-0 gap-8 md:px-8">
        <div className="md:col-span-6 md:px-0 xl:col-span-6 flex-1 px-20 lg:px-0">
            <img
              className="aspect-[3/3] w-full object-cover lg:rounded-3xl rounded-full"
              src="./FH_2.jpg"
              alt=""
            />
          </div>
          <div className="px-6 lg:px-0 flex items-center flex-1 text-center lg:text-left">
            <div className="">
              <TypeAnimation
                sequence={[
                  "I'm a ",
                  1000,
                  "I'm a software \ndeveloper",
                ]}
                style={{ whiteSpace: "pre-line" }}
                wrapper="span"
                speed={50}
                className="lg:mt-0 text-4xl font-bold text-gray-900 sm:mt-10 sm:text-6xl"
                repeat={0}
                preRenderFirstString={true}
              />
              <p className="mt-6 text-lg leading-8 text-gray-600">
                On this page I will introduce myself to you with all my
                expertise, skills and interests. You will find my social links a
                bit more downwards.
              </p>
              <div className="mt-6 flex items-center gap-x-6 justify-center lg:justify-start">
                <a
                  href="#work-experience"
                  className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-fourth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Learn more about me
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
