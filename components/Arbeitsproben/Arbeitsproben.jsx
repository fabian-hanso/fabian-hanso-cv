import Arbeitsprobe from "./Arbeitsprobe/Arbeitsprobe";

const workSamples = [
  {
    headline: "Revice Media Website",
    grade: "1,9",
    location: "Koblenz",
    company: "Web development & design",
    dates: {
      startDate: "Jul. 2018",
      endDate: "Jul. 2021",
    },
    technologies: [
      "Adobe Creative Cloud",
      "JavaScript",
      "PHP",
      "SQL",
      "MySQL",
      "CSS",
      "Frontend Development",
    ],
    description:
      "I work as a software developer primarily focused on crafting and implementing Micro-Frontends. Our project operates in agile sprints, allowing us to frequently deploy new features. Presently, I'm involved in a team handling a significant automotive manufacturer's project.",
  },
  {
    headline: "Berufsbildende Schule Westerburg",
    grade: "2,8",
    location: "Westerburg",
    company: "HSC Business & IT",
    dates: {
      startDate: "Aug. 2014",
      endDate: "Jul. 2017",
    },
    technologies: [
      "PHP",
      "CSS",
      "HTML",
      "JavaScript",
      "Social Business",
      "Commerce",
      "Finance",
    ],
    description:
      "I work as a software developer primarily focused on crafting and implementing Micro-Frontends. Our project operates in agile sprints, allowing us to frequently deploy new features. Presently, I'm involved in a team handling a significant automotive manufacturer's project.",
  },
  {
    headline: "Julius-Wegeler-Realschule",
    grade: "2,4",
    location: "Wirges",
    company: "Secondary School Diploma",
    dates: {
      startDate: "Aug. 2021",
      endDate: "Nov. 2021",
    },
    technologies: ["Math", "English", "Science", "IT"],
    description:
      "I work as a software developer primarily focused on crafting and implementing Micro-Frontends. Our project operates in agile sprints, allowing us to frequently deploy new features. Presently, I'm involved in a team handling a significant automotive manufacturer's project.",
  },
];

export default function Arbeitsproben() {
  return (
    <section id="degrees" className="relative bg-white pb-64 md:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          👨‍💻 - Work Samples
        </h2>
        <div className="pt-8 flex flex-col gap-24">
          {workSamples.map((schule) => (
            <Arbeitsprobe key={schule.headline} job={schule} />
          ))}
        </div>
      </div>
    </section>
  );
}
