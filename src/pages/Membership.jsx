import { motion } from "framer-motion";
import Button from "../components/button";

export default function Membership() {
  const membershipBenefits = [
    {
      icon: "🎓",
      title: "Exclusive Workshops",
      description: "Access to hands-on workshops on cutting-edge technologies and industry best practices."
    },
    {
      icon: "🤝",
      title: "Networking Opportunities",
      description: "Connect with industry professionals, alumni, and like-minded peers in the computing field."
    },
    {
      icon: "🏆",
      title: "Competitions & Hackathons",
      description: "Participate in coding competitions, hackathons, and technical challenges with exciting prizes."
    },
    {
      icon: "📚",
      title: "ACM Digital Library",
      description: "Free access to ACM's vast collection of research papers, journals, and technical resources."
    },
    {
      icon: "💼",
      title: "Career Guidance",
      description: "Resume reviews, interview preparation, and career counseling from industry experts."
    },
    {
      icon: "🎯",
      title: "Leadership Development",
      description: "Opportunities to lead projects, organize events, and develop essential leadership skills."
    }
  ];

  const membershipTiers = [
    {
      name: "Student Member",
      price: "₹500/year",
      features: [
        "Access to all workshops and seminars",
        "Participation in competitions",
        "Networking events access",
        "Basic career guidance",
        "Chapter newsletter subscription"
      ],
      popular: false
    },
    {
      name: "Premium Member",
      price: "₹800/year",
      features: [
        "All Student Member benefits",
        "ACM Digital Library access",
        "Priority registration for events",
        "One-on-one mentorship sessions",
        "Exclusive industry connect sessions",
        "Certificate of membership"
      ],
      popular: true
    },
    {
      name: "Lifetime Member",
      price: "₹2000 (one-time)",
      features: [
        "All Premium Member benefits",
        "Lifetime access to all resources",
        "Alumni network access",
        "Special recognition at events",
        "Voting rights in chapter decisions",
        "Legacy member certificate"
      ],
      popular: false
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
              Join ACM LNMIIT
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 dark:text-gray-600 max-w-3xl mx-auto">
            Become part of our vibrant community and unlock exclusive opportunities for growth, learning, and networking.
          </motion.p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gradient-to-b from-[#1F2321] to-[#020B05] dark:from-[#fbfbd3] dark:to-[#f0e9ba]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-800 bg-clip-text text-transparent">
              Membership Benefits
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 p-1 rounded-3xl backdrop-blur-sm">
                <div className="bg-[#020B05]/95 dark:bg-[#FFFEDD]/95 backdrop-blur-md rounded-3xl p-6 h-full text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white dark:text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-slate-300 dark:text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Membership Tiers */}
      <div className="py-20 bg-gradient-to-b from-[#020B05] to-[#1F2321] dark:from-[#f0e9ba] dark:to-[#fbfbd3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-800 bg-clip-text text-transparent">
              Membership Plans
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative ${tier.popular ? 'transform scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`bg-gradient-to-br ${tier.popular ? 'from-green-500/30 via-blue-500/30 to-purple-500/30' : 'from-green-500/20 via-blue-500/20 to-purple-500/20'} p-1 rounded-3xl backdrop-blur-sm h-full`}>
                  <div className="bg-[#020B05]/95 dark:bg-[#FFFEDD]/95 backdrop-blur-md rounded-3xl p-8 h-full flex flex-col">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white dark:text-gray-800 mb-2">{tier.name}</h3>
                      <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">
                        {tier.price}
                      </div>
                    </div>
                    
                    <div className="flex-1 mb-8">
                      <ul className="space-y-3">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="text-green-400 mr-3 mt-1">✓</span>
                            <span className="text-slate-300 dark:text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      text="Choose Plan" 
                      variant={tier.popular ? "primary" : "outline"} 
                      className="w-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-b from-[#1F2321] to-[#020B05] dark:from-[#fbfbd3] dark:to-[#f0e9ba]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-800 bg-clip-text text-transparent">
              Ready to Join Our Community?
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 dark:text-gray-600 mb-8">
            Take the first step towards advancing your career in computing and technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button text="Apply for Membership" variant="primary" />
            <Button text="Contact Us" variant="outline" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}