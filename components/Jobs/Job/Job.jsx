import React from "react";

function Job({ job }) {
  return (
    <div
      key={job.headline}
      className="flex flex-col lg:grid lg:grid-cols-12 gap-x-8 gap-y-4"
    >
      <div className="text-fourth text-lg font-semibold lg:col-span-3">
        {job.dates.startDate + " - " + job.dates.endDate}
      </div>
      <div className="lg:col-span-9 border-l-2 border-dotted border-gray-300 pl-4 lg:border-none lg:pl-0">
        <h3 className="text-third text-2xl font-bold pb-4">{job.headline}</h3>
        <div className="text-primary text-m font-bold pb-4 flex gap-4">
          <div>🏢</div>
          <div>{job.company}</div>
        </div>
        <div className="text-primary text-m font-bold pb-4 flex gap-4">
          <div>🌍</div>
          <div className="text-third">{job.location + " - " + job.type}</div>
        </div>
        <p className="text-third text-m lg:text-lg pb-4">{job.description}</p>
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
  );
}

export default Job;
