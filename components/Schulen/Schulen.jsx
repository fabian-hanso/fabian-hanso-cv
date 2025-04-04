import Schule from "./Schule/Schule";

const alleSchulen = [
  {
    headline: "Julius-Wegeler-Schule",
    grade: "1,9",
    location: "Koblenz",
    company: "Media Designer",
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
  },
  {
    headline: "Theodor-Heuss-Realschule",
    grade: "2,4",
    location: "Wirges",
    company: "Secondary School Diploma",
    dates: {
      startDate: "Aug. 2021",
      endDate: "Nov. 2021",
    },
    technologies: ["Math", "English", "Science", "IT"],
  },
];

export default function Schulen() {
  return (
    <section id="degrees" className="relative bg-white pb-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          🎓 - Degrees
        </h2>
        <div className="pt-8 flex flex-col gap-24">
          {alleSchulen.map((schule) => (
            <Schule key={schule.headline} job={schule} />
          ))}
        </div>
      </div>
    </section>
  );
}
