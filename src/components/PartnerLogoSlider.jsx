import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';

const companyLogos = [
  { src: '/company-logo/1.png', name: 'ECLAT' },
  { src: '/company-logo/2.png', name: 'Max Healthcare' },
  { src: '/company-logo/3.png', name: 'Medigreen Pharmaceuticals' },
  { src: '/company-logo/4.png', name: 'Tender Palm Hospital' },

  
];

export default function HiringPartnersSlider() {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container  mx-auto px-4">
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Our <span className="text-blue-600">Hiring Partners</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by industry leaders who recruit our graduates
          </p>
        </motion.div>

        {/* Auto-sliding logo carousel */}
        <div className="relative">
          {/* Gradient fade effects on sides */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            speed={800}
            breakpoints={{
              480: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 4 }
            }}
            className="py-2"
          >
            {companyLogos.map((company, index) => (
              <SwiperSlide key={index}>
                <div className="flex  flex-col items-center p-4 h-full">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all w-full h-full flex items-center justify-center border border-gray-100"
                  >
                    {/* <img
                      src={`scp/${company.src}`}
                      alt={company.name}
                      className="h-12 object-contain  transition-all duration-300"
                      loading="lazy"
                    /> */}
                    <img
                      src={`${import.meta.env.BASE_URL}${company.src}`}
                      alt={company.name}
                       className="h-12 object-contain  transition-all duration-300"
                    />
                  </motion.div>
                  <p className="mt-3 text-sm font-medium text-gray-700 text-center">
                    {company.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Stats counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="inline-block bg-blue-50 rounded-full px-6 py-2">
            <p className="text-blue-600 font-medium">
              <span className="text-2xl font-bold">850+</span> successful placements
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}