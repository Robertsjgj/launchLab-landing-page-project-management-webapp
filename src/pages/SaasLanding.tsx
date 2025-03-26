import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, BarChart2, Shield, Zap } from 'lucide-react';
import { Modal } from '../components/Modal';

export const SaasLanding = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Streamline Your Workflow
              <span className="text-indigo-600"> Instantly</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Boost productivity and collaboration with our all-in-one platform designed for modern teams.
            </p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setShowGetStarted(true)}
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                Get Started <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => setShowVideo(true)}
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-indigo-600 hover:text-indigo-600 transition-colors"
              >
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="p-6 rounded-xl bg-gray-50 hover:bg-indigo-50 transition-colors">
              <BarChart2 className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-gray-600">Get deep insights into your team's performance with real-time analytics.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 hover:bg-indigo-50 transition-colors">
              <Shield className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Bank-grade security to keep your data safe and compliant.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 hover:bg-indigo-50 transition-colors">
              <Zap className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Optimized performance ensures quick load times and smooth operation.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that works best for your team</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '29',
                features: ['5 Team Members', '10GB Storage', 'Basic Analytics']
              },
              {
                name: 'Professional',
                price: '99',
                features: ['25 Team Members', '100GB Storage', 'Advanced Analytics']
              },
              {
                name: 'Enterprise',
                price: '299',
                features: ['Unlimited Team Members', 'Unlimited Storage', 'Custom Solutions']
              }
            ].map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl border border-gray-200 hover:border-indigo-600 transition-colors"
              >
                <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">${plan.price}<span className="text-lg text-gray-500">/mo</span></p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-indigo-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setShowGetStarted(true)}
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo Modal */}
      <Modal isOpen={showVideo} onClose={() => setShowVideo(false)}>
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-t-xl"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Product Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Modal>

      {/* Get Started Modal */}
      <Modal isOpen={showGetStarted} onClose={() => setShowGetStarted(false)}>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Get Started with LaunchLab</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Work Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Company"
              />
            </div>
            <div>
              <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
                Team Size
              </label>
              <select
                id="size"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option>1-10 employees</option>
                <option>11-50 employees</option>
                <option>51-200 employees</option>
                <option>201-500 employees</option>
                <option>500+ employees</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Start Free Trial
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4 text-center">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </Modal>
    </div>
  );
};