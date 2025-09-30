interface Education {
  title: string;
  startDate: string;
  endDate?: string;
  school: string;
  location: string;
  description: string;
  currentUni: boolean;
}

const education: Education[] = [
  {
    title: "Bachelor of Science in Mechanical Engineering",
    startDate: "2020-09-01",
    endDate: "2025-06-30",
    school: "University Name",
    location: "United States",
    description:
      "Developed and maintained web applications using React, NodeJs, and MongoDB.",
    currentUni: false,
  },
  // {
  //     title: "Bachelor of Science in Computer Science",
  //     startDate: "2012-09-01",
  //     endDate: "2013-06-30",
  //     school: "University Name",
  //     location: "United States",
  //     description: "Developed and maintained web applications using React, NodeJs, and MongoDB.",
  //     currentUni: false,
  // },
];

export default education;
