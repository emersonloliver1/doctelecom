import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaGamepad, FaLaptop, FaTv, FaCheck } from 'react-icons/fa';

const PlanCalculator = () => {
  const [answers, setAnswers] = useState({
    devices: 0,
    streaming: false,
    gaming: false,
    work: false
  });

  const questions = [
    {
      id: 'devices',
      title: 'Quantas pessoas usam a internet simultaneamente?',
      icon: FaUsers,
      type: 'number',
      options: [1, 2, 3, 4, '5+']
    },
    {
      id: 'streaming',
      title: 'Você assiste streaming em 4K? (Netflix, Prime Video, etc)',
      icon: FaTv,
      type: 'boolean'
    },
    {
      id: 'gaming',
      title: 'Você joga online ou faz download de jogos?',
      icon: FaGamepad,
      type: 'boolean'
    },
    {
      id: 'work',
      title: 'Você trabalha ou estuda de casa?',
      icon: FaLaptop,
      type: 'boolean'
    }
  ];

  const calculateIdealPlan = () => {
    let score = 0;
    
    // Pontuação baseada no número de dispositivos
    score += answers.devices * 50;
    
    // Pontuação para streaming 4K
    if (answers.streaming) score += 100;
    
    // Pontuação para gaming
    if (answers.gaming) score += 100;
    
    // Pontuação para trabalho/estudo
    if (answers.work) score += 50;

    // Determina o plano ideal baseado na pontuação
    if (score <= 100) return { speed: 50, price: '65,00' };
    if (score <= 150) return { speed: 100, price: '74,90' };
    if (score <= 200) return { speed: 200, price: '89,90' };
    if (score <= 300) return { speed: 300, price: '99,90' };
    return { speed: 600, price: '129,90' };
  };

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const recommendedPlan = calculateIdealPlan();

  return (
    <section className="py-16 bg-gradient-to-br from-white to-blue-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Descubra Seu Plano Ideal
          </h2>
          <p className="text-xl text-gray-600">
            Responda algumas perguntas para encontrar o melhor plano para você
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {questions.map((question) => (
              <div key={question.id} className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <question.icon className="text-2xl text-blue-600" />
                  <h3 className="text-lg font-semibold">{question.title}</h3>
                </div>

                {question.type === 'number' ? (
                  <div className="flex flex-wrap gap-3">
                    {question.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleAnswer(question.id, option === '5+' ? 5 : option)}
                        className={`px-6 py-2 rounded-full transition-all ${
                          answers[question.id] === (option === '5+' ? 5 : option)
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleAnswer(question.id, true)}
                      className={`px-6 py-2 rounded-full transition-all ${
                        answers[question.id]
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      Sim
                    </button>
                    <button
                      onClick={() => handleAnswer(question.id, false)}
                      className={`px-6 py-2 rounded-full transition-all ${
                        answers[question.id] === false
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      Não
                    </button>
                  </div>
                )}
              </div>
            ))}

            {/* Resultado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 pt-8 border-t"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                Plano Recomendado para Você
              </h3>
              
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <h4 className="text-2xl font-bold text-blue-600 mb-2">
                  Plano {recommendedPlan.speed}MB
                </h4>
                <p className="text-3xl font-bold mb-4">
                  R$ {recommendedPlan.price}
                  <span className="text-lg font-normal text-gray-600">/mês</span>
                </p>
                <ul className="text-left mb-6">
                  <li className="flex items-center gap-2 mb-2">
                    <FaCheck className="text-green-500" />
                    Internet Fibra Óptica
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <FaCheck className="text-green-500" />
                    Wi-Fi Grátis
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <FaCheck className="text-green-500" />
                    Instalação Grátis
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-500" />
                    Suporte Especializado
                  </li>
                </ul>
                <a
                  href="https://wa.link/0nv5z1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  Contratar Agora
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanCalculator;
