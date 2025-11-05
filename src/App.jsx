import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import TeamPage from "./pages/TeamPage";
import Membership from "./pages/Membership";
import ContactUs from "./pages/ContactUs";
import BlogsPage from "./components/Blogs/BlogsPage";
import NavBar from "./components/navBar";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
	const [isOpen, setOpen] = useState(false);

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<Router>
			<div className="relative overflow-x-hidden">
				<NavBar isOpen={isOpen} setOpen={setOpen} />
				{isOpen && (
					<div className="fixed inset-0 bg-black/80 md:hidden backdrop-blur-md z-50 flex items-center justify-center p-4">
						<div className="w-full max-w-sm bg-[#020B05]/95 dark:bg-[#f0e9ba]/95 backdrop-blur-md rounded-2xl border border-white/10 dark:border-gray-700/30 p-8">
							<div className="flex flex-col space-y-6">
								<div className="flex justify-between items-center mb-4">
									<h3 className="text-xl font-bold text-white dark:text-gray-800">Menu</h3>
									<button
										onClick={() => setOpen(false)}
										className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/20 transition-colors">
										<span className="text-white dark:text-gray-800">✕</span>
									</button>
								</div>
								
								{[
									{ name: "Home", path: "/" },
									{ name: "About Us", path: "/aboutus" },
									{ name: "Blog", path: "/blog" },
									{ name: "Gallery", path: "/gallery" },
									{ name: "Events", path: "/events" },
									{ name: "Membership", path: "/membership" },
									{ name: "Team", path: "/team" },
									{ name: "Contact Us", path: "/contactus" }
								].map((item, index) => (
									<Link
										key={index}
										onClick={() => setOpen(false)}
										to={item.path}
										className="block px-4 py-3 text-white dark:text-gray-800 hover:bg-white/10 dark:hover:bg-gray-700/20 rounded-lg transition-all duration-300 font-medium">
										{item.name}
									</Link>
								))}
							</div>
						</div>
					</div>
				)}
				<div className="pt-[7vh]">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/aboutus" element={<AboutUs />} />
						<Route path="/blog" element={<BlogsPage />} />
						<Route path="/gallery" element={<Gallery />} />
						<Route path="/events" element={<Events />} />
						<Route path="/membership" element={<Membership />} />
						<Route path="/team" element={<TeamPage />} />
						<Route path="/contactus" element={<ContactUs />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
