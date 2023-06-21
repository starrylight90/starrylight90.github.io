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
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
      link:'https://github.com/starrylight90',
    },
    {
      title: "Python Enthusiast",
      icon: mobile,
      link:'https://github.com/starrylight90?tab=repositories&q=&type=&language=jupyter+notebook',
    },
    {
      title: "Backend Developer",
      icon: backend,
      link:'https://github.com/starrylight90',
    },
    {
      title: "Content Creator",
      icon: creator,
      link:'https://www.medium.com/@swayam.pendgaonkar',
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "MYSQL",
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Self",
      icon: logo,
      iconBg: "#383E56",
      date: "May 2023 - May 2023",
      points: [
        "Created an engaging user interface with React.js to showcase personal projects and skills.",
        "Implemented responsive design techniques to ensure optimal performance on various devices and screen sizes.",
        "Independently planned and executed the entire development process of the portfolio website.",
        "Demonstrated a keen eye for design by crafting a visually impressive portfolio that reflects personal style and professionalism.",
      ],
    },
    {
      title: "Lead Software Developer",
      company_name: "Symbiosis Institute of Technology",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "March 2023 - Present",
      points: [
        "Successfully developed and executed a faculty feedback system across the entire Symbiosis College.",
        "Collaborated with key stakeholders to gather and analyze data after feedback collection, resulting in a 25% increase in overall satisfaction with the new system",
        "Led a cross-functional team of designers, developers, and educators to launch this new product.",
        "Developed a secure login system using industry best practices and encryption techniques to safeguard user data.",
      ],
    },
    {
      title: "Head of Operations",
      company_name: "Frameskip",
      icon: frameskip,
      iconBg: "#383E56",
      date: "Sept 2022 - Present",
      points: [
        "Optimized operational efficiency by implementing new procedures and systems.",
        "Led a team of 12 colleagues and managed day-to-day operations, successfully completing multiple projects on time and within budget.",
        "Developed and implemented company policies and procedures to ensure compliance with industry standards and regulations.",
        "Fostered a positive and collaborative work environment by encouraging open communication and providing mentorship and guidance to team members.",
      ],
    },
    {
      title: "Head of Ideas and Operations",
      company_name: "OFFMind (NPO)",
      icon: offmind,
      iconBg: "#E6DEDD",
      date: "Sept 2022 - Present",
      points: [
        "Developed and executed a strategic plan to establish partnerships with other NGOs, resulting in expanded services for underprivileged children in Pune.",
        "Managed daily operations and provided leadership to a team of volunteers, resulting in increased productivity and efficiency.",
        "Led the organization's efforts in fundraising, resulting in a 30% increase in donations.",
        "Participating in policy reviews and providing constructive feedback to other volunteers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Swayam proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Swayam does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Swayam optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Feedback System",
      description:
        "Web-based faculty feedback system enabling secure collection and analysis of feedback from students. Provides meaningful results to enhance academic coordination.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "JS",
          color: "green-text-gradient",
        },
        {
          name: "MYSQL",
          color: "pink-text-gradient",
        },
      ],
      image: feedback_system,
      source_code_link: "https://github.com/starrylight90",
    },
    {
      name: "Object Detection",
      description:
        "This project contains the TensorFlow Object Detection Machine Learning model. It is based on the labelimg and tensorflow model zoo.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "OpenCV",
          color: "pink-text-gradient",
        },
      ],
      image: object_detection,
      source_code_link: "https://github.com/starrylight90/Custom-Object-Detection-TFOD-2.0",
    },
    {
      name: "Neural Network",
      description:
        "This is a neural network from scratch without using TensorFlow or PyTorch just NumPy and math. It is a 28 x 28 handwritten image which is classified and then tagged.",
      tags: [
        {
          name: "Neurals",
          color: "blue-text-gradient",
        },
        {
          name: "ML",
          color: "green-text-gradient",
        },
        {
          name: "Jupyter Notebook",
          color: "pink-text-gradient",
        },
      ],
      image: mnnist,
      source_code_link: "https://github.com/starrylight90/MNIST-from-scratch",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };