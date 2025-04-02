import React from "react";
import { motion } from "motion/react"

function Arbeitsprobe({ job }) {
  return (
    <motion.div
      key={job.headline}
      className="flex flex-col rounded-2xl overflow-hidden border border-secondary"
      initial={{ x: 500, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: .8, ease: "easeInOut"}}
      viewport={{once: true}}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={job.image}
          alt=""
          className="inset-0 h-full w-full bg-gray-50 object-cover"
        />
        <div className="absolute inset-0" />
      </div>

      <div className="lg:border-none p-4">
        <div className="flex items-center gap-x-4">
          <div className="text-primary text-m font-bold pb-2">
            <div>{job.company}</div>
          </div>
        </div>
        <div className="group relative max-w-full">
          <h3 className="text-third text-2xl font-bold pb-4">{job.headline}</h3>
          <div className="flex gap-2 flex-wrap">
            {job.technologies.map((tech) => (
              <div
                key={tech}
                className="bg-primary/5 inline px-4 py-2 rounded-lg text-sm text-primary"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Arbeitsprobe;
