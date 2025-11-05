import { motion } from "framer-motion";
import PhotoGallery from "../components/Photo/photogallery";
import { imageAssets } from "../assets/assets";
import BackgroundGradient from "../components/ui/background-gradient";

export default function Gallery() {
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
              Event Gallery
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 dark:text-gray-600 max-w-3xl mx-auto">
            Explore the vibrant moments from our workshops, seminars, competitions, and community events.
          </motion.p>
        </div>
      </div>

      {/* Photo Gallery Component */}
      <PhotoGallery />

      {/* Additional Gallery Grid */}
      <div className="py-20 bg-gradient-to-b from-[#020B05] to-[#1F2321] dark:from-[#f0e9ba] dark:to-[#fbfbd3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-800 bg-clip-text text-transparent">
              Event Highlights
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {imageAssets.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group">
                <BackgroundGradient className="rounded-2xl p-1">
                  <div className="relative overflow-hidden rounded-2xl bg-black/20 backdrop-blur-sm">
                    <img
                      className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                      src={item.image}
                      alt={`Event ${index + 1}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium">Event Moment #{index + 1}</p>
                      <p className="text-xs opacity-80">ACM LNMIIT Activity</p>
                    </div>
                  </div>
                </BackgroundGradient>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}