import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nadia Medkouri Zidi', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: 'basement development', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Nadia Medkouri -',
  name: ' Frontend Developer',
  subtitle: 'Javascript enthusiast',
  cta: 'See more ?',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I'm a passionnate and enthusiastic developer.",
  paragraphTwo: "I'm interested in UX Design and I want to create fine and cosy user experience.",
  paragraphThree:
    "I'm looking forward to joining a dynamic and supportive team to which I could bring my joyful and warm team spirit.",
  paragraphFour: '',
  resume: 'https://drive.google.com/file/d/1iTECIU9nlvYvyKdOMMfl0SaRM2YPxYhG/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1',
    title: 'Team-Share',
    info: 'ReactJS -Redux, Symfony, React-Router, Semantic-UI & more ...',
    info2:
      "It's a project initiated in a four developer team. We wanted to propose a plateform for developers to gather teams in order to fulfill ambitious projects. It still needs some improvements, we are working on it.",
    url: 'http://95.142.160.243/',
    repo: 'https://github.com/Naddiya/T-SComplete', // if no repo, the button will not show up
    video: 'https://youtu.be/YZgrCFXXboI?t=5819',
  },
  {
    id: nanoid(),
    img: 'project2',
    title: 'Github Dashboard',
    info: 'React, React-Router , Redux , axios and slugify',
    info2: '',
    url: '',
    repo: 'https://github.com/Naddiya/githubDashboard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3',
    title: 'Recipe Manager',
    info: 'React, Redux, React-Router',
    info2: 'Browse throw your recipes',
    url: '',
    repo: 'https://github.com/Naddiya/recipe_manager', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nadiareactjs@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/MedkouriNadia',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nadiamedkouri/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Naddiya',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
