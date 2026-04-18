/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { STATS } from '../constants.ts';

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}{target > 10 ? '+' : ''}</span>;
}

export default function Stats() {
  return (
    <section className="bg-primary pt-12 pb-24 -mt-16 relative z-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-lg text-center"
        >
          {STATS.map((stat) => (
            <div key={stat.id} className="space-y-4">
              <h3 className="text-4xl md:text-6xl font-display font-extrabold text-white">
                <Counter target={stat.target} />
              </h3>
              <p className="mono-label text-accent">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
