import React, { useState } from 'react';
import { MessageCircle, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    
    // Create WhatsApp message
    const message = `Hi Patrick! I'm interested in your AI services.

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Service Interest: ${formData.service}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/525654337869?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/525654337869', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-black/90 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI? Get in touch for a free consultation 
            and discover how artificial intelligence can drive your success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 relative z-10">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                I'm here to help you navigate the AI landscape and implement solutions 
                that drive real results. Let's discuss your project and explore the possibilities.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 border border-gray-600 p-3 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">WhatsApp (Preferred)</h4>
                  <p className="text-gray-300">+52 565 433 7869</p>
                  <button
                    onClick={openWhatsApp}
                    className="text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Chat with me now →
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 border border-gray-600 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-gray-300">patrick@pblanksai.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 border border-gray-600 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Response Time</h4>
                  <p className="text-gray-300">Usually within 2 hours</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 border border-gray-600 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Service Area</h4>
                  <p className="text-gray-300">Global (Remote Services)</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-6">
              <h4 className="font-semibold text-cyan-400 mb-4">Quick Start Options</h4>
              <div className="space-y-3">
                <button
                  onClick={openWhatsApp}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-black py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Free 15-min Consultation</span>
                </button>
                <button
                  onClick={openWhatsApp}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  Request Project Quote
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black border border-gray-700 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-300">You'll be redirected to WhatsApp to continue the conversation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="AI Coding & Development">AI Coding & Development</option>
                    <option value="Lead Generation Systems">Lead Generation Systems</option>
                    <option value="AI Production & Automation">AI Production & Automation</option>
                    <option value="Custom AI Solutions">Custom AI Solutions</option>
                    <option value="Chatbot Development">Chatbot Development</option>
                    <option value="Data Analysis & Processing">Data Analysis & Processing</option>
                    <option value="Consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Tell me about your project, goals, and how AI can help your business..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-black py-4 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message & Continue on WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;