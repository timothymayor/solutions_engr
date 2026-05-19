import { motion } from 'motion/react';
import { Cpu, Zap, Cloud, Layout, CheckCircle2, Server, Database, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

const ICON_MAP: Record<string, any> = {
  Cpu,
  Zap,
  Cloud,
  Layout,
  Server,
  Database,
  ShieldCheck
};

export function About() {
  return (
    <section id="about" className="py-24 bg-brand-slate-950">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-brand-orange font-mono font-bold text-[10px] tracking-widest uppercase">[ Overview ]</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight text-white tracking-tight">
                Decade of Engineering. <br/> 
                <span className="text-brand-slate-500">Enterprise Standards.</span>
              </h2>
            </div>
            <p className="text-lg text-brand-slate-400 leading-relaxed max-w-lg">
              {PORTFOLIO_DATA.summary}
            </p>
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-brand-slate-800">
              <div>
                <p className="text-4xl font-display font-bold text-brand-green">{PORTFOLIO_DATA.experience}</p>
                <p className="text-brand-slate-500 text-[10px] font-mono mt-1 uppercase tracking-widest">Global Expertise</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-brand-orange">{PORTFOLIO_DATA.projectsCompleted}</p>
                <p className="text-brand-slate-500 text-[10px] font-mono mt-1 uppercase tracking-widest">Production Ships</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="enterprise-card p-10 bg-brand-slate-900/60 space-y-6 relative z-10 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldCheck className="w-24 h-24" />
              </div>
              <h3 className="font-display text-xl font-bold flex items-center gap-2 text-white">
                <div className="w-8 h-8 rounded bg-brand-green/10 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-brand-green" />
                </div>
                Core Engineering Values
              </h3>
              <p className="text-brand-slate-400 text-sm leading-relaxed">
                I don't just build models; I build commercially viable, secure, and resilient systems that drive real-world business value.
              </p>
              <ul className="space-y-4 pt-4">
                {["SOC2/HIPAA Compliance Architecture", "Real-time Latency Optimization", "Infrastructure as Code (IaC)", "Seamless Legacy API Integrations"].map((check) => (
                  <li key={check} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-brand-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                    {check}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-green/10 rounded-full blur-[100px] z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 bg-brand-slate-900/20 border-t border-brand-slate-800">
      <div className="container mx-auto px-6 md:px-10">
        <div className="mb-16 flex items-end justify-between">
          <div className="space-y-4">
            <span className="text-brand-green font-mono font-bold text-[10px] tracking-widest uppercase">[ Capabilities ]</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">Production Solutions</h2>
          </div>
          <p className="hidden md:block text-brand-slate-500 text-sm max-w-xs text-right">
            End-to-end technical leadership for high-stakes enterprise projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.services.map((service, idx) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group enterprise-card p-10 hover:bg-brand-slate-900 transition-all cursor-default"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 bg-white/5 group-hover:bg-brand-orange transition-colors rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-brand-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-mono text-[10px] text-brand-slate-800 font-bold tracking-widest group-hover:text-brand-slate-700 transition-colors">0{idx + 1}</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-white group-hover:text-brand-orange transition-colors">{service.title}</h3>
                <p className="text-brand-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-[10px] font-bold text-brand-slate-500 tracking-[.2em] group-hover:text-white uppercase transition-colors">
                  Learn Strategy →
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
