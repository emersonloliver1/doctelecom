import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaWifi, FaRocket, FaHeadset, FaCheck, FaWhatsapp, FaPhone, FaGlobe, FaUser, FaBars } from 'react-icons/fa'
import { IoSpeedometer } from 'react-icons/io5'
import { MdRouter, MdGamepad } from 'react-icons/md'
import LazyImage from './components/LazyImage'
import MobileMenu from './components/MobileMenu'
import Testimonials from './components/Testimonials'
import PlanCalculator from './components/PlanCalculator'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentLogo, setCurrentLogo] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo(prev => prev === 1 ? 2 : 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const plans = [
    {
      name: "Plano 50MB",
      speed: "50 MEGA",
      price: "65,00",
      features: [
        "Internet Fibra Óptica",
        "Wi-Fi Grátis",
        "Instalação Grátis",
        "Suporte Especializado"
      ]
    },
    {
      name: "Plano 100MB",
      speed: "100 MEGA",
      price: "74,90",
      features: [
        "Internet Fibra Óptica",
        "Wi-Fi Grátis",
        "Instalação Grátis",
        "Suporte Especializado"
      ]
    },
    {
      name: "Plano 200MB",
      speed: "200 MEGA",
      price: "89,90",
      features: [
        "Internet Fibra Óptica",
        "Wi-Fi Grátis",
        "Instalação Grátis",
        "Suporte Especializado"
      ],
      popular: true
    },
    {
      name: "Plano 300MB",
      speed: "300 MEGA",
      price: "99,90",
      features: [
        "Internet Fibra Óptica",
        "Wi-Fi Grátis",
        "Instalação Grátis",
        "Suporte Especializado"
      ]
    },
    {
      name: "Plano 600MB",
      speed: "600 MEGA",
      price: "129,90",
      features: [
        "Internet Fibra Óptica",
        "Wi-Fi Grátis",
        "Instalação Grátis",
        "Suporte Especializado"
      ]
    }
  ]

  const benefits = [
    {
      icon: <IoSpeedometer className="text-4xl text-blue-500" />,
      title: "Alta Velocidade",
      description: "Download e upload ultrarrápidos para todas suas atividades"
    },
    {
      icon: <MdRouter className="text-4xl text-blue-500" />,
      title: "Wi-Fi Premium",
      description: "Conexão sem fio estável em toda sua casa"
    },
    {
      icon: <FaHeadset className="text-4xl text-blue-500" />,
      title: "Suporte Especializado",
      description: "Atendimento de segunda a sexta (8h-18h) e sábado (8h-12h)"
    },
    {
      icon: <MdGamepad className="text-4xl text-blue-500" />,
      title: "Baixa Latência",
      description: "Ideal para jogos online e streaming"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <LazyImage
              src="/logo1.jpg"
              alt="DocTelecom Logo"
              className="h-12 w-auto"
              priority={true}
            />
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="home" 
                smooth={true} 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group py-2"
              >
                Início
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                to="plans" 
                smooth={true} 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group py-2"
              >
                Planos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                to="coverage" 
                smooth={true} 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group py-2"
              >
                Cobertura
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                to="contact" 
                smooth={true} 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group py-2"
              >
                Contato
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a 
                href="https://wa.link/0nv5z1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary flex items-center gap-2"
              >
                <FaWhatsapp className="text-xl" />
                Assine Já
              </a>
              <a 
                href="https://docnettelecom.atlaz.com.br/central"
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary flex items-center gap-2"
              >
                <FaUser className="text-xl" />
                Área do Assinante
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <FaBars size={24} />
            </button>

            {/* Mobile Menu */}
            <MobileMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white">
        <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Internet Fibra Óptica de Alta Velocidade
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Conecte-se com o melhor da internet. Planos a partir de 50MB com Wi-Fi grátis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.link/0nv5z1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-xl" />
                Assine Agora
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <LazyImage
              src="/logo2.jpg"
              alt="Internet Fibra Óptica"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nossos Planos</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Escolha o plano ideal para você</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-8 relative ${plan.popular ? 'border-2 border-blue-500' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-6 py-1.5 rounded-full text-sm font-medium whitespace-nowrap">
                      Mais Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-sm">R$</span>
                  <span className="text-4xl font-bold text-blue-600 mx-1">{plan.price}</span>
                  <span className="text-gray-500">/mês</span>
                </div>
                <div className="text-2xl font-semibold mb-6 text-blue-800">{plan.speed}</div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <FaCheck className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.link/0nv5z1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full btn-primary flex items-center justify-center gap-2 ${
                    plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''
                  }`}
                >
                  <FaWhatsapp className="text-xl" />
                  Contratar
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Calculator */}
      <PlanCalculator />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Coverage Section */}
      <section id="coverage" className="section-padding w-full bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Área de Cobertura</h2>
              <p className="text-xl text-gray-600 mb-8">
                Atendemos o bairro do Benedito Bentes e região em Maceió-AL com internet de alta qualidade
              </p>
              <a 
                href="https://wa.link/0nv5z1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-xl" />
                Consulte Disponibilidade
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Entre em Contato</h2>
              <p className="text-xl mb-8">
                Tire suas dúvidas e conheça mais sobre nossos serviços
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                <a 
                  href="https://wa.link/0nv5z1"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-full md:w-auto bg-white text-blue-600 btn-primary flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp
                </a>
                <a
                  href="tel:8288042967"
                  className="w-full md:w-auto border-2 border-white btn-primary bg-transparent hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
                >
                  <FaPhone className="text-xl" />
                  Ligar Agora
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <LazyImage
                src="/logo1.jpg"
                alt="DocTelecom Logo"
                className="h-12 md:h-16 w-auto mx-auto md:mx-0 mb-4"
              />
              <p className="text-gray-400">Sua melhor conexão em Maceió</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><Link to="home" smooth={true} className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Início</Link></li>
                <li><Link to="plans" smooth={true} className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Planos</Link></li>
                <li><Link to="coverage" smooth={true} className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Cobertura</Link></li>
                <li><Link to="contact" smooth={true} className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Contato</Link></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2">
                <div className="w-full h-48 md:h-56 rounded-lg overflow-hidden shadow-lg mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d246.9994444444444!2d-35.75794792475755!3d-9.647789104647215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMzgnNTIuMSJTIDM1wrA0NSczMi45Ilc!5e0!3m2!1spt-BR!2sbr!4v1704561636221!5m2!1spt-BR!2sbr"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <a 
                  href="https://maps.app.goo.gl/FnMvkPkVBRnr2hXv6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 block"
                >
                  R. C | Trinta, 115
                  <br />
                  Benedito Bentes, Maceió - AL, 57084-103
                </a>
                <div className="text-gray-400">(82) 98804-2967</div>
                <div className="text-gray-400">contato@doctelecom.com.br</div>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4">Horário de Atendimento</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Segunda a Sexta</li>
                <li>08:00 - 18:00</li>
                <li>Sábado</li>
                <li>08:00 - 12:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} DocTelecom. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
