import React from 'react';
import { 
  Code, 
  TrendingUp, 
  Bot, 
  Cog, 
  MessageSquare, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "AI Coding & Development",
      description: "Custom AI applications, machine learning models, and intelligent software solutions tailored to your business needs.",
      features: [
        "Custom AI Model Development",
        "Machine Learning Integration",
        "API Development & Integration",
        "Cloud AI Deployment"
      ],
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Lead Generation Systems",
      description: "AI-powered lead qualification, scoring, and nurturing systems that convert prospects into customers automatically.",
      features: [
        "AI Lead Scoring",
        "Automated Nurturing Sequences",
        "Predictive Analytics",
        "CRM Integration"
      ],
      color: "green"
    },
    {
      icon: Cog,
      title: "AI Production & Automation",
      description: "Streamline your operations with intelligent automation that handles repetitive tasks and optimizes workflows.",
      features: [
        "Process Automation",
        "Intelligent Workflows",
        "Document Processing",
        "Quality Assurance AI"
      ],
      color: "purple"
    },
    {
      icon: Bot,
      title: "Custom AI Solutions",
      description: "Bespoke AI systems designed specifically for your industry challenges and business objectives.",
      features: [
        "Industry-Specific AI",
        "Custom Algorithm Development",
        "AI Strategy Consulting",
        "Proof of Concept Development"
      ],
      color: "indigo"
    },
    {
      icon: MessageSquare,
      title: "Chatbot Development",
      description: "Intelligent conversational AI that provides 24/7 customer support and enhances user engagement.",
      features: [
        "Multi-Channel Chatbots",
        "Natural Language Processing",
        "Voice AI Integration",
        "Sentiment Analysis"
      ],
      color: "teal"
    },
    {
      icon: BarChart3,
      title: "Data Analysis & Processing",
      description: "Transform raw data into actionable insights with advanced AI analytics and reporting systems.",
      features: [
        "Predictive Analytics",
        "Real-time Dashboards",
        "Data Mining & Insights",
        "Automated Reporting"
      ],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      indigo: "from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700",
      teal: "from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700",
      orange: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/525654337869', '_blank');
  };

  return (
    <section id="services" className="py-20 bg-black/90 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">
            Comprehensive AI Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From conceptualization to deployment, we provide end-to-end AI solutions 
            that drive innovation and deliver measurable business results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-black border border-gray-700 rounded-xl shadow-lg hover:shadow-xl hover:shadow-cyan-400/20 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${getColorClasses(service.color)} p-6 text-white`}>
                  <IconComponent className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={openWhatsApp}
                    className="w-full bg-gray-800 hover:bg-gray-700 text-gray-200 py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200 group-hover:bg-cyan-500 group-hover:text-black"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 relative z-10">
          <div className="bg-black border border-gray-700 rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how AI can solve your specific challenges and drive growth.
            </p>
            <button
              onClick={openWhatsApp}
              className="bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors duration-200"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Schedule Free Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;