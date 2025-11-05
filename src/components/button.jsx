import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Button({ text, variant = "primary", onClick, className = "" }) {
    const [hover, setHover] = useState(false);
    
    const variants = {
        primary: "bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg hover:shadow-xl",
        secondary: "bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
        outline: "bg-transparent border border-slate-400 dark:border-gray-600 text-slate-300 dark:text-gray-600 hover:bg-white/10 dark:hover:bg-gray-700/20"
    };

    return(
        <motion.button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
                relative overflow-hidden px-8 py-3 rounded-full font-medium text-sm md:text-base
                transition-all duration-300 cursor-pointer group
                ${variants[variant]}
                ${className}
            `}>
            
            {/* Animated background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={hover ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3 }}
            />
            
            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
                {text}
                <motion.div
                    animate={hover ? { x: 5 } : { x: 0 }}
                    transition={{ duration: 0.2 }}>
                    <ArrowRight size={16} />
                </motion.div>
            </span>
            
            {/* Glow effect */}
            <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-0 blur-xl"
                animate={hover ? { opacity: 0.3, scale: 1.2 } : { opacity: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
            />
        </motion.button>
    )
}