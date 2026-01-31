function App() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 overflow-x-hidden relative">
      {/* Grid Background Pattern */}
      <div className="fixed inset-0 z-0" style={{
        backgroundImage: `
          linear-gradient(rgba(34, 197, 94, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34, 197, 94, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }}></div>

      {/* Animated Grid Light Points */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Horizontal moving lights */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute rounded-full"
            style={{
              width: '6px',
              height: '6px',
              top: `${(i + 1) * 11}%`,
              left: '-10px',
              background: 'radial-gradient(circle, rgba(34, 197, 94, 1) 0%, rgba(34, 197, 94, 0.8) 30%, transparent 70%)',
              boxShadow: `
                0 0 10px rgba(34, 197, 94, 0.8),
                0 0 20px rgba(34, 197, 94, 0.6),
                0 0 30px rgba(34, 197, 94, 0.4),
                -150px 0 80px rgba(34, 197, 94, 0.3),
                -100px 0 60px rgba(34, 197, 94, 0.4),
                -50px 0 40px rgba(34, 197, 94, 0.5)
              `,
              animation: `moveRight ${8 + i * 2}s linear infinite`,
              animationDelay: `${i * 1.5}s`,
            }}
          ></div>
        ))}

        {/* Vertical moving lights */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute rounded-full"
            style={{
              width: '6px',
              height: '6px',
              left: `${(i + 1) * 11}%`,
              top: '-10px',
              background: 'radial-gradient(circle, rgba(163, 230, 53, 1) 0%, rgba(163, 230, 53, 0.8) 30%, transparent 70%)',
              boxShadow: `
                0 0 10px rgba(163, 230, 53, 0.8),
                0 0 20px rgba(163, 230, 53, 0.6),
                0 0 30px rgba(163, 230, 53, 0.4),
                0 -150px 80px rgba(163, 230, 53, 0.3),
                0 -100px 60px rgba(163, 230, 53, 0.4),
                0 -50px 40px rgba(163, 230, 53, 0.5)
              `,
              animation: `moveDown ${8 + i * 2}s linear infinite`,
              animationDelay: `${i * 1.8}s`,
            }}
          ></div>
        ))}

        {/* Diagonal moving lights (top-left to bottom-right) */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`d1-${i}`}
            className="absolute rounded-full"
            style={{
              width: '6px',
              height: '6px',
              left: '-10px',
              top: `${i * 15}%`,
              background: 'radial-gradient(circle, rgba(52, 211, 153, 1) 0%, rgba(52, 211, 153, 0.8) 30%, transparent 70%)',
              boxShadow: `
                0 0 10px rgba(52, 211, 153, 0.8),
                0 0 20px rgba(52, 211, 153, 0.6),
                0 0 30px rgba(52, 211, 153, 0.4),
                -100px -100px 80px rgba(52, 211, 153, 0.3),
                -70px -70px 60px rgba(52, 211, 153, 0.4),
                -40px -40px 40px rgba(52, 211, 153, 0.5)
              `,
              animation: `moveDiagonal1 ${10 + i * 2}s linear infinite`,
              animationDelay: `${i * 2}s`,
            }}
          ></div>
        ))}

        {/* Diagonal moving lights (top-right to bottom-left) */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`d2-${i}`}
            className="absolute rounded-full"
            style={{
              width: '6px',
              height: '6px',
              right: '-10px',
              top: `${i * 15}%`,
              background: 'radial-gradient(circle, rgba(34, 197, 94, 1) 0%, rgba(34, 197, 94, 0.8) 30%, transparent 70%)',
              boxShadow: `
                0 0 10px rgba(34, 197, 94, 0.8),
                0 0 20px rgba(34, 197, 94, 0.6),
                0 0 30px rgba(34, 197, 94, 0.4),
                100px -100px 80px rgba(34, 197, 94, 0.3),
                70px -70px 60px rgba(34, 197, 94, 0.4),
                40px -40px 40px rgba(34, 197, 94, 0.5)
              `,
              animation: `moveDiagonal2 ${10 + i * 2}s linear infinite`,
              animationDelay: `${i * 2.2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Animated Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large gradient orb - top left */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            top: '-10%',
            left: '-5%',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(34, 197, 94, 0.2) 30%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'pulse 8s ease-in-out infinite',
          }}
        ></div>

        {/* Large gradient orb - top right */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            top: '5%',
            right: '-5%',
            background: 'radial-gradient(circle, rgba(163, 230, 53, 0.4) 0%, rgba(163, 230, 53, 0.2) 30%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'pulse 10s ease-in-out infinite',
            animationDelay: '2s',
          }}
        ></div>

        {/* Medium gradient orb - middle left */}
        <div 
          className="absolute w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            top: '40%',
            left: '10%',
            background: 'radial-gradient(circle, rgba(52, 211, 153, 0.4) 0%, rgba(52, 211, 153, 0.2) 30%, transparent 70%)',
            filter: 'blur(50px)',
            animation: 'float 15s ease-in-out infinite',
          }}
        ></div>

        {/* Medium gradient orb - middle right */}
        <div 
          className="absolute w-[450px] h-[450px] rounded-full opacity-20"
          style={{
            top: '50%',
            right: '5%',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(34, 197, 94, 0.2) 30%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'float 12s ease-in-out infinite reverse',
            animationDelay: '3s',
          }}
        ></div>

        {/* Bottom gradient orb */}
        <div 
          className="absolute w-[550px] h-[550px] rounded-full opacity-15"
          style={{
            bottom: '-10%',
            left: '30%',
            background: 'radial-gradient(circle, rgba(163, 230, 53, 0.4) 0%, rgba(163, 230, 53, 0.2) 30%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'pulse 9s ease-in-out infinite',
            animationDelay: '1s',
          }}
        ></div>

        {/* Small accent orbs */}
        <div 
          className="absolute w-[300px] h-[300px] rounded-full opacity-10"
          style={{
            top: '25%',
            right: '25%',
            background: 'radial-gradient(circle, rgba(52, 211, 153, 0.5) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'float 20s ease-in-out infinite',
            animationDelay: '4s',
          }}
        ></div>

        <div 
          className="absolute w-[350px] h-[350px] rounded-full opacity-10"
          style={{
            bottom: '20%',
            right: '15%',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.5) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'float 18s ease-in-out infinite reverse',
            animationDelay: '2s',
          }}
        ></div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.15;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.25;
          }
        }

        @keyframes moveRight {
          0% {
            left: -10px;
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            left: calc(100% + 10px);
            opacity: 0;
          }
        }

        @keyframes moveDown {
          0% {
            top: -10px;
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            top: calc(100% + 10px);
            opacity: 0;
          }
        }

        @keyframes moveDiagonal1 {
          0% {
            left: -10px;
            top: -10px;
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            left: calc(100% + 10px);
            top: calc(100% + 10px);
            opacity: 0;
          }
        }

        @keyframes moveDiagonal2 {
          0% {
            right: -10px;
            top: -10px;
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            right: calc(100% + 10px);
            top: calc(100% + 10px);
            opacity: 0;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-95 backdrop-blur-xl z-50 border-b border-green-500">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-green-400 via-lime-500 to-emerald-600 bg-clip-text text-transparent">
                RB
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'inicio', label: 'Inicio' },
                { id: 'experiencia', label: 'Experiencia' },
                { id: 'educacion', label: 'Educación' },
                { id: 'certificaciones', label: 'Certificaciones' },
                { id: 'habilidades', label: 'Habilidades' },
                { id: 'contacto', label: 'Contacto' }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-green-300 hover:text-green-400 transition-all duration-300 font-medium"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto max-w-6xl z-10">
          <div className="text-center mb-16">
            <div className="mb-8 inline-block">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-green-400 via-lime-500 to-emerald-600 p-1 shadow-2xl shadow-green-500/50">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-6xl">
                  🛡️
                </div>
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 via-lime-500 to-emerald-600 bg-clip-text text-transparent">
              RUBÉN BRIÓN
            </h1>

            <div className="mb-6">
              <p className="text-2xl md:text-3xl text-green-400 font-semibold mb-2">
                Técnico Informático
              </p>
              <p className="text-xl md:text-2xl text-lime-400">
                Experto en Ciberseguridad
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/50"
              >
                Contactar
              </button>
              <button 
                onClick={() => scrollToSection('experiencia')}
                className="border-2 border-green-400 hover:bg-green-400 hover:bg-opacity-10 px-8 py-4 rounded-full font-bold text-lg transition-all text-green-200"
              >
                Ver Experiencia
              </button>
            </div>
          </div>

          {/* Acerca de mí */}
          <div className="relative bg-gray-900 bg-opacity-80 backdrop-blur-lg rounded-3xl p-8 border border-green-500/50 max-w-4xl mx-auto shadow-2xl shadow-green-500/20">
            <h3 className="text-3xl font-bold text-green-400 mb-6 flex items-center justify-center">
              <span className="text-4xl mr-3">👨‍💻</span>
              Acerca de Mí
            </h3>
            <p className="text-green-300 text-lg leading-relaxed text-center">
              Técnico informático con más de dos años de experiencia en el sector. Especializado en networking 
              y ciberseguridad. Apasionado con la tecnología en general y actualmente comprometido en mejorar 
              mis habilidades terminando un grado universitario. Busco hacer mi aportación a un equipo dinámico 
              donde pueda aplicar mis conocimientos y, sobre todo, conseguir otros nuevos a fin de mejorar como profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="relative px-6 py-32 bg-transparent">
        <div className="container mx-auto max-w-6xl z-10 relative">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            💼 Experiencia Profesional
          </h2>

          <div className="space-y-8">
            {/* Niucom */}
            <div className="group bg-gray-900 bg-opacity-90 rounded-3xl p-8 border border-green-500/50 hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 transform hover:-translate-y-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-3xl font-bold text-green-400 mb-2">Técnico de Sistemas</h3>
                  <p className="text-xl text-lime-400 font-semibold">Niucom 180 SL</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2 rounded-full text-sm font-semibold">
                    Marzo 2023 - Junio 2025
                  </span>
                </div>
              </div>
              <ul className="space-y-3 text-green-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 text-xl">▹</span>
                  <span>Gestión de infraestructuras de red y administración de controles de acceso</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 text-xl">▹</span>
                  <span>Provisión de soporte técnico y resolución de incidencias</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 text-xl">▹</span>
                  <span>Implementación y gobernanza de protocolos de ciberseguridad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 text-xl">▹</span>
                  <span>Desarrollo y supervisión de software y hardware en dispositivos móviles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 text-xl">▹</span>
                  <span>Gestión de recursos de Cloud Computing</span>
                </li>
              </ul>
            </div>

            {/* FINSA */}
            <div className="group bg-gray-900 bg-opacity-90 rounded-3xl p-8 border border-lime-500/50 hover:border-lime-500 transition-all duration-300 hover:shadow-2xl hover:shadow-lime-500/20 transform hover:-translate-y-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-3xl font-bold text-lime-400 mb-2">Técnico Informático</h3>
                  <p className="text-xl text-green-400 font-semibold">FINSA</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-gradient-to-r from-lime-500 to-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                    Marzo 2022 - Junio 2022
                  </span>
                </div>
              </div>
              <ul className="space-y-3 text-green-300">
                <li className="flex items-start">
                  <span className="text-lime-400 mr-3 text-xl">▹</span>
                  <span>Asesoramiento a usuarios para la configuración y uso de computadores</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-400 mr-3 text-xl">▹</span>
                  <span>Gestión de Active Directory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-400 mr-3 text-xl">▹</span>
                  <span>Configuración de redes WLAN, subredes y puntos de acceso</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-400 mr-3 text-xl">▹</span>
                  <span>Gestión de redes e infraestructuras técnicas de la compañía</span>
                </li>
              </ul>
            </div>

            {/* Carpintero */}
            <div className="group bg-gray-900 bg-opacity-90 rounded-3xl p-8 border border-emerald-500/50 hover:border-emerald-500 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-3xl font-bold text-emerald-400 mb-2">Carpintero</h3>
                  <p className="text-xl text-green-400 font-semibold">Muebles Nolito SL</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                    Junio 2016 - Marzo 2020
                  </span>
                </div>
              </div>
              <p className="text-green-300 italic">
                Fabricación e instalación de mobiliario, conocimientos básicos de electricidad y diseño de espacios con programas 2D y 3D.
              </p>
            </div>

            {/* Actualmente */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl p-8 border-2 border-green-500/30 bg-gray-900 bg-opacity-50">
              <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center">
                <span className="text-3xl mr-3">🚀</span>
                Actualmente
              </h3>
              <p className="text-green-300 text-lg leading-relaxed">
                Gestiono trabajos de soporte informático esporádicamente. También realizo diagnósticos, 
                mantenimientos, limpieza y actualizaciones de software y hardware a diferentes equipos electrónicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="educacion" className="relative px-6 py-32 bg-transparent">
        <div className="container mx-auto max-w-6xl z-10 relative">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            🎓 Educación
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Grado */}
            <div className="bg-gray-900 bg-opacity-90 rounded-3xl p-8 border-2 border-green-500/50 hover:shadow-2xl hover:shadow-green-500/30 transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">Grado en Ingeniería Informática</h3>
              <p className="text-xl text-white font-semibold mb-2">UOC</p>
              <p className="text-green-300">2023 - Actualidad</p>
            </div>

            {/* Especialización */}
            <div className="bg-gray-900 bg-opacity-90 rounded-3xl p-8 border-2 border-lime-500/50 hover:shadow-2xl hover:shadow-lime-500/30 transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-lime-400 mb-2">Especialización en Ciberseguridad</h3>
              <p className="text-xl text-white font-semibold mb-2">IES San Clemente</p>
              <p className="text-lime-300">2022 - 2023</p>
            </div>

            {/* Técnico Superior */}
            <div className="bg-gray-900 bg-opacity-90 rounded-3xl p-8 border-2 border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-2">Técnico Superior en Sistemas de Telecomunicación</h3>
              <p className="text-xl text-white font-semibold mb-2">Politécnico de Santiago</p>
              <p className="text-emerald-300">2020 - 2022</p>
            </div>

            {/* Bachillerato */}
            <div className="bg-gray-900 bg-opacity-90 rounded-3xl p-8 border-2 border-green-400/50 hover:shadow-2xl hover:shadow-green-400/30 transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">Bachillerato</h3>
              <p className="text-xl text-white font-semibold mb-2">IES Campo de San Alberto</p>
              <p className="text-green-300">2013 - 2015</p>
            </div>
          </div>

          {/* Idiomas */}
          <div className="bg-gray-900 bg-opacity-90 rounded-3xl p-8 border border-green-500/50">
            <h3 className="text-3xl font-bold text-green-400 mb-6 flex items-center justify-center">
              <span className="text-4xl mr-3">🌍</span>
              Idiomas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center bg-gray-800 bg-opacity-50 rounded-2xl p-6">
                <div className="text-4xl mb-2">🇬🇧</div>
                <p className="text-xl font-semibold text-white">Inglés</p>
                <p className="text-green-400">Excelente (C1)</p>
              </div>
              <div className="text-center bg-gray-800 bg-opacity-50 rounded-2xl p-6">
                <div className="text-4xl mb-2">🇪🇸</div>
                <p className="text-xl font-semibold text-white">Español</p>
                <p className="text-lime-400">Nativo</p>
              </div>
              <div className="text-center bg-gray-800 bg-opacity-50 rounded-2xl p-6">
                <div className="text-4xl mb-2">🏴</div>
                <p className="text-xl font-semibold text-white">Gallego</p>
                <p className="text-emerald-400">Nativo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certificaciones" className="relative px-6 py-32 bg-transparent">
        <div className="container mx-auto max-w-6xl z-10 relative">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            🏆 Certificaciones
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-900 bg-opacity-90 rounded-3xl p-10 border-2 border-green-500/50 hover:shadow-2xl hover:shadow-green-500/30 transition-all transform hover:scale-105">
              <div className="text-center">
                <div className="text-6xl mb-6">🏆</div>
                <h3 className="text-3xl font-bold text-green-400 mb-3">Técnico en Ciberseguridad</h3>
                <p className="text-2xl text-white font-semibold mb-2">INCIBE</p>
                <p className="text-green-300 text-xl">2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="relative px-6 py-32 bg-transparent">
        <div className="container mx-auto max-w-6xl z-10 relative">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            ⚡ Habilidades Técnicas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Software */}
            <div className="bg-gray-900 bg-opacity-90 rounded-3xl p-8 border border-green-500/30 hover:border-green-500 transition-all hover:shadow-2xl hover:shadow-green-500/20">
              <h3 className="text-3xl font-bold text-green-400 mb-6 flex items-center">
                <span className="text-4xl mr-3">💾</span>
                Software
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Odoo', 'Proxmox', 'Synology', 'Wireshark'].map(skill => (
                  <span key={skill} className="bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-3 rounded-full text-sm font-semibold hover:scale-110 transition-transform cursor-pointer shadow-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Redes */}
            <div className="bg-gray-900 bg-opacity-90 rounded-3xl p-8 border border-lime-500/30 hover:border-lime-500 transition-all hover:shadow-2xl hover:shadow-lime-500/20">
              <h3 className="text-3xl font-bold text-lime-400 mb-6 flex items-center">
                <span className="text-4xl mr-3">🌐</span>
                Redes
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Monitorización', 'Configuración', 'Firewall', 'Proxys', 'Honey Pots'].map(skill => (
                  <span key={skill} className="bg-gradient-to-r from-lime-500 to-green-600 px-5 py-3 rounded-full text-sm font-semibold hover:scale-110 transition-transform cursor-pointer shadow-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Sistemas Operativos */}
            <div className="bg-gray-900 bg-opacity-90 rounded-3xl p-8 border border-emerald-500/30 hover:border-emerald-500 transition-all hover:shadow-2xl hover:shadow-emerald-500/20">
              <h3 className="text-3xl font-bold text-emerald-400 mb-6 flex items-center">
                <span className="text-4xl mr-3">🖥️</span>
                Sistemas Operativos
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Windows', 'Linux', 'Kali', 'Parrot'].map(skill => (
                  <span key={skill} className="bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-3 rounded-full text-sm font-semibold hover:scale-110 transition-transform cursor-pointer shadow-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Auditoría */}
            <div className="bg-gray-900 bg-opacity-90 rounded-3xl p-8 border border-green-400/30 hover:border-green-400 transition-all hover:shadow-2xl hover:shadow-green-400/20">
              <h3 className="text-3xl font-bold text-green-400 mb-6 flex items-center">
                <span className="text-4xl mr-3">🔍</span>
                Auditoría
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Blue Team', 'Control de Riesgos', 'Análisis de Seguridad'].map(skill => (
                  <span key={skill} className="bg-gradient-to-r from-green-400 to-emerald-600 px-5 py-3 rounded-full text-sm font-semibold hover:scale-110 transition-transform cursor-pointer shadow-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="relative px-6 py-32 bg-transparent">
        <div className="container mx-auto max-w-4xl z-10 relative">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            📧 Contacto
          </h2>

          <div className="bg-gray-900 bg-opacity-90 rounded-3xl p-12 border border-green-500/50 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Email */}
              <div className="group flex items-center space-x-4 bg-gray-800 bg-opacity-50 p-6 rounded-2xl border border-green-500/30 hover:border-green-500 transition-all hover:shadow-lg hover:shadow-green-500/20">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                  📧
                </div>
                <div>
                  <p className="text-green-400 text-sm">Email</p>
                  <p className="text-lg font-semibold text-white">rubrinie@gmail.com</p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="group flex items-center space-x-4 bg-gray-800 bg-opacity-50 p-6 rounded-2xl border border-lime-500/30 hover:border-lime-500 transition-all hover:shadow-lg hover:shadow-lime-500/20">
                <div className="bg-gradient-to-br from-lime-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                  📱
                </div>
                <div>
                  <p className="text-green-400 text-sm">Teléfono</p>
                  <p className="text-lg font-semibold text-white">+34 669 378 490</p>
                </div>
              </div>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/ruben-brion" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 bg-gray-800 bg-opacity-50 p-6 rounded-2xl border border-emerald-500/30 hover:border-emerald-500 transition-all hover:shadow-lg hover:shadow-emerald-500/20 cursor-pointer"
              >
                <div className="bg-gradient-to-br from-emerald-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                  💼
                </div>
                <div>
                  <p className="text-green-400 text-sm">LinkedIn</p>
                  <p className="text-lg font-semibold text-white">Rubén Brión</p>
                </div>
              </a>

              {/* Disponibilidad */}
              <div className="group flex items-center space-x-4 bg-gray-800 bg-opacity-50 p-6 rounded-2xl border border-green-400/30 hover:border-green-400 transition-all hover:shadow-lg hover:shadow-green-400/20">
                <div className="bg-gradient-to-br from-green-400 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                  ✅
                </div>
                <div>
                  <p className="text-green-400 text-sm">Estado</p>
                  <p className="text-lg font-semibold text-white">Disponible</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 bg-opacity-50 rounded-2xl p-8 border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-400 mb-4">¿Tienes un proyecto en mente?</h3>
              <p className="text-green-300 mb-6 leading-relaxed">
                Estoy disponible para colaborar en proyectos relacionados con ciberseguridad, networking 
                y administración de sistemas. No dudes en contactarme para discutir cómo puedo ayudarte.
              </p>
              <a 
                href="mailto:rubrinie@gmail.com"
                className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-green-500/50"
              >
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black border-t border-green-500 py-8 text-center z-10">
        <p className="text-green-400">
          © 2025 Rubén Brión - Técnico Informático Experto en Ciberseguridad
        </p>
      </footer>
    </div>
  );
}