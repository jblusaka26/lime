import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Dr. Sarah Mwansa',
    position: 'Director of Education Programs',
    organization: 'National Education Council',
    content: 'StarLime delivered exceptional research and evaluation services for our national literacy program. Their evidence-based approach and attention to detail helped us improve outcomes for thousands of children.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'James Phiri',
    position: 'Chief Financial Officer',
    organization: 'Zambia Development Corporation',
    content: 'Their audit and taxation services are top-notch. The team demonstrated deep expertise and provided actionable recommendations that strengthened our financial management systems.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Patricia Banda',
    position: 'Programme Manager',
    organization: 'Community Development Initiative',
    content: 'Working with StarLime on our monitoring and evaluation framework was transformative. They brought international best practices while understanding our local context perfectly.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Michael Zulu',
    position: 'Managing Director',
    organization: 'Green Agriculture Solutions',
    content: 'StarLime helped us develop a comprehensive climate change adaptation strategy. Their multidisciplinary team provided insights that have positioned our organization as a leader in sustainable agriculture.',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Client <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from organizations we've partnered with to deliver transformational solutions
          </p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-12 shadow-2xl relative"
          >
            <motion.div
              className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Quote className="text-white" size={40} />
            </motion.div>

            <div className="flex items-center gap-2 mb-6 justify-center">
              {[...Array(testimonials[activeIndex].rating)].map((_, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: idx * 0.1, type: "spring" }}
                >
                  <Star className="text-amber-400 fill-amber-400" size={24} />
                </motion.div>
              ))}
            </div>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 text-center italic">
              "{testimonials[activeIndex].content}"
            </p>

            <div className="flex items-center gap-4 justify-center">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-16 h-16 rounded-full object-cover border-4 border-emerald-100"
              />
              <div className="text-left">
                <div className="font-bold text-gray-900 text-lg">{testimonials[activeIndex].name}</div>
                <div className="text-emerald-600 font-semibold">{testimonials[activeIndex].position}</div>
                <div className="text-gray-600 text-sm">{testimonials[activeIndex].organization}</div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 w-8'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16"
        >
          {[
            { number: '50+', label: 'Completed Projects' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '15+', label: 'Industry Sectors' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: idx * 0.1 + 0.3 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
