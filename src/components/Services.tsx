/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { SERVICES } from '../constants.ts';

export default function Services() {
  return (
    <section id="services" className="section-padding bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Our Core Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 font-semibold tracking-widest text-sm"
          >
            COMPREHENSIVE ENGINEERING & SOURCING SOLUTIONS
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-lg group border-b-4 border-transparent hover:border-accent transition-all duration-300 shadow-sm hover:shadow-2xl"
            >
              <div className="mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                <service.icon size={48} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold mb-4 text-primary group-hover:text-accent transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
