import { motion } from "framer-motion";
import Card from "../components/Home/card";
import pic from "../assets/pic.png";
import sir from "../assets/sir.png";
import { acmMotto, acmInfo, acmPara } from "../utils/utils.js";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#020B05] dark:bg-[#e8e7c9] text-white dark:text-gray-100">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-br from-[#020B05] via-[#0a1a0f] to-[#020B05] dark:from-[#e8e7c9] dark:via-[#f0f0d8] dark:to-[#e8e7c9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-800 bg-clip-text text-transparent">
              About ACM LNMIIT
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 dark:text-gray-600 max-w-3xl mx-auto">
            Discover our mission, vision, and the passionate community that drives innovation in computing at LNMIIT.
          </motion.p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-16">
        <div className="flex flex-col gap-16">
          <Card k={0} p={pic} para1={acmInfo} para2={acmMotto} />
          <Card k={1} p={sir} para1={acmPara} />
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-20 bg-gradient-to-b from-[#1F2321] to-[#020B05] dark:from-[#fbfbd3] dark:to-[#f0e9ba]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 p-1 rounded-3xl backdrop-blur-sm">
              <div className="bg-[#020B05]/95 dark:bg-[#FFFEDD]/95 backdrop-blur-md rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-white dark:text-gray-800 mb-6">Our Mission</h3>
                <p className="text-slate-300 dark:text-gray-700 leading-relaxed">
                  To advance computing as a science and profession by fostering innovation, 
                  providing educational opportunities, and building a strong community of 
                  computing professionals at LNMIIT.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 p-1 rounded-3xl backdrop-blur-sm">
              <div className="bg-[#020B05]/95 dark:bg-[#FFFEDD]/95 backdrop-blur-md rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-white dark:text-gray-800 mb-6">Our Vision</h3>
                <p className="text-slate-300 dark:text-gray-700 leading-relaxed">
                  To be the leading student chapter that bridges the gap between academic 
                  learning and industry practices, creating future leaders in computing 
                  and technology.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}