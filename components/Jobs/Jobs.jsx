import Job from "./Job/Job";

const allJobs = [
  {
    headline: "Product Engineer",
    type: "Remote",
    location: "Frankfurt am Main",
    company: "Accenture Song",
    dates: {
      startDate: "Jan. 2022",
      endDate: "Today",
    },
    technologies: [
      "React",
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
    description:
      "I work as a software developer primarily focused on crafting and implementing Micro-Frontends. Our project operates in agile sprints, allowing us to frequently deploy new features. Presently, I'm involved in a team handling a significant automotive manufacturer's project. Prior to this, I've contributed to two other projects within the automotive sector. Alongside my primary role with Micro-Frontends, I also undertake minor backend tasks, particularly in the realm of BFF (Backend for Frontend), as well as work in AEM (Adobe Experience Manager) and AWS (Amazon Web Services). It's a diverse range of responsibilities, enabling me to leverage and enhance my skills across various domains.",
  },
  {
    headline: "CTO & Founder",
    type: "Office",
    location: "Ruppach-Goldhausen",
    company: "Revice Media",
    dates: {
      startDate: "Jan. 2021",
      endDate: "Today",
    },
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Vue",
      "Swift",
      "SwiftUI",
      "(S)CSS",
      "Tailwind CSS",
    ],
    description:
      "At Revice Media, we've established our presence to aid small and medium-sized enterprises in their inception and growth. As a Lead Software Developer, my primary responsibility revolves around spearheading the Full-Stack software development of websites and native applications (IOS with Swift). I strategize and engineer scalable, extensible software solutions using cutting-edge technologies exclusively. I eschew outdated methodologies and frameworks, preferring to remain at the forefront of technological advancements. Additionally, I oversee social media accounts, fostering their organic growth.",
  },
  {
    headline: "Trainee Web Development",
    type: "Remote",
    location: "Frankfurt am Main",
    company: "Accenture Song",
    dates: {
      startDate: "Aug. 2021",
      endDate: "Nov. 2021",
    },
    technologies: [
      "React",
      "JavaScript",
      "Firebase",
      "Express.js",
      "MongoDB",
      "(S)CSS",
      "Node.js",
    ],
    description:
      "At Revice Media, we've established our presence to aid small and medium-sized enterprises in their inception and growth. As a Lead Software Developer, my primary responsibility revolves around spearheading the Full-Stack software development of websites and native applications (IOS with Swift). I strategize and engineer scalable, extensible software solutions using cutting-edge technologies exclusively. I eschew outdated methodologies and frameworks, preferring to remain at the forefront of technological advancements. Additionally, I oversee social media accounts, fostering their organic growth.",
  },
];

export default function Jobs() {
  return (
    <div className="relative bg-white pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          💻 - Work Experience
        </h2>
        <div className="pt-8 flex flex-col gap-24">
          {allJobs.map((job) => (
            <Job key={job.headline} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
