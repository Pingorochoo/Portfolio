import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useEffect, useState } from "react";
import { Tilt } from "react-tilt";

const ServiceCard = ({ index, title, icon, isTouchDevice }) => {

  const tiltOptions = isTouchDevice
    ? { max: 0, scale: 1, speed: 0 }
    : { max: 45, scale: 1, speed: 450 };
  return (
    <Tilt className="xs:w-[250px] w-full" options={tiltOptions}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] 
        py-5 px-12 min-h-[280px] flex justify-evenly 
        items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center ">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a proficient software developer with expertise in frontend
        technologies like HTML5, CSS3, and JavaScript, along with frameworks
        such as React and Redux Toolkit. I also have solid experience working
        with backend technologies like Node.js and Express.js, and I&apos;m
        comfortable handling databases like MongoDB, MySQL, and PostgreSQL.
        Additionally, I leverage tools like Git for version control, Postman for
        API testing, and embrace Object-Oriented Programming principles with
        Java. I focus on building efficient, scalable, and user-friendly
        applications to meet real-world needs. Let&apos;s collaborate to create
        innovative and impactful solutions!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            isTouchDevice={isTouchDevice}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
