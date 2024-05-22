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
    description:
      "I work as a software developer primarily focused on crafting and implementing Micro-Frontends. Our project operates in agile sprints, allowing us to frequently deploy new features. Presently, I'm involved in a team handling a significant automotive manufacturer's project. Prior to this, I've contributed to two other projects within the automotive sector. Alongside my primary role with Micro-Frontends, I also undertake minor backend tasks, particularly in the realm of BFF (Backend for Frontend), as well as work in AEM (Adobe Experience Manager) and AWS (Amazon Web Services). It's a diverse range of responsibilities, enabling me to leverage and enhance my skills across various domains.",
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
      "JavaSceipt",
      "Social Business",
      "Commerce",
      "Finance",
    ],
    description:
      "At Revice Media, we've established our presence to aid small and medium-sized enterprises in their inception and growth. As a Lead Software Developer, my primary responsibility revolves around spearheading the Full-Stack software development of websites and native applications (IOS with Swift). I strategize and engineer scalable, extensible software solutions using cutting-edge technologies exclusively. I eschew outdated methodologies and frameworks, preferring to remain at the forefront of technological advancements. Additionally, I oversee social media accounts, fostering their organic growth.",
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
      "At Revice Media, we've established our presence to aid small and medium-sized enterprises in their inception and growth. As a Lead Software Developer, my primary responsibility revolves around spearheading the Full-Stack software development of websites and native applications (IOS with Swift). I strategize and engineer scalable, extensible software solutions using cutting-edge technologies exclusively. I eschew outdated methodologies and frameworks, preferring to remain at the forefront of technological advancements. Additionally, I oversee social media accounts, fostering their organic growth.",
  },
];

export default function Schulen() {
  return (
    <section id="degrees" className="relative bg-white pb-64 md:pt-32">
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
