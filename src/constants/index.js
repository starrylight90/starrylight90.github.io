import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    feedback_system,
    object_detection,
    mnnist,
    jobit,
    tripguide,
    threejs,
    python,
    php,
    mysql,
    logo,
    frameskip,
    offmind,
    apmm,
    phc,
    s2,
    veda,
    java,
    fastapi,
    flutter,
    kubernetes,
    tflite,
    github,
    sitpune,
    sitdisplay
  } from "../assets";
  


  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];
  
  const services = [
    {
      title: "Summer of Growth @ Maersk",
      icon: "https://media.licdn.com/dms/image/v2/D4D22AQHuXo5Xxtw8dg/feedshare-shrink_800/B4DZdAd4sXGUAo-/0/1749133266342?e=1753920000&v=beta&t=qQZRF90CFBUSjxhG5noJIi76qet28tdeP1D214U18hY",          
      link: "https://www.linkedin.com/posts/skp2208_a-summer-of-growth-gratitude-great-activity-7336396666595389445--F73?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoIHWgBVofiJ-OrblGTimTYfIt7EdizYFI", 
    },
    {
      title: "SIT Feedback System Journey",
      icon: sitdisplay,   
      link: "https://www.linkedin.com/posts/skp2208_gratitude-learningjourney-teamwork-activity-7159571826287820800-qZ5q?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADoIHWgBVofiJ-OrblGTimTYfIt7EdizYFI", 
    },
    {
      title: "Content Creator",
      icon: "https://cdn.sanity.io/images/tkl0o0xu/production/5ca2d53e2ed3a58e120776245c20da44b01424af-512x512.png?fit=min&w=380&h=280&dpr=1&q=95",           
      link: "https://medium.com/@swayam.pendgaonkar",
    },
    {
      title: "Accessible Tech Builder",
      icon: veda,      
      link: "https://vedaatech.com", 
    },
  ];
  
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React.js",
      icon: reactjs,
    },
    {
      name: "Node.js",
      icon: nodejs,
    },
    {
      name: "FastAPI",
      icon: fastapi,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Kubernetes",
      icon: kubernetes,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "TensorFlow Lite",
      icon: tflite, 
    },
    {
      name: "GitHub",
      icon: github, 
    },
  ];

  const experiences = [
    {
      title: "Associate Software Engineer",
      company_name: "A.P. Moller Maersk",
      icon: apmm,
      iconBg: "#383E56",
      date: "July 2025 - Present",
      points: [
        "Built a high-throughput data module handling over 1 million records per run, powering core operations at global scale.",
        "Designed real-time backend systems using Java and SQL, ensuring speed, fault-tolerance, and zero data loss.",
        "Deployed FastAPI services in Docker/Kubernetes environments, cutting release cycles by 60% and easing cross-team integration.",
        "Improved mobile app performance by 40% with Flutter/Dart, enhancing user experience and daily usage metrics.",
      ],         
    },
    {
      title: "Founder & CTIO",
      company_name: "VEDA (vedaatech.com)",
      icon: veda,
      iconBg: "#383E56",
      date: "December 2024 - Present",
      points: [
        "Building an AI-powered navigation device for blind and deaf-blind users using on-device object detection and tactile Braille feedback.",
        "Developed an MVP that is 80× more affordable than US alternatives, priced at just ₹5,000 (~$60).",
        "Leading a 5-member team through product development, pilot testing, and patent filing.",
        "Partnering with Pune University’s Accessibility Department to co-design and test with real users.",
      ],      
    },
    {
      title: "Technical Project Manager (Part-time)",
      company_name: "Science To People",
      icon: s2,
      iconBg: "#E6DEDD",
      date: "June 2025 - Present",
      points: [
        "Managing product strategy for an LLM-powered public health platform focused on trust and science communication.",
        "Leading technical execution across feature scoping, delivery sprints, and performance benchmarking.",
        "Collaborating cross-functionally with advisors, researchers, and designers in a globally distributed team.",
        "Driving roadmap decisions for AI-driven modules, improving reliability and user engagement.",
      ],      
    },
    {
      title: "Former CTO",
      company_name: "Project Human City (PHC)",
      icon: phc,
      iconBg: "#E6DEDD",
      date: "May 2023 - May 2025",
      points: [
        "Scaled a 125-person engineering team across 10 squads to deliver social-good tech solutions at scale.",
        "Launched 3 flagship products and 4 AI microservices addressing urban equity and public health.",
        "Built the tech foundation that helped secure over $300K in grants and institutional partnerships.",
        "Led architecture, team hiring, and Agile delivery processes in a high-growth environment.",
      ],      
    },
  ];
  
  const testimonials = [
    {
      testimonial:
       "Swayam is a driven and resourceful leader. As CTO, he guided over 100 volunteers with ingenuity and clarity, leaving a lasting impact at Project: Human City.",
      name: "James Rhule",
      designation: "CIO",
      company: "Project Human City",
      image: phc,
    },
    {
      testimonial:
        "Swayam is not only a great leader but also an exceptional mentor. His clarity, precision, and willingness to help made working with him a fantastic experience.",
      name: "Shreyas Tambe",
      designation: "Junior Developer",
      company: "Symbiosis Institute of Technology",
      image: sitpune,
    },
    {
      testimonial:
       "Swayam is reliable, respectful, and never procrastinates. He communicates clearly and delivers on time—everything you want in a teammate.",
      name: "Yajushreshtha Shukla",
      designation: "Leader, Enterpreneur",
      company: "Yaju Industries",
      image: "https://avatars.githubusercontent.com/u/97739937?v=4",
    },
  ];
  
  const projects = [
    {
      name: "SkillSwap Web App",
      description:
        "A peer-to-peer learning platform where users can swipe and match based on skills they want to teach or learn. Think Coursera meets Tinder — mutual learning, one skill at a time.",
      tags: [
        { name: "React", color: "blue-text-gradient" },
        { name: "Node.js", color: "green-text-gradient" },
        { name: "MongoDB", color: "pink-text-gradient" },
      ],
      image: "https://cdn.dorahacks.io/static/files/18b3cd3807dd78882724baa420682a47.png", 
      source_code_link: "https://github.com/starrylight90/skillswap-webapp",
    },
    {
      name: "CollabNGO",
      description:
        "A central hub for NGO events and impact stories. Enables citizens to discover, attend, and contribute to verified causes in their locality, while NGOs can post events and spread awareness.",
      tags: [
        { name: "JavaScript", color: "blue-text-gradient" },
        { name: "Google Maps API", color: "green-text-gradient" },
        { name: "Node.js", color: "pink-text-gradient" },
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJnrzgzPb3t3L4DaWoj4_GsDNLeymyZWIcA&s", 
      source_code_link: "https://github.com/starrylight90/CollabNGO",
    },
    {
      name: "Life Expectancy Prediction",
      description:
        "A data-driven ML project analyzing WHO datasets to predict life expectancy. Focused on understanding health patterns across nations using linear regression and feature engineering.",
      tags: [
        { name: "Python", color: "blue-text-gradient" },
        { name: "Pandas", color: "green-text-gradient" },
        { name: "ML", color: "pink-text-gradient" },
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-tGlo4k8Fsz3gi3KWuvKQMLXBj38Q8llqsA&s", 
      source_code_link: "https://github.com/starrylight90/Life-Expectancy-Prediction-using-Linear-Regression",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };