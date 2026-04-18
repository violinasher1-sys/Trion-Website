/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-primary flex items-center overflow-hidden"
    >
      {/* Dot Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(var(--color-accent) 0.5px, transparent 0.5px)',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-8 font-extrabold"
          >
            Engineering Excellence. <br />
            <span className="text-accent underline decoration-white/20 decoration-8 underline-offset-12">Delivered with Precision.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg md:text-xl mb-12 border-l-4 border-accent pl-6 max-w-2xl leading-relaxed"
          >
            ADNOC & Aramco Approved Vendor specializing in custom metal manufacturing, precision parts, and technical oilfield services across Abu Dhabi and Dammam.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a 
              href="#services" 
              className="bg-accent hover:bg-transparent text-white border-2 border-accent px-10 py-4 rounded font-bold tracking-widest transition-all duration-300 text-center"
            >
              EXPLORE OUR SERVICES
            </a>
            <a 
              href="#contact" 
              className="bg-transparent hover:bg-white hover:text-primary text-white border-2 border-white px-10 py-4 rounded font-bold tracking-widest transition-all duration-300 text-center"
            >
              REQUEST A CONSULTATION
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Badge */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="hidden lg:block absolute bottom-12 right-12 bg-white/5 backdrop-blur-md border-t border-white/20 p-6 text-white"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <strong className="block text-accent mb-2 tracking-tight text-xl">ISO / DNV COMPLIANT</strong>
          <span className="mono-label opacity-40">Global Engineering Standards</span>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
