import {
  BiHomeAlt as HomeIcon,
  BiBriefcase as BriefcaseIcon,
  BiChat as ContactIcon,
  BiCodeAlt as SkillsIcon,
  BiGridAlt as ProjectsIcon,
} from "react-icons/bi";

export const navItems = [
  { name: "About", link: "#about", icon: HomeIcon },
  { name: "Projects", link: "#projects", icon: ProjectsIcon },
  { name: "Skills", link: "#skills", icon: SkillsIcon },
  { name: "Experience", link: "#experience", icon: BriefcaseIcon },
  { name: "Contact", link: "#contact", icon: ContactIcon },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritise client satisfaction and encourage transparency.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/self/self.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm flexible with time zone communication",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My main stack",
    description: "I'm constantly learning to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech geek with a passion for innovation and growth",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building Quinox, an all-in-one AI Saas",
    description: "Behind The Scenes",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:-bottom-20 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    // img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Would you like to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    name: "Virexium",
    title: "Virexium - Digital Marketer Portfolio Website",
    description: "A premium, top-tier portfolio website crafted for a digital marketing company to showcase their expertise and attract high-value clients. The site features sophisticated animations, modern design principles, and seamless user experience that reflects the company's professional brand. Built with cutting-edge technologies including Next.js, Framer Motion, and GSAP to deliver exceptional performance and visual appeal that sets them apart in the competitive digital marketing landscape.",
    img: "/projects-img/virexium.webp",
    iconLists: ["/skills-icon/next.svg", "/skills-icon/framer-motion.svg", "/skills-icon/tailwind.svg", "/skills-icon/gsap.svg"],
    link: "https://virexium.vercel.app",
    code: 'https://github.com/GIT-Gizmo'
  },
  {
    id: 2,
    name: "Quinox",
    title: "Quinox - All-in-one AI SaaS",
    description: "A straightforward platform that puts several AI tools into one spot. Users can easily chat with an AI, create images, generate video clips, make audio (like voiceovers), and even get help writing code. The cool part is it uses different AI models, so you get good results whether you're making something creative or technical. It's all about making AI easy and useful for various tasks without needing multiple apps.",
    img: "/projects-img/quinox.webp",
    iconLists: ["/skills-icon/next.svg", "/skills-icon/supabase.svg", "/skills-icon/tailwind.svg", "/skills-icon/prisma.svg", "/skills-icon/postgreSQL.svg"],
    link: "https://quinox-ai.vercel.app",
    code: 'https://github.com/GIT-Gizmo'
  },
  {
    id: 3,
    name: "Elaff Homes",
    title: "Elaff Homes - Real estate & property management website",
    description: "Elaff Homes is a professional real estate and property management company that offers a wide range of services, including property listings, real estate development, property management and construction services. The website is designed to be user-friendly and easy to navigate, making it easy for users to find the information they need.",
    img: "/projects-img/elaffhomes.webp",
    iconLists: ["/skills-icon/next.svg", "/skills-icon/appwrite.svg", "/skills-icon/tailwind.svg", "/skills-icon/framer-motion.svg", "/skills-icon/shadcn.svg"],
    link: "https://elaffhomes.com",
    code: 'https://github.com/GIT-Gizmo'
  },
  {
    id: 4,
    name: "DocThud",
    title: "DocThud - Healthcare management system",
    description: "DocThud is a comprehensive healthcare management system designed to streamline the process of booking medical appointments. The web app allows patients to easily find and schedule appointments with preferred doctors. The system also includes an admin page to manage the schedules, making healthcare more accessible and organized.",
    img: "/projects-img/docthud.webp",
    iconLists: ["/skills-icon/next.svg", "/skills-icon/appwrite.svg", "/skills-icon/tailwind.svg", "/skills-icon/sentry.svg", "/skills-icon/twilio.svg"],
    link: "https://docthud.vercel.app",
    code: 'https://github.com/GIT-Gizmo/docthud'
  },
  {
    id: 5,
    name: "Adroit Handyman",
    title: "Adroit Handyman - Handyman Services Company",
    description: "A complete website revamp for Adroit Handyman Services, leveraging Next.js and its Server-Side Rendering (SSR) capabilities for a significant 30% reduction in server response times with increased load time speed, resulting in a noticeable increase in user engagement and sales for the company.",
    img: "/projects-img/adroit.webp",
    iconLists: ["/skills-icon/next.svg", "/skills-icon/tailwind.svg", "/skills-icon/express.svg", "/skills-icon/nodejs.svg", "/skills-icon/framer-motion.svg"],
    link: "https://www.adroithandymanservices.com",
    code: 'https://github.com/git-gizmo'
  },
  {
    id: 6,
    name: "AI Stitches",
    title: "AI Stitches - 3D Shirt Editing App",
    description: "Design your dream T-shirt with AI Stitches! This web app lets you unleash your creativity with a fully customizable 3D T-shirt model. Upload your own logos and textures, or get inspired with AI-generated designs.",
    img: "/projects-img/ai-stitches.webp",
    iconLists: ["/skills-icon/react.svg", "/skills-icon/tailwind.svg", "/skills-icon/three.svg", "/skills-icon/gemini.svg", "/skills-icon/vite.svg"],
    link: "https://ai-stitches.vercel.app",
    code: 'https://github.com/GIT-Gizmo/ai-stitches'
  },
  {
    id: 7,
    name: "Prompt Synth",
    title: "Prompt Synth - AI-powered Promts",
    description: "Prompt Synth is a full-stack web app that empowers users to share and explore powerful AI prompts.  Imagine a collaborative hub where you can discover new prompts for creative text generation, code completion, or image creation with artificial intelligence.",
    img: "/projects-img/promptsynth.webp",
    iconLists: ["/skills-icon/next.svg", "/skills-icon/tailwind.svg", "/skills-icon/mongodb.svg"],
    link: "https://promptsynth.vercel.app",
    code: 'https://github.com/GIT-Gizmo/promptsynth'
  },
  {
    id: 8,
    name: "Anime Crypt",
    title: "Anime Crypt - Anime Library",
    description: "Deepened my understanding of server-side rendering with Next.js by building a dynamic anime list application. Explored the power of TypeScript for type safety and Framer Motion for smooth animations.",
    img: "/projects-img/anime_crypt.webp",
    iconLists: ["/skills-icon/next.svg", "/skills-icon/tailwind.svg", "/skills-icon/framer-motion.svg", "/skills-icon/ts.svg"],
    link: "https://anime-crypt.vercel.app",
    code: 'https://github.com/GIT-Gizmo/anime-crypt'
  },
  {
    id: 9,
    name: "Home Seekr",
    title: "Home Seekr - A Real Estate Website",
    description: "This project served as a learning experience for building CRUD web applications with user sign-in & sign-up authentication. Developed with React and Firebase, it showcases my ability to create interactive data-driven applications with secure user access.",
    img: "/projects-img/home-seekr.webp",
    iconLists: ["/skills-icon/react.svg", "/skills-icon/tailwind.svg", "/skills-icon/firebase.svg", "/skills-icon/vite.svg"],
    link: "https://home-seekr.vercel.app/sign-in",
    code: 'https://github.com/GIT-Gizmo/home-seekr'
  },
  {
    id: 10,
    name: "Wings Trip",
    title: "Wings Trip - A Flight Booking Agency Landing Page",
    description: "I explored building interactive elements using React to create a captivating landing page. The project served as a playground to solidify my understanding of Sass for styling and component management.",
    img: "/projects-img/wingstrip.webp",
    iconLists: ["/skills-icon/react.svg", "/skills-icon/scss.svg", "/skills-icon/vite.svg"],
    link: "https://wingstrip.vercel.app",
    code: 'https://github.com/GIT-Gizmo/Wings-Trip'
  },
  {
    id: 11,
    name: "EhaZyPay",
    title: "EhazyPay - A Cryptocurrency Vendor Landing Page",
    description: "This contract project involved building and managing a user-friendly single-page website for a trusted cryptocurrency vendor. The website simplifies the process for customers to directly buy and sell cryptocurrencies, enhancing their experience and accessibility.",
    img: "/projects-img/ehazypay.webp",
    iconLists: ["/skills-icon/html5.svg", "/skills-icon/css.svg", "/skills-icon/jquery.svg"],
    link: "https://ehazypay.vercel.app",
    code: 'https://github.com/GIT-Gizmo/ehazypay'
  },
  {
    id: 12,
    name: "Little Lemon",
    title: "Little Lemon - A Restaurant Website",
    description: "This capstone project for the META Frontend Developer Specialization (Coursera) challenged me to build a full-fledged restaurant web app where customers can reserve tables, showcasing my skills in React, user interface design, and front-end development best practices.",
    img: "/projects-img/little-lemon.webp",
    iconLists: ["/skills-icon/react.svg", "/skills-icon/tailwind.svg"],
    link: "https://little-lemon-portfolio.vercel.app/",
    code: 'https://github.com/GIT-Gizmo/little-lemon-portfolio'
  },
  {
    id: 13,
    name: "Honeybiis",
    title: "Honeybiis - A Restaurant Landing Page",
    description: "Landing my first freelance gig, I created a visually compelling landing page for an online restaurant. This project allowed me to collaborate with a client and translate their vision into a design that drives customer engagement.",
    img: "/projects-img/honeybiis.webp",
    iconLists: ["/skills-icon/html5.svg", "/skills-icon/scss.svg"],
    link: "https://honeybiis.vercel.app/",
    code: 'https://github.com/GIT-Gizmo/honeybiis'
  },
  {
    id: 14,
    name: "Glamour Threads",
    title: "Glamour Threads - A Clothe Store Landing Page",
    description: "Demonstrating my newfound skills in SASS/SCSS, I created a stylish and functional landing page template tailored for online clothing stores. The project emphasizes clear product presentation and navigation to enhance the user experience.",
    img: "/projects-img/glamour-threads.webp",
    iconLists: ["/skills-icon/html5.svg", "/skills-icon/scss.svg"],
    link: "https://glamour-threads.vercel.app/",
    code: 'https://github.com/GIT-Gizmo/glamour-threads'
  },
];

export const testimonials = [
  {
    quote:
      "This young man is exceptionally talented and possess admirable character. He developed our Company’s officials website and all through the process he was attentive, supportive and delivered excellently. I make bold to say, he’s one of the best and most reliable website developer you can ever work with. Thanks a billion Sir for your high level of professionalism!",
    name: "Gbolade Emmanuel",
    title: "CEO of Elaff Homes",
    profileImg: "/clients/emmanuel.webp",
  },
  {
    quote:
      "I had the pleasure to work with Boluwatife as he led our website revamp with exceptional skill. His high-quality work, ability to solve complex issues, and collaborative spirit were instrumental to the project's success. A talented developer and team player, David creates a positive work environment. I highly recommend him and would gladly work with him again.",
    name: "Timileyin Ogunleye",
    title: "CEO of Adroit Handyman Services",
    profileImg: "/clients/timi.webp",
  },
  {
    quote:
      "Boluwatife David is an outstanding developer who consistently goes above and beyond to achieve excellent results. He is not only a talented professional who loves to learn new things, he is also someone who knows a little about a lot of things and is ready to share.",
    name: "Omotoyinbo Oluwadunsin",
    title: "UI/UX Developer",
    profileImg: "/clients/dunsin.webp",
  },
  {
    quote:
      "Boluwatife David is an exceptional React front-end developer with impressive skills in HTML, CSS, and JavaScript. He creates visually appealing, user-friendly interfaces and stays current with industry trends. His attention to detail, dedication, and problem-solving abilities make him an invaluable asset to any development team.",
    name: "Mr. Oluwaseun Matthew",
    title: "Business Automation Expert",
    profileImg: "/clients/mr-seun.webp",
  },
];

export const skills = [
  {
    id: 1,
    name: "JavaScript",
    img: "/skills-icon/js.svg",
  },
  {
    id: 2,
    name: "TypeScript",
    img: "/skills-icon/ts.svg",
  },
  {
    id: 3,
    name: "Python",
    img: "/skills-icon/python.svg",
  },
  {
    id: 4,
    name: "PHP",
    img: "/skills-icon/php.svg",
  },
  {
    id: 5,
    name: "Node.js",
    img: "/skills-icon/nodejs.svg",
  },
  {
    id: 6,
    name: "ReactJS",
    img: "/skills-icon/react.svg",
  },
  {
    id: 7,
    name: "NextJS",
    img: "/skills-icon/next.svg",
  },
  {
    id: 8,
    name: "ExpressJS",
    img: "/skills-icon/express.svg",
  },
  {
    id: 9,
    name: "MongoDB",
    img: "/skills-icon/mongodb.svg",
  },
  {
    id: 10,
    name: "React Native",
    img: "/skills-icon/react.svg",
  },
  {
    id: 11,
    name: "Tailwind",
    img: "/skills-icon/tailwind.svg",
  },
  {
    id: 12,
    name: "ThreeJS",
    img: "/skills-icon/three.svg",
  },
  {
    id: 13,
    name: "Framer Motion",
    img: "/skills-icon/framer-motion.svg",
  },
  {
    id: 14,
    name: "Google Cloud",
    img: "/skills-icon/gcp.svg",
  },
  {
    id: 15,
    name: "Firebase",
    img: "/skills-icon/firebase.svg",
  },
  {
    id: 16,
    name: "Docker",
    img: "/skills-icon/docker.svg",
  },
  {
    id: 17,
    name: "ShadCn UI",
    img: "/skills-icon/shadcn.svg",
  },
  {
    id: 18,
    name: "Github",
    img: "/skills-icon/github.svg",
  },
  {
    id: 19,
    name: "Postman",
    img: "/skills-icon/postman.svg",
  },
  {
    id: 20,
    name: "Vite",
    img: "/skills-icon/vite.svg",
  },
  {
    id: 21,
    name: "Appwrite",
    img: "/skills-icon/appwrite.svg",
  },
  {
    id: 22,
    name: "Google Analytics",
    img: "/skills-icon/google-analytics.svg",
  },
  {
    id: 23,
    name: "Vercel",
    img: "/skills-icon/vercel.svg",
  },
  {
    id: 24,
    name: "Figma",
    img: "/skills-icon/figma.svg",
  },
  {
    id: 25,
    name: "Payload CMS",
    img: "/skills-icon/payload.svg",
  },
  {
    id: 26,
    name: "Npm",
    img: "/skills-icon/npm.svg",
  },
  {
    id: 27,
    name: "Jest",
    img: "/skills-icon/jest.svg",
  },
  {
    id: 28,
    name: "Hostinger",
    img: "/skills-icon/hostinger.svg",
  },
  {
    id: 29,
    name: "SCSS",
    img: "/skills-icon/scss.svg",
  },
  {
    id: 30,
    name: "Material UI",
    img: "/skills-icon/material.svg",
  },
  {
    id: 31,
    name: "Git",
    img: "/skills-icon/git.svg",
  },
  {
    id: 32,
    name: "Sentry",
    img: "/skills-icon/sentry.svg",
  },
  {
    id: 33,
    name: "Twilio",
    img: "/skills-icon/twilio.svg",
  },
  {
    id: 34,
    name: "GSAP",
    img: "/skills-icon/gsap.svg",
  },
]

export const workExperience = [
  {
    id: 1,
    title: "FullStack Dev - Adroit Hanyman",
    description: "Revamped the company website, enhancing user experience, leading to increased traffic and engagement.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Dev - Swap Space",
    description: "Developed user interface & features for real estate company by translating Figma design using React.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Contract Front Dev - EhazyPay",
    description: "Developed and maintained a landing page with intuitive user interface for a cryptocurrency vendor.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Freelance Frontend Dev - Honeybiis",
    description: "Built an attractive and user-friendly restaurant landing page for a client.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const approach = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Planning & Strategy",
    description: "We'll work together to define your website's goals, target audience, and important functionalities. We'll talk about site structure, navigation, and content requirements.",
    containerClassName: "bg-emerald-900",
    animationSpeed: 5.1
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Development & Progress Update",
    description: "Once we've decided on a strategy, I start coding while listening to my lo-fi playlist. I keep you updated at all stages, from basic ideas to polished code.",
    color: [
      [236, 72, 153],
      [232, 121, 249],
    ],
    containerClassName: "bg-pink-900",
    animationSpeed: 3
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Development & Launch",
    description: "Here's where the magic happens! Based on the accepted design, I'll translate everything into functional code and create your website from the bottom up.",
    color: [[125, 211, 252]],
    containerClassName: "bg-sky-600",
    animationSpeed: 3
  },
]

export const socialMedia = [
  {
    id: 1,
    img: "/skills-icon/github.svg",
    name: "github",
    link: "https://github.com/GIT-Gizmo"
  },
  {
    id: 2,
    img: "/social-icons/twitter.svg",
    name: "twitter",
    link: "https://twitter.com/dave_gizmo"
  },
  {
    id: 3,
    img: "/social-icons/linkedin.svg",
    name: "linkedin",
    link: "https://linkedin.com/in/boluwatife-david"
  },
];