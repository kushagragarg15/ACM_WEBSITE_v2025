import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import ComingSoon from "./pages/ComingSoon";
import Heading from "./components/Event/Heading";
import Content from "./components/Event/Content";
import AOS from "aos";
import "aos/dist/aos.css";
import Team from "./components/Team/team";
import PhotoGallery from "./components/Photo/photogallery";
import BlogsPage from "./components/Blogs/BlogsPage";
import NavBar from "./components/navBar";

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
					<div className="fixed inset-0 bg-black bg-opacity-70 sm:hidden backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
						<div className="w-full h-full dark:bg-[#f0e9ba] bg-zinc-900 rounded-lg">
							<div className="flex flex-col text-white dark:text-zinc-900 text-xl font-semibold justify-center items-center gap-12 h-full">
								<div
									onClick={() => setOpen(false)}
									className="border-2 border-white dark:border-zinc-900 px-4 rounded-full p-2 hover:bg-white/10 dark:hover:bg-zinc-900/10 cursor-pointer transition-colors">
									Close
								</div>
								<Link onClick={() => setOpen(false)} to="/">
									Home
								</Link>
								<Link onClick={() => setOpen(false)} to="/aboutus">
									About Us
								</Link>
								<Link onClick={() => setOpen(false)} to="/blog">
									Blog
								</Link>
								<Link onClick={() => setOpen(false)} to="/gallery">
									Gallery
								</Link>
								<Link onClick={() => setOpen(false)} to="/events">
									Events
								</Link>
								<Link onClick={() => setOpen(false)} to="/membership">
									Membership
								</Link>
								<Link onClick={() => setOpen(false)} to="/team">
									Team
								</Link>
								<Link onClick={() => setOpen(false)} to="/contactus">
									Contact Us
								</Link>
							</div>
						</div>
					</div>
				)}
				<div className="pt-[7vh]">
					{" "}
					{/* Prevent content from going behind fixed navbar */}
					<Routes>
						<Route
							path="/"
							element={
								<div className="min-h-fit bg-[#020B05] dark:bg-[#e8e7c9]">
									<Home />
									<PhotoGallery />
									<Heading />
									<Content />
									<Team />
								</div>
							}
						/>
						<Route path="/aboutus" element={<ComingSoon />} />
						<Route path="/blog" element={<BlogsPage />} />
						<Route path="/gallery" element={<ComingSoon />} />
						<Route path="/events" element={<ComingSoon />} />
						<Route path="/membership" element={<ComingSoon />} />
						<Route path="/team" element={<ComingSoon />} />
						<Route path="/contactus" element={<ComingSoon />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
