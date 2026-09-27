import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Cpu,
  Coffee,
  FileCode,
  Terminal,
  Server,
  Smartphone,
  Database,
  Layout,
  Palette,
  Zap,
  Monitor,
  Layers,
  ShieldCheck,
  Lock,
  Box,
  Globe,
  Send,
  Key,
  HardDrive,
  Search,
  Grid,
  GitMerge,
  GitBranch,
  Sparkles,
  Package,
  Cloud,
  Shield,
  Wifi,
  CheckCircle,
  Wrench
} from 'lucide-react';
import { FigmaIcon, GithubIcon } from './Icons';

import { skillsCategories } from '../data/skills';

// Dynamic Icon Resolver
const getSkillIcon = (iconName) => {
  const map = {
    Code: <Code className="w-4 h-4" />,
    Cpu: <Cpu className="w-4 h-4" />,
    Coffee: <Coffee className="w-4 h-4" />,
    FileCode: <FileCode className="w-4 h-4" />,
    Terminal: <Terminal className="w-4 h-4" />,
    Server: <Server className="w-4 h-4" />,
    Smartphone: <Smartphone className="w-4 h-4" />,
    Database: <Database className="w-4 h-4" />,
    Layout: <Layout className="w-4 h-4" />,
    Palette: <Palette className="w-4 h-4" />,
    Zap: <Zap className="w-4 h-4" />,
    Monitor: <Monitor className="w-4 h-4" />,
    Layers: <Layers className="w-4 h-4" />,
    Figma: <FigmaIcon className="w-4 h-4" />,
    ShieldCheck: <ShieldCheck className="w-4 h-4" />,
    Lock: <Lock className="w-4 h-4" />,
    Box: <Box className="w-4 h-4" />,
    Globe: <Globe className="w-4 h-4" />,
    Send: <Send className="w-4 h-4" />,
    Key: <Key className="w-4 h-4" />,
    HardDrive: <HardDrive className="w-4 h-4" />,
    Search: <Search className="w-4 h-4" />,
    Grid: <Grid className="w-4 h-4" />,
    GitMerge: <GitMerge className="w-4 h-4" />,
    GitBranch: <GitBranch className="w-4 h-4" />,
    Github: <GithubIcon className="w-4 h-4" />,
    Sparkles: <Sparkles className="w-4 h-4" />,
    Package: <Package className="w-4 h-4" />,
    Cloud: <Cloud className="w-4 h-4" />,
    Shield: <Shield className="w-4 h-4" />,
    Wifi: <Wifi className="w-4 h-4" />,
    CheckCircle: <CheckCircle className="w-4 h-4" />,
  };
  return map[iconName] || <Code className="w-4 h-4" />;
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('ALL');

  const categoriesList = ['ALL', ...skillsCategories.map((c) => c.category)];

  const filteredCategories =
    activeTab === 'ALL'
      ? skillsCategories
      : skillsCategories.filter((c) => c.category === activeTab);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full mb-3 border border-amber-500/30">
            <Wrench className="w-4 h-4 text-amber-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-amber-300">TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Tech <span className="text-gradient-gold">Stack & Skills</span>
          </h2>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categoriesList.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full font-mono text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.5)] scale-105'
                    : 'glass-pill text-slate-300 hover:text-white border border-white/10 hover:border-amber-500/30'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <h3 className="font-mono text-sm font-bold text-amber-400 tracking-wider">
                    {cat.category}
                  </h3>
                  <span className="font-mono text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                    {cat.skills.length} Items
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="glass-pill px-3 py-1.5 rounded-xl border border-white/10 hover:border-amber-400/50 hover:bg-amber-500/10 flex items-center gap-2 cursor-pointer transition-all group"
                    >
                      <span className="text-amber-400 group-hover:scale-110 transition-transform">
                        {getSkillIcon(skill.icon)}
                      </span>
                      <span className="text-xs font-medium text-slate-200 group-hover:text-amber-300 transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
