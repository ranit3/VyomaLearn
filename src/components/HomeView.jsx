'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, LogIn, Compass, Layers, Zap, BookOpen, 
  FileCheck2, RefreshCw, MessageSquare, CheckCircle2,
  Sparkles, Check, BrainCircuit, ShieldCheck, ArrowUpRight
} from 'lucide-react';
import { PLATFORM_URL } from '@/lib/constants';

export default function HomeView() {
  const steps = [
    {
      step: "01",
      tag: "Authentication",
      title: "Login to Platform",
      description: "Fast, secure sign-in via Google SSO or email. Instantly access your personal workspace where your course progress, knowledge states, and test histories are securely synchronized across all your devices.",
      icon: LogIn,
      theme: {
        accent: "text-blue-600",
        badgeBg: "bg-blue-50 border-blue-200 text-blue-700",
        iconBg: "bg-blue-50 text-blue-600",
        glow: "hover:shadow-blue-500/10 hover:border-blue-300",
        nodeBg: "bg-blue-600 text-white"
      },
      pill: "Instant Cross-Device Sync"
    },
    {
      step: "02",
      tag: "Open-Domain",
      title: "Course Creation",
      description: "Type any topic or subject you wish to master. No rigid course catalog restrictions—from quantum mechanics to high-school calculus, VyomaLearn builds an individualized knowledge graph on the fly.",
      icon: Compass,
      theme: {
        accent: "text-indigo-600",
        badgeBg: "bg-indigo-50 border-indigo-200 text-indigo-700",
        iconBg: "bg-indigo-50 text-indigo-600",
        glow: "hover:shadow-indigo-500/10 hover:border-indigo-300",
        nodeBg: "bg-indigo-600 text-white"
      },
      tags: ["✨ Any Subject", "⚡ Instant Conceptual Mapping"]
    },
    {
      step: "03",
      tag: "Track Selection",
      title: "Choose Track: Basic or Deep Learning",
      description: "Calibrate depth and pacing based on your exam deadline and learning goals:",
      icon: Layers,
      theme: {
        accent: "text-purple-600",
        badgeBg: "bg-purple-50 border-purple-200 text-purple-700",
        iconBg: "bg-purple-50 text-purple-600",
        glow: "hover:shadow-purple-500/10 hover:border-purple-300",
        nodeBg: "bg-purple-600 text-white"
      },
      isDualTrack: true
    },
    {
      step: "04",
      tag: "Curriculum Engine",
      title: "Syllabus: AI Generated or Custom",
      description: "Structure your study roadmap autonomously or match your exact university course blueprint:",
      icon: BookOpen,
      theme: {
        accent: "text-amber-600",
        badgeBg: "bg-amber-50 border-amber-200 text-amber-800",
        iconBg: "bg-amber-50 text-amber-600",
        glow: "hover:shadow-amber-500/10 hover:border-amber-300",
        nodeBg: "bg-amber-600 text-white"
      },
      isDualSyllabus: true
    },
    {
      step: "05",
      tag: "Active Recall",
      title: "Interactive Learning & Subtopic Tests",
      description: "Study through focused modular lessons equipped with math equations and syntax formatting. Immediate, low-stakes subtopic tests verify your comprehension at every milestone using Bloom's Taxonomy.",
      icon: FileCheck2,
      theme: {
        accent: "text-emerald-600",
        badgeBg: "bg-emerald-50 border-emerald-200 text-emerald-800",
        iconBg: "bg-emerald-50 text-emerald-600",
        glow: "hover:shadow-emerald-500/10 hover:border-emerald-300",
        nodeBg: "bg-emerald-600 text-white"
      },
      highlights: ["✓ Modular Step-by-Step Study", "✓ Instant Diagnostic Tests"]
    },
    {
      step: "06",
      tag: "Smart Remediation",
      title: "Adaptive Re-Teaching Feature",
      description: "Stumble on a concept? VyomaLearn never penalizes you. The Agentic Re-Teacher intervenes in real time—diagnosing misconceptions and re-explaining via intuitive analogies and targeted drills.",
      icon: RefreshCw,
      theme: {
        accent: "text-rose-600",
        badgeBg: "bg-rose-50 border-rose-200 text-rose-700",
        iconBg: "bg-rose-50 text-rose-600",
        glow: "hover:shadow-rose-500/10 hover:border-rose-300",
        nodeBg: "bg-rose-600 text-white"
      },
      isRemediation: true
    },
    {
      step: "07",
      tag: "Mentorship",
      title: "24/7 Doubt Solving Abilities",
      description: "Have a question at any point during your learning? The AI companion is always available with Socratic guidance to resolve doubts immediately without spoon-feeding answers.",
      icon: MessageSquare,
      theme: {
        accent: "text-cyan-600",
        badgeBg: "bg-cyan-50 border-cyan-200 text-cyan-800",
        iconBg: "bg-cyan-50 text-cyan-600",
        glow: "hover:shadow-cyan-500/10 hover:border-cyan-300",
        nodeBg: "bg-cyan-600 text-white"
      },
      pill: "Always-Available Socratic Guidance"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="px-6 pt-4 md:pt-8 pb-20 max-w-7xl mx-auto w-full flex flex-col items-start text-left relative z-10 min-h-[calc(100vh-120px)] justify-center">
        
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-200/80 text-slate-800 text-xs font-semibold mb-6 shadow-xs backdrop-blur-md"
        >
          <BrainCircuit size={14} className="text-blue-600" />
          <span>Next-Gen Autonomous Agentic AI Education</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-[1.25] text-slate-900"
        >
          Agentic AI Based <span className="inline-block bg-cyan-100/90 text-slate-900 px-4 py-1 rounded-md font-serif italic font-normal shadow-sm">Learning,</span>
          <br className="hidden md:block" />
          <span className="font-serif italic text-slate-900 font-normal mt-3 block">
            Personalized From Basics to Mastery.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg sm:text-xl text-slate-700 max-w-2xl mb-10 font-normal leading-relaxed"
        >
          Vyoma Learn (VyomaLearn) analyzes your learning patterns to deliver personalized practice sessions, adapting dynamically to your pace and ensuring profound comprehension without the stress.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a 
            href={`${PLATFORM_URL}/login`} 
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Get Started Free</span>
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-7 py-4 bg-white/80 hover:bg-white border border-slate-200/80 text-slate-800 rounded-full font-medium transition-all shadow-xs flex items-center justify-center gap-2"
          >
            <span>Explore Pedagogy</span>
          </a>
        </motion.div>
      </section>

      {/* Modern Alternating Timeline Showcase Section */}
      <section id="how-it-works" className="px-6 py-24 max-w-6xl mx-auto w-full relative z-10 scroll-mt-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3 shadow-xs">
            <span>The Pedagogical Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            How Learning Flows on VyomaLearn
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A seamless, step-by-step pedagogical pipeline from your initial login to verified durable conceptual mastery.
          </p>
        </div>

        {/* Alternating Interactive Roadmap with Central Timeline Spine */}
        <div className="relative w-full">
          
          {/* Central Glowing Timeline Track (Desktop) */}
          <div 
            className="absolute left-1/2 top-4 bottom-12 w-1 -translate-x-1/2 rounded-full hidden md:block pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, #2563eb, #6366f1, #9333ea, #f59e0b, #10b981, #f43f5e, #06b6d4, #10b981)',
              opacity: 0.35
            }}
          />

          {/* Left Timeline Track (Mobile) */}
          <div 
            className="absolute left-6 top-4 bottom-12 w-1 -translate-x-1/2 rounded-full md:hidden pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, #2563eb, #6366f1, #9333ea, #f59e0b, #10b981, #f43f5e, #06b6d4, #10b981)',
              opacity: 0.35
            }}
          />

          {/* Cards Pipeline */}
          <div className="flex flex-col space-y-12 sm:space-y-16 md:space-y-24">
            {steps.map((item, index) => {
              const isEven = index % 2 !== 0; // index 0 is step 1 (odd -> left), index 1 is step 2 (even -> right)
              const IconComponent = item.icon;

              return (
                <div key={item.step} className="relative flex items-center w-full">
                  
                  {/* Central Node Marker (Desktop) */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className={`absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#edf4fa] shadow-md z-20 font-bold text-xs ${item.theme.nodeBg}`}
                  >
                    <span>{item.step}</span>
                  </motion.div>

                  {/* Mobile Node Marker */}
                  <div className={`absolute left-6 -translate-x-1/2 flex md:hidden items-center justify-center w-8 h-8 rounded-full border-2 border-[#edf4fa] shadow-sm z-20 font-bold text-[11px] ${item.theme.nodeBg}`}>
                    <span>{item.step}</span>
                  </div>

                  {/* Alternating Card Container */}
                  <motion.article
                    initial={{ opacity: 0, x: isEven ? 70 : -70, scale: 0.96 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-70px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full md:w-[calc(50%-3rem)] pl-14 md:pl-0 ${
                      isEven ? 'md:ml-auto' : 'md:mr-auto'
                    }`}
                  >
                    <div className={`bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 relative group overflow-hidden ${item.theme.glow}`}>
                      
                      {/* Subtle Ambient Gradient Corner Glow */}
                      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-blue-500/5 to-transparent rounded-bl-full pointer-events-none" />

                      {/* Header Row */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-2xl ${item.theme.iconBg} flex items-center justify-center font-bold shrink-0 shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent size={24} />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-400 font-mono tracking-wider">
                            STEP {item.step}
                          </span>
                          <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${item.theme.badgeBg}`}>
                            {item.tag}
                          </span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 leading-snug">
                        {item.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Dual Track Custom Component (Step 3) */}
                      {item.isDualTrack && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 mt-2">
                          <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                            <div className="flex items-center gap-2 mb-1 font-bold text-xs sm:text-sm text-emerald-900">
                              <Zap size={15} className="text-emerald-600" />
                              <span>Foundational Track</span>
                            </div>
                            <p className="text-xs text-emerald-800/90 leading-relaxed">
                              Fast conceptual breakdowns and high-yield core axioms for rapid grasp.
                            </p>
                          </div>
                          <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                            <div className="flex items-center gap-2 mb-1 font-bold text-xs sm:text-sm text-blue-900">
                              <Layers size={15} className="text-blue-600" />
                              <span>Deep Dive Track</span>
                            </div>
                            <p className="text-xs text-blue-800/90 leading-relaxed">
                              Exhaustive mathematical derivations, proofs, and edge-case coverage.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Dual Syllabus Custom Component (Step 4) */}
                      {item.isDualSyllabus && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 mt-2">
                          <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/70">
                            <div className="flex items-center gap-2 mb-1 font-bold text-xs sm:text-sm text-amber-950">
                              <Sparkles size={15} className="text-amber-500" />
                              <span>AI Curriculum</span>
                            </div>
                            <p className="text-xs text-amber-900/85 leading-relaxed">
                              Autonomous Planner decomposes any domain into structured logical modules.
                            </p>
                          </div>
                          <div className="p-3.5 rounded-2xl bg-indigo-50/60 border border-indigo-200/70">
                            <div className="flex items-center gap-2 mb-1 font-bold text-xs sm:text-sm text-indigo-950">
                              <BookOpen size={15} className="text-indigo-600" />
                              <span>Custom Syllabus</span>
                            </div>
                            <p className="text-xs text-indigo-900/85 leading-relaxed">
                              Paste university course codes or syllabus text to study your exact exam topics.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Remediation Feedback Loop (Step 6) */}
                      {item.isRemediation && (
                        <div className="p-3.5 rounded-2xl bg-rose-50/80 border border-rose-200 text-xs font-medium text-rose-900 flex items-center gap-2 mt-2">
                          <RefreshCw size={14} className="text-rose-600 shrink-0 animate-spin" style={{ animationDuration: '6s' }} />
                          <span>
                            <strong>Self-Healing Loop:</strong> Cognitive Gap Diagnosed ➔ Analogical Re-explanation ➔ Targeted Drill ➔ Verified Mastery!
                          </span>
                        </div>
                      )}

                      {/* Tags / Badges / Pills */}
                      {item.tags && (
                        <div className="flex flex-wrap gap-2 text-xs text-slate-500 mt-2">
                          {item.tags.map(t => (
                            <span key={t} className="bg-slate-100 px-3 py-1 rounded-full font-medium">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}

                      {item.highlights && (
                        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-700 mt-2">
                          {item.highlights.map(h => (
                            <span key={h} className="bg-emerald-50 px-2.5 py-1 rounded-md">
                              {h}
                            </span>
                          ))}
                        </div>
                      )}

                      {item.pill && (
                        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full mt-2">
                          <span>{item.pill}</span>
                        </div>
                      )}

                    </div>
                  </motion.article>
                </div>
              );
            })}
          </div>

          {/* Grand Milestone Achievement Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 md:mt-28 relative z-20 max-w-2xl mx-auto text-center"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6 shadow-inner">
                <CheckCircle2 size={32} />
              </div>

              <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800 mb-4 inline-block">
                Final Milestone
              </span>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3">
                Durable Conceptual Mastery Achieved
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-8">
                You never leave a topic with unresolved confusion. By validating micro-axioms through Bloom's Taxonomy, deep understanding becomes permanent.
              </p>

              <a
                href={`${PLATFORM_URL}/login`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full text-sm sm:text-base shadow-lg hover:shadow-blue-500/25 transition-all cursor-pointer group"
              >
                <span>Start Your Learning Journey</span>
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>

      </section>
    </div>
  );
}