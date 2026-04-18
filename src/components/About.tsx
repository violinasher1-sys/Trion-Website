/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 relative inline-block">
              Our Legacy of Quality
              <div className="absolute -bottom-4 left-0 w-20 h-2 bg-accent" />
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg pt-4">
              <p>
                Founded in 2017 by two visionary engineers, Trion Technical was built on the foundation of providing world-class engineering solutions for the most demanding industrial environments.
              </p>
              <p>
                From our dual hubs in <strong className="text-primary underline decoration-accent/30 decoration-4">Abu Dhabi, UAE</strong> and <strong className="text-primary underline decoration-accent/30 decoration-4">Dammam, Saudi Arabia</strong>, we bridge the gap between complex specifications and high-precision manufacturing. Despite global challenges, we maintained 100% operational continuity.
              </p>
              <p>
                Our technicians are not just skilled; they are experts in translating international DNV standards into tangible products that keep the world's energy moving.
              </p>
            </div>

            <motion.div 
              className="mt-12"
              whileHover={{ x: 10 }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center gap-4 bg-primary text-white px-8 py-4 rounded font-bold tracking-widest text-sm hover:bg-accent transition-colors duration-300"
              >
                LEARN MORE ABOUT US
                <span className="text-accent text-2xl">→</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-primary aspect-square md:aspect-[4/3] rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl">
              <svg className="w-full opacity-10 absolute scale-150 rotate-12" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#E8610A" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,77.3,-44.7C85.4,-31.3,90.5,-15.7,89.2,-0.8C87.8,14.2,80,28.4,70.9,41.1C61.8,53.8,51.4,65,38.8,72.8C26.1,80.5,13.1,84.9,-0.6,85.9C-14.2,86.9,-28.4,84.5,-41.4,77.2C-54.4,69.9,-66.2,57.7,-74.6,43.6C-83,29.5,-87.9,13.5,-87.2,-2.3C-86.4,-18.1,-80.1,-33.6,-70.5,-46.8C-60.9,-60,-48.1,-70.9,-34.1,-77.7C-20.1,-84.5,-10,-87.1,2.5,-91.4C15,-95.7,29.9,-101.6,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
              <div className="text-center z-10 text-white">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="block text-accent text-sm font-bold tracking-[0.5em] mb-4"
                >
                  SINCE
                </motion.span>
                <motion.h4 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="text-8xl md:text-9xl font-display font-black leading-none"
                >
                  2017
                </motion.h4>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent opacity-20 -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
