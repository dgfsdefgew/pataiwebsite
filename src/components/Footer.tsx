import React from 'react';
import { MessageCircle, Mail, Linkedin, Twitter, Code, Bot } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openWhatsApp = () => {
    window.open('https://wa.me/525654337869', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white border-t border-gray-800 perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transform-style-3d">
          {/* Company Info */}
          <div className="space-y-4 transform hover:rotateY-5 hover:translateZ-4 transition-transform duration-500">
            <div className="flex items-center space-x-2 transform hover:translateZ-2 transition-transform duration-300">
              <Bot className="h-8 w-8 text-cyan-400 transform hover:rotateY-180 hover:scale-110 transition-transform duration-500" />
              <h3 className="text-xl font-bold holographic">Patrick Blanks AI Solutions</h3>
            </div>
            <p className="text-gray-400 transform hover:translateZ-1 transition-transform duration-300">
              Transforming businesses through innovative AI solutions, automation, 
              and intelligent systems that drive real results.
            </p>
            <div className="flex space-x-4 transform hover:translateZ-2 transition-transform duration-300">
              <button
                onClick={openWhatsApp}
                className="bg-cyan-500 hover:bg-cyan-600 p-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:rotateZ-15 hover:translateZ-2 glow-cyan"
                title="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
              <a
                href="mailto:patrick@pblanksai.com"
                className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:rotateZ-15 hover:translateZ-2"
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:rotateZ-15 hover:translateZ-2"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:rotateZ-15 hover:translateZ-2"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="transform hover:rotateY-5 hover:translateZ-4 transition-transform duration-500">
            <h4 className="text-lg font-semibold mb-4 transform hover:translateZ-2 transition-transform duration-300">Services</h4>
            <ul className="space-y-2 text-gray-400 transform hover:translateZ-1 transition-transform duration-300">
              <li><a href="#" className="hover:text-cyan-400 transition-all duration-300 transform hover:translateX-2 hover:translateZ-1 inline-block">AI Coding & Development</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-all duration-300 transform hover:translateX-2 hover:translateZ-1 inline-block">Lead Generation Systems</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-all duration-300 transform hover:translateX-2 hover:translateZ-1 inline-block">AI Production & Automation</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-all duration-300 transform hover:translateX-2 hover:translateZ-1 inline-block">Custom AI Solutions</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-all duration-300 transform hover:translateX-2 hover:translateZ-1 inline-block">Chatbot Development</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-all duration-300 transform hover:translateX-2 hover:translateZ-1 inline-block">Data Analysis & Processing</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="transform hover:rotateY-5 hover:translateZ-4 transition-transform duration-500">
            <h4 className="text-lg font-semibold mb-4 transform hover:translateZ-2 transition-transform duration-300">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 transform hover:translateZ-1 transition-transform duration-300">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="hover:text-cyan-400 transition-all duration-300 transform hover:translateX-2 hover:translateZ-1"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-cyan-400 transition-all duration-300 transform hover:translateX-2 hover:translateZ-1"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-cyan-400 transition-all duration-300 transform hover:translateX-2 hover:translateZ-1"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-cyan-400 transition-all duration-300 transform hover:translateX-2 hover:translateZ-1"
                >
                  Contact
                </button>
              </li>
              <li><a href="#" className="hover:text-cyan-400 transition-all duration-300 transform hover:translateX-2 hover:translateZ-1 inline-block">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-all duration-300 transform hover:translateX-2 hover:translateZ-1 inline-block">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="transform hover:rotateY-5 hover:translateZ-4 transition-transform duration-500">
            <h4 className="text-lg font-semibold mb-4 transform hover:translateZ-2 transition-transform duration-300">Contact</h4>
            <div className="space-y-3 text-gray-400 transform hover:translateZ-1 transition-transform duration-300">
              <div className="transform hover:translateX-2 hover:translateZ-1 transition-transform duration-300">
                <p className="font-medium text-white">WhatsApp (Preferred)</p>
                <p>+52 565 433 7869</p>
              </div>
              <div className="transform hover:translateX-2 hover:translateZ-1 transition-transform duration-300">
                <p className="font-medium text-white">Email</p>
                <p>patrick@pblanksai.com</p>
              </div>
              <div className="transform hover:translateX-2 hover:translateZ-1 transition-transform duration-300">
                <p className="font-medium text-white">Response Time</p>
                <p>Usually within 2 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 transform hover:translateZ-2 transition-transform duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 transform-style-3d">
            <div className="text-gray-400">
              © {currentYear} Patrick Blanks AI Solutions. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400 transform hover:translateZ-1 transition-transform duration-300">
              <span>Built with</span>
              <Code className="h-4 w-4 transform hover:rotateZ-180 transition-transform duration-500" />
              <span>and</span>
              <Bot className="h-4 w-4 transform hover:rotateZ-180 transition-transform duration-500" />
              <span>by Patrick Blanks</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;