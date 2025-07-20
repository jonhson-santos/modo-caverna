import React, { useState, useEffect } from 'react';
import { Lock, Brain, Flame, CheckCircle, AlertTriangle, X, Eye, Zap, Target, Crown, Sword, Shield } from 'lucide-react';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
  });

  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    // Gerar partículas flutuantes
    const newParticles = Array.from({length: 20}, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular envio com loading
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    console.log('Dados enviados:', formData);
  };

  const handleMainFunnelRedirect = () => {
    window.open('https://page-renda-extra-front-and.vercel.app/', '_blank');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 animate-slow-zoom"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')",
              filter: 'blur(4px) brightness(0.7)'
            }}
          />
          
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/20 to-black animate-gradient-shift" />
          
          {/* Floating Particles */}
          {particles.map(particle => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-red-400/30 rounded-full animate-float"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animationDelay: `${particle.delay}s`
              }}
            />
          ))}
        </div>
        
        {/* Video Transition Effect */}
        {showVideo && (
          <div className="absolute inset-0 bg-black z-50 flex items-center justify-center animate-fade-in">
            <div className="text-center">
              <div className="w-20 h-20 border-4 border-red-500 border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
              <p className="text-white font-bold text-xl">Carregando experiência exclusiva...</p>
            </div>
          </div>
        )}
        
        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className="max-w-4xl w-full text-center space-y-8">
            
            {/* Animated Success Icons */}
            <div className="flex justify-center mb-8 animate-bounce-in">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
                <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 p-8 rounded-full border-4 border-green-400/50 shadow-2xl animate-glow-green">
                  <CheckCircle className="w-20 h-20 text-white" />
                </div>
              </div>
            </div>

            {/* Main Success Message with Typewriter Effect */}
            <div className="bg-black/60 backdrop-blur-xl p-8 rounded-3xl border border-green-500/30 shadow-2xl animate-slide-up-delayed transform hover:scale-105 transition-all duration-500">
              <h1 className="font-black text-3xl md:text-5xl text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text mb-6 leading-tight animate-text-glow">
                ✅ Template enviado com sucesso!
              </h1>
              <div className="flex items-center justify-center space-x-4 text-green-300 font-bold text-lg">
                <div className="flex items-center animate-pulse">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                  Template enviado
                </div>
                <div className="flex items-center animate-pulse animation-delay-500">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                  Acesso liberado
                </div>
              </div>
            </div>

            {/* Warning Section with Dramatic Animation */}
            <div className="relative animate-dramatic-entrance animation-delay-800">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-3xl blur-xl animate-pulse-glow"></div>
              <div className="relative bg-gradient-to-br from-red-900/40 to-orange-900/40 backdrop-blur-xl p-8 rounded-3xl border-2 border-yellow-500/50 shadow-2xl">
                <div className="flex items-center justify-center mb-6 animate-shake">
                  <AlertTriangle className="w-12 h-12 text-yellow-400 mr-4 animate-bounce" />
                  <h2 className="font-black text-2xl md:text-4xl text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text">
                    MAS PRESTA ATENÇÃO:
                  </h2>
                </div>
                
                <p className="font-bold text-xl md:text-2xl text-white mb-6 leading-relaxed animate-text-reveal">
                  o que você vai ver agora pode ser o <span className="text-yellow-400 font-black animate-pulse">maior divisor de águas</span> da sua vida. 
                  Só que <span className="text-red-400 font-black animate-text-glow-red">97% das pessoas vão ignorar isso</span>… 
                  e continuar na mesma.
                </p>
              </div>
            </div>

            {/* Challenge Section with Interactive Elements */}
            <div className="space-y-6 animate-slide-up animation-delay-1200">
              <div className="group relative bg-red-900/30 backdrop-blur-xl p-6 rounded-2xl border border-red-500/40 transform hover:scale-105 transition-all duration-300 animate-shake-subtle">
                <div className="absolute inset-0 bg-red-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <p className="relative font-bold text-xl text-red-300 flex items-center justify-center">
                  <X className="w-8 h-8 mr-4 animate-spin-slow" />
                  Se você for mais um desses <span className="text-red-500 font-black ml-2">fracos</span>, é melhor nem clicar.
                </p>
              </div>
              
              <div className="group relative bg-gradient-to-r from-green-900/30 to-emerald-900/30 backdrop-blur-xl p-8 rounded-2xl border border-green-500/40 transform hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-green-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <p className="relative font-bold text-xl text-green-300 flex items-center justify-center text-center leading-relaxed">
                  <Crown className="w-8 h-8 mr-4 text-yellow-400 animate-bounce" />
                  Agora… se você sente que nasceu pra muito mais do que essa vidinha meia boca — 
                  <span className="text-yellow-400 font-black ml-2 animate-pulse">CLIQUE AQUI AGORA</span> e veja o que ninguém nunca te mostrou.
                </p>
              </div>
            </div>

            {/* Epic CTA Button */}
            <div className="pt-8 animate-epic-entrance animation-delay-1500">
              <button
                onClick={handleMainFunnelRedirect}
                className="group relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white font-black text-2xl md:text-3xl px-12 md:px-16 py-8 rounded-3xl shadow-2xl transform hover:scale-110 transition-all duration-500 border-4 border-red-400/50 w-full max-w-2xl mx-auto block animate-mega-glow"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300 animate-pulse-intense" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center">
                  🔴 QUERO VER AGORA
                  <Flame className="w-10 h-10 ml-4 group-hover:animate-bounce text-yellow-400" />
                </span>
                
                {/* Button Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-button-particles"
                      style={{
                        left: `${20 + i * 15}%`,
                        animationDelay: `${i * 0.3}s`
                      }}
                    />
                  ))}
                </div>
              </button>
            </div>

            {/* Urgency Indicators */}
            <div className="flex justify-center space-x-8 pt-6 animate-fade-in animation-delay-1800">
              <div className="flex items-center text-red-400 font-bold animate-pulse">
                <Zap className="w-6 h-6 mr-2" />
                <span>Limitado</span>
              </div>
              <div className="flex items-center text-yellow-400 font-bold animate-pulse animation-delay-300">
                <Target className="w-6 h-6 mr-2" />
                <span>Exclusivo</span>
              </div>
              <div className="flex items-center text-orange-400 font-bold animate-pulse animation-delay-600">
                <Eye className="w-6 h-6 mr-2" />
                <span>Revelador</span>
              </div>
            </div>

            {/* Bottom Warning with Countdown Effect */}
            <div className="text-center pt-8 animate-fade-in animation-delay-2000">
              <div className="bg-black/80 backdrop-blur-xl p-6 rounded-2xl border border-red-500/30 max-w-2xl mx-auto">
                <p className="text-red-400 font-bold text-lg md:text-xl animate-pulse-intense flex items-center justify-center">
                  ⚠️ Esta oportunidade pode não estar disponível quando você voltar
                  <Sword className="w-6 h-6 ml-3 text-yellow-400 animate-bounce" />
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Dynamic Background with Multiple Layers */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 animate-slow-zoom"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')",
            filter: 'blur(3px) brightness(0.6)'
          }}
        />
        
        {/* Animated Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/10 to-black animate-gradient-shift" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-red-900/5 to-transparent animate-gradient-shift-reverse" />
        
        {/* Floating Particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
        
        {/* Light Rays Effect */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-blue-400/20 to-transparent transform rotate-12 animate-light-ray"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-yellow-400/15 to-transparent transform -rotate-12 animate-light-ray animation-delay-1000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-lg w-full space-y-8">
          
          {/* Header Section with Enhanced Animations */}
          <div className="text-center space-y-8 animate-fade-in">
            
            {/* Animated Icon Constellation */}
            <div className="relative flex justify-center mb-8 animate-constellation">
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
                  <Brain className="w-8 h-8 text-blue-400 animate-pulse" />
                </div>
                <div className="absolute bottom-0 left-0 transform translate-x-4 translate-y-4">
                  <Lock className="w-6 h-6 text-yellow-400 animate-bounce" />
                </div>
                <div className="absolute bottom-0 right-0 transform -translate-x-4 translate-y-4">
                  <Flame className="w-6 h-6 text-red-400 animate-flicker" />
                </div>
              </div>
              
              <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl p-8 rounded-full border-2 border-blue-500/30 shadow-2xl animate-glow-blue">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full animate-pulse"></div>
                <Shield className="relative w-16 h-16 text-blue-400 animate-pulse-glow" />
              </div>
            </div>
            
            {/* Epic Title with Multiple Effects */}
            <div className="space-y-4">
              <h1 className="font-black text-4xl md:text-6xl leading-tight animate-text-reveal">
                <span className="block text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text animate-gradient-text">
                  🧠 Desbloqueie o
                </span>
                <span className="block text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text animate-gradient-text animation-delay-500">
                  Modo Caverna
                </span>
              </h1>
              
              {/* Subtitle with Typewriter Effect */}
              <div className="bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-blue-500/20 animate-slide-up animation-delay-800">
                <p className="text-gray-200 text-lg md:text-xl font-bold leading-relaxed animate-typewriter">
                  Receba agora o template que está ajudando <span className="text-yellow-400 font-black animate-pulse">centenas de pessoas</span> a saírem da estagnação e reconstruírem a vida com <span className="text-blue-400 font-black animate-text-glow">clareza, disciplina e propósito</span>.
                </p>
              </div>
            </div>
            
            {/* Urgency Banner with Pulsing Effect */}
            <div className="relative animate-slide-up animation-delay-1200">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-orange-600/30 rounded-2xl blur-lg animate-pulse-glow"></div>
              <div className="relative bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-xl p-6 rounded-2xl border-2 border-red-500/40 shadow-2xl">
                <p className="text-red-300 font-bold text-lg flex items-center justify-center animate-pulse-intense">
                  ⏳ Disponível por tempo limitado – baixe enquanto ainda está disponível 
                  <span className="text-yellow-400 ml-2 font-black animate-bounce">gratuitamente</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Form Section */}
          <div className="relative animate-slide-up animation-delay-1500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl blur-xl animate-pulse-glow"></div>
            <div className="relative bg-black/70 backdrop-blur-xl p-8 rounded-3xl border-2 border-gray-700/50 shadow-2xl">
              
              {/* Form Header */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full animate-glow-blue">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-black text-2xl text-white mb-2">Acesso Exclusivo</h3>
                <p className="text-gray-300 font-semibold">Preencha os dados para destrancar</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur"></div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Digite seu melhor e-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="relative w-full bg-gray-800/90 backdrop-blur-sm border-2 border-gray-600/50 focus:border-blue-500 rounded-xl px-6 py-5 text-white placeholder-gray-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 font-semibold text-lg group-hover:border-blue-400/70"
                  />
                </div>
                
                {/* Epic Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 disabled:from-gray-600 disabled:to-gray-700 text-white font-black text-xl md:text-2xl py-6 rounded-2xl shadow-2xl transform hover:scale-105 disabled:scale-100 transition-all duration-500 border-3 border-red-500/50 animate-mega-glow overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-2xl blur opacity-40 group-hover:opacity-70 transition-opacity duration-300 animate-pulse-intense" />
                  
                  {/* Loading State */}
                  {isLoading && (
                    <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center">
                      <div className="w-8 h-8 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  {/* Button Particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-button-particles"
                        style={{
                          left: `${10 + i * 10}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      />
                    ))}
                  </div>
                  
                  <span className="relative flex items-center justify-center">
                    🔓 Destravar o Template AGORA
                    <Brain className="w-7 h-7 ml-3 group-hover:animate-bounce" />
                  </span>
                </button>
                
              </form>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center space-x-6 animate-fade-in animation-delay-2000">
            <div className="flex items-center text-green-400 font-bold text-sm animate-pulse">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>100% Seguro</span>
            </div>
            <div className="flex items-center text-blue-400 font-bold text-sm animate-pulse animation-delay-300">
              <Zap className="w-5 h-5 mr-2" />
              <span>Entrega Instantânea</span>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center animate-fade-in animation-delay-2200">
            <p className="text-gray-500 text-sm flex items-center justify-center">
              🔒 Seu e-mail está seguro e não será compartilhado
              <Eye className="w-4 h-4 ml-2 animate-blink" />
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;