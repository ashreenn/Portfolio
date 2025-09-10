import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
} from "../assets";

export const navLinks = [
	{
		id: "About",
		title: "About",
	},
	{
		id: "Projects",
		title: "Projects",
	},
	{
		id: "Contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "LinkedIn",
		link: "https://www.linkedin.com/in/ashreen-k",
	},
	{
		title: "GitHub",
		link: "https://github.com/ashreenn",
	},
	{
		title: "Kaggle",
		link: "https://www.kaggle.com/ashreenk3",
	},
	{
		title: "LEETCODE",
		link: "https://leetcode.com/bqD9txqnKh/",
	},
	{
		title: "Gmail",
		link: "kashreen13@gmail.com",
	},
];

const experiences = []
// 	{
// 		title: "Samsung R&D Institute India",
// 		company_name: "Research Intern",
// 		icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsJc7Y-DFKItGN8I_gex_4EiEMUcUVAmkAtLX8sMQe7k39uljoCzIfDWDRolv-DOwRPMU&usqp=CAU",
// 		iconBg: "#E6DEDD",
// 		date: "July 2023 - Present",
// 		points: [
// 			"Acquired proficiency in advanced Network Simulation software, notably OMNeT++ and NS3, to simulate and analyse real-world mobile networking scenarios involving over 100+ user devices.",
// 			"Engaged in developing Generative Adversarial Networks (GANs) to create synthetic data based on the simulations, enabling enhanced and efficient model training.",
// 			"Implemented Deep Learning techniques to analyse and optimise network performance achieving an accuracy of 96.5% in simulated environments, delivering data-driven insights aligned with the project's objectives.",
// 			// "Created and submitted the results and proof of concept for the proposed solution in the form of a Conference Publication to IEEE’s International Conference on Communications 2024.",
// 		],
// 	},
// 	{
// 		title: "Experiential Learning Center, TIET",
// 		company_name: "Summer Project Intern",
// 		icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyFh1jLt9uOwEWlVoGF2ZesD1CqBVwPLLT8FeDfGU&s",
// 		iconBg: "#E6DEDD",
// 		date: "June 2023 - July 2023",
// 		points: [
// 			"Designed a Smart Patrolling System for Indoor Public Safety with a focus on an IoT-based Remote Monitoring	System, guided by (Prof.) Dr. Tarunpreet Bhatia and (Prof.) Dr. Ranjeet K. Ranjan.",
// 			"Demonstrated proficiency in training, comparing, and delivering findings on a range of Deep Learning Object Detection Models, including YOLOv5s, FasterRCNN-MobileNetV3, ResNet50 and EfficientDet-d0.",
// 			"Successfully integrated multiple Raspberry-Pi modules and IoT platforms to strengthen alerting systems for threat detection.",
// 		],
// 	},
// ];

const academics = [
	{
		title:
			"B.Tech. Computer Science Engineering",
		company_name: "Vellore Institute of Technology, Bhopal",
		icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRafIyybHte9g9YSWnhAcxIS_Slh9VAVgPIdA&s",
		iconBg: "#E6DEDD",
		date: "August 2023 - Present",
		points: [],
	},
	{
		title: "CBSE Non - Medical (10+2)",
		company_name: "GHPS, Vasant Vihar, New Delhi",
		icon: "https://www.schoolmykids.com/smk-media/2018/10/Guru-Harkrishan-Public-School-Vasant-Vihar-Delhi.png",
		iconBg: "#383E56",
		date: "March 2010 - April 2023",
		points: [],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];
const technologies = [];

const projects = [
	{
		name: "Movie Recommendation System using SVD",
		description:
			"This is a machine learning project that builds a personalized movie recommender using Singular Value Decomposition (SVD). It optimizes user-item rating predictions through matrix factorization techniques, improving accuracy and efficiency for large datasets.",
		tags: [
			{
				name: "Data Analysis",
				color: "grey-text-gradient",
			},
			{
				name: "Machine Learning",
				color: "pink-text-gradient",
			},
			{
				name: "Kaggle",
				color: "blue-text-gradient",
			},
		],
		image:
			"https://static.vecteezy.com/system/resources/previews/004/846/351/non_2x/retro-cinema-projector-illustration-vector.jpg",
		source_code_link: "https://github.com/ashreenn/Movie_Recommendation_SVD",
		link2: true,
		source:
			"https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg",
		source_code_link_2:
			"https://colab.research.google.com/github/ashreenn/Movie_Recommendation_SVD/blob/main/SvdMovieRecomendation.ipynb",
	},
	{
		name: "OpenGL City Skyline",
		description:
			"This is a computer graphics project that creates a 3D animated city skyline using C++ and OpenGL. It features realistic details like buildings, trees, and moving clouds while ensuring smooth rendering for interactive visualization.",
		tags: [
			{
				name: "Computer Graphics",
				color: "green-text-gradient",
			},
			{
				name: "OpenGL",
				color: "pink-text-gradient",
			},
		],
		image:
			"https://mybackdrop.co.uk/wp-content/uploads/2017/06/City-Skyline-6-510x260.jpg",
		link2: false,
		source_code_link: "https://github.com/ashreenn/OpenGL_City_Skyline",
	},
	{
		name: "Asteroid Ensemble Classification",
		description:
			"This is a machine learning classification pipeline designed to predict asteroid types using ensemble models (Random Forest, LightGBM, XGBoost). With an accuracy of ~99.57%, it combines EDA, feature engineering, and parameter tuning to support planetary defense and automated asteroid monitoring.",
		tags: [
			{
				name: "Machine Learning",
				color: "pink-text-gradient",
			},
			{
				name: "Kaggle",
				color: "blue-text-gradient",
			},
		],
		image:
			"https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2023/02/illustration_of_asteroid_artist_s_impression/24703005-1-eng-GB/Illustration_of_asteroid_artist_s_impression_pillars.jpg",
		link2: true,
		source: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/189_Kaggle_logo_logos-512.png",
		source_code_link: "https://github.com/ashreenn/Kaggle_Notebooks/blob/main/asteroid-classification-rf-lgbm-xgb.ipynb",
		source_code_link_2: "https://www.kaggle.com/code/ashreenk3/asteroid-classification-rf-lgbm-xgb",
	},
	{
		name: "Harmful Object Detection Webapp",
		description:
			"This is a computer vision web application that detects harmful objects like guns and knives in uploaded images and videos. It combines RCNN-based models with a user-friendly interface, enabling real-time object detection for enhanced security.",
		tags: [
			{
				name: "Computer Vision",
				color: "orange-text-gradient",
			},
			{
				name: "Object Detection",
				color: "yellow-text-gradient",
			},
			{
				name: "Webapp",
				color: "green-text-gradient",
			},
		],
		image:
			"https://plus.unsplash.com/premium_photo-1663075817635-90ecf218ee5f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3VufGVufDB8fDB8fHww",
		source_code_link: "https://github.com/ashreenn/Harmful_Object_Detection",
		link2: false,
	},

];

export {
	services,
	technologies,
	experiences,
	academics,
	testimonials,
	projects,
};
