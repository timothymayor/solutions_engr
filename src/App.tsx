/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar, Hero } from './components/Navigation';
import { About, Services } from './components/AboutServices';
import { CaseStudies, TechStack } from './components/WorkTech';
import { Workflow, Contact, Footer } from './components/ContactFooter';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative selection:bg-brand-orange selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-orange z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <div className="space-y-0">
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <TechStack />
        <Workflow />
        <Contact />
      </div>

      <Footer />

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-orange/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-green/5 rounded-full blur-[120px]" />
      </div>
    </main>
  );
}
