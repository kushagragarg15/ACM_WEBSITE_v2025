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
									"Home", "About Us", "Blog", "Gallery", "Events", "Membership", "Team", "Contact Us"
								].map((title, index) => {
									const handleMobileNavClick = () => {
										setOpen(false);
										
										if (title === "Blog") {
											// Blog is a separate page
											window.location.href = "/blog";
										} else {
											// Scroll to section
											const sectionId = title.toLowerCase().replace(/\s+/g, "");
											setTimeout(() => {
												const element = document.getElementById(sectionId);
												if (element) {
													const navHeight = 80;
													const elementPosition = element.offsetTop - navHeight;
													window.scrollTo({
														top: elementPosition,
														behavior: 'smooth'
													});
												}
											}, 100);
										}
									};

									return (
										<button
											key={index}
											onClick={handleMobileNavClick}
											className="block w-full text-left px-4 py-3 text-white dark:text-gray-800 hover:bg-white/10 dark:hover:bg-gray-700/20 rounded-lg transition-all duration-300 font-medium">
											{title}
										</button>
									);
								})}
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
									<section id="home">
										<Home />
									</section>
									<section id="aboutus">
										{/* About Us content is already in Home component cards */}
									</section>
									<section id="gallery">
										<PhotoGallery />
									</section>
									<section id="events">
										<Heading />
										<Content />
									</section>
									<section id="team">
										<Team />
									</section>
									<section id="membership">
										{/* Add membership content here or create component */}
										<div className="py-20 bg-gradient-to-b from-[#1F2321] to-[#020B05] dark:from-[#fbfbd3] dark:to-[#f0e9ba] text-center">
											<div className="max-w-4xl mx-auto px-4">
												<h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-800 bg-clip-text text-transparent mb-8">
													Membership
												</h2>
												<p className="text-xl text-slate-300 dark:text-gray-600 mb-8">
													Join our vibrant community of computing enthusiasts and unlock exclusive opportunities for growth and learning.
												</p>
												<div className="bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 p-1 rounded-3xl backdrop-blur-sm max-w-2xl mx-auto">
													<div className="bg-[#020B05]/95 dark:bg-[#FFFEDD]/95 backdrop-blur-md rounded-3xl p-8">
														<h3 className="text-2xl font-bold text-white dark:text-gray-800 mb-4">Benefits of Joining ACM LNMIIT</h3>
														<ul className="text-left text-slate-300 dark:text-gray-700 space-y-3">
															<li>• Access to exclusive workshops and seminars</li>
															<li>• Networking opportunities with industry professionals</li>
															<li>• Participation in coding competitions and hackathons</li>
															<li>• Career guidance and mentorship programs</li>
															<li>• Access to ACM Digital Library resources</li>
															<li>• Leadership development opportunities</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</section>
									<section id="contactus">
										{/* Add contact section */}
										<div className="py-20 bg-gradient-to-b from-[#020B05] to-[#1F2321] dark:from-[#f0e9ba] dark:to-[#fbfbd3] text-center">
											<div className="max-w-4xl mx-auto px-4">
												<h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-800 bg-clip-text text-transparent mb-8">
													Contact Us
												</h2>
												<p className="text-xl text-slate-300 dark:text-gray-600 mb-12">
													Get in touch with us for any queries, collaborations, or to join our community.
												</p>
												<div className="grid md:grid-cols-2 gap-8">
													<div className="bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 p-1 rounded-3xl backdrop-blur-sm">
														<div className="bg-[#020B05]/95 dark:bg-[#FFFEDD]/95 backdrop-blur-md rounded-3xl p-6">
															<h3 className="text-xl font-bold text-white dark:text-gray-800 mb-4">Visit Us</h3>
															<p className="text-slate-300 dark:text-gray-700">
																The LNM Institute of Information Technology<br/>
																Rupa ki Nangal, Post-Sumel<br/>
																Via-Jamdoli, Jaipur - 302031<br/>
																Rajasthan, India
															</p>
														</div>
													</div>
													<div className="bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 p-1 rounded-3xl backdrop-blur-sm">
														<div className="bg-[#020B05]/95 dark:bg-[#FFFEDD]/95 backdrop-blur-md rounded-3xl p-6">
															<h3 className="text-xl font-bold text-white dark:text-gray-800 mb-4">Connect</h3>
															<div className="text-slate-300 dark:text-gray-700 space-y-2">
																<p>📧 acm@lnmiit.ac.in</p>
																<p>🌐 www.lnmiit.ac.in</p>
																<p>📱 Follow us on social media</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</section>
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
