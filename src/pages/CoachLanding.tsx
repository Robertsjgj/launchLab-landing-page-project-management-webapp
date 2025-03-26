import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Star, ArrowRight } from 'lucide-react';

export const CoachLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
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
                Transform Your Life With Expert
                <span className="text-orange-600"> Coaching</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Unlock your full potential with personalized coaching sessions designed to help you achieve your goals.
              </p>
              <div className="flex gap-4">
                <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center gap-2">
                  Book a Session <ArrowRight size={20} />
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-orange-600 hover:text-orange-600 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80"
                alt="Coach"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">How I Can Help You</h2>
            <p className="text-xl text-gray-600">Comprehensive coaching services tailored to your needs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: '1:1 Coaching',
                description: 'Personalized sessions focused on your specific goals and challenges.'
              },
              {
                icon: Users,
                title: 'Group Programs',
                description: 'Join like-minded individuals in transformative group coaching experiences.'
              },
              {
                icon: Star,
                title: 'VIP Intensive',
                description: 'Accelerated progress with focused, intensive coaching days.'
              }
            ].map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors"
              >
                <service.icon className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from people who've transformed their lives</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Entrepreneur',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
                quote: "Working with this coach has been transformative. I've achieved goals I never thought possible."
              },
              {
                name: 'Michael Chen',
                role: 'Executive',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
                quote: 'The personalized approach and expert guidance helped me break through my limitations.'
              }
            ].map((testimonial) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-gray-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};