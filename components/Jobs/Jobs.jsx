import Job from "./Job/Job";

const allJobs = [
  {
    headline: "Product Engineer (Web Developer)",
    type: "Remote",
    location: "Frankfurt am Main",
    company: "Accenture Song",
    dates: {
      startDate: "Jan. 2022",
      endDate: "Today",
    },
    technologies: [
      "React.js",
      "Vue.js",
      "Flutter",
      "TypeScript",
      "JavaScript",
      "GraphQL",
      "Node.js",
      "(S)CSS",
      "Git",
      "AWS",
      "AEM",
      "Contentful",
      "Styled Components",
    ],
    description: [
      "multiple agile projects for automotive manufacturers",
      "building scalable, high performance micro frontends including middleware",
      "continuous integration and delivery of new featuresures",
      "mentoring junior developers",
    ]
  },
  {
    headline: "Upskilling program",
    type: "Remote",
    location: "Hamburg",
    company: "neuefische GmbH",
    dates: {
      startDate: "Aug. 2021",
      endDate: "Nov. 2021",
    },
    technologies: [
      "React.js",
      "Vue.js",
      "Firebase",
      "WebSockets",
      "TypeScript",
      "JavaScript",
      "GraphQL",
      "Node.js",
      "(S)CSS",
      "Git",
      "MongoDB",
      "Express.js",
      "Vercel"
    ],
    description: [
      "intense three-month upskilling program to focus on interesting and over the edge topics",
      "improved my problem-solving skills and enhanced my ability to design scalable and efficient web applications"
    ]
  },
  {
    headline: "Frontend Developer",
    type: "Hybrid",
    location: "Montabaur",
    company: "Chamaeleon AG & Magmapool AG",
    dates: {
      startDate: "Aug. 2021",
      endDate: "Nov. 2021",
    },
    technologies: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "(S)CSS",
      "Git",
      "Azure",
      "AdobeCC",
    ],
    description: [
      "apprenticeship as a media designer for three years",
      "design, creation and maintenance of client e-commerce shops",
      "design of digital and print media",
      "project management and client communication"
    ]
  },
];

export default function Jobs() {
  return (
    <section id="work-experience" className="relative bg-white md:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          💻 - Work Experience
        </h2>
        <div className="pt-8 flex flex-col gap-24">
          {allJobs.map((job, index) => (
            <Job key={job.headline} job={job} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
}
