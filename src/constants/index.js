import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT =  `I am a passionate MERN Stack Developer, certified in Full Stack Web Development (MERN) from 3Ri Technologies, Pune, with expertise in React.js, Next.js, JavaScript, and Tailwind CSS for building responsive, user-friendly interfaces. Skilled in Node.js, Express.js, and MongoDB, I have developed projects like a Job Portal application with Clerk authentication and Cloudinary integration. Having completed my Master of Computer Application (MCA), I bring a strong blend of technical knowledge and practical experience to deliver modern, scalable web solutions.`

export const ABOUT_TEXT = `I am a dedicated and career-driven MERN Stack Developer, certified in Full Stack 
                  Web Development (MERN) from 3Ri Technologies, Pune. With expertise in React.js, Next.js, 
                  JavaScript, and Tailwind CSS, I excel at creating modern, responsive, 
                  and user-friendly front-end experiences. 
                  On the backend, I am skilled in Node.js, Express.js, and MongoDB, enabling me to build 
                  secure, scalable, and high-performance applications.
                  My experience includes developing a Job Portal application that featured role-based 
                  authentication. 
                  I am proficient in tools like Git, GitHub, Postman, Clerk, and Cloudinary, and 
                  experienced in deploying production-ready applications on Vercel and Netlify.
                  Having successfully completed my Master of Computer Application (MCA), I am actively
                   seeking opportunities where I can apply my skills, contribute to real-world projects, 
                   and grow as a full stack developer. With a strong foundation in both front-end design 
                   and backend development, I am committed to delivering solutions that enhance user 
                   experience, support business growth, and showcase my dedication to continuous learning 
                   and professional excellence.`

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Task Managemen App",
    image: project1,
    description:
    "A feature-rich note-taking application with functionalities like CRUD operations, archived and pinned notes, dark mode, speech-to-text, and multi-user support."  
    ,
    technologies: ["HTML", "CSS", "Bootstrap", "Java","Hibernate","Mysql"],
  },
  
  {
    title: "E-Commerce Website",
    image: project2,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },

  

  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },

   {
     title: "Weather App",
    image: project3,
    description:
      "A weather forecasting application that provides real-time weather updates, temperature, and conditions based on user location or city search.",
    technologies: ["Java", "Servlets", "JSP", "Maven", "OpenWeather API", "HTML", "CSS", "JavaScript"]
   },

   {
    title: "Chat Application",
    image: project4,
    description:
      "A real-time web-based chat application with features like user authentication, typing indicators, emoji support, and message differentiation for an interactive experience.",
    technologies: ["HTML", "CSS", "Bootstrap", "JSP", "Servlet", "WebSocket", "Maven"]
},
  {
    title: "Job Portal",
  image: project4, // replace with your actual project image
  description:
    "A full-featured Job Portal web application with role-based access for Recruiters and Job Seekers. Recruiters can post and manage job listings, while users can register, browse jobs, and apply. Integrated Clerk for authentication, Cloudinary for file management, and MongoDB for secure data storage.",
    technologies: ["React.js","Tailwind CSS","JavaScript","Node.js","Express.js","MongoDB",
  ]
  }

];

export const CONTACT = {
  address: "Malegaon Dist-Nashik ",
  phoneNo: "+918482965386",
  email: "satyamsurade06@gmail.com",
};
