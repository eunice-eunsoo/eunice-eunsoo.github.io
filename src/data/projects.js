import newsLensGif from "../assets/newslens.gif";
import dailyPoll from "../assets/dailypoll.png";
import stops from "../assets/traffic stops 0814.webp";

export const featuredProjects = [
  {
    id: "featured-01",
    title: "Local News Lens",
    description:
      "A short placeholder summary explaining the project, its central idea, and the outcome of the work.",
    categories: ["Placeholder category"],
    role: "Placeholder role",
    tools: ["Tool one", "Tool two", "Skill three"],
    image: newsLensGif,
    imageAlt: "Animated preview of the local news lens",
    featured: true,
    projectNumber: "01",
    link: "https://localnewslens.shinyapps.io/knight_lab/",
  },
  {
    id: "featured-02",
    title: "The Daily Northwestern Fall 2025 poll",
    description:
      "Placeholder copy for a concise project overview. Replace this with the real problem, approach, and impact.",
    categories: ["Placeholder category"],
    role: "Placeholder role",
    tools: ["Tool one", "Tool two"],
    image: dailyPoll,
    featured: true,
    projectNumber: "02",
    link: "#",
  },
  {
    id: "featured-03",
    title: "Third Project Title",
    description:
      "A reserved space for the story behind another selected piece of work and what you contributed to it.",
    categories: ["Placeholder category"],
    role: "Placeholder role",
    tools: ["Tool one", "Skill two", "Skill three"],
    image: null,
    featured: true,
    projectNumber: "03",
    link: "#",
  },
];

export const archiveProjects = [
  {
    id: "archive-01",
    title:
      "Chicago police traffic stops plunge, again, but Black and Latino drivers still get pulled over far more",
    description: "One sentence of placeholder context for this piece of work.",
    categories: ["tools", "data"],
    tools: ["Tool", "Data"],
    image: stops,
    link: "https://chicago.suntimes.com/the-watchdogs/2026/08/14/traffic-stops-racial-disparities-chicago-police-department-illinois-department-transportation-driving-while-black",
  },
  {
    id: "archive-02",
    title: "Archive Project Two",
    description:
      "A short placeholder description for a print or editorial project.",
    categories: ["print"],
    tools: ["Print", "Editing"],
    image: null,
    link: "#",
  },
  {
    id: "archive-03",
    title: "Archive Project Three",
    description: "A short placeholder description for a video-based project.",
    categories: ["video"],
    tools: ["Video", "Production"],
    image: null,
    link: "#",
  },
  {
    id: "archive-04",
    title: "Archive Project Four",
    description: "A short placeholder description for a photo-based project.",
    categories: ["photo"],
    tools: ["Photo", "Direction"],
    image: null,
    link: "#",
  },
  {
    id: "archive-05",
    title: "Archive Project Five",
    description: "One sentence reserved for a data story or interactive piece.",
    categories: ["data", "tools"],
    tools: ["Data", "Interactive"],
    image: null,
    link: "#",
  },
  {
    id: "archive-06",
    title: "Archive Project Six",
    description: "A final placeholder for work that crosses multiple formats.",
    categories: ["print", "photo"],
    tools: ["Print", "Photo"],
    image: null,
    link: "#",
  },
];
