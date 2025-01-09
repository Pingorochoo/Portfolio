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
      <div className="absolute bottom-32 xs:bottom-10 w-full flex justify-center items-center pt-20 pb-20">
        <a href="#about">
          <div className="border-secondary w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 28, 28, 0] }}
              transition={{
                duration: 1.5,
                times: [0, 0.6, 0.85, 1],
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1" //podria quitar el m-1 y parece que no cambia
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
