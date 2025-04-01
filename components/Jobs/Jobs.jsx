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
      "Diverse agile Projekte - überwiegend für Automobilhersteller",
      "Skalier- & erweiterbare Micro Frontends (High Performance)",
      "Kontinuierliche Entwicklung und Integration neuer Features",
      "Einarbeitung neuer Kollegen, sowie Mentoring",
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
    ],
    description: [
      "Diverse agile Projekte - überwiegend für Automobilhersteller",
      "Skalier- & erweiterbare Micro Frontends (High Performance)",
      "Kontinuierliche Entwicklung und Integration neuer Features",
      "Einarbeitung neuer Kollegen, sowie Mentoring",
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
    ],
    description: [
      "Diverse agile Projekte - überwiegend für Automobilhersteller",
      "Skalier- & erweiterbare Micro Frontends (High Performance)",
      "Kontinuierliche Entwicklung und Integration neuer Features",
      "Einarbeitung neuer Kollegen, sowie Mentoring",
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
