/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { INDUSTRIES, WHY_CHOOSE } from '../constants.ts';

export default function Industries() {
  return (
    <>
      {/* Industries Section */}
      <section id="industries" className="section-padding bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold"
            >
              Industries We Serve
            </motion.h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {INDUSTRIES.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ backgroundColor: 'var(--color-accent)', scale: 1.05 }}
                className="flex items-center gap-4 px-8 py-6 bg-white/5 border border-white/10 rounded-lg cursor-default transition-colors duration-300"
              >
                <span className="text-2xl">{industry.icon}</span>
                <span className="font-bold tracking-widest text-sm whitespace-nowrap uppercase">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {WHY_CHOOSE.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-block mb-6 p-4 rounded-full bg-light text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <item.icon size={40} />
                </div>
                <h4 className="text-lg font-bold mb-4">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
