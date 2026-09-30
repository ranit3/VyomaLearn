'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, LogIn, Compass, Layers, Zap, BookOpen, 
  FileCheck2, RefreshCw, MessageSquare, CheckCircle2, ArrowDown,
  Sparkles, Check, GraduationCap, BrainCircuit, Shield
} from 'lucide-react';
import { PLATFORM_URL } from '@/lib/constants';

export default function HomeView() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="px-6 pt-12 md:pt-16 pb-20 max-w-7xl mx-auto w-full flex flex-col items-start text-left relative z-10 min-h-[calc(100vh-8rem)] justify-center">
        
        {/* Subtle Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-6 shadow-xs"
        >
          <BrainCircuit size={14} className="text-blue-600 dark:text-blue-400" />
          <span>Next-Gen Autonomous Agentic AI Education</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-[1.25] text-slate-900 dark:text-white"
        >
          Agentic AI Based <span className="inline-block bg-blue-100 dark:bg-blue-950/80 text-blue-900 dark:text-blue-200 px-4 py-1 rounded-md font-serif italic font-normal shadow-xs">Learning,</span>
          <br className="hidden md:block" />
          <span className="font-serif italic text-blue-900 dark:text-blue-300 font-normal mt-3 block">
            Personalized From Basics to Mastery.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mb-10 font-normal leading-relaxed"
        >
          Vyoma Learn (VyomaLearn) analyzes your learning patterns to deliver personalized practice sessions, adapting dynamically to your pace and ensuring profound comprehension without the stress.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a 
            href={`${PLATFORM_URL}/login`} 
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-7 py-4 bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 rounded-full font-medium transition-all shadow-xs flex items-center justify-center gap-2"
          >
            <span>Explore Pedagogy</span>
            <ArrowDown size={16} />
          </a>
        </motion.div>

        {/* Feature quick stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 1 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 w-full max-w-2xl"
        >
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">100%</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Free During Beta Preview</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Bloom's</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Taxonomy Scaffolding</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">24/7</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Autonomous Socratic Mentorship</p>
          </div>
        </motion.div>
      </section>

      {/* Flow Diagram Feature Section */}
      <section id="how-it-works" className="px-6 py-24 max-w-5xl mx-auto w-full relative z-10 scroll-mt-20">
        
        {/* Flow Diagram Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-3">
            <span>Pedagogical Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            How Learning Flows on VyomaLearn
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
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
            className="w-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg shrink-0">
                <LogIn size={24} />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Step 01</span>
                  <span className="text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-md font-medium">Authentication</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5">Login to Platform</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Fast, secure sign-in via Google SSO or email. Instantly access your personal workspace where your course progress, knowledge states, and test histories are securely synchronized across devices.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Connector Arrow 1 -> 2 */}
          <div className="my-3 flex flex-col items-center">
            <div className="w-0.5 h-7 bg-slate-900 dark:bg-slate-500" />
            <div className="w-7 h-7 rounded-full bg-slate-900 dark:bg-slate-700 text-white flex items-center justify-center shadow-sm">
              <ArrowDown size={14} strokeWidth={2.5} />
            </div>
          </div>

          {/* NODE 2: Course Creation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-lg shrink-0">
                <Compass size={24} />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 02</span>
                  <span className="text-[11px] bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded-md font-medium">Open-Domain</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5">Course Creation</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  Type any topic or subject you wish to master. No rigid course catalog restrictions.
                </p>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <span className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">✨ Any Subject</span>
                  <span className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">⚡ Instant Conceptual Mapping</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Connector Arrow 2 -> 3 */}
          <div className="my-3 flex flex-col items-center">
            <div className="w-0.5 h-7 bg-slate-900 dark:bg-slate-500" />
            <div className="w-7 h-7 rounded-full bg-slate-900 dark:bg-slate-700 text-white flex items-center justify-center shadow-sm">
              <ArrowDown size={14} strokeWidth={2.5} />
            </div>
          </div>

          {/* NODE 3: Track Selection (Basic vs Deep) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg shrink-0">
                <Layers size={24} />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Step 03</span>
                  <span className="text-[11px] bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded-md font-medium">Track Selection</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Choose Track: Basic or Deep Learning</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Calibrate depth and pacing based on your exam deadline and learning goals:
                </p>
              </div>
            </div>

            {/* Dual Branches Side-by-Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800">
                <div className="flex items-center gap-2 mb-1.5 font-bold text-sm text-emerald-900 dark:text-emerald-300">
                  <Zap size={16} className="text-emerald-600" />
                  <span>Foundational Track (Basic)</span>
                </div>
                <p className="text-xs text-emerald-800/90 dark:text-emerald-400 leading-relaxed">
                  Fast conceptual breakdowns, essential core axioms, and high-yield summaries for rapid understanding.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-1.5 font-bold text-sm text-blue-900 dark:text-blue-300">
                  <Layers size={16} className="text-blue-600" />
                  <span>Deep Dive Track</span>
                </div>
                <p className="text-xs text-blue-800/90 dark:text-blue-400 leading-relaxed">
                  Exhaustive mathematical derivations, theoretical proofs, edge cases, and deep multi-stage coverage.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Connector Arrow 3 -> 4 */}
          <div className="my-3 flex flex-col items-center">
            <div className="w-0.5 h-7 bg-slate-900 dark:bg-slate-500" />
            <div className="w-7 h-7 rounded-full bg-slate-900 dark:bg-slate-700 text-white flex items-center justify-center shadow-sm">
              <ArrowDown size={14} strokeWidth={2.5} />
            </div>
          </div>

          {/* NODE 4: Syllabus Architecture */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-lg shrink-0">
                <BookOpen size={24} />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Step 04</span>
                  <span className="text-[11px] bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-md font-medium">Curriculum Engine</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Syllabus: AI Generated or Custom</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Structure your study roadmap autonomously or match your exact classroom syllabus:
                </p>
              </div>
            </div>

            {/* Dual Options Side-by-Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/40 border border-amber-200/70 dark:border-amber-800">
                <div className="flex items-center gap-2 mb-1.5 font-bold text-sm text-amber-950 dark:text-amber-300">
                  <Sparkles size={16} className="text-amber-500" />
                  <span>AI-Generated Curriculum</span>
                </div>
                <p className="text-xs text-amber-900/85 dark:text-amber-400 leading-relaxed">
                  Autonomous Agentic Planner decomposes the domain into structured logical chapters and submodules.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200/70 dark:border-indigo-800">
                <div className="flex items-center gap-2 mb-1.5 font-bold text-sm text-indigo-950 dark:text-indigo-300">
                  <BookOpen size={16} className="text-indigo-600" />
                  <span>Custom Syllabus Input</span>
                </div>
                <p className="text-xs text-indigo-900/85 dark:text-indigo-400 leading-relaxed">
                  Paste your university course codes, syllabus text, or semester blueprint to study your exact curriculum.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Connector Arrow 4 -> 5 */}
          <div className="my-3 flex flex-col items-center">
            <div className="w-0.5 h-7 bg-slate-900 dark:bg-slate-500" />
            <div className="w-7 h-7 rounded-full bg-slate-900 dark:bg-slate-700 text-white flex items-center justify-center shadow-sm">
              <ArrowDown size={14} strokeWidth={2.5} />
            </div>
          </div>

          {/* NODE 5: Learning & Diagnostic Tests */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg shrink-0">
                <FileCheck2 size={24} />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Step 05</span>
                  <span className="text-[11px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-md font-medium">Active Recall</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5">Interactive Learning & Subtopic Tests</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  Study through focused modular lessons equipped with math equations and syntax formatting. Immediate, low-stakes subtopic tests verify your comprehension at every milestone using Bloom's Taxonomy.
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  <span className="bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md">✓ Modular Step-by-Step Study</span>
                  <span className="bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md">✓ Instant Diagnostic Tests</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Connector Arrow 5 -> 6 */}
          <div className="my-3 flex flex-col items-center">
            <div className="w-0.5 h-7 bg-slate-900 dark:bg-slate-500" />
            <div className="w-7 h-7 rounded-full bg-slate-900 dark:bg-slate-700 text-white flex items-center justify-center shadow-sm">
              <ArrowDown size={14} strokeWidth={2.5} />
            </div>
          </div>

          {/* NODE 6: Adaptive Re-Teaching Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white dark:bg-slate-900 border-2 border-rose-200 dark:border-rose-900 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-lg shrink-0">
                <RefreshCw size={24} />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">Step 06</span>
                  <span className="text-[11px] bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 px-2 py-0.5 rounded-md font-bold">Smart Remediation</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5">Adaptive Re-Teaching Feature</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  Stumble on a concept? VyomaLearn never penalizes you. The Agentic Re-Teacher intervenes in real time—diagnosing misconceptions and re-explaining via intuitive analogies and targeted drills.
                </p>

                <div className="p-3 rounded-xl bg-rose-50/80 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-xs font-medium text-rose-900 dark:text-rose-200 flex items-center gap-2">
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
            <div className="w-0.5 h-7 bg-slate-900 dark:bg-slate-500" />
            <div className="w-7 h-7 rounded-full bg-slate-900 dark:bg-slate-700 text-white flex items-center justify-center shadow-sm">
              <ArrowDown size={14} strokeWidth={2.5} />
            </div>
          </div>

          {/* NODE 7: 24/7 Doubt Solving */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-lg shrink-0">
                <MessageSquare size={24} />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">Step 07</span>
                  <span className="text-[11px] bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 px-2 py-0.5 rounded-md font-medium">Mentorship</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5">24/7 Doubt Solving Abilities</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Have a question at any point during your learning? The AI companion is always available with Socratic guidance to resolve doubts immediately.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Final Goal Node */}
          <div className="my-3 flex flex-col items-center">
            <div className="w-0.5 h-7 bg-slate-900 dark:bg-slate-500" />
            <div className="w-7 h-7 rounded-full bg-slate-900 dark:bg-slate-700 text-white flex items-center justify-center shadow-sm">
              <ArrowDown size={14} strokeWidth={2.5} />
            </div>
          </div>

          <div className="mt-2 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 dark:bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-md">
              <CheckCircle2 size={16} className="text-emerald-400" />
              <span>DURABLE CONCEPTUAL MASTERY ACHIEVED</span>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to experience education calibrated to you?
          </h3>
          <p className="text-blue-100 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Create your first course in seconds. All premium features, adaptive remediation, and tests are unlocked for free.
          </p>
          <a
            href={`${PLATFORM_URL}/login`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-full font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <span>Start Learning for Free</span>
            <ArrowRight size={18} />
          </a>
        </div>

      </section>
    </div>
  );
}