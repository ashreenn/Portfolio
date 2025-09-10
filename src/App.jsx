import { BrowserRouter } from "react-router-dom";

import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
} from "./components";

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-black">
				<div>
					<Navbar />
					<Hero />
				</div>
				<About />
				<Works />
				<Experience />
				{/* <Tech /> */}
				{/* <Feedbacks /> */}
				<div children="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
