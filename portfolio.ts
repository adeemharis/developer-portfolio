import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: " Adeem Haris",
  title: "Hi all, I'm Adeem",
  description:
    "I'm a passionate AI Engineer with experience developing and deploying AI Models in domains of NLP, Computer Vision and Time-Series Prediction with Pytorch, Tensorflow, SkLearn, and HuggingFace. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "https://drive.google.com/file/d/1Sxdb3iK_C5Mbp1ug5_2rAfLt2Gt05ppx/view?usp=sharing",
};

export const openSource = {
  githubUserName: "adeemharis",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:adeemharis@gmail.com",
  linkedin: "https://www.linkedin.com/in/adeemharis/",
  github: "https://github.com/adeemharis",
  instagram: "https://www.instagram.com/adeemharis",
  // facebook: 'https://www.facebook.com/1hanzla100',
  twitter: 'https://twitter.com/adeemharis',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "AI DEVELOPER THAT LOVES TO CREATE AI SOLUTIONS TO SOLVE PROBLEMS IN DIFFERENT DOMAINS",
  data: [
    {
      title: "AI Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building SOTA Models as AI Solutions for problems in diverse domains "),
        emoji("⚡ Building AI Models to solve NLP and Computer Vision Problems"),
        emoji("⚡ Building End-to-End Pipelines for ML Model Training and Deployment"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Tensorflow",
          iconifyTag: "logos:tensorflow",
        },
        {
          skillName: "Pytotch",
          iconifyTag: "logos:pytorch",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Numpy",
          iconifyTag: "logos:numpy",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Pandas",
          iconifyTag: "logos:pandas",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Deep Learning", //Insert stack or technology you have experience in
    progressPercentage: "80", //Insert relative proficiency in percentage
  },
  {
    Stack: "High Performance Computing",
    progressPercentage: "90",
  },
  {
    Stack: "Pytorch",
    progressPercentage: "85",
  },
  {
    Stack: "Tensorflow",
    progressPercentage: "90",
  },
  {
    Stack: "Python",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Indian Institute of Technology Jodhpur",
    subHeader: "Bachelor of Technology in Artificial Intelligence and Data Science",
    duration: "December 2021 - Present",
    desc: "",
    // grade: "Grade A",
    descBullets: ["Minor in Mathematical and Computaional EConomics"], // Array of Strings
  },
  {
    schoolName: "Abhinav Public School",
    subHeader: "High School - Science",
    duration: "May 2019 - March 2021",
    desc: "",
    grade: "Percent: 94.5%",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "St. Xavier Senior Secondary School",
    subHeader: "Middle School",
    duration: "May 2011 - March 2019",
    desc: "",
    grade: "Percent: 91%",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "ML Developer",
    company: "Weya.ai",
    companyLogo: "/img/icons/common/weya.png",
    date: "June 2024 - July 2024",
    desc: "Developed complete end-to-end pipeline from Data Collection to Model Training and Deployment for the task of energy disaggregation .",
  },
  {
    role: "Summer Research Intern",
    company: "DRDO",
    companyLogo: "/img/icons/common/drdo.png",
    date: "May 2024 - June 2024",
    desc: "Worked with the SSPL (Solid State Physics Laboratory) at DRDO to develop ML Models for detecting faults in the semiconductor acoustic sensors.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "AI Developer Intern",
    company: "Morph.ai",
    companyLogo: "/img/icons/common/morph.png",
    date: "Dec 2023",
    desc: "Fine-Tuned Open Source Llama 2 LLM and adjusted training hyperparameters to increase performance metric for educational usecase by 60% .",
  },
  // {
  //   role: "Backend Developer",
  //   company: "Bleed-AI",
  //   companyLogo: "/img/icons/common/bleedAI.jpg",
  //   date: "Sept 2021 - Oct 2021",
  //   desc: "As a Django developer at Bleed AI, I integrated a computer vision AI model to process YouTube URLs on a website. I used Django Channels and Websockets to show real-time processing and implemented threading to run multiple instances of the AI model. I also used jQuery for UI rendering and deployed the website on a Heroku server.",
  // },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Giebo",
    desc: "A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.",
    link: "https://gibeo.io/",
  },
  {
    name: "O Mejor Oferta",
    desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
    link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "Hooligan Culture",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
  },
];

// export const feedbacks: FeedbackType[] = [
//   {
//     name: "Syed Jamal",
//     role: "Frontend Developer at Meganos Software",
//     feedback:
//       "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
//   },
//   {
//     name: "Wajahat Malek",
//     role: "CEO at Duseca Software",
//     feedback:
//       "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
//   },
//   {
//     name: "Zaid Zaffar",
//     role: "CEO at ZR Technologies",
//     feedback:
//       "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
//   },
// ];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Adeem Haris",
  description: greetings.description,
  author: "Adeem Haris",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Adeem",
    "Adeem Haris",
    "@adeemharis",
    "adeemharis",
    "Portfolio",
    "Adeem Portfolio ",
    "Adeem Haris Portfolio",
  ],
};
