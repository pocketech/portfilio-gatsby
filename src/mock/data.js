import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'pocketfolio', // e.g: 'Name | Developer'
  lang: 'ja', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio site!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kento',
  subtitle: 'I love egg sunny-side up!',
  cta: 'Me, too !',
  ctc: 'More hard...'
};

// ABOUT DATA
export const aboutData = {
  img: 'bighead.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.wantedly.com/secret_profiles/cQqdHaLx1A_4MNNk5Xd-gQsnuicvb_QF',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'corgi_mock.jpg',
    title: 'Corgi (講義情報サービス)',
    info: '',
    info2: '',
    url: 'https://redux-spa.web.app/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'blog.jpg',
    title: 'Blog with Next.js',
    info: '',
    info2: '',
    url: 'https://nextjs-blog-alpha-topaz.vercel.app/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'breakfast.jpg',
    title: 'Hanjuku Engineer(this portfolio)',
    info: '',
    info2: '',
    url: 'https://laughing-kare-0c08e3.netlify.app/',
    repo: 'https://github.com/pocketech/portfilio-gatsby', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pokedex_mock.jpg',
    title: 'Pokedex with swr',
    info: '',
    info2: '',
    url: 'https://pocketech.github.io/pokedex-typescript-swr/',
    repo: 'https://github.com/pocketech/pokedex-typescript-swr', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'hakuyowasedatech@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/pochi2pocket',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/pocketech',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
