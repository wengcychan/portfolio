import backgroundImg from './images/home-page.png'
import aboutImg from './images/about-me.png'
import { FaJs, FaReact, FaHtml5, FaCss3, FaNodeJs, FaUnity, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { SiC, SiCplusplus, SiCsharp, SiMongodb, SiBlender, SiCanva, SiGimp } from "react-icons/si";

const home = {
  name: 'Wing',
  role: 'A Software Developer',
  social: {
    email: 'mailto:wengcychan95@gmail.com',
    github: 'https://github.com/wengcychan',
  },
  img: backgroundImg, 
}

const about = {
  descriptions: [
    'I am currently studying at Hive Helsinki, transitioning from traffic engineering to software development. I am exploring web and game development, along with C / C++ programming languages.',
    'I love solving problems and discovering new things. I am excited to use what I learn to create innovative tech solutions.',
  ],
  img: aboutImg,
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

// const skills = [
//   // skills can be added or removed
//   // if there are no skills, Skills section won't show up
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'TypeScript',
//   'React',
//   'Redux',
//   'SASS',
//   'Material UI',
//   'Git',
//   'CI/CD',
//   'Jest',
//   'Enzyme',
// ]

const icons = {
  CLanguage: SiC, // Add respective icon for C language if available
  Cplusplus: SiCplusplus, // Add respective icon for C++ language if available
  Csharp: SiCsharp, // Add respective icon for C# language if available
  JavaScript: FaJs, // Example icon for JavaScript
  React: FaReact, // Example icon for React
  HTML5: FaHtml5, // Example icon for HTML5
  CSS3: FaCss3, // Example icon for CSS3
  MongoDB: SiMongodb, // Example icon for MongoDB
  Nodejs: FaNodeJs, // Example icon for Node.js
  Unity: FaUnity, // Example icon for Unity
  Git: FaGitAlt, // Example icon for Git
  GitHub: FaGithub, // Example icon for GitHub
  Blender: SiBlender, // Add respective icon for Blender if available
  Figma: FaFigma, // Add respective icon for Figma if available
  Canva: SiCanva, // Add respective icon for Canva if available
  Gimp: SiGimp, // Add respective icon for Gimp if available
  // Add icons for other skills/categories as needed
};


const skills = {
  LanguagesIcons: [SiC, SiCplusplus, SiCsharp, FaJs],
  languages: [
    'C',
    'C++',
    'C#',
    'JavaScript'
  ],
  web: [
    'React',
    'HTML5',
    'CSS3',
    'MongoDB',
    'Nodejs'
  ],
  gaming: [
    'Unity'
  ],
  versionControl: [
    'Git',
    'GitHub'
  ],
  design: [
    'Blender',
    'Figma',
    'Canva',
    'Gimp'
  ]
}

const contact = {
  descriptions: [
    'I am open to exploring internships or roles as a junior software developer.',
    'Get in touch to discuss project collaborations or just say hi — I am eager to chat and learn about potential opportunities!',
  ],
  social: {
    email: 'wengcychan95@gmail.com',
    phone: '+358 41 474 7515'
  },
}

export { home, about, projects, skills, contact }
