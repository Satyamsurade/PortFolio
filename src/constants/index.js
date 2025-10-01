import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
//import cert1 from "/Certificate/cert1.pdf";
//import cert2 from "/Certificate/cert2.pdf";

export const HERO_CONTENT =  `I am a passionate MERN Stack Developer, certified in Full Stack Web Development 
              (MERN) from 3Ri Technologies, Pune, with expertise in React.js, Next.js, JavaScript, and Tailwind
               CSS for building responsive, user-friendly interfaces. Skilled in Node.js, Express.js, and 
               MongoDB, I have developed projects like a Job Portal application with Clerk authentication and 
               Cloudinary integration. Having completed my Master of Computer Application (MCA), I bring a 
               strong blend of technical knowledge and practical experience to deliver modern, scalable web 
               solutions.`

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
                   and grow as a full stack developer.`

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
    title: "Job Portal",
    description: "A platform for recruiters and job seekers.",
    image: project2,
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    link: "https://mernjp-client.vercel.app/", // 🔗 Add link here
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase my work.",
    image: project1,
    technologies: ["React", "Tailwind CSS", "Vercel", "HTML5", "Framer Motion"],
    link: "https://port-folio-8p6u.vercel.app/", // 🔗 Add link here
  },
];

export const CERTIFICATES = [
  {
    title: "MongoDB Certificate",
    description: "Introduction to NoSQL Architecture with MongoDB",
    image: "/certificates/cert2.png",
    link: "/certificates/cert2.pdf"
  },
  {
    title: "MERN Stack Certificate",
    description: "Certification for MERN Stack course from 3RI Technologies, Pune",
    image: "/certificates/cert1.png",  // thumbnail
    link: "/certificates/cert1.pdf"    // PDF file path
  },
  {
    title: "React Certificate",
    description: "React JS Certification from Infosys Springboard",
    image: "/certificates/cert3.png",
    link: "/certificates/cert3.pdf"
  }
];

export const EDUCATION = [
  {
    degree: "Master in Computer Application",
    institute: "Dr. B. V. Hiray College of Management & Research Centre, Malegaon",
    duration: "2023 – 2025",
  },
  {
    degree: "Bachelor of Computer Science",
    institute: "M. S. G College, Malegaon",
    duration: "2020 – 2023",
  },
  {
    degree: "Higher Secondary Certificate",
    institute: "Kakani Junior College, Malegaon",
    duration: "66.62%",
  },
  {
    degree: "Secondary School Certificate",
    institute: "Vardhaman Shikshan Sanstha, Malegaon",
    duration: "88.60%",
  },
];


export const CONTACT = {
  address: "Malegaon Dist-Nashik ",
  phoneNo: "+918482965386",
  email: "satyamsurade06@gmail.com",
};
