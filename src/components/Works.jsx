import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ project, index }) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.6, 0.75)}>
			<Tilt
				options={{ max: 35, scale: 1, speed: 450 }}
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
			>
				<div className="relative w-full h-[230px]">
					<img
						src={project.image}
						alt={project.name}
						className="w-full h-full object-cover rounded-2xl"
					/>
					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						<div
							onClick={() => window.open(project.source_code_link, "_blank")}
							className="bg-tertiary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img
								src={github}
								alt={"Link"}
								className="w-9 h-9 rounded-full object-fill"
							/>
						</div>
					</div>
					<div
						className={
							project.link2
								? "absolute inset-0 flex justify-end my-3 mr-[60px] card-img_hover"
								: "hidden"
						}
					>
						<div
							onClick={() => window.open(project.source_code_link_2, "_blank")}
							className="bg-tertiary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img
								src={project.source}
								alt={"Link"}
								className="w-7 h-7 rounded-full object-contain"
							/>
						</div>
					</div>
					<div
						className={
							project.link3
								? "absolute inset-0 flex justify-end my-3 mr-[110px] card-img_hover"
								: "hidden"
						}
					>
						<div
							onClick={() => window.open(project.source_code_link_3, "_blank")}
							className="bg-tertiary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img
								src={project.source2}
								alt={"Link"}
								className="w-7 h-7 rounded-full object-contain"
							/>
						</div>
					</div>
				</div>
				<div className="mt-6 ">
					<h3 className="text-white font-semibold text-[22px]">
						{project.name}
					</h3>
					<p className="mt-2 text-secondary">{project.description}</p>
				</div>
				<h4 className="mt-3">Domain:</h4>
				<div className="flex flex-wrap gap-2">
					{project.tags.map((tag) => (
						<p
							key={tag.name}
							className={"text-[12px] mt-0.5 mb-1 " + tag.color}
						>
							{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Projects So Far</p>
				<h2 className={styles.sectionHeadText}>
					Projects<span className="text-quat ">.</span>
				</h2>
			</motion.div>
			<div className="w-full flex ">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					Following are a few Projects that I have worked on.
				</motion.p>
			</div>
			<div className="mt-20 flex flex-wrap gap-8">
				{projects.map((project, index) => (
					<ProjectCard
						key={"project-" + index}
						project={project}
						index={index}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "Projects");
