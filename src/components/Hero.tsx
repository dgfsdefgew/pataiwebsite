import React from 'react';
import { ArrowRight, Bot, Code, TrendingUp } from 'lucide-react';
import MatrixWorldMap from './MatrixWorldMap';

const Hero = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/525654337869', '_blank');
  };

  return (
    <section id="home" className="pt-16 bg-black min-h-screen flex items-center relative overflow-hidden perspective-1000">
      <MatrixWorldMap />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10 transform-style-3d">
          {/* Content */}
          <div className="space-y-8 bg-black/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 transform hover:rotateY-5 hover:rotateX-2 transition-transform duration-500 shadow-3d">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight transform hover:translateZ-4 transition-transform duration-300">
                Transform Your Business with
                <span className="text-cyan-400 block holographic">AI-Powered Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed transform hover:translateZ-2 transition-transform duration-300">
                Expert AI coding, automation, and lead generation systems that drive real results. 
                From custom chatbots to intelligent data processing, we build AI solutions that scale your business.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 transform hover:translateZ-3 transition-transform duration-300">
              <div className="text-center transform hover:rotateY-10 hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-cyan-400 holographic">50+</div>
                <div className="text-sm text-gray-400">AI Projects</div>
              </div>
              <div className="text-center transform hover:rotateY-10 hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-cyan-400 holographic">300%</div>
                <div className="text-sm text-gray-400">Avg ROI Increase</div>
              </div>
              <div className="text-center transform hover:rotateY-10 hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-cyan-400 holographic">24/7</div>
                <div className="text-sm text-gray-400">AI Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 transform hover:translateZ-2 transition-transform duration-300">
              <button
                onClick={openWhatsApp}
                className="bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-110 hover:rotateX-5 hover:translateZ-4 glow-cyan"
              >
                <span>Start Your AI Journey</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:rotateX-5 hover:translateZ-2"
              >
                View Services
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative z-10 transform hover:rotateY-10 hover:rotateX-5 transition-transform duration-500">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 shadow-3d transform hover:translateZ-6 transition-transform duration-300">
              <div className="grid grid-cols-2 gap-4 transform-style-3d">
                <div className="bg-black/40 backdrop-blur-sm border border-gray-600 rounded-lg p-4 flex items-center space-x-3 transform hover:rotateY-5 hover:translateZ-2 transition-transform duration-300">
                  <Bot className="h-8 w-8 text-cyan-400" />
                  <div>
                    <div className="text-white font-semibold">AI Chatbots</div>
                    <div className="text-gray-300 text-sm">24/7 Customer Support</div>
                  </div>
                </div>
                <div className="bg-black/40 backdrop-blur-sm border border-gray-600 rounded-lg p-4 flex items-center space-x-3 transform hover:rotateY-5 hover:translateZ-2 transition-transform duration-300">
                  <Code className="h-8 w-8 text-cyan-400" />
                  <div>
                    <div className="text-white font-semibold">Custom AI</div>
                    <div className="text-gray-300 text-sm">Tailored Solutions</div>
                  </div>
                </div>
                <div className="bg-black/40 backdrop-blur-sm border border-gray-600 rounded-lg p-4 flex items-center space-x-3 transform hover:rotateY-5 hover:translateZ-2 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-cyan-400" />
                  <div>
                    <div className="text-white font-semibold">Lead Gen</div>
                    <div className="text-gray-300 text-sm">AI-Powered Growth</div>
                  </div>
                </div>
                <div className="bg-black/40 backdrop-blur-sm border border-gray-600 rounded-lg p-4 flex items-center space-x-3 transform hover:rotateY-5 hover:translateZ-2 transition-transform duration-300">
                  <div className="h-8 w-8 bg-cyan-400/30 rounded-full flex items-center justify-center">
                    <div className="h-4 w-4 bg-cyan-400 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Automation</div>
                    <div className="text-gray-300 text-sm">Smart Workflows</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-cyan-500 text-black p-3 rounded-full animate-bounce transform hover:rotateZ-45 hover:scale-125 transition-transform duration-300 glow-cyan">
              <Bot className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gray-700 text-cyan-400 p-3 rounded-full animate-pulse transform hover:rotateZ-45 hover:scale-125 transition-transform duration-300">
              <Code className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;