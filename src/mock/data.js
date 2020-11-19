import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I'm a passionnate and enthusiastic developper.",
  paragraphTwo: "I'm also interested in UX Design and I want to create fine and confortable user experience.",
  paragraphThree: "I'm looking forward to joining a dynamic and supportive team to which I could bring my joyful and warm team spirit.",
  paragraphFour: "Feel free to take a look at my resume",
  resume: 'https://drive.google.com/file/d/1iTECIU9nlvYvyKdOMMfl0SaRM2YPxYhG/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Team-Share',
    info: 'ReactJS - Symfony - React-Router -  ',
    info2:
      "It's a project initiated in a four developper team. We wanted to propose a plateform abling to gather a team to make ambitious projects possible. It still needs some improvements, we are working on it.",
    url: 'http://95.142.160.243/',
    repo: 'https://github.com/Naddiya/T-SComplete', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
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
