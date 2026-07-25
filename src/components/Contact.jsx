import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
	return (
		<div
			className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
		>
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>
					Contact<span className="text-quat">.</span>
				</h3>

				<p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
					Feel free to reach out — always happy to connect.
				</p>

				<div className="mt-12 flex flex-col gap-6">
					<a
						href="mailto:kashreen13@gmail.com"
						className="flex items-center gap-4 bg-tertiary py-4 px-6 rounded-lg text-white font-medium hover:opacity-80 transition-opacity w-fit"
					>
						<span className="text-secondary">Email:</span>
						<span className="underline">kashreen13@gmail.com</span>
					</a>

					<a
						href="https://www.linkedin.com/in/ashreen-k"
						target="_blank"
						rel="noreferrer"
						className="flex items-center gap-4 bg-tertiary py-4 px-6 rounded-lg text-white font-medium hover:opacity-80 transition-opacity w-fit"
					>
						<span className="text-secondary">LinkedIn:</span>
						<span className="underline">linkedin.com/in/ashreen-k</span>
					</a>
				</div>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "Contact");