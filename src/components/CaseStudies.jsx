import { Tilt } from "react-tilt";
import { caseStudies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const CaseStudyCard = ({ index, title, description, link, image }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 35, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image || "https://placehold.co/600x400/1a1a2e/6b7280?text=Case+Study"}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(link, "_blank")}
              className="black-gradient w-14 h-14 rounded-full flex justify-center items-center cursor-pointer"
            >
              <svg viewBox="0 0 1043.63 592.71" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                <path fill="#ffffff" d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138.19-23.17 250.27-51.76 250.27s-51.75-112.08-51.75-250.27 23.17-250.26 51.75-250.26 51.76 112.08 51.76 250.26"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 text-[14px] hover:underline"
          >
            Read Case Study →
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};

const CaseStudies = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Product Strategy & Execution</p>
        <h2 className={styles.sectionHeadText}>Product Case Studies.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Product management case studies exploring user problems, product
          strategy, growth, and execution.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={`case-study-${index}`} index={index} {...study} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(CaseStudies, "case-studies");