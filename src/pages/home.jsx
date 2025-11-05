import glow from "../assets/glow.png";
import glow_light from "../assets/glow_light.png";
import { motion } from "framer-motion";
import Hero from "../components/Home/hero.jsx";
import Card from "../components/Home/card.jsx";
import pic from "../assets/pic.png";
import sir from "../assets/sir.png";
import { acmMotto, acmInfo, acmPara } from "../utils/utils.js";
import Button from "../components/button.jsx";
import { useState, useEffect } from "react";

export default function Home() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		// Check initial dark mode state from localStorage
		const darkMode = localStorage.getItem('darkMode') === 'true';
		setIsDarkMode(darkMode);

		// Listen for theme changes
		const handleThemeChange = (e) => {
			setIsDarkMode(e.detail.isDark);
		};

		window.addEventListener('themeChange', handleThemeChange);

		// Cleanup listener on unmount
		return () => {
			window.removeEventListener('themeChange', handleThemeChange);
		};
	}, []);

	return (
		<div className="min-h-screen bg-[#020B05] dark:bg-[#e8e7c9] text-white dark:text-gray-100">
			<Hero />
			<motion.div
				className="flex justify-center overflow-hidden mr-3"
				initial={{ y: "98%", opacity: 0.2 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 90, damping: 30 }}>
				{!isDarkMode ? (
					<img
						className="w-full object-cover max-w-full"
						src={glow}
						alt="glow effect"
					/>
				) : (
					<img
						className="w-full object-cover max-w-full"
						src={glow_light}
						alt="glow effect"
					/>
				)}
			</motion.div>
			<div className="flex flex-col gap-16 mt-10 pb-20">
				<Card k={0} p={pic} para1={acmInfo} para2={acmMotto} />
				<Card k={1} p={sir} para1={acmPara} />
			</div>
		</div>
	);
}