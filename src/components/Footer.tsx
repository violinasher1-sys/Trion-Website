/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <a href="#home" className="text-3xl font-display font-black tracking-tighter">
              TRION<span className="text-accent">TECHNICAL</span>
            </a>
            <p className="text-white/50 max-w-sm leading-relaxed text-lg">
              Engineering Excellence. Delivered with Precision. Providing top-tier oilfield solutions across the GCC since 2017.
            </p>
          </div>

          <div>
            <h4 className="text-accent mono-label mb-8">QUICK LINKS</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-white/50 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/50 hover:text-white transition-colors">Services</a></li>
              <li><a href="#industries" className="text-white/50 hover:text-white transition-colors">Industries</a></li>
              <li><a href="#journey" className="text-white/50 hover:text-white transition-colors">Our Journey</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent mono-label mb-8">REGIONAL APPROVALS</h4>
            <ul className="space-y-4 text-white/40">
              <li className="flex items-center gap-2">ADNOC Approved</li>
              <li className="flex items-center gap-2">Saudi Aramco Approved</li>
              <li className="flex items-center gap-2">DNV Compliant</li>
              <li className="flex items-center gap-2">ISO 9001:2015</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:row justify-between items-center gap-6 text-white/40 text-sm">
          <p>© {currentYear} Trion Technical Oilfield Services LLC. All Rights Reserved.</p>
          <div className="flex gap-8 italic">
            <span>Licensed in UAE & KSA</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
