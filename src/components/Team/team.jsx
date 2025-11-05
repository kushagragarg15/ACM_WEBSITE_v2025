import { teamMembers } from '../../assets/assets.js';
import Button from '../button.jsx';
import { EvervaultCard } from '../ui/evervault-card.jsx';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Team = () => {
  const [showAllTeam, setShowAllTeam] = useState(false);
  
  const leadershipTeam = teamMembers.filter(member => member.isLeadership);
  const otherMembers = teamMembers.filter(member => !member.isLeadership);
  
  const displayedMembers = showAllTeam ? teamMembers : leadershipTeam;

  const handleShowCompleteTeam = () => {
    setShowAllTeam(!showAllTeam);
  };

  return (
    <div className="py-20 bg-gradient-to-b from-[#1F2321] to-[#020B05] dark:from-[#fbfbd3] dark:to-[#f0e9ba] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-800 bg-clip-text text-transparent mb-4">
            {showAllTeam ? "Complete Team 2025" : "Leadership Team 2025"}
          </h2>
          <p className="text-xl text-slate-300 dark:text-gray-600 max-w-2xl mx-auto">
            {showAllTeam 
              ? "Meet our complete team of dedicated members working together to build an amazing ACM community"
              : "Meet our dedicated leadership team driving innovation and excellence in ACM LNMIIT"
            }
          </p>
        </div>

        {/* Team Cards */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={showAllTeam ? "complete" : "leadership"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`grid grid-cols-1 md:grid-cols-2 ${showAllTeam ? 'lg:grid-cols-4' : 'lg:grid-cols-4'} gap-8 mb-12`}>
            {displayedMembers.map((item, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 p-1 backdrop-blur-sm">
                <EvervaultCard className="w-full h-[400px] dark:bg-gradient-to-b dark:from-[#fbfbd3] dark:to-[#f0e9ba] bg-gradient-to-b from-[#1F2321] to-[#020B05] rounded-2xl">
                  <div className="flex flex-col h-full p-6 group-hover:transform group-hover:scale-105 transition-all duration-500">
                    {/* Image */}
                    <div className="relative mb-4 overflow-hidden rounded-xl">
                      <img
                        className="w-full h-48 object-cover"
                        src={item.image}
                        alt={item.name}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white dark:text-gray-800 mb-2">
                          {item.name}
                        </h3>
                        <p className="text-slate-300 dark:text-gray-600 mb-4">
                          {item.designation}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {item.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </EvervaultCard>
              </div>
            </div>
          ))}
          </motion.div>
        </AnimatePresence>

        {/* Button */}
        <div className="text-center">
          <Button 
            text={showAllTeam ? "Show Leadership Only" : "Meet Our Complete Team"} 
            variant="primary" 
            onClick={handleShowCompleteTeam}
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
