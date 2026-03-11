import { IoSparklesSharp } from 'react-icons/io5';
import { FaBrain, FaChartLine, FaUserGraduate } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MobileAIBanner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-700 to-blue-500 shadow-lg md:shadow-2xl mx-4 md:mx-4"
    >
      {/* Simplified glowing background */}
      <div className="absolute  -left-10 w-32 h-32 bg-purple-600 rounded-full filter blur-[60px] opacity-20"></div>
      
      <div className="relative z-10 p-5 md:p-8">
        <div className="flex flex-col gap-5">
          {/* Compact header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <motion.div 
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 4,
                  ease: "easeInOut"
                }}
              >
                <IoSparklesSharp className="text-3xl text-yellow-300" />
              </motion.div>
              <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm text-xs font-medium text-white rounded-full">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-1.5 inline-block animate-pulse"></span>
                AI EDUCATION
              </span>
            </div>
          </div>

          {/* Compact content */}
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3 leading-snug">
              Smarter Learning with <span className="text-yellow-300">AI</span>
            </h2>
            <p className="text-sm md:text-base text-white/80 mb-4 md:mb-6">
              Personalized AI tutoring that adapts to your learning style and pace.
            </p>

            {/* Stacked features for mobile */}
            <div className="grid grid-cols-1 gap-3 mb-5 md:grid-cols-3 md:gap-4">
              {[
                { icon: <FaBrain className="text-xl md:text-2xl" />, title: "Smart Tutor", desc: "24/7 guidance" },
                { icon: <FaChartLine className="text-xl md:text-2xl" />, title: "Progress AI", desc: "Real-time tracking" },
                { icon: <FaUserGraduate className="text-xl md:text-2xl" />, title: "Custom Paths", desc: "Tailored to you" }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -3 }}
                  className="p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-lg md:rounded-xl border border-white/10 flex items-start gap-3"
                >
                  <div className="text-yellow-300 mt-0.5">{feature.icon}</div>
                  <div>
                    <h4 className="font-bold text-white text-sm md:text-base">{feature.title}</h4>
                    <p className="text-xs md:text-sm text-white/70">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stacked CTAs for mobile */}
            
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileAIBanner;