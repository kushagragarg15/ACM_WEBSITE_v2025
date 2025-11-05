import { motion } from "framer-motion";
import Heading from "../components/Event/Heading";
import Content from "../components/Event/Content";
import Button from "../components/button";

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Web Development Workshop",
      date: "March 15, 2025",
      time: "2:00 PM - 5:00 PM",
      venue: "Computer Lab 1",
      description: "Learn modern web development with React, Node.js, and MongoDB. Hands-on session with industry experts.",
      type: "Workshop",
      status: "upcoming"
    },
    {
      id: 2,
      title: "AI/ML Seminar Series",
      date: "March 22, 2025",
      time: "10:00 AM - 12:00 PM",
      venue: "Auditorium",
      description: "Explore the latest trends in Artificial Intelligence and Machine Learning with guest speakers from top tech companies.",
      type: "Seminar",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Coding Competition",
      date: "April 5, 2025",
      time: "9:00 AM - 6:00 PM",
      venue: "Multiple Labs",
      description: "Annual coding competition with exciting prizes. Test your programming skills against the best minds.",
      type: "Competition",
      status: "upcoming"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Cybersecurity Awareness",
      date: "February 10, 2025",
      description: "Workshop on cybersecurity best practices and ethical hacking fundamentals.",
      type: "Workshop",
      status: "completed"
    },
    {
      id: 5,
      title: "Tech Talk: Cloud Computing",
      date: "January 28, 2025",
      description: "Industry expert session on cloud technologies and career opportunities.",
      type: "Tech Talk",
      status: "completed"
    }
  ];

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
              Events & Activities
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 dark:text-gray-600 max-w-3xl mx-auto">
            Join us for exciting workshops, seminars, competitions, and networking events designed to enhance your technical skills.
          </motion.p>
        </div>
      </div>

      {/* Event Components */}
      <div className="py-16">
        <Heading />
        <Content />
      </div>

      {/* Upcoming Events */}
      <div className="py-20 bg-gradient-to-b from-[#1F2321] to-[#020B05] dark:from-[#fbfbd3] dark:to-[#f0e9ba]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-800 bg-clip-text text-transparent">
              Upcoming Events
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 p-1 rounded-3xl backdrop-blur-sm">
                <div className="bg-[#020B05]/95 dark:bg-[#FFFEDD]/95 backdrop-blur-md rounded-3xl p-6 h-full">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full">
                      {event.type}
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-yellow-500 text-black rounded-full">
                      Upcoming
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white dark:text-gray-800 mb-3">{event.title}</h3>
                  <div className="space-y-2 mb-4 text-sm text-slate-300 dark:text-gray-600">
                    <p>📅 {event.date}</p>
                    <p>🕐 {event.time}</p>
                    <p>📍 {event.venue}</p>
                  </div>
                  <p className="text-slate-300 dark:text-gray-700 text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <Button text="Register Now" variant="primary" className="w-full" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Past Events */}
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-800 bg-clip-text text-transparent">
              Past Events
            </span>
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-500/20 via-slate-500/20 to-gray-600/20 p-1 rounded-2xl backdrop-blur-sm">
                <div className="bg-[#020B05]/95 dark:bg-[#FFFEDD]/95 backdrop-blur-md rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-3 py-1 text-xs font-medium bg-gray-500 text-white rounded-full">
                      {event.type}
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-green-500 text-white rounded-full">
                      Completed
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white dark:text-gray-800 mb-2">{event.title}</h4>
                  <p className="text-sm text-slate-300 dark:text-gray-600 mb-3">📅 {event.date}</p>
                  <p className="text-slate-300 dark:text-gray-700 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}