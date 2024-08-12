import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  //CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
//import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
//import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
//import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
//import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
//import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
//import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
//import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Carlos Pineda Resume',
  description: "site built with Carlos Pineda's react resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Carlos Pineda`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack Web Developer</strong>, currently working
        at <strong className="text-stone-100">DendriteDesigns©</strong> helping build modern websites to increase brand awareness and drive sales.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me training in <strong className="text-stone-100">VS Code</strong>,
        practicing <strong className="text-stone-100">JS, HTML, CSS, React,</strong> spending time with my family or reading. I am currently based in <strong className="text-stone-100">Durham, NC, USA</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.usercontent.google.com/download?id=1ltWv85f_YkBXB_olQhHJ_1_vInGzCAJ2&export=download&authuser=0&confirm=t&uuid=d01c6043-c0c9-4b03-bdfd-9cb97fe78429&at=APZUnTUznOTLRrf5p-8RgwlpZmOI:1722824189391',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I just finished my studies at Practicum LATAM and am currently looking for a job as a Full Stack Web Developer. 
  I have a passion for coding and am always eager to learn new things. As a self-taught developer, I have been coding for over 2 years. 
  I'm a quick learner, a hard worker, and always looking to improve my skills. Being a team player is very important to me, 
  as I am always looking to help others.`,
  aboutItems: [
    {label: 'Location', text: 'Durham, NC', Icon: MapIcon},
    //{label: 'Age', text: '40', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Mexican / American', Icon: FlagIcon},
    {label: 'Interests', text: 'Coding, Reading, Music', Icon: SparklesIcon},
    {label: 'Study', text: 'Practicum, LATAM', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'DendriteDesigns', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Hard skills',
    skills: [
      {
        name: 'HTML',
        level: 10,
      },
      {
        name: 'CSS',
        level: 9,
      },
      {
        name: 'Javascript',
        level: 6,
      },
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Node.js',
        level: 6,
      },
      {
        name: 'Figma',
        level: 8,
      },
      {
        name: 'Responsive Design',
        level: 9,
      },
      {
        name: 'Bilingual Spanis/English',
        level: 8,
      },
    ],
  },
  {
    name: 'Soft skills',
    skills: [
      {
        name: 'Communication',
        level: 10,
      },
      {
        name: 'Problem-solving',
        level: 9,
      },
      {
        name: 'Teamwork',
        level: 9,
      },
      {
        name: 'Adaptability',
        level: 10,
      },
      {
        name: 'Creativity',
        level: 10,
      },
      {
        name: 'Critical thinking',
        level: 10,
      },
      {
        name: 'Attention to detail',
        level: 10,
      },
      {
        name: 'Decision-making',
        level: 8,
      },
    ],
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Aprender a Aprender',
    description: 'On this project I was able to create a webpage using HTML5, CSS, VS Code, git, and github. I was able to deploy the webpage using github pages.',
    url: 'https://drdendrite.github.io/web_project_1_es/',
    image: porfolioImage4,
  },

  {
    title: 'Designing Webpages with Figma',
    description: 'With Figma, I was able to design the layout of a webpage and its components before coding it. This helped me have a clear idea of what I wanted to create.',
    url: 'https://drive.google.com/file/d/1nxqx7DJ-aplNEUjQKwlBzlh3GA7YkVN_/view?usp=sharing',
    image: porfolioImage6,
  },
 
  {
    title: 'De Patria a Patria',
    description: 'Here I was able to practice technologies like HTML5, CSS, Figma, Grid, Flexbox, and media queries to create a responsive webpage to different screen sizes.',
    url: 'https://drdendrite.github.io/web_project_3_esp/',
    image: porfolioImage8,
  },

  {
    title: 'Coding with Visual Studio Code',
    description: 'Here you can have a preview of what happens behind the scenes for a webpage to be created.',
    url: 'https://drive.google.com/file/d/1fSmqgCBo5LvPsXP7VngEPHO8YhJpDNOT/view?usp=sharing',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2024',
    location: 'Practicum LATAM',
    title: 'Full Stack Software Engineer',
    content: <p>During my time in this bootcamp, I learned how to design, build, and deploy webpages using HTML5, CSS, JS, React, Node.js, Nginx, and Git, including how to set up a server to run and maintain webpages on HTTP and HTTPS.</p>,
  },
  {
    date: 'June 2011',
    location: 'University of Guadalajara, Jalisco, Mexico',
    title: 'Doctorate in Veterinary Medicine',
    content: <p>As a veterinary medicine student, I was able to acquire knowledge of the anatomy and physiology of multiple species to diagnose various conditions.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2021 to August 2022',
    location: 'Wells Fargo, Durham, NC',
    title: 'Teller I',
    content: (
      <p>
        As a teller I was responsible for providing excellent customer service, processing transactions, and identifying opportunities to improve customer financial wellbeing. I was also responsible for balancing cash drawers and following procedures to minimize errors and reduce fraud.
      </p>
    ),
  },
  {
    date: 'June 2020 to July 2021',
    location: 'Amos Delivery and Courier, Durham, NC',
    title: 'Delivery Driver',
    content: (
      <p>
        As a delivery driver I was responsible for delivering packages to customers in a timely manner, providing excellent customer service, and maintaining a clean and organized vehicle. 
        I was also responsible for following all safety procedures and traffic laws to ensure the safety of myself and others on the road.
      </p>
    ),
  },
  {
    date: 'May 2018 to May 2020',
    location: 'Mazatlan of Oxford, Oxford, NC',
    title: 'Restaurant Manager',
    content: (
      <p>
         As a restaurant manager I was responsible for overseeing the day-to-day operations of the restaurant, including managing staff, scheduling shifts, and ensuring that customers received excellent service. 
          I was also responsible for ordering supplies, managing inventory, and ensuring that the restaurant was in compliance with health and safety regulations.  
     </p>
    ),
  },
  {
    date: 'july 2016 to May 2018',
    location: 'Willow Oak Veterinary Hospital, Durham, NC',
    title: 'Veterinary Technician',
    content: (
      <p>
        As a veterinary technician I was responsible for assisting the veterinarian with medical procedures, administering medications, and providing care to animals. 
        I was also responsible for maintaining medical records, cleaning and sterilizing equipment, and providing support to pet owners.
      </p>
    ),
  },
  {
    date: 'January 2014 to June 2016',
    location: 'Animal Emergency Hospital and Urgent Care, Raleigh, NC',
    title: 'Veterinary Technician',
    content: (
      <p>
        As a veterinary technician I was responsible for providing emergency and critical care to animals, including administering medications, monitoring vital signs, and assisting with medical procedures. 
        I was also responsible for communicating with pet owners, maintaining medical records, and ensuring that the hospital was clean and organized.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'If you have any questions or would like to work together, please feel free to get in touch.',
  items: [
    {
      type: ContactType.Email,
      text: 'ctpineda1@gmail.com',
      href: 'mailto:ctpineda1@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Durham, NC',
      href: 'https://www.google.com/maps/place/Durham,+Carolina+del+Norte/@36.0019915,-79.0500618,11z/data=!3m1!4b1!4m6!3m5!1s0x89ace471120f66f1:0xe17ada898a46f27e!8m2!3d35.9940329!4d-78.898619!16zL20vMDEzaHh2?entry=ttu',
    },
    {
      type: ContactType.Github,
      text: 'DrDendrite',
      href: 'https://github.com/DrDendrite',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/DrDendrite'},
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},//
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/carlos-pineda-429742196/'},
  //{label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},//
  //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},//
];
