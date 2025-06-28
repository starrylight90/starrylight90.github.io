import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon, link}) => {
  return (
    
    <Tilt className="xs:w-[250px] w-full"><a href={link}>
      <motion.div
      variants={fadeIn("right","spring", 0.5 * index,0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-36 h-36 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>

      </motion.div>
      </a>

    </Tilt>
    
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("","",0.1,1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
I'm a full-stack engineer and technical leader with experience across Python, Java, and modern web stacks like React.js and Node.js. 
My work bridges cutting-edge technology with meaningful impact - from leading large engineering teams to building affordable assistive 
devices for blind and deaf-blind individuals. I believe in fast iteration, human-centered design, and tech that's built to serve.

    </motion.p>
    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index= {index} {...service}/>
      ))}

    </div>
    
    </>
  )
}

export default SectionWrapper(About, "about")