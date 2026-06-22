// screenshots (temporary) - add your actual images later
import taskManagerThumb from "../assets/projects/task-manager/task-manager-1.png";
import taskManager1 from "../assets/projects/task-manager/task-manager-2.png";
import taskManager2 from "../assets/projects/task-manager/task-manager-3.png";
import taskManager3 from "../assets/projects/task-manager/task-manager-4.png";
import ecommerceThumb from "../assets/projects/ecommerce/ecommerce-1.png";
import ecommerce2 from "../assets/projects/ecommerce/ecommerce-2.png";
import ecommerce3 from "../assets/projects/ecommerce/ecommerce-3.png";
import ecommerce4 from "../assets/projects/ecommerce/ecommerce-4.png";
import transactionThumb from "../assets/projects/transaction-tracker/transaction-1.png";
import employeeThumb from "../assets/projects/employee-guidance/employee-1.png";
import elitoraThumb from "../assets/projects/elitora/elitora-1.png";
import multiTenantThumb from "../assets/projects/multi-tenant/multi-tenant-1.png";
import portfolio1 from "../assets/projects/os-portfolio/portfolio-1.png";
import portfolio2 from "../assets/projects/os-portfolio/portfolio-2.png";
import portfolio3 from "../assets/projects/os-portfolio/portfolio-3.png";
import portfolio4 from "../assets/projects/os-portfolio/portfolio-4.png";

export const projects = [
  {
    id: "os-portfolio",
  
    title: "OS Portfolio",
  
    thumbnail: portfolio1,
  
    screenshots: [
      portfolio1,
      portfolio2,
      portfolio3,
      portfolio4,
    ],
  
    shortDescription:
      "Interactive portfolio website inspired by a desktop operating system experience.",
  
    fullDescription:
      "A unique portfolio application designed to simulate a real desktop and mobile operating system. Users can explore projects, resume, skills, experience, and contact information through an interactive UI. The application features responsive layouts for desktop and mobile devices, project galleries, resume viewer, smooth animations, and custom navigation patterns inspired by modern operating systems.",
  
    tech: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],
  
    features: [
      "Desktop OS inspired interface",
      "Mobile OS experience",
      "Project gallery with screenshots",
      "Interactive window management",
      "Responsive design",
      "Resume viewer and download",
      "Contact form integration",
      "Smooth animations with Framer Motion",
    ],
  
    github:
      "https://github.com/Sudharsan-3/OS-Portfolio",
  
    demo:
      "https://os-portfolio-seven-wheat.vercel.app/",
  },
  {
    id: "task-management",

    title: "Task Management App",

    thumbnail: taskManagerThumb,

    screenshots: [taskManagerThumb,taskManager1,taskManager2,taskManager3],

    shortDescription:
      "Full stack task management application with role based access for admin and users.",

    fullDescription:
      "A complete task management system where admins can create, assign, update and track tasks. Users can view their assigned tasks and update status. Built with centralized error handling and forgot password functionality via email.",

    tech: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
    ],

    features: [
      "User authentication",
      "Role based access",
      "Task CRUD",
      "Task assignment",
      "Status tracking",
      "Forgot password via email",
      "Centralized error handling",
    ],

    github: "https://github.com/Sudharsan-3/Task-Management.git",
    demo: "",
  },

  {
    id: "ecommerce-app",

    title: "E-Commerce App",

    thumbnail: ecommerceThumb,

    screenshots: [ecommerceThumb,ecommerce2,ecommerce3,ecommerce4],

    shortDescription:
      "Fully functional e-commerce app with cart, orders and real time inventory management.",

    fullDescription:
      "An e-commerce application where users can browse products, add to cart and place orders. The backend automatically reduces stock count after every order placed — for example ordering 2 out of 5 shoes updates the stock to 3 in real time.",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "CSS",
    ],

    features: [
      "Product listing",
      "Add to cart",
      "Order placement",
      "Real time inventory update",
      "Stock management",
    ],

    github: "https://github.com/Sudharsan-3/e-ecommerce.git",
    demo: "",
  },

  {
    id: "transaction-tracker",

    title: "Transaction Tracker",

    thumbnail: transactionThumb,

    screenshots: [transactionThumb],

    shortDescription:
      "Internal web app to manage and track bank transactions with CSV upload and export.",

    fullDescription:
      "An internal business tool for managing bank transactions. Users can add bank details, upload CSV or XLS files to feed transaction data into the database, filter by credited or debited transactions and export data as a ZIP file containing transaction records and screenshots.",

    tech: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],

    features: [
      "Bank account management",
      "CSV and XLS file upload",
      "Transaction filters",
      "Date range export",
      "ZIP export with screenshots",
    ],

    github: "",
    demo: "",
  },

  {
    id: "employee-guidance-app",

    title: "Employee Guidance App",

    thumbnail: employeeThumb,

    screenshots: [employeeThumb],

    shortDescription:
      "Frontend onboarding app to guide new employees through Android and iOS system setup.",

    fullDescription:
      "A frontend web application built to help new employees set up their work systems. Converted design mockups and Word documents into a fully functional responsive UI supporting both Android and iOS device setup flows with smooth step by step navigation.",

    tech: [
      "React",
      "Tailwind CSS",
      "AWS S3",
    ],

    features: [
      "Step by step onboarding flow",
      "Android and iOS setup guide",
      "Responsive design",
      "AWS S3 for assets",
      "Converted from design mockups",
    ],

    github: "",
    demo: "",
  },

  {
    id: "elitora",

    title: "Elitora — E-Commerce Platform",

    thumbnail: elitoraThumb,

    screenshots: [elitoraThumb],

    shortDescription:
      "Backend development for a large scale online shopping platform.",

    fullDescription:
      "Contributed to the backend of Elitora, a large scale e-commerce platform. Worked within a structured codebase handling assigned feature modules including user authentication, admin product management and data fetching APIs.",

    tech: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "TypeORM",
    ],

    features: [
      "User authentication",
      "Admin product management",
      "Data fetching APIs",
      "Structured backend architecture",
    ],

    github: "",
    demo: "",
  },

  {
    id: "multi-tenant-task-management",

    title: "Multi-Tenant Task Management App",

    thumbnail: multiTenantThumb,

    screenshots: [multiTenantThumb],

    shortDescription:
      "Backend of a multi tenant task management system with tenant isolation and role based access.",

    fullDescription:
      "Worked on the backend of a multi tenant task management system where multiple organizations can use the same platform with isolated data. Handled tenant based data isolation, role based access control and task management APIs.",

    tech: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],

    features: [
      "Multi tenant architecture",
      "Tenant data isolation",
      "Role based access control",
      "Task management APIs",
    ],

    github: "",
    demo: "",
  },
];