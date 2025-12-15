import { motion } from 'framer-motion';
import { Globe, GraduationCap, Users, Award, Brain, Target, TrendingUp } from 'lucide-react';

const expertiseStats = [
  { label: 'PhD Level', value: '30%', icon: GraduationCap, color: 'from-emerald-500 to-emerald-600' },
  { label: 'Masters', value: '40%', icon: Brain, color: 'from-teal-500 to-teal-600' },
  { label: 'Bachelors', value: '30%', icon: Target, color: 'from-emerald-500 to-teal-600' }
];

export default function HumanResource() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Human Resource <span className="text-emerald-600">Capacity</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A global network of accomplished professionals delivering world-class expertise
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Expertise by Qualification</h3>
              <div className="space-y-6">
                {expertiseStats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.03, x: 8 }}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4"
                  >
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="text-white" size={28} />
                    </motion.div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-600 mb-1">{stat.label}</div>
                      <motion.div
                        className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: idx * 0.1 + 0.3 }}
                      >
                        {stat.value}
                      </motion.div>
                    </div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <TrendingUp className="text-emerald-600" size={24} />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white border-2 border-emerald-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Global Talent Network</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    StarLime draws its human resource from across the globe, ensuring a diverse and highly skilled network of professionals.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-emerald-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-teal-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Academic Excellence</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our experts hold qualifications ranging from Bachelor's Degrees to Postdoctoral levels, ensuring relevant academic credentials and extensive field experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-emerald-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Distinguished Professionals</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We leverage a strong pool of accomplished PhD holders, senior researchers, and professors with distinguished service delivery track records.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-emerald-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-teal-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Multi-Sectoral Expertise</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    This global talent base enriches our company with multi-sectoral perspectives, advanced knowledge, and high-level technical expertise.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
