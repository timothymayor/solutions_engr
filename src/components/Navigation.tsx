import { motion } from 'motion/react';
import { Mail, Cpu, Zap, Cloud, Layout, ArrowRight, ExternalLink, Github, Linkedin, Terminal, Boxes, Network, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { PORTFOLIO_DATA } from '../data/portfolio';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-header"
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-10 h-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-orange via-brand-green to-brand-slate-800 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-brand-orange/10">
            TM
          </div>
          <div>
            <h1 className="text-sm md:text-lg font-bold tracking-tight text-white leading-none">{PORTFOLIO_DATA.name}</h1>
            <p className="text-[10px] uppercase tracking-widest text-brand-slate-500 font-semibold mt-1">Senior AI Solutions Engineer</p>
          </div>
        </div>
        
        <nav className="hidden lg:flex gap-8 text-sm font-medium items-center">
          <a href="#hero" className="text-brand-orange border-b-2 border-brand-orange pb-0.5 transition-all">Overview</a>
          <a href="#about" className="hover:text-white text-brand-slate-400 transition-colors">Experience</a>
          <a href="#services" className="hover:text-white text-brand-slate-400 transition-colors">Solutions</a>
          <a href="#projects" className="hover:text-white text-brand-slate-400 transition-colors">Case Studies</a>
          <button className="bg-white text-brand-slate-950 px-5 py-2 rounded-full text-xs font-bold hover:bg-brand-orange hover:text-white transition-all shadow-xl shadow-white/5 whitespace-nowrap ml-4">
            HIRE TIMOTHY
          </button>
        </nav>

        <a 
          href="#contact" 
          className="lg:hidden bg-brand-orange text-white px-4 py-2 rounded-full text-xs font-bold"
        >
          CONTACT
        </a>
      </div>
    </motion.nav>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden border-b border-brand-slate-800">
      {/* Background Decorative Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-slate-950 to-brand-slate-900/50" />
      
      <div className="container relative z-10 px-6 md:px-10 py-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="pill-label mb-8 mx-auto w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green/75 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </span>
            <span>Available for Enterprise Consulting</span>
          </div>

          <h2 className="font-display text-4xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
            Architecting <span className="text-brand-orange text-glow-orange">Production-Grade</span> Intelligence for Complex Systems.
          </h2>

          <p className="text-lg md:text-xl text-brand-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            {PORTFOLIO_DATA.summary}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="w-full sm:w-auto bg-brand-orange text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 group hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all"
            >
              EXPLORE CASE STUDIES
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto enterprise-card px-8 py-4 rounded-full font-bold hover:bg-brand-slate-800 transition-all"
            >
              HIRE TIMOTHY
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="p-5 enterprise-card bg-brand-slate-900/40">
              <div className="text-brand-green font-mono text-[10px] mb-2 uppercase tracking-widest">[01] Enterprise AI</div>
              <p className="text-xs text-brand-slate-400 leading-relaxed">Deploying LLM-orchestrated agents across Fintech & Healthcare.</p>
            </div>
            <div className="p-5 enterprise-card bg-brand-slate-900/40">
              <div className="text-brand-orange font-mono text-[10px] mb-2 uppercase tracking-widest">[02] Scalable Infra</div>
              <p className="text-xs text-brand-slate-400 leading-relaxed">Kubernetes, Terraform, and Multi-cloud strategy for high-load SaaS.</p>
            </div>
            <div className="p-5 enterprise-card bg-brand-slate-900/40 hidden md:block">
              <div className="text-brand-slate-400 font-mono text-[10px] mb-2 uppercase tracking-widest">[03] Reliability</div>
              <p className="text-xs text-brand-slate-400 leading-relaxed">99.9% uptime for AI processing pipelines in logistics sector.</p>
            </div>
            <div className="p-5 enterprise-card bg-brand-slate-900/40 hidden lg:block">
              <div className="text-brand-green font-mono text-[10px] mb-2 uppercase tracking-widest">[04] Impact</div>
              <p className="text-xs text-brand-slate-400 leading-relaxed">$12M+ annual operational savings for global retail partners.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
