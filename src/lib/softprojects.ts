import { skip } from "node:test";

const projects = [
  {
    id: "workplace-project",
    imageSrc: "/imcs.png",
    title: "Workplace Project - Web Development",
    skills: "NextJs, TailwindCSS, Typescript, Prisma, TRPC, Figma ",
    description:
      "Client Project - creating a toolkit for clients to service more customers. (This is a deprecated prototype)",
    date: "Current",
    alignment: "normal",
  },
  {
    id: "Design System Project",
    imageSrc: "/designsystem.jpg",
    title: "Design System / Component Library",
    skills: "Reactjs, Figma, TSUP, TailwindCSS, TypeScript, NPM",
    description:
      "Worked together with a team to create a component library and design system for future peers.",
    date: "April 2024",
    alignment: "reverse",
  },
  {
    id: "Android Development Studio",
    imageSrc: "/ande.jpg",
    title: "Android Development Studio",
    skills: "Java, Android Development Studio, XML, Adobe XD",
    description:
      "Creating an application that can be used on an Android device, using Java and XML. The application must be able to handle user input, display information, and be visually appealing. ",
    date: "Feb 2023",
    alignment: "normal",
  },
  {
    id: "Java Development",
    imageSrc: "/jad.gif",
    title: "Java Web Development",
    skills: "Java, HTML/CSS, JSP",
    description:
      "The project was to simulate a bookstore, create a database, and connect it to a site mainly using JSP and Java. The site has to be fully functional, able to handle server-side requests and display them using JSP. ",
    date: "Aug 2023",
    alignment: "reverse",
  },
  {
    id: "Full Stack Development",
    imageSrc: "/ades.gif",
    title: "Full Stack Web Development - VOEK",
    skills: "React, TypeScript, Javascript, HTML/CSS, Tailwind, MySQL, REST",
    description:
      "The project involved creating a visually appealing e-commerce website that supports all CRUD operations. This included fetching products from a database, enabling users to edit their profiles, search for items, add products to the cart, and make purchases. Additionally, we designed a database tailored to the website's needs.",
    date: "Aug 2023",
    alignment: "normal",
  },
  {
    id: "Design for User Interaction",
    imageSrc: "/deui.jpg",
    title: "Prototyping and Usability Research Project",
    skills: "Adobe XD, Figma, User Interviews, Usability Testing, Wireframing",
    description:
      "Create a prototype of a mobile application for an original Idea, on Figma/Adobe XD, ensuring the application covers all user experience criterias, as well multiple functions that can carry out the application's purpose.",
    date: "December 2022",
    alignment: "reverse",
  },
  {
    id: "front-end-development",
    imageSrc: "/fed.gif",
    title: "Front-End Development",
    skills: "HTML/CSS, Javascript, Figma",
    description:
      "First time I was tasked to use HTML/CSS, JS and Wireframing on Figma to design my very own website.",
    date: "April 2022",
    alignment: "normal",
  },
];

export default projects;
