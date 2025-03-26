import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Download, Star, Shield, Zap, ArrowRight } from 'lucide-react';

export const AppLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -20 }}
              animate={{ x: 0 }}
            >
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Your Life,
                <span className="text-purple-600"> Simplified</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Experience the future of productivity with our revolutionary mobile app.
              </p>
              <div className="flex gap-4">
                <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center gap-2">
                  Download Now <Download size={20} />
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-purple-600 hover:text-purple-600 transition-colors">
                  Learn More
                </button>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600">4.9 rating on App Store</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
                alt="App Screenshot"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Our App?</h2>
            <p className="text-xl text-gray-600">Designed with your needs in mind</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: 'Intuitive Design',
                description: 'Clean and user-friendly interface that makes navigation a breeze.'
              },
              {
                icon: Shield,
                title: 'Secure & Private',
                description: 'Your data is protected with military-grade encryption.'
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Optimized performance ensures quick load times and smooth operation.'
              }
            ].map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors"
              >
                <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-purple-600 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Download now and transform your productivity today.</p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                App Store <ArrowRight size={20} />
              </button>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                Google Play <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};