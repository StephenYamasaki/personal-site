interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "OnShape",
    description:
      "I have used OnShape for 3d printing parts.",
    icon: "astro_dark",
  },
  {
    name: "Siemens NX",
    description: "Modeled materials testing apparatus configuration.",
    icon: "nextjs_icon_dark",
  },
  {
    name: "SOLIDWORKS",
    description: "Used for course material, creating components.",
    icon: "nodejs",
  },
  {
    name: "MATLAB",
    description: "Create program to process results in MATLAB for graduate academic research.",
    icon: "matlab",
  },
  {
    name: "TinkerCAD",
    description: "Used to teach accessible 3D modeling to 3rd-8th graders.",
    icon: "tinkercad",
  },
];

export default hardSkills;
