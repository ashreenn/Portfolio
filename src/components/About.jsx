import { React } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, link }) => {
	return (
		<Tilt className="xs:w-[250px] w-full cursor-pointer">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full blue-green-gradient p-[2px] rounded-[20px] shadow-card"
				onClick={() => window.open(link, "_blank")}
			>
				<div
					options={{ max: 45, scale: 1, speed: 450 }}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[180px] flex justify-evenly items-center flex-col"
				>
					{/* <img src={icon} alt={title} className="w-16 h-16 object-contain" /> */}
					<h1 className="font-design text-[70px] text-quat">
						{title.toLowerCase().charAt(0)}
					</h1>
					<h3 className="text-white text-center text-[20px] font-bold">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>
					Overview<span className="text-quat">.</span>
				</h2>
				<motion.p
					className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
					variants={fadeIn("", "", 0.1, 1)}
				>
					A Computer Science undergraduate at VIT Bhopal, passionate about turning ideas into intelligent,
					data-driven applications. My work spans machine learning, computer vision and software development<br></br>
					I specialize in combining data science, AI, with strong skills in Python, C++, Java, SQL, and modern ML frameworks. <br></br>
					I actively engage in platforms like Kaggle and Google Cloud to sharpen my skills and bring the latest tools into my projects.
				</motion.p>
				<p className={styles.sectionSubText + " mt-32"}>My Relevant Profiles</p>
				<h2 className={styles.sectionHeadText}>
					Profiles<span className="text-quat">.</span>
				</h2>
				<div className="mt-20 flex flex-wrap gap-10">
					{services.map((service, index) => (
						<ServiceCard
							key={service.title}
							title={service.title}
							link={service.link}
							index={index}
							{...services}
						/>
					))}
				</div>
			</motion.div>
		</>
	);
};

export default SectionWrapper(About, "About");
