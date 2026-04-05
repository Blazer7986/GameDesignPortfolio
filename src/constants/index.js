const navLinks = [
  {
    name: "Home",
    link: "#home",
    // Change to webpage link
  },
  {
    name: "Projects",
    link: "#projects",
    // Change to webpage link
  },
  {
    name: "About",
    link: "#about",
    // Change to webpage link
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Education",
    link: "#education",
    // Change to webpage link
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const subNavLinks = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "About",
    link: "#about",
  },
];

const words = [
  { text: "Game", imgPath: "/images/ideas.svg" },
  { text: "Narrative", imgPath: "/images/concepts.svg" },
  { text: "Level", imgPath: "/images/designs.svg" },
  { text: "World", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "In-progress Projects" },
  { value: 3, suffix: "+", label: "Completed Projects" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
];

const skills = [
  {
    imgPath: "/images/skills/seo.png",
    title: "Unreal Engine",
    sub: "Blueprints & C++",
    desc: "Having clean and organized code. I have experience in Unreal Engine to create immersive gaming experiences.",
  },
  {
    imgPath: "/images/skills/books.png",
    title: "Blender",
    sub: "Basic 3D Modeling & Animation",
    desc: "Designing and animating 3D models using Blender to bring game assets to life.",
  },
  {
    imgPath: "/images/skills/creative.png",
    title: "Aseprite",
    sub: "Pixel Art Creation",
    desc: "Creating detailed pixel art for game assets.",
  },
  {
    imgPath: "/images/skills/seo.png",
    title: "Web Development",
    sub: "HTML, CSS, JavaScript, React",
    desc: "Keeping up with the latest web development trends and technologies to deliver modern, responsive websites.",
  },
  {
    imgPath: "/images/skills/books.png",
    title: "Programming Languages & Database Management",
    sub: "Python, C++, SQL",
    desc: "Keeping up with the latest programming languages and technologies to deliver efficient and scalable solutions and managing databases.",
  },
  {
    imgPath: "/images/skills/devices.png",
    title: "Code Management",
    sub: "Git & GitHub",
    desc: "Use version controls and collaboration to ensure efficient code management and teamwork.",
  },
  {
    imgPath: "/images/skills/devices.png",
    title: "Project Management",
    sub: "Google Workspace & Microsoft 365",
    desc: "Organizing and managing projects effectively to ensure smooth collaboration and successful project delivery.",
  },
  {
    imgPath: "/images/skills/time.png",
    title: "Time Management",
    sub: "Trello, Hack N' Plan, ClickUp",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
  {
    imgPath: "/images/skills/creative.png",
    title: "Creative Design",
    sub: "Figma, Adobe Creative Suite",
    desc: "Designing visually appealing and user-friendly interfaces and assets.",
  },
  {
    imgPath: "/images/skills/chat.png",
    title: "Reliable Communication",
    sub: "Discord, Gmail",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
];

const techStackImgs = [
  {
    name: "Unreal Developer",
    imgPath: "/images/logos/unreal.png",
  },
  {
    name: "Blender Developer",
    imgPath: "/images/logos/blender.png",
  },
  {
    name: "Godot Developer",
    imgPath: "/images/logos/godot.png",
  },
  {
    name: "Aspeite Artist",
    imgPath: "/images/logos/aseprite.png",
  },
  {
    name: "Engineer",
    imgPath: "/images/logos/engineer.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: `Vianey brought creativity and technical expertise to the team, significantly 
      improving our frontend and backend performance.`,
    imgPath: "/images/experience/NYU.png",
    logoPath: "/images/experience/NYUlogo.png",
    title: "Fantasy League Database Website | Academic Project",
    sub: "Full Stack Developer",
    date: "September 2024-December 2024",
    responsibilities: [
      "Communicate with my colleages to efficently go over the best ORM for our database.",
      "Designed and deployed a full stack Fantasy League web using HTML, CSS, JavaScript, MySQL, Django, and Azure",
      "Implemented distinct user and admin authentication system with role-based permissions",
      "Enabled user to create and manage custom teams and players.",
      "Admin can control match creation, outcome management, and overall system maintenance.",
    ],
  },
  {
    review: `Vianey work alongside our team efficently by working over our budget 
    and buying the necessary material for the prototype. She work with another programmer
    to get the smart trash bin's functions working.`,
    imgPath: "/images/experience/NYU.png",
    logoPath: "/images/experience/NYUlogo.png",
    title: "CleanCycle's Smart Trash Bin | Academic Project",
    sub: "Audrino C Developer & Planner",
    date: "January 2024-May 2024",
    responsibilities: [
      "Communicate with my colleages to efficently go over our budget and build material necessary for the prototype.",
      "Programmed interaction logic using Arduino and documented hardware flow.",
      "Designed and built a trash bin that uses ultrasound sensors and servo motors.",
    ],
  },
  {
    review: `Vianey was able to work on the project solo or within a group.`,
    imgPath: "/images/experience/NYU.png",
    logoPath: "/images/experience/NYUlogo.png",
    title:
      "Designing for Creative Physical Computing VIP | Extracurricular Activities",
    sub: "Audrino C Developer",
    date: "September 2021-May 2022",
    responsibilities: [
      "Collaborate with a multidisciplinary team to design and build an interactive mural installation using a co-design framework.",
      "Built interactive components using Arduino and aluminum foil, and soldered circuitry.",
      "Contributed to both visual and technical aspects of the project to engage viewers through physical computing and interactive design.",
    ],
  },
  {
    review: `I was able to learn about many libraries and frameworks to develop more skills in data science.`,
    imgPath: "/images/experience/NYU.png",
    logoPath: "/images/experience/NYUlogo.png",
    title: "Data Science Bootcamp | Extracurricular Activities",
    sub: "Extern",
    date: "February 2022-May 2022",
    responsibilities: [
      "Participated in a 12-week program that teaches Python, Git, Database Management Systems, SQL, Python Libraries, Exploratory Data Analysis, Data Visualization, and machine learning.",
      "Patiently working in a virtual environment and communicating with mentors and other college students via Slack and Gmail. Completed the bootcamp to a certificate.",
    ],
  },
  {
    review: `I was able to learn web development and programming languages. This would be my inspiration to become an engineer in the future.`,
    imgPath: "/images/experience/GirlsWhoCode.png",
    logoPath: "/images/experience/GirlsWhoCodeLogo.jpeg",
    title: "Intern: Girls Who Code Summer Internship | Work Experience",
    sub: "Intern",
    date: "July 2018-August 2018",
    responsibilities: [
      "Built upon coding skills by learning to code in JavaScript, HTML, CSS, Python, and Arduino C.",
      "Developed teamwork and communication skills to accomplish different coding projects.",
      "Creating a website from scratch and programming robotic movements.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const eduCards = [
  {
    logoPath: "/images/experience/NYUlogo.png",
    title: "New York University | Bachelor of Science in Computer Engineering",
    sub: "Alumni",
    date: "September 2020-January 2025",
    details: [
      "Activities and societies: SHPE, SWE, Designing for Creative Physical Computing VIP",
      "SHPE: As a member of the Society of Hispanic Professional Engineers, I have the opportunity to connect with other Hispanic engineers, attend workshops and events, and participate in community service projects.",
      "SWE: As a member of the Society of Women Engineers, I have the opportunity to connect with other women engineers, attend workshops and events, and participate in community service projects.",
    ],
  },
  {
    logoPath: "/images/personal/QTlogo.png",
    title: "Queens Technical High School | High School Diploma",
    sub: "High School Graduate",
    date: "September 2016-June 2020",
    details: [
      "Activities and societies: SCS College Readiness Program, Robotics Club, Poetry Club, Book Club, and the National Honor Society.",
      "SCS College Readiness Program: At Sunnyside, I participate in a college readiness program that is focused on building college applications and preparing students for their futures.",
      "Robotics Club: Alongside a team of 40 students, I designed robots, coded language, and used Java to control the robot’s movements for competitions.",
      "Poetry Club: Using various poems and photos as inspiration, we explore and experiment with various forms of poetry in order to articulate and examine poetic traditions.",
      "Book Club Member: Through constructive conversation and close reading, I discuss with other club members plots as well as analyze key themes and human experiences within the novels we read.",
    ],
  },
];

const testimonials = [
  {
    name: "Name1",
    mentions: "@name1",
    review:
      "I can’t say enough good things about Vianey. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Name2",
    mentions: "@name2",
    review:
      "Working with Vianey was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Name3",
    mentions: "@name3",
    review:
      "Collaborating with Vianey was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Vianey's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Vianey is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Name4",
    mentions: "@name4",
    review:
      "Vianey was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Name5",
    mentions: "@name5",
    review:
      "Vianey’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. She’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Name6",
    mentions: "@name6",
    review:
      "Vianey was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "Business Email",
    imgPath: "/images/gm.png",
    linkPath: "vianeyr8624@gmail.com",
  },
  {
    name: "GitHub",
    imgPath: "/images/gh.png",
    linkPath: "https://github.com/Blazer7986",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    linkPath: "https://www.linkedin.com/in/vianey-rivera-b21326168/",
  },
];

export {
  words,
  skills,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  eduCards,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  subNavLinks,
};
