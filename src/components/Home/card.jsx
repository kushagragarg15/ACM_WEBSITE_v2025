import { useEffect, useState } from "react";
import glow2 from "../../assets/glow2.png";
import { motion } from "motion/react";

export default function Card({ k, p, para1, para2 }) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const cardPosition = scrollY + windowHeight * 0.8;
      
      if (cardPosition > 400) {
        setIsInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative max-w-6xl mx-auto px-4 mb-20">
      
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 p-1 backdrop-blur-sm">
        <div className="bg-[#020B05]/95 dark:bg-[#FFFEDD]/95 backdrop-blur-md rounded-3xl overflow-hidden">
          
          {/* Header Section */}
          {!k && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="px-8 md:px-16 pt-12 pb-8">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-800 bg-clip-text text-transparent">
                About Us
              </h2>
            </motion.div>
          )}

          {k && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="px-8 md:px-16 pt-12 pb-8">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-800 bg-clip-text text-transparent leading-tight">
                Meet Our Chapter's<br />Faculty Mentor
              </h2>
            </motion.div>
          )}

          {/* Content Section */}
          <div className={`flex flex-col ${k ? 'lg:flex-col-reverse' : 'lg:flex-row'} items-center gap-8 px-8 md:px-16 pb-16`}>
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: k ? 50 : -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: k ? 50 : -50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-1 space-y-6">
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-slate-300 dark:text-gray-700 leading-relaxed text-lg">
                  {para1}
                </p>
                {para2 && (
                  <p className="text-slate-300 dark:text-gray-700 leading-relaxed text-lg mt-4">
                    {para2}
                  </p>
                )}
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex-1 max-w-md">
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 dark:border-gray-700/30">
                  <img 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    src={p} 
                    alt={k ? "Faculty Mentor" : "About ACM"}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Background Glow Effect */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`absolute ${k ? 'top-0' : 'bottom-0'} left-1/2 transform -translate-x-1/2 w-full h-1/2`}>
              <img 
                className={`w-full h-full object-cover opacity-20 ${k ? 'rotate-180' : ''}`} 
                src={glow2} 
                alt="Glow effect"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
