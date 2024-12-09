import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* add this color to index.css */}
          <div className="bg-[#804dee] w-5 h-5 rounded-full"></div>
          <div className="violet-gradient w-1 h-40 sm:h-80 relative top-[-2px]"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#804dee]">Manuel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I&apos;m a fullstack MERN developer
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
