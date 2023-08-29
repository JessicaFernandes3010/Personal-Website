import portfolioImg01 from "../images/portfolio-01.jpg";
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/portfolio-03.jpg";


const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Web design",
    title: "Personal Website",
    description:
      "A personal portfolio to describe more about myself and my projects.",
    technologies: ["React", "Tailwind css"],
    siteUrl: "https://github.com/JessicaFernandes3010/Personal-Website",
  },
  
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "Ux",
    title: "Farm Management System",
    description:
      "A system to manage all the information related to farming.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    siteUrl: "https://github.com/JessicaFernandes3010/Farm-Management-System",
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "Web design",
    title: "Women Safety App",
    description:
      "An app that ensures the safety of women by sending the location to trustee when in trouble.",
    technologies: ["Java","Android Studio"],
    siteUrl: "#",
  },
  
];

export default portfolios;
