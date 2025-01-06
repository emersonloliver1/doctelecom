import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaWhatsapp, FaUser, FaTimes } from 'react-icons/fa';

const MobileMenu = ({ isOpen, onClose }) => {
  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const menuItems = [
    { to: "home", label: "Início" },
    { to: "plans", label: "Planos" },
    { to: "coverage", label: "Cobertura" },
    { to: "contact", label: "Contato" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-xl"
          >
            <div className="p-6">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={24} />
              </button>

              {/* Menu Items */}
              <div className="mt-12 flex flex-col gap-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    smooth={true}
                    onClick={onClose}
                    className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col gap-4">
                  <a
                    href="https://wa.link/0nv5z1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center justify-center gap-2 w-full"
                  >
                    <FaWhatsapp className="text-xl" />
                    Assine Já
                  </a>
                  <a
                    href="#"
                    className="btn-secondary flex items-center justify-center gap-2 w-full"
                  >
                    <FaUser className="text-xl" />
                    Área do Assinante
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
