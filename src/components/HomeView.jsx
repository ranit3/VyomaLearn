'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, LogIn, Compass, Layers, Zap, BookOpen, 
  FileCheck2, RefreshCw, MessageSquare, CheckCircle2, ArrowDown,
  Sparkles
} from 'lucide-react';
import { PLATFORM_URL } from '@/lib/constants';

export default function HomeView() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section (First Instance — Exact Original Design over Vanta waves) */}
      <section className="px-6 pt-10 md:pt-14 pb-20 max-w-7xl mx-auto w-full flex flex-col items-start text-left relative z-10 min-h-[calc(100vh-7rem)] justify-center">
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 leading-[1.3] text-slate-900"
        >
          Agentic AI Based <span className="inline-block bg-cyan-100/90 text-slate-900 px-4 py-1 rounded-md font-serif italic font-normal shadow-sm">Learning,</span>
          <br className="hidden md:block" />
          <span className="font-serif italic text-slate-900 font-normal mt-3 block">Personalized From Basics to Mastery.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-slate-700 max-w-2xl mb-10 font-normal leading-relaxed"
        >
          Vyoma Learn (VyomaLearn) analyzes your learning patterns to deliver personalized practice sessions, adapting dynamically to your pace and ensuring profound comprehension without the stress.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a 
            href={`${PLATFORM_URL}/login`} 
            className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold transition-all shadow-sm flex items-center gap-2 group cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      {/* Down Page: Flow Diagram Feature Section (Visible upon scrolling down) */}
      <section className="px-6 py-24 max-w-5xl mx-auto w-full relative z-10">
        
        {/* Flow Diagram Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            How Learning Flows on VyomaLearn
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A seamless, step-by-step pedagogical pipeline from your initial login to verified conceptual mastery.
          </p>
        </div>

        {/* FLOW DIAGRAM PIPELINE */}
        <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
          
          {/* NODE 1: Login to Platform */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0">
                <LogIn size={24} />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Step 01</span>
                  <span className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">Authentication</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1.5">Login to Platform</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Fast, secure sign-in via Google SSO or email. Instantly access your personal workspace where your course progress, knowledge states, and test histories are securely synchronized across devices.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Connector Arrow 1 -> 2 */}
          <div className="my-3 flex flex-col items-center">
            <div className="w-0.5 h-7 bg-slate-900" />
            <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-sm">
              <ArrowDown size={14} strokeWidth={2.5} />
            </div>
          </div>

          {/* NODE 2: Course Creation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg shrink-0">
                <Compass size={24} />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Step 02</span>
                  <span className="text-[11px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-md font-medium">Open-Domain</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1.5">Course Creation</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  Type any topic or subject you wish to master. No rigid course catalog restrictions.
                </p>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-500">
                  <span className="bg-slate-100 px-2.5 py-1 rounded-full">✨ Any Subject</span>
                  <span className="bg-slate-100 px-2.5 py-1 rounded-full">⚡ Instant Conceptual Mapping</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Connector Arrow 2 -> 3 */}
          <div className="my-3 flex flex-col items-center">
            <div className="w-0.5 h-7 bg-slate-900" />
            <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-sm">
              <ArrowDown size={14} strokeWidth={2.5} />
            </div>
          </div>

          {/* NODE 3: Track Selection (Basic vs Deep) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-lg shrink-0">
                <Layers size={24} />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Step 03</span>
                  <span className="text-[11px] bg-purple-50 text-purple-700 px-2 py-0.5 rounded-md font-medium">Track Selection</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Choose Track: Basic or Deep Learning</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Calibrate depth and pacing based on your exam deadline and learning goals:
                </p>
              </div>
            </div>

            {/* Dual Branches Side-by-Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80">
                <div className="flex items-center gap-2 mb-1.5 font-bold text-sm text-emerald-900">
                  <Zap size={16} className="text-emerald-600" />
                  <span>Foundational Track (Basic)</span>
                </div>
                <p className="text-xs text-emerald-800/90 leading-relaxed">
                  Fast conceptual breakdowns, essential core axioms, and high-yield summaries for rapid understanding.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80">
                <div className="flex items-center gap-2 mb-1.5 font-bold text-sm text-blue-900">
                  <Layers size={16} className="text-blue-600" />
                  <span>Deep Dive Track</span>
                </div>
                <p className="text-xs text-blue-800/90 leading-relaxed">
                  Exhaustive mathematical derivations, theoretical proofs, edge cases, and deep multi-stage coverage.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Connector Arrow 3 -> 4 */}
          <div className="my-3 flex flex-col items-center">
            <div className="w-0.5 h-7 bg-slate-900" />
            <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-sm">
              <ArrowDown size={14} strokeWidth={2.5} />
            </div>
          </div>

          {/* NODE 4: Syllabus Architecture */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg shrink-0">
                <BookOpen size={24} />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Step 04</span>
                  <span className="text-[11px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md font-medium">Curriculum Engine</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Syllabus: AI Generated or Custom</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Structure your study roadmap autonomously or match your exact classroom syllabus:
                </p>
              </div>
            </div>

            {/* Dual Options Side-by-Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/70">
                <div className="flex items-center gap-2 mb-1.5 font-bold text-sm text-amber-950">
                  <Sparkles size={16} className="text-amber-500" />
                  <span>AI-Generated Curriculum</span>
                </div>
                <p className="text-xs text-amber-900/85 leading-relaxed">
                  Autonomous Agentic Planner decomposes the domain into structured logical chapters and submodules.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-200/70">
                <div className="flex items-center gap-2 mb-1.5 font-bold text-sm text-indigo-950">
                  <BookOpen size={16} className="text-indigo-600" />
                  <span>Custom Syllabus Input</span>
                </div>
                <p className="text-xs text-indigo-900/85 leading-relaxed">
                  Paste your university course codes, syllabus text, or semester blueprint to study your exact curriculum.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Connector Arrow 4 -> 5 */}
          <div className="my-3 flex flex-col items-center">
            <div className="w-0.5 h-7 bg-slate-900" />
            <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-sm">
              <ArrowDown size={14} strokeWidth={2.5} />
            </div>
          </div>

          {/* NODE 5: Learning & Diagnostic Tests */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg shrink-0">
                <FileCheck2 size={24} />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 05</span>
                  <span className="text-[11px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md font-medium">Active Recall</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1.5">Interactive Learning & Subtopic Tests</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  Study through focused modular lessons equipped with math equations and syntax formatting. Immediate, low-stakes subtopic tests verify your comprehension at every milestone using Bloom's Taxonomy.
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-700">
                  <span className="bg-emerald-50 px-2.5 py-1 rounded-md">✓ Modular Step-by-Step Study</span>
                  <span className="bg-emerald-50 px-2.5 py-1 rounded-md">✓ Instant Diagnostic Tests</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Connector Arrow 5 -> 6 */}
          <div className="my-3 flex flex-col items-center">
            <div className="w-0.5 h-7 bg-slate-900" />
            <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-sm">
              <ArrowDown size={14} strokeWidth={2.5} />
            </div>
          </div>

          {/* NODE 6: Adaptive Re-Teaching Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white/95 backdrop-blur-md border-2 border-rose-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-lg shrink-0">
                <RefreshCw size={24} />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Step 06</span>
                  <span className="text-[11px] bg-rose-50 text-rose-700 px-2 py-0.5 rounded-md font-bold">Smart Remediation</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1.5">Adaptive Re-Teaching Feature</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Stumble on a concept? VyomaLearn never penalizes you. The Agentic Re-Teacher intervenes in real time—diagnosing misconceptions and re-explaining via intuitive analogies and targeted drills.
                </p>

                <div className="p-3 rounded-xl bg-rose-50/80 border border-rose-200 text-xs font-medium text-rose-900 flex items-center gap-2">
                  <RefreshCw size={14} className="text-rose-600 shrink-0 animate-spin" style={{ animationDuration: '6s' }} />
                  <span>
                    <strong>Self-Healing Loop:</strong> Cognitive Gap Diagnosed ➔ Analogical Re-explanation ➔ Targeted Micro-Drill ➔ Verified Mastery before progressing!
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Connector Arrow 6 -> 7 */}
          <div className="my-3 flex flex-col items-center">
            <div className="w-0.5 h-7 bg-slate-900" />
            <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-sm">
              <ArrowDown size={14} strokeWidth={2.5} />
            </div>
          </div>

          {/* NODE 7: 24/7 Doubt Solving */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold text-lg shrink-0">
                <MessageSquare size={24} />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">Step 07</span>
                  <span className="text-[11px] bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded-md font-medium">Mentorship</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1.5">24/7 Doubt Solving Abilities</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Have a question at any point during your learning? The AI companion is always available with Socratic guidance to resolve doubts immediately.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Final Goal Node */}
          <div className="my-3 flex flex-col items-center">
            <div className="w-0.5 h-7 bg-slate-900" />
            <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-sm">
              <ArrowDown size={14} strokeWidth={2.5} />
            </div>
          </div>

          <div className="mt-2 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs sm:text-sm shadow-md">
              <CheckCircle2 size={16} className="text-emerald-400" />
              <span>DURABLE CONCEPTUAL MASTERY ACHIEVED</span>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
}