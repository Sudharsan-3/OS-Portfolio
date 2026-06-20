// screenshots (temporary)
import taskManagerThumb from "../assets/projects/task-manager/task-manager-1.png";
import weatherThumb from "../assets/projects/weather-app/weather-1.png";

export const projects = [
  {
    id: "task-management",

    title: "Task Management App",

    thumbnail: taskManagerThumb,

    screenshots: [
      taskManagerThumb,
    ],

    shortDescription:
      "Full-stack task management application with authentication.",

    fullDescription:
      "A complete task management system where admins can create, assign, update, and track tasks. Users can view assigned tasks, update status, and collaborate efficiently.",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],

    features: [
      "Authentication",
      "Role-based access",
      "Task CRUD",
      "Task assignment",
      "Status tracking",
    ],

    github:
      "https://github.com/example/task-management",

    demo:
      "https://example.com/task-management",
  },

  {
    id: "weather-app",

    title: "Weather App",

    thumbnail: weatherThumb,

    screenshots: [
      weatherThumb,
    ],

    shortDescription:
      "Real-time weather application using external APIs.",

    fullDescription:
      "A weather application that fetches live weather data and displays temperature, humidity, wind speed, and conditions based on user location.",

    tech: [
      "React",
      "JavaScript",
      "API",
      "CSS",
    ],

    features: [
      "Current weather",
      "Search by city",
      "Live API integration",
      "Responsive design",
    ],

    github:
      "https://github.com/example/weather",

    demo:
      "https://example.com/weather",
  },
];