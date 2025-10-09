interface Language {
  name: string;
  level: string;
  description: string;
  show: boolean;
}

const languages: Language[] = [
  {
    name: "English",
    level: "Native",
    description: "I speak and write fluently",
    show: true,
  },
];

export default languages;
