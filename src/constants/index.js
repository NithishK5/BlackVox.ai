import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#About",
  },
  {
    id: "1",
    title: "Roadmap",
    url: "#Roadmap",
  },
  // {
  //   id: "2",
  //   title: "Contact",
  //   url: "#Contact",
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Phase - 1",
    text: "In this phase, the app concept was conceptualized, market research was conducted, and requirements were defined. Insights were gathered to understand user needs and competitors were analyzed. Based on this, a clear app concept was developed, and the MVP scope was defined. Through workshops and interviews, requirements were prioritized, and a project plan with timelines and milestones was created.",
    date: "Feb 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Phase - 2",
    text: "We focus on developing the frontend of the app. Using the defined UI/UX design, we create wireframes and prototypes. Then, we begin coding the frontend components, ensuring a seamless user experience. Iterative development allows us to refine the interface based on user feedback, enhancing usability and engagement.",
    date: "Mar 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "3",
    title: "Phase - 3",
    text: "Developing the backend infrastructure, including database design and server-side logic. Additionally, we integrate Large Language Models (LLMs) to power advanced AI algorithms for natural language understanding and dialogue generation. Leveraging LLMs enhances the app's intelligence, enabling sophisticated interactions and personalized experiences.",
    date: "Apr 2024",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "2",
    title: "Phase - 4",
    text: " In this final phase, we conduct thorough testing to ensure the app's functionality, performance, and security. We implement automated and manual testing processes, including unit tests, integration tests, and user acceptance testing. Any issues identified are addressed promptly, and the app undergoes refinement to deliver a polished, reliable product to users.",
    date: "May 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabContent = [
  {
    id: "0",
    title: "CosmicUI",
    text: "Embark on a journey through the cosmos with our CosmicUI, intricately crafted to mirror the mysterious elegance of black holes.",
  },
  {
    id: "1",
    title: "Elevating Interactions to New Heights",
    text: "Embrace the future with Mira's human-like voice output, offering immersive interactions, tailored responses, and customizable voice options for a truly seamless experience.",
  },

  //   {
  //     id: "2",
  //     title: "Seamless Integration",
  //     text: "Experience seamless vehicle-to-mobile integration, enhancing connectivity and productivity with our innovative app.",
  //   },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const benefits = [
  {
    id: "0",
    title: "Introducing Mira AI",
    text: "Driven by cutting-edge AGI, Mira AI stands as a beacon of automotive intelligence, meticulously designed for BlackVox to enhance every journey with refined vehicle assistance and efficiency.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Visionary Technology",
    text: "Built on a foundation of robust AI algorithms, BlackVox.ai envisions a future where vehicles not only drive themselves but also predict and prevent their own maintenance issues, secure driver and passenger safety through proactive measures, and personalize the driving experience to unheard-of levels.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
  },
  {
    id: "2",
    title: "Elevating the Digital Driving Experience",
    text: "At the heart of today's automotive evolution lies the digital cabin, where technology seamlessly integrates into the driving journey. Our mission is to lead this transformation by engineering AI companions that stand as the epitome of intelligence, speed, and excitement, setting a new standard for in-car excellence.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "3",
    title: "Next-Level Driving",
    text: "We're pioneering the path to a future where vehicles are not just modes of transportation but partners in your journey.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Conversational Intelligence at Its Core",
    text: "Imagine an assistant that not only understands you but anticipates your needs, making every interaction seamless. BlackVox.ai uses advanced AI to provide you with an assistant that's always a step ahead.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
