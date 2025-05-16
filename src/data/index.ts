import Mytheresa from "../assets/mytheresa.png";
import Hubspot from "../assets/Hubspot.png";
import Basket from "../assets/Basket.png";
import RecipeBook from "../assets/RecipeBook.png";
import NotesApp from "../assets/NotesApp.png";

interface Navlinks {
  id: number;
  title: string;
  s_id: string;
}

export const nav_links: Navlinks[] = [
  { id: 1, title: "About Me", s_id: "#about" },
  { id: 2, title: "Skills", s_id: "#skills" },
  // { id: 3, title: "Projects", s_id: "#projects" },
  { id: 3, title: "Contact Me", s_id: "#contact" },
];

interface Project {
  id: number;
  title: string;
  desc: string;
  tech: string;
  github: string;
  website: string;
  icon: string;
}

export const projects_data: Project[] = [
  {
    id: 1,
    title: "Notes App",
    desc: "NotesApp is a note making website, Where a user can Read, Write, Edit & Delete and manage notes online.",
    tech: "React | Redux | NodeJs | | MongoDB | ExpressJs | Chakra-UI",
    github: "https://github.com/RohitSinghChauhan/NotesApp",
    website: "https://gleeful-centaur-a09809.netlify.app/",
    icon: NotesApp,
  },
  {
    id: 2,
    title: "Mytheresa",
    desc: "Made a clone of the famous luxury fashion and designer shopping e-commerce website.",
    tech: "React | Node Js | MongoDB | ExpressJs | Chakra-UI",
    github: "https://github.com/RohitSinghChauhan/Mytheresa-Clone",
    website: "https://mytheresa-clone-zeta.vercel.app/",
    icon: Mytheresa,
  },
  {
    id: 3,
    title: "Hubspot",
    desc: "HubSpot is a Cloud-Based CRM, HubSpot is a Software platform which is designed to help company market and sell more effectively.",
    tech: "React | NodeJs | Express Js | MongoDB",
    github: "https://github.com/RohitSinghChauhan/HubSpot.com-Clone",
    website: "https://hubspot-alpha.vercel.app/",
    icon: Hubspot,
  },
  {
    id: 4,
    title: "Online Recipe Book",
    desc: "Recipe book is a handy online recipe catalogue, with famous international recipes.",
    tech: "React | Redux | NodeJs | | MongoDB | ExpressJs | Chakra-UI",
    github: "https://github.com/RohitSinghChauhan/RecipeBook-App",
    website: "https://recipe-book-mauve.vercel.app/",
    icon: RecipeBook,
  },
  {
    id: 5,
    title: "Nature's Basket",
    desc: "Nature’s Basket is India’s pioneering food destination present through physical retail stores, online portal and a mobile application.",
    tech: "HTML | CSS | JavaScript | DOM",
    github: "https://github.com/Mufadal03/Nature-sBasket-Clone",
    website: "https://nature-sbasket.netlify.app/",
    icon: Basket,
  },
];

interface Socials {
  id: number;
  path: string;
  url: string;
}

export const social_links: Socials[] = [
  {
    id: 1,
    path: "linkedin",
    url: "www.linkedin.com/in/rohit-singh-786b51193/",
  },
  {
    id: 2,
    path: "github",
    url: "www.github.com/RohitSinghChauhan",
  },
];
