import {
  mobile,
  backend,
  creator,
  web,
  carrent,
  jobit,
  tripguide,
  backendTech,
  frontend,
  database,
  tools,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Self-taught developer",
    icon: creator,
  },
];

const technologies = [
  {
    title: "Fronted",
    icon: backendTech,
    iconBg: "#383E56",
    points: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "SASS",
    ],
  },
  {
    title: "Backend",
    icon: frontend,
    iconBg: "#383E56",
    points: ["Node JS", "Express.js"],
  },
  {
    title: "Databases",
    icon: database,
    iconBg: "#383E56",
    points: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools",
    icon: tools,
    iconBg: "#383E56",
    points: ["Git", "Postman", "POO With Java and c++"],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, projects };
