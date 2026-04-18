/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_INFO } from '../constants.ts';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [submissions, setSubmissions] = useState(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Rate limit check
    if (submissions >= 3) {
      setFormState('error');
      return;
    }

    setFormState('sending');

    // Simulate API call
    setTimeout(() => {
      setSubmissions(prev => prev + 1);
      setFormState('success');
      (e.target as HTMLFormElement).reset();
      
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12">Get In Touch</h2>
            <div className="space-y-12">
              {CONTACT_INFO.map((info, index) => (
                <div key={index} className="flex gap-6">
                  <div className="text-accent mt-1">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{info.title}</h4>
                    <p className="text-gray-500 leading-relaxed font-medium">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100"
          >
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-xl text-center"
                >
                  <CheckCircle2 size={48} className="mx-auto mb-4" />
                  <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                  <p>Thank you for reaching out. Our technical team will be in touch shortly.</p>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-6">
                  {formState === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg flex items-center gap-3">
                      <AlertCircle size={20} />
                      <p className="text-sm font-bold">Too many submissions. Please try again later.</p>
                    </div>
                  )}
                  
                  {/* Honeypot */}
                  <div className="hidden">
                    <input type="text" name="nickname" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="mono-label text-primary">Full Name</label>
                      <input required type="text" className="w-full bg-light border-none rounded-lg p-4 focus:ring-2 focus:ring-accent transition-all font-medium" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="mono-label text-primary">Company</label>
                      <input required type="text" className="w-full bg-light border-none rounded-lg p-4 focus:ring-2 focus:ring-accent transition-all font-medium" placeholder="Enter company name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="mono-label text-primary">Work Email</label>
                      <input required type="email" className="w-full bg-light border-none rounded-lg p-4 focus:ring-2 focus:ring-accent transition-all font-medium" placeholder="email@company.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="mono-label text-primary">Phone Number</label>
                      <input required type="tel" className="w-full bg-light border-none rounded-lg p-4 focus:ring-2 focus:ring-accent transition-all font-medium" placeholder="+971..." />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="mono-label text-primary">Service Interested In</label>
                    <select className="w-full bg-light border-none rounded-lg p-4 focus:ring-2 focus:ring-accent transition-all font-medium">
                      <option value="">Select a service...</option>
                      <option value="valve">Valve Servicing</option>
                      <option value="fabrication">Custom Fabrication</option>
                      <option value="oem">OEM Sourcing</option>
                      <option value="mro">Procurement/MRO</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="mono-label text-primary">Your Message</label>
                    <textarea required rows={4} className="w-full bg-light border-none rounded-lg p-4 focus:ring-2 focus:ring-accent transition-all font-medium" placeholder="How can we help you?"></textarea>
                  </div>

                  <button 
                    disabled={formState === 'sending' || formState === 'error'}
                    type="submit" 
                    className="w-full bg-accent hover:bg-primary text-white font-bold py-4 rounded-lg tracking-widest transition-all duration-300 disabled:opacity-50"
                  >
                    {formState === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
