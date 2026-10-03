'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, LogIn, Compass, Layers, Zap, BookOpen, 
  FileCheck2, RefreshCw, MessageSquare,
  Sparkles, Check
} from 'lucide-react';
import { PLATFORM_URL } from '@/lib/constants';
import ReviewsGallery from './ReviewsGallery';
import HomeBlogSection from './HomeBlogSection';
import HomeFAQSection from './HomeFAQSection';

const DYNAMIC_WORDS = ["Learning,", "Studying,", "Planning,"];

export default function HomeView() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState(DYNAMIC_WORDS[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = DYNAMIC_WORDS[wordIndex];
    let timer;

    if (!isDeleting) {
      if (currentText.length < currentWord.length) {
        // Type next character
        timer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, 85);
      } else {
        // Full word finished, hold for reading
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (currentText.length > 0) {
        // Delete character by character
        timer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length - 1));
        }, 42);
      } else {
        // Word cleared, pause briefly before next word begins typing
        timer = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % DYNAMIC_WORDS.length);
        }, 240);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex]);
  const steps = [
    {
      step: "01",
      tag: "Authentication",
      title: "Login to Platform",
      description: "Fast, secure sign-in via Google SSO or email. Instantly access your personal workspace where your course progress, knowledge states, and test histories are securely synchronized across all your devices.",
      icon: LogIn,
      pill: "Instant Cross-Device Sync"
    },
    {
      step: "02",
      tag: "Open-Domain",
      title: "Course Creation",
      description: "Type any topic or subject you wish to master. No rigid course catalog restrictions—from quantum mechanics to high-school calculus, VyomaLearn builds an individualized knowledge graph on the fly.",
      icon: Compass,
      tags: ["Any Subject", "Instant Conceptual Mapping"]
    },
    {
      step: "03",
      tag: "Track Selection",
      title: "Choose Track: Basic or Deep Learning",
      description: "Calibrate depth and pacing based on your exam deadline and learning goals:",
      icon: Layers,
      isDualTrack: true
    },
    {
      step: "04",
      tag: "Curriculum Engine",
      title: "Syllabus: AI Generated or Custom",
      description: "Structure your study roadmap autonomously or match your exact university course blueprint:",
      icon: BookOpen,
      isDualSyllabus: true
    },
    {
      step: "05",
      tag: "Active Recall",
      title: "Interactive Learning & Subtopic Tests",
      description: "Study through focused modular lessons equipped with math equations and syntax formatting. Immediate, low-stakes subtopic tests verify your comprehension at every milestone using Bloom's Taxonomy.",
      icon: FileCheck2,
      highlights: ["Modular Step-by-Step Study", "Instant Diagnostic Tests"]
    },
    {
      step: "06",
      tag: "Smart Remediation",
      title: "Adaptive Re-Teaching Feature",
      description: "Stumble on a concept? VyomaLearn never penalizes you. The Agentic Re-Teacher intervenes in real time—diagnosing misconceptions and re-explaining via intuitive analogies and targeted drills.",
      icon: RefreshCw,
      isRemediation: true
    },
    {
      step: "07",
      tag: "Mentorship",
      title: "24/7 Doubt Solving Abilities",
      description: "Have a question at any point during your learning? The AI companion is always available with Socratic guidance to resolve doubts immediately without spoon-feeding answers.",
      icon: MessageSquare,
      pill: "Always-Available Socratic Guidance"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden max-w-full w-full">
      {/* Hero Section */}
      <section className="px-6 pt-4 md:pt-8 pb-20 max-w-7xl mx-auto w-full flex flex-col items-start text-left relative z-10 min-h-[calc(100vh-120px)] justify-center">
        
        

        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-[1.24] text-slate-950"
        >
          Agentic AI Based{' '}
          <span 
            className="relative inline-flex items-center justify-start bg-slate-950 text-white px-3.5 sm:px-4.5 py-0.5 sm:py-1 rounded-md font-serif italic font-normal shadow-[0_4px_20px_-2px_rgba(15,23,42,0.3),0_0_15px_rgba(56,189,248,0.15)] border border-slate-800/90 overflow-hidden align-baseline select-none before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"
          >
            {/* Invisible multi-word grid reservation guaranteeing rock-solid width without layout shift */}
            <span className="invisible opacity-0 select-none pointer-events-none inline-grid grid-cols-1 grid-rows-1" aria-hidden="true">
              <span className="col-start-1 row-start-1">Learning,</span>
              <span className="col-start-1 row-start-1">Studying,</span>
              <span className="col-start-1 row-start-1">Planning,</span>
            </span>

            {/* Typewriter text and glowing cyan cursor */}
            <span className="absolute inset-0 flex items-center justify-start pl-3.5 sm:pl-4.5 pr-2">
              <span className="inline-flex items-center whitespace-nowrap">
                <span>{currentText}</span>
                <span className="inline-block w-[2px] h-[0.85em] bg-cyan-400 ml-1 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
              </span>
            </span>
          </span>
          <br className="hidden md:block" />
          <span className="font-serif italic text-slate-950 font-normal mt-3 block">
            Personalized From Basics to Mastery.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg sm:text-xl text-slate-700 max-w-2xl mb-10 font-normal leading-relaxed"
        >
          Vyoma Learn analyzes your learning patterns to deliver personalized practice sessions, adapting dynamically to your pace and ensuring profound comprehension without the stress.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a 
            href={`${PLATFORM_URL}/login`} 
            className="w-full sm:w-auto px-8 py-4 bg-slate-950 hover:bg-slate-800 text-white rounded-full font-semibold transition-all shadow-[0_10px_25px_-5px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_35px_-5px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Get Started Free</span>
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-7 py-4 bg-white/90 hover:bg-white border border-slate-200 text-slate-900 rounded-full font-medium transition-all shadow-[0_2px_6px_rgba(0,0,0,0.04)] hover:shadow-md flex items-center justify-center gap-2"
          >
            <span>Explore Pedagogy</span>
          </a>
        </motion.div>
      </section>

      {/* Modern High-End Monochromatic 3D Showcase Section */}
      <section id="how-it-works" className="px-4 sm:px-6 py-20 sm:py-24 max-w-6xl mx-auto w-full relative z-10 scroll-mt-12 overflow-x-clip max-w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-900 text-xs font-semibold mb-3 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />
            <span>The Pedagogical Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 mb-4">
            How Learning Flows on VyomaLearn
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A seamless, step-by-step pedagogical pipeline from your initial login to verified durable conceptual mastery.
          </p>
        </div>

        {/* Alternating Interactive Roadmap with Minimalist Central Timeline Spine */}
        <div className="relative w-full">
          
          {/* Central Architectural Spine (Desktop) */}
          <div 
            className="absolute left-1/2 top-4 bottom-4 w-[1.5px] -translate-x-1/2 rounded-full hidden md:block pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, #cbd5e1, #475569, #cbd5e1)'
            }}
          />

          {/* Left Timeline Track (Mobile) */}
          <div 
            className="absolute left-5 sm:left-6 top-4 bottom-4 w-[1.5px] -translate-x-1/2 rounded-full md:hidden pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, #cbd5e1, #475569, #cbd5e1)'
            }}
          />

          {/* Cards Pipeline */}
          <div className="flex flex-col space-y-12 sm:space-y-16 md:space-y-24">
            {steps.map((item, index) => {
              const isEven = index % 2 !== 0;
              const IconComponent = item.icon;

              return (
                <div key={item.step} className="relative flex items-center w-full">
                  
                  {/* Central Solid 3D Node Marker (Desktop) */}
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-slate-950 text-white font-mono font-bold text-xs z-20 shadow-[0_4px_14px_rgba(0,0,0,0.18)] ring-4 ring-white"
                  >
                    <span>{item.step}</span>
                  </motion.div>

                  {/* Mobile Node Marker */}
                  <div className="absolute left-5 sm:left-6 -translate-x-1/2 flex md:hidden items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-950 text-white font-mono font-bold text-[10px] sm:text-[11px] z-20 shadow-[0_2px_8px_rgba(0,0,0,0.15)] ring-2 ring-white">
                    <span>{item.step}</span>
                  </div>

                  {/* Alternating Card Container */}
                  <motion.article
                    initial={{ opacity: 0, y: 28, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.15, margin: "-20px" }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full md:w-[calc(50%-2.5rem)] pl-11 sm:pl-14 md:pl-0 max-w-full ${
                      isEven ? 'md:ml-auto' : 'md:mr-auto'
                    }`}
                  >
                    {/* Solid 3D Tactile Card Container */}
                    <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:border-slate-300 transition-all duration-300 relative group overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-slate-300 before:to-transparent">
                      
                      {/* Header Row */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center font-bold shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-300">
                          <IconComponent size={22} />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-400 font-mono tracking-widest">
                            STEP {item.step}
                          </span>
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                            {item.tag}
                          </span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-2 leading-snug">
                        {item.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Dual Track Custom Component (Step 3) */}
                      {item.isDualTrack && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 mt-2">
                          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                            <div className="flex items-center gap-2 mb-1.5 font-bold text-xs sm:text-sm text-slate-900">
                              <Zap size={15} className="text-slate-900" />
                              <span>Foundational Track</span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              Fast conceptual breakdowns and high-yield core axioms for rapid grasp.
                            </p>
                          </div>
                          <div className="p-4 rounded-2xl bg-slate-950 text-white border border-slate-800 shadow-md">
                            <div className="flex items-center gap-2 mb-1.5 font-bold text-xs sm:text-sm text-white">
                              <Layers size={15} className="text-white" />
                              <span>Deep Dive Track</span>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              Exhaustive mathematical derivations, proofs, and edge-case coverage.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Dual Syllabus Custom Component (Step 4) */}
                      {item.isDualSyllabus && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 mt-2">
                          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                            <div className="flex items-center gap-2 mb-1.5 font-bold text-xs sm:text-sm text-slate-900">
                              <Sparkles size={15} className="text-slate-900" />
                              <span>AI Curriculum</span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              Autonomous Planner decomposes any domain into structured logical modules.
                            </p>
                          </div>
                          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                            <div className="flex items-center gap-2 mb-1.5 font-bold text-xs sm:text-sm text-slate-900">
                              <BookOpen size={15} className="text-slate-900" />
                              <span>Custom Syllabus</span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              Paste university course codes or syllabus text to study your exact exam topics.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Remediation Feedback Loop (Step 6) */}
                      {item.isRemediation && (
                        <div className="p-4 rounded-2xl bg-slate-950 text-white shadow-sm flex items-center gap-3 border border-slate-800 mt-2">
                          <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                            <RefreshCw size={15} className="text-white animate-spin" style={{ animationDuration: '6s' }} />
                          </div>
                          <span className="text-xs font-medium text-slate-200 leading-relaxed">
                            <strong className="text-white font-semibold">Self-Healing Loop:</strong> Cognitive Gap Diagnosed ➔ Analogical Re-explanation ➔ Targeted Drill ➔ Verified Mastery!
                          </span>
                        </div>
                      )}

                      {/* Monochromatic Tags / Badges / Pills */}
                      {item.tags && (
                        <div className="flex flex-wrap gap-2 text-xs mt-2">
                          {item.tags.map(t => (
                            <span key={t} className="bg-slate-100 text-slate-700 border border-slate-200/90 px-3 py-1 rounded-full font-medium">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}

                      {item.highlights && (
                        <div className="flex flex-wrap items-center gap-2 text-xs mt-2">
                          {item.highlights.map(h => (
                            <span key={h} className="bg-slate-100 text-slate-800 border border-slate-200 px-3 py-1 rounded-full font-medium">
                              ✓ {h}
                            </span>
                          ))}
                        </div>
                      )}

                      {item.pill && (
                        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 bg-slate-100 border border-slate-200/80 px-3.5 py-1 rounded-full mt-2">
                          <span>{item.pill}</span>
                        </div>
                      )}

                    </div>
                  </motion.article>
                </div>
              );
            })}
          </div>

        </div>

      </section>

      {/* Horizontal Sliding Reviews Gallery with Student Photos & Videos */}
      <ReviewsGallery />

      {/* Blog Section */}
      <HomeBlogSection />

      {/* FAQ Section */}
      <HomeFAQSection />

    </div>
  );
}