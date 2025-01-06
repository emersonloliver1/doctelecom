import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: "Maria Silva",
    location: "Benedito Bentes",
    rating: 5,
    text: "Internet excelente! Nunca tive problemas e o suporte é muito atencioso. Recomendo a todos do bairro."
  },
  {
    name: "João Santos",
    location: "Benedito Bentes",
    rating: 5,
    text: "Melhor custo-benefício da região. Instalação rápida e profissional, sinal sempre estável."
  },
  {
    name: "Ana Oliveira",
    location: "Benedito Bentes",
    rating: 5,
    text: "Desde que instalei a DocTelecom, não tive mais problemas com internet. O atendimento é nota 10!"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600">
            Depoimentos de quem já escolheu a DocTelecom
          </p>
        </div>

        <div className="relative h-[300px] max-w-3xl mx-auto">
          <AnimatePresence initial={false} custom={1}>
            <motion.div
              key={currentIndex}
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 relative">
                <FaQuoteLeft className="text-4xl text-blue-500 opacity-20 absolute top-4 left-4" />
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>

                <p className="text-gray-700 text-lg mb-6 text-center">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="text-center">
                  <h4 className="font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-500">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-blue-600 w-6' : 'bg-blue-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
