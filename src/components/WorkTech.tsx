import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export function CaseStudies() {
  return (
    <section id="projects" className="py-24 bg-brand-slate-950">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-brand-orange font-mono font-bold text-[10px] tracking-widest uppercase">[ Impact ]</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">Commercial Case Studies</h2>
          </div>
          <p className="text-brand-slate-500 max-w-sm text-sm">
            Systems currently processing millions of transactions and managing mission-critical enterprise workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {PORTFOLIO_DATA.caseStudies.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-brand-slate-900/30 border border-brand-slate-800"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[450px]">
                <div className="p-10 md:p-14 space-y-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4">
                    <span className="px-2 py-1 bg-brand-slate-800 rounded text-[9px] font-mono font-bold uppercase tracking-widest text-brand-slate-400">
                      Sector: {project.sector}
                    </span>
                    <div className={`w-1.5 h-1.5 rounded-full ${project.color === 'orange' ? 'bg-brand-orange' : project.color === 'green' ? 'bg-brand-green' : 'bg-brand-slate-500'}`} />
                  </div>
                  <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">{project.title}</h3>
                  <p className="text-base text-brand-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 bg-brand-slate-950 rounded border border-brand-slate-800 text-[10px] font-mono font-semibold text-brand-slate-500 uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-3 font-bold group/btn text-brand-orange text-sm uppercase tracking-widest pt-4">
                    View Architecture Spec
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
                <div className="bg-brand-slate-900 border-l border-brand-slate-800 flex flex-col items-center justify-center relative p-12 overflow-hidden">
                   {/* Metrics / Key result visual from theme */}
                   <div className="relative z-10 space-y-8 w-full max-w-[280px]">
                      <div className="flex items-end gap-3">
                         <div className="text-6xl font-display font-light text-white">
                           {idx === 0 ? "65" : idx === 1 ? "12" : "50"}
                           <span className="text-brand-green font-bold text-3xl">%</span>
                         </div>
                         <div className="pb-2 text-[10px] text-brand-slate-500 font-bold uppercase tracking-widest mb-1">
                            {idx === 0 ? "Efficiency Gain" : idx === 1 ? "Cost Reduction" : "Latency Drop"}
                         </div>
                      </div>
                      <div className="h-1 w-full bg-brand-slate-800 rounded-full overflow-hidden">
                         <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: idx === 0 ? "85%" : idx === 1 ? "60%" : "90%" }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className={`h-full bg-gradient-to-r ${project.color === 'orange' ? 'from-white to-brand-orange' : 'from-white to-brand-green'}`} 
                         />
                      </div>
                   </div>
                   
                   {/* Grid Overlay */}
                   <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px]" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechStack() {
  return (
    <section className="py-24 bg-brand-slate-950 border-t border-brand-slate-800">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-20 space-y-4">
          <span className="text-brand-green font-mono font-bold text-[10px] tracking-widest uppercase">[ Engineering Stack ]</span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white">Production Environments</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {Object.entries(PORTFOLIO_DATA.techStack).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="font-mono text-[10px] font-bold text-brand-slate-500 uppercase tracking-[0.3em] border-b border-brand-slate-800 pb-2">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map(item => (
                  <span key={item} className="px-3 py-1.5 bg-brand-slate-900 rounded-lg text-xs font-mono font-medium text-brand-slate-400 border border-brand-slate-800 hover:border-brand-orange transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
