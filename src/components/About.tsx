import React from 'react';
import { Award, Users, Code, TrendingUp, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const achievements = [
    { number: "50+", label: "AI Projects Delivered" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  const expertise = [
    "Machine Learning & Deep Learning",
    "Natural Language Processing",
    "Computer Vision & Image Recognition",
    "Predictive Analytics & Data Science",
    "Process Automation & RPA",
    "API Development & Integration",
    "Cloud AI Deployment (AWS, Azure, GCP)",
    "Custom Chatbot Development"
  ];

  const testimonials = [
    {
      text: "Patrick's AI solution increased our lead conversion by 250%. The automated system works flawlessly.",
      author: "Sarah Johnson",
      company: "TechStart Inc."
    },
    {
      text: "The custom chatbot Patrick developed handles 80% of our customer inquiries. Game-changing results!",
      author: "Michael Chen",
      company: "E-commerce Solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-black/90 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">
            About Patrick Blanks
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading AI specialist dedicated to transforming businesses through intelligent automation and cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 relative z-10">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                AI Innovation Expert
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                With over 5 years of experience in artificial intelligence and machine learning, 
                I specialize in creating custom AI solutions that drive real business results. 
                My passion lies in transforming complex business challenges into streamlined, 
                automated processes that scale efficiently.
              </p>
              <p className="text-gray-300 leading-relaxed">
                From Fortune 500 companies to ambitious startups, I've helped organizations 
                leverage AI to increase productivity, reduce costs, and unlock new revenue streams. 
                My approach combines technical expertise with business acumen to deliver solutions 
                that truly make a difference.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">Mission Statement</h4>
              <p className="text-gray-300">
                To democratize AI technology by making advanced artificial intelligence 
                accessible, practical, and profitable for businesses of all sizes. 
                I believe every organization should have the power to compete in the AI-driven future.
              </p>
            </div>
          </div>

          {/* Expertise Grid */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Technical Expertise</h4>
            <div className="grid grid-cols-1 gap-3">
              {expertise.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center bg-gray-900 border border-gray-700 rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{achievement.number}</div>
              <div className="text-gray-300">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 relative z-10">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Client Success Stories
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black border border-gray-600 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-cyan-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-cyan-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center mt-16 relative z-10">
          <h3 className="text-xl font-bold text-white mb-6">Certifications & Recognition</h3>
          <div className="flex justify-center space-x-8 items-center opacity-60">
            <div className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-cyan-400" />
              <span className="text-gray-300">AWS Certified AI Practitioner</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-cyan-400" />
              <span className="text-gray-300">Google Cloud AI Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-cyan-400" />
              <span className="text-gray-300">Microsoft Azure AI Expert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;