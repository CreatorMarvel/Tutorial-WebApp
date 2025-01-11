import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProcessOverview from "./components/ProcessOverview";
import Testimonial from "./components/Testimonial";

function App() {
	return (
		<>
			<Hero />
			<ProcessOverview />
			<AboutMe />
			<Testimonial />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
