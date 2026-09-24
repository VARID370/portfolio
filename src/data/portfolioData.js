export const personalInfo = {
  name: "Varid Sharma",
  role: "Full Stack Web Developer | Computer Science Engineering Student",
  heroTitle: "Hi, I'm Varid Sharma",
  heroSubtext: "Full Stack Web Developer",
  heroDescription: "Computer Science Engineering student focused on building modern, practical and user-friendly web applications.",
  profileImage: "/profile.png",
  about: [
    "I am a third-year Computer Science Engineering student and Full Stack Web Developer interested in building practical and user-friendly web applications.",
    "I work with technologies such as React, JavaScript, Node.js, Express.js, MongoDB, and Next.js.",
    "I enjoy learning new technologies, solving problems, turning ideas into functional applications, and exploring modern web development and AI."
  ],
  email: "varidsharma2@gmail.com",
  github: "https://github.com/VARID370",
  linkedin: "https://www.linkedin.com/in/varid-sharma-795042340/",
  resumePath: "/resume.pdf"
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "#resume" },
];

export const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "JavaScript", "Python"]
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Next.js"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"]
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman"]
  }
];

export const projects = [
  {
    id: "approvalflow",
    title: "ApprovalFlow",
    description: "A multi-level document approval system where employees can submit documents and managers and directors can review and approve them through a structured workflow.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Multer", "Socket.IO"],
    githubUrl: "https://github.com/VARID370/approval-flow-new",
    liveUrl: "https://approval-flow-new.onrender.com"
  },
  {
    id: "ai-treasure-hunt",
    title: "AI Treasure Hunt",
    description: "An interactive AI-powered treasure hunt game that generates riddles and clues and provides an AI chatbot to help players when they get stuck.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Gemini API"],
    githubUrl: "https://github.com/VARID370/ai-treasure-hunt",
    liveUrl: "https://ai-treasure-hunt-fixed.onrender.com"
  },
  {
    id: "hostel-management-system",
    title: "Hostel Management System",
    description: "A hostel management platform for managing meals, attendance, billing, menu information, wastage reports, and administrative operations.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: "adaptive-resource-allocation",
    title: "Adaptive Resource Allocation Simulator",
    description: "A simulation tool that demonstrates CPU and memory resource allocation using process states and system resource monitoring.",
    technologies: ["Python", "Tkinter", "psutil"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

export const educationData = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering",
    institution: "Lovely Professional University",
    duration: "2024 - 2028",
    status: "Third-Year Student"
  }
];

export const certificatesData = [
  {
    title: "Programming Using C++",
    issuer: "Infosys Springboard",
    issueDate: "August 2025",
    certificateUrl: "/certificates/cplusplus-certificate.pdf",
    previewUrl: "/certificates/cplusplus-certificate.png"
  },
  {
    title: "Database Management System Part - 1",
    issuer: "Infosys Springboard",
    issueDate: "August 2026",
    certificateUrl: "/certificates/dbms-certificate.pdf",
    previewUrl: "/certificates/dbms-certificate.png"
  },
  {
    title: "Oracle Cloud Infrastructure Certified AI Foundations Associate",
    issuer: "Oracle",
    issueDate: "September 2026",
    certificateUrl: "/certificates/oracle-oci-ai-certificate.pdf",
    previewUrl: "/certificates/oracle-oci-ai-certificate.png"
  },
  {
    title: "Oracle AI Database Certified Foundations Associate",
    issuer: "Oracle",
    issueDate: "September 2026",
    certificateUrl: "/certificates/oracle-ai-db-certificate.pdf",
    previewUrl: "/certificates/oracle-ai-db-certificate.png"
  },
  {
    title: "Advanced Backend Development with Node.js, Express & MongoDB",
    issuer: "Lovely Professional University",
    issueDate: "August 2026",
    certificateUrl: "/certificates/lpu-backend-certificate.pdf",
    previewUrl: "/certificates/lpu-backend-certificate.png"
  }
];
