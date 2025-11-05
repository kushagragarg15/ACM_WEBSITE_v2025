import { motion } from "framer-motion";
import Button from "../components/button";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Us",
      details: [
        "The LNM Institute of Information Technology",
        "Rupa ki Nangal, Post-Sumel",
        "Via-Jamdoli, Jaipur - 302031",
        "Rajasthan, India"
      ]
    },
    {
      icon: "📧",
      title: "Email Us",
      details: [
        "acm@lnmiit.ac.in",
        "info.acm@lnmiit.ac.in",
        "events.acm@lnmiit.ac.in"
      ]
    },
    {
      icon: "📱",
      title: "Connect With Us",
      details: [
        "LinkedIn: ACM LNMIIT",
        "Instagram: @acm_lnmiit",
        "Twitter: @acmlnmiit",
        "GitHub: ACM-LNMIIT"
      ]
    },
    {
      icon: "🕐",
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed",
        "Emergency: Available 24/7"
      ]
    }
  ];

  const teamContacts = [
    {
      name: "Yashi Srivastava",
      position: "Chairperson",
      email: "chairperson@acmlnmiit.ac.in",
      phone: "+91 98765 43210"
    },
    {
      name: "Kushagra Garg",
      position: "Vice Chairperson",
      email: "vicechairperson@acmlnmiit.ac.in",
      phone: "+91 98765 43211"
    },
    {
      name: "Nikhil Gupta",
      position: "Treasurer",
      email: "treasurer@acmlnmiit.ac.in",
      phone: "+91 98765 43212"
    },
    {
      name: "Mainak Das",
      position: "Secretary",
      email: "secretary@acmlnmiit.ac.in",
      phone: "+91 98765 43213"
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
              Contact Us
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 dark:text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for any queries, collaborations, or to join our vibrant computing community.
          </motion.p>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="py-20 bg-gradient-to-b from-[#1F2321] to-[#020B05] dark:from-[#fbfbd3] dark:to-[#f0e9ba]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 p-1 rounded-3xl backdrop-blur-sm">
              <div className="bg-[#020B05]/95 dark:bg-[#FFFEDD]/95 backdrop-blur-md rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-white dark:text-gray-800 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 dark:text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 dark:bg-gray-700/20 border border-white/20 dark:border-gray-600/30 rounded-lg text-white dark:text-gray-800 placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 dark:text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 dark:bg-gray-700/20 border border-white/20 dark:border-gray-600/30 rounded-lg text-white dark:text-gray-800 placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 dark:text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 dark:bg-gray-700/20 border border-white/20 dark:border-gray-600/30 rounded-lg text-white dark:text-gray-800 placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 dark:text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 dark:bg-gray-700/20 border border-white/20 dark:border-gray-600/30 rounded-lg text-white dark:text-gray-800 placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  <Button text="Send Message" variant="primary" className="w-full" />
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 p-1 rounded-2xl backdrop-blur-sm">
                  <div className="bg-[#020B05]/95 dark:bg-[#FFFEDD]/95 backdrop-blur-md rounded-2xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{info.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white dark:text-gray-800 mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-slate-300 dark:text-gray-700 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Team Contacts */}
      <div className="py-20 bg-gradient-to-b from-[#020B05] to-[#1F2321] dark:from-[#f0e9ba] dark:to-[#fbfbd3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-800 bg-clip-text text-transparent">
              Leadership Contacts
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamContacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 p-1 rounded-2xl backdrop-blur-sm">
                <div className="bg-[#020B05]/95 dark:bg-[#FFFEDD]/95 backdrop-blur-md rounded-2xl p-6 text-center">
                  <h3 className="text-lg font-bold text-white dark:text-gray-800 mb-2">{contact.name}</h3>
                  <p className="text-green-400 dark:text-green-600 font-medium mb-3">{contact.position}</p>
                  <div className="space-y-2 text-sm text-slate-300 dark:text-gray-700">
                    <p>📧 {contact.email}</p>
                    <p>📱 {contact.phone}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Section (Placeholder) */}
      <div className="py-20 bg-gradient-to-b from-[#1F2321] to-[#020B05] dark:from-[#fbfbd3] dark:to-[#f0e9ba]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-800 bg-clip-text text-transparent">
              Find Us
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 p-1 rounded-3xl backdrop-blur-sm">
            <div className="bg-[#020B05]/95 dark:bg-[#FFFEDD]/95 backdrop-blur-md rounded-3xl p-8 text-center">
              <div className="h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h3 className="text-2xl font-bold text-white dark:text-gray-800 mb-2">Interactive Map</h3>
                  <p className="text-slate-300 dark:text-gray-700">
                    Campus map and directions will be available here
                  </p>
                  <Button text="Get Directions" variant="outline" className="mt-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}