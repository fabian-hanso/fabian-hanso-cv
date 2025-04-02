import Arbeitsprobe from "./Arbeitsprobe/Arbeitsprobe";

const workSamples = [
  {
    headline: "Fitness App (Private)",
    grade: "1,9",
    image: "/SquadStride.jpg",
    location: "Koblenz",
    company: "iOS Development & Design",
    dates: {
      startDate: "Jul. 2018",
      endDate: "Jul. 2021",
    },
    technologies: [
      "Swift",
      "SwiftUI",
      "MapKit",
      "HealthKit",
      "Firebase",
      "Figma",
    ],
    description:
      "I work as a software developer primarily focused on crafting and implementing Micro-Frontends. Our project operates in agile sprints, allowing us to frequently deploy new features. Presently, I'm involved in a team handling a significant automotive manufacturer's project.",
  },
  {
    headline: "Bauhaus UI",
    grade: "2,8",
    image: "/BUI.jpg",
    location: "Westerburg",
    company: "Web Development & Design",
    dates: {
      startDate: "Aug. 2014",
      endDate: "Jul. 2017",
    },
    technologies: [
      "React",
      "TailwindCSS",
      "Framer Motion",
      "Figma",
    ],
    description:
      "I work as a software developer primarily focused on crafting and implementing Micro-Frontends. Our project operates in agile sprints, allowing us to frequently deploy new features. Presently, I'm involved in a team handling a significant automotive manufacturer's project.",
  },
  {
    headline: "SquadStride",
    grade: "2,4",
    image: "/SquadStride.jpg",
    location: "Wirges",
    company: "Web Development",
    dates: {
      startDate: "Aug. 2021",
      endDate: "Nov. 2021",
    },
    technologies: ["Next", "Tailwind", "Express", "MongoDB", "TypeScript"],
    description:
      "I work as a software developer primarily focused on crafting and implementing Micro-Frontends. Our project operates in agile sprints, allowing us to frequently deploy new features. Presently, I'm involved in a team handling a significant automotive manufacturer's project.",
  },
];

export default function Arbeitsproben() {
  return (
    <section id="degrees" className="relative bg-white pb-64">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          👨‍💻 - Work Samples
        </h2>
        <div className="pt-8 grid grid-cols-3 gap-8">
          {workSamples.map((schule) => (
            <Arbeitsprobe key={schule.headline} job={schule} />
          ))}
        </div>
      </div>
    </section>
  );
}
