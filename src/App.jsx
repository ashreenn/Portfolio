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
	CaseStudies,
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
  <Experience />
  <CaseStudies />
  <Works />	
  {/* <Tech /> */}
  {/* <Feedbacks /> */}
  <div className="relative z-0">
    <Contact />
    <StarsCanvas />
  </div>
</div>
		</BrowserRouter>
	);
};

export default App;
