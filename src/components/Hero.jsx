import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div
				className={
					styles.paddingX +
					" absolute inset-0 to top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5"
				}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#57BEFF]" />
					<div className="w-1 sm:h-80 h-40 blue-gradient" />
				</div>
				<div>
					<h1 className={styles.heroHeadText + " flex flex-wrap"}>
						Hi, I'm &nbsp;
						<span className="text-[#57BEFF] flex flex-wrap">
							{" "}
							Ashreen Kaur{" "}
						</span>
					</h1>
					<div
						className={
							styles.heroSubText + " mt-2 text-white-100 flex flex-wrap"
						}
					>
						<p>Budding Software Engineer | B.Tech. CSE student @ VIT Bhopal</p>
					</div>
				</div>
			</div>
			<ComputersCanvas />

			<div className="absolute sm:bottom-[72px] bottom-16 w-full flex justify-center items-center">
				<a href="#About">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.2,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
