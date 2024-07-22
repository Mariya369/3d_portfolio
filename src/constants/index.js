import {
  mobile,
  frontend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  weather,
 portphotofolio,
  reactapp,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "pricing-plans",
    title: "Pricing Plans",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    description: "Building responsive and dynamic web applications.",
    icon: web,
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and engaging user interfaces.",
    icon: mobile,
  },
  {
    title: "FrontEnd Development",
    description: "Developing modern and interactive frontend experiences.",
    icon: frontend,
  },
  {
    title: "3D Animation",
    description: "Creating captivating 3D animations for your projects.",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "Weather App",
    description:
      "A Weather App designed with HTML, CSS, and JavaScript offers users a seamless experience to check current weather conditions, forecasts, and more. This web-based platform provides real-time weather updates for locations worldwide, empowering users to plan their activities and travels efficiently.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "yellow-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Mariya369/my-awasome-project",
    web_link: "https://amazing-profiterole-7c9198.netlify.app/",
  },
  {
    name: "Another Weather App",
    description:
      "Web application that allows users to search for current weather conditions in any location, view detailed forecasts, and receive real-time updates on temperature, humidity, and wind speed. Built with React JS, this app provides an intuitive and responsive user interface, ensuring a seamless experience across all devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: reactapp,
    source_code_link: "https://github.com/Mariya369/weather-react-app/",
    web_link: "https://playful-stardust-2b8888.netlify.app//",
  },
  {
    name: "PortPhotoFolio",
    description:
    'A stunning Portfolio Photo website designed to showcase the works of photographers and artists. This website allows users to browse through high-quality photo galleries, view detailed information about each piece, and contact the artist directly for commissions or inquiries. It offers a seamless and engaging user experience, with a focus on aesthetics and usability.',
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: portphotofolio,
    source_code_link: "https://github.com/Mariya369/Photo-Gallery/",
    web_link: "https://peaceful-conkies-e790ad.netlify.app/",
  },
];
 const pricingPackages = [
  {
    title: "Basic Package",
    description: "A starter package perfect for small businesses and personal projects.",
    features: [
      { name: "Responsive Web Design", color: "text-blue-500" },
      { name: "Basic SEO", color: "text-green-500" },
      { name: "5 Pages", color: "text-red-500" },
      { name: "1 Revision", color: "text-yellow-500" },
    ],
    price: "€",
  },
  {
    title: "Standard Package",
    description: "An ideal package for growing businesses and entrepreneurs.",
    features: [
      { name: "Responsive Web Design", color: "text-blue-500" },
      { name: "Advanced SEO", color: "text-green-500" },
      { name: "10 Pages", color: "text-red-500" },
      { name: "3 Revisions", color: "text-yellow-500" },
      { name: "Basic 3D Animations", color: "text-purple-500" },
    ],
    price: "€",
  },
  {
    title: "Premium Package",
    description: "A comprehensive package for established businesses looking to stand out.",
    features: [
      { name: "Responsive Web Design", color: "text-blue-500" },
      { name: "Premium SEO", color: "text-green-500" },
      { name: "Unlimited Pages", color: "text-red-500" },
      { name: "Unlimited Revisions", color: "text-yellow-500" },
      { name: "Advanced 3D Animations", color: "text-purple-500" },
      { name: "Dedicated Support", color: "text-orange-500" },
    ],
    price: "€",
  },
];


export { services, technologies, projects, pricingPackages };
export const socialLinks = {
  github: "https://github.com/Mariya369",
  linkedin: "https://www.linkedin.com/in/mariya-dotkova/",
  instagram: "https://www.instagram.com/mariya_reactjs.dev/",
  facebook: "https://www.facebook.com/people/Mariya-Dotkova/100092702261936/",
  google: "https://www.google.com/maps/place/Mariya-Web+Developer/@36.4694602,-5.0321355,17z/data=!3m1!4b1!4m6!3m5!1s0xd732be302804cbb:0xf4d9dc202ca8c41c!8m2!3d36.4694602!4d-5.0321355!16s%2Fg%2F11y66h71sj?entry=ttu ",
  behance: "https://www.behance.net/mariyadotkova",
};
