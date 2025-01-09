/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
const TechsCard = ({ tech }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    iconStyle={{ background: tech.iconBg }}
    icon={
      <div className="flex justify-center items-center h-full w-full">
        <img src={tech.icon} className="w-[60%] h-[60%] object-contain" />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{tech.title}</h3>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {tech.points.map((point, index) => (
        <li key={`tech-point-${index}`} className="text-white-100">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I Work With</p>
        <h2 className={styles.sectionHeadText}>Tools & Technologies</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {technologies.map((tech, index) => (
            <TechsCard key={index} tech={tech} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "Tech");
