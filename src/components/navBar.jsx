import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { titles } from "../utils/utils.js";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function NavBar({ isOpen, setOpen }) {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		// Check if dark mode is enabled in localStorage
		const isDarkMode = localStorage.getItem("darkMode") === "true";
		setIsDark(isDarkMode);
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
		}
	}, []);

	const toggleTheme = () => {
		const newDarkMode = !isDark;
		setIsDark(newDarkMode);
		if (newDarkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("darkMode", "true");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("darkMode", "false");
		}
		// Dispatch custom event for theme change
		window.dispatchEvent(
			new CustomEvent("themeChange", { detail: { isDark: newDarkMode } })
		);
	};

	const getPath = (title) => {
		const path = title.toLowerCase().replace(/\s+/g, "");
		return path === "home" ? "/" : `/${path}`;
	};

	return (
		<motion.div
			initial={{ y: "-100%", opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.1 }}
			className="fixed top-0 left-0 right-0 z-50 bg-[#020B05]/95 dark:bg-[#C5C4AF]/95 backdrop-blur-md border-b border-slate-200/20 dark:border-gray-700/30">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo/Brand */}
					<motion.div 
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3 }}
						className="flex-shrink-0">
						<Link to="/" className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
							ACM LNMIIT
						</Link>
					</motion.div>

					{/* Desktop Navigation */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-8">
							{titles.map((title, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 + i * 0.1 }}>
									<Link
										to={getPath(title)}
										className="text-slate-200 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10 dark:hover:bg-gray-700/20 relative group">
										{title}
										<span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
									</Link>
								</motion.div>
							))}
						</div>
					</div>

					{/* Theme Toggle & Mobile Menu */}
					<div className="flex items-center space-x-4">
						<motion.button
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.5 }}
							onClick={toggleTheme}
							className="p-2 rounded-lg hover:bg-gray-800/50 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110"
							aria-label="Toggle theme">
							{isDark ? (
								<Sun className="w-5 h-5 text-zinc-950" />
							) : (
								<Moon className="w-5 h-5 text-slate-200" />
							)}
						</motion.button>
						
						<div className="md:hidden">
							<Hamburger toggled={isOpen} toggle={setOpen} size={20} />
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
