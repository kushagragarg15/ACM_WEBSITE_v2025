import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020B05] via-[#0a1a0f] to-[#020B05] dark:from-[#e8e7c9] dark:via-[#f0f0d8] dark:to-[#e8e7c9]"></div>
      
      {/* Side Images with improved positioning */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[20vw] max-sm:w-[35vw] z-10">
        <img className="w-full h-auto object-contain opacity-80" src={image2} alt="ACM Left" />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[20vw] max-sm:w-[35vw] z-10">
        <img className="w-full h-auto object-contain opacity-80" src={image1} alt="ACM Right" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}>
          
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 leading-tight"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}>
            <span className="bg-gradient-to-r from-[#F1F1EF] via-white to-[#f1f1ef8d] dark:from-[#020B05] dark:via-gray-800 dark:to-[#020B05] bg-clip-text text-transparent block">
              Welcome to
            </span>
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent block mt-2">
              ACM LNMIIT
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-8">
            <p className="text-lg md:text-xl text-slate-300 dark:text-gray-600 font-light tracking-wide">
              {"The LNMIIT, Jaipur Student Chapter".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.4 + i * 0.1,
                  }}
                  className="inline-block mr-2">
                  {word}
                </motion.span>
              ))}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full text-white font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
                Explore Our Community
              </div>
              <div className="px-6 py-3 border border-slate-400 dark:border-gray-600 rounded-full text-slate-300 dark:text-gray-600 font-medium hover:bg-white/10 dark:hover:bg-gray-700/20 transition-all duration-300 cursor-pointer">
                Learn More
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-60">
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-32 right-32 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-40">
      </motion.div>
    </div>
  );
}
