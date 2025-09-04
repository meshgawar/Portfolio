import Work1 from "../../assets/ChatApp.png";
import Work2 from "../../assets/Weather-App.png";
import Work3 from "../../assets/portfolio.png";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "QuickChat (in progress)",
    link: "#",
    description: "A real time chat application creating using MERN stack and socket.io.",
    category: "Full-Stack",
  },
  {
    id: 2,
    image: Work2,
    title: "Weather App",
    link: "https://sky-now-weather.vercel.app/",
    description: "React-based weather app with real-time weather, AQI data, live location tracking, and voice search.",
    category: "Frontend",
  },
  {
    id: 3,
    image: Work3,
    title: "Personal Portfolio",
    link: "https://meshgawar.netlify.app/",
    description: "Created Personal Porfolio website using React.js and material UI",
    category: "Frontend",
  },
];

export const projectsNav = [
    {
        name: 'all'
    },
    {
        name: 'Full-Stack'
    },
    {
        name: 'Frontend'
    },
];