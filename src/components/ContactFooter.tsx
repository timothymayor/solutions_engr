import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export function Workflow() {
  return (
    <section id="workflow" className="py-24 bg-brand-slate-950 border-y border-brand-slate-800">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-20">
          <span className="text-brand-orange font-mono font-bold text-[10px] tracking-widest uppercase">[ Engineering Lifecycle ]</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-8 text-white tracking-tight leading-[1.1]">High-Velocity Execution.</h2>
          <p className="text-brand-slate-400 text-lg leading-relaxed">My process is built for enterprises that need to move as fast as startups without breaking mission-critical infrastructure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.process.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="enterprise-card p-10 bg-brand-slate-900/20 space-y-6 relative group overflow-hidden"
            >
              <span className="absolute -top-6 -right-6 text-9xl font-display font-black text-white/5 opacity-0 group-hover:opacity-10 transition-all">
                {item.step}
              </span>
              <span className="text-brand-orange font-mono font-bold text-xs">[{item.step}]</span>
              <h3 className="font-display text-2xl font-bold text-white tracking-tight">{item.title}</h3>
              <p className="text-brand-slate-500 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-slate-950">
      <div className="container mx-auto px-6 md:px-10">
        <div className="enterprise-card rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 border-brand-slate-800/50">
          <div className="p-12 md:p-20 space-y-12 bg-gradient-to-br from-brand-slate-900/50 to-brand-slate-950">
            <div className="space-y-6">
              <span className="text-brand-green font-mono font-bold text-[10px] tracking-widest uppercase">[ Collaboration ]</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight text-white tracking-tight">Ready to <br/> <span className="text-brand-orange">Integrate?</span></h2>
              <p className="text-brand-slate-400 text-lg leading-relaxed">Available for high-stakes consulting, architectural audits, and executive AI strategy.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-slate-500 font-bold mb-1">Office Location</p>
                  <p className="text-sm font-semibold text-white">Austin, TX / Remote</p>
               </div>
               <div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-slate-500 font-bold mb-1">Direct Email</p>
                  <p className="text-sm font-semibold text-white">{PORTFOLIO_DATA.email}</p>
               </div>
            </div>

            <div className="flex gap-4 pt-4">
              {[
                { icon: Linkedin, href: '#', label: 'In' },
                { icon: Github, href: '#', label: 'Gh' },
                { icon: Mail, href: '#', label: 'Em' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  className="w-10 h-10 border border-brand-slate-800 rounded-full flex items-center justify-center text-brand-slate-500 hover:border-brand-orange hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <span className="font-mono text-[10px] font-bold">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-brand-slate-900/30 p-12 md:p-20 border-l border-brand-slate-800">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-mono font-bold uppercase text-brand-slate-500 tracking-widest">Inquiry Type</label>
                  <select className="w-full bg-brand-slate-950/50 border border-brand-slate-800 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-orange transition-colors text-white">
                    <option>AI Architectural Audit</option>
                    <option>SaaS Product Development</option>
                    <option>MLOps Infrastructure</option>
                    <option>Executive Consulting</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-mono font-bold uppercase text-brand-slate-500 tracking-widest">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-brand-slate-950/50 border border-brand-slate-800 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-orange transition-colors" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-mono font-bold uppercase text-brand-slate-500 tracking-widest">Email Address</label>
                <input type="email" placeholder="john@enterprise.io" className="w-full bg-brand-slate-950/50 border border-brand-slate-800 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-orange transition-colors" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-mono font-bold uppercase text-brand-slate-500 tracking-widest">Project Brief</label>
                <textarea rows={4} placeholder="Briefly describe your technical challenge..." className="w-full bg-brand-slate-950/50 border border-brand-slate-800 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-orange transition-colors resize-none" />
              </div>
              <button 
                className="w-full bg-brand-orange text-white py-5 rounded-xl font-bold flex items-center justify-center gap-2 group hover:bg-brand-orange/90 transition-all shadow-xl shadow-brand-orange/10"
              >
                DISPATCH INQUIRY
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-brand-slate-800 bg-brand-slate-950">
      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-slate-900 rounded flex items-center justify-center text-[10px] font-bold text-brand-orange border border-brand-slate-800">AV</div>
          <div>
            <p className="text-brand-slate-200 text-sm font-bold tracking-tight">{PORTFOLIO_DATA.name}</p>
            <p className="text-brand-slate-500 text-[9px] uppercase tracking-widest font-mono">Senior Engineer © 2026</p>
          </div>
        </div>
        
        <div className="flex gap-8 text-[10px] font-mono font-bold uppercase tracking-widest text-brand-slate-500">
          <a href="#" className="hover:text-white transition-colors">Infrastructure</a>
          <a href="#" className="hover:text-white transition-colors">Compliance</a>
          <a href="#" className="hover:text-brand-orange transition-colors">Availability</a>
        </div>
      </div>
    </footer>
  );
}
