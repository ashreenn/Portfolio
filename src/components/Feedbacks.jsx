import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const TestimonialCard = ({ testimonial, index }) => {
	return (
		<motion.div
			variants={fadeIn("", "spring", 0.5 * index, 0.75)}
			className="bg-black-200 p-10 rounded-2xl xs:w-[300px] w-full"
		>
			<p className="text-white font-black text-[50px]">"</p>
			<div className="mt-1">
				<p className="text-white tracking-wider text-[18px]">
					{testimonial.testimonial}
				</p>
				<div className="mt-7 justify-between items-center gap-1">
					<div className="flex-1 flex flex-col">
						<p className="text-[16px] text-white font-medium">
							<span className="blue-text-gradient">@ </span>
							{testimonial.name}
						</p>
						<p className="mt-1 text-secondary text-[12px]">
							{testimonial.designation}
							{" of " + testimonial.company}
						</p>
					</div>
					{/* <img
						src={testimonial.image}
						alt={"feedback-by-" + testimonial.name}
						className="w-10 h-10 rounded-full object-cover"
					/> */}
				</div>
			</div>
		</motion.div>
	);
};

const Feedbacks = () => {
	return (
		<div className="mt-12 bg-black-100 rounded-3xl">
			<div
				className={styles.padding + " bg-tertiary rounded-2xl min-h-[300px]"}
			>
				<motion.div variants={textVariant()}>
					<p className={styles.sectionSubText}>What others say</p>
					<h2 className={styles.sectionHeadText}>Testimonials.</h2>
				</motion.div>
			</div>
			<div className={styles.paddingX + " -mt-20 pb-14 flex flex-wrap gap-5"}>
				{testimonials.map((testimonial, index) => (
					<TestimonialCard
						key={"testimonial-" + index}
						testimonial={testimonial}
						index={index}
					/>
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Feedbacks, "Testimonials");
