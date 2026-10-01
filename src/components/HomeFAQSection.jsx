'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const FAQS = [
  {
    id: 'difference-from-chatgpt',
    question: "How is VyomaLearn different from standard AI tutors or ChatGPT?",
    answer: "Traditional AI tools act as answer engines—dumping complete solutions that create an 'illusion of competence' where learners passively recognize logic without building durable problem-solving pathways. VyomaLearn's Agentic Socratic architecture continuously tracks your cognitive state. Instead of spoon-feeding solutions, it asks targeted diagnostic questions, surfaces hidden misconceptions, and guides your step-by-step thinking so you achieve genuine, lasting mastery."
  },
  {
    id: 'open-domain-courses',
    question: "How does Open-Domain Course Creation work? Can I study any topic?",
    answer: "Yes, with zero catalog limitations. Whether you are studying AP Calculus, Graduate-level Quantum Field Theory, Organic Chemistry, or Distributed Systems, simply enter your target topic. VyomaLearn's curriculum engine autonomously constructs an individualized knowledge graph—decomposing the subject into bite-sized modular lessons, math equations, active-recall checkpoints, and diagnostic tests."
  },
  {
    id: 'foundational-vs-deep-dive',
    question: "What is the difference between the Foundational Track and Deep Dive Track?",
    answer: "Every course can be calibrated to your exact academic needs: The Foundational Track is engineered for rapid conceptual clarity, visual analogies, and high-yield core axioms (ideal for catching up or quick exam revision). The Deep Dive Track provides exhaustive mathematical derivations, rigorous multi-step proofs, and complex edge-case problem solving for competitive exams and engineering rigor."
  },
  {
    id: 'adaptive-reteaching',
    question: "What happens when I get a question wrong? How does Adaptive Re-Teaching work?",
    answer: "VyomaLearn never penalizes mistakes. When you stumble, the Agentic Re-Teacher diagnoses whether your error was a simple calculation slip or a deeper conceptual gap. It temporarily creates a pedagogical detour: framing the principle through intuitive real-world analogies and serving micro-targeted drills to resolve the bottleneck before seamlessly returning you to your curriculum."
  },
  {
    id: 'university-syllabus-matching',
    question: "Can I align the curriculum to my university or school syllabus?",
    answer: "Yes. In addition to autonomous AI curriculum generation, you can input your university syllabus, lecture roadmap, or textbook chapter index. VyomaLearn will match your exact course outline so every milestone test and lesson directly prepares you for your semester exams."
  },
  {
    id: 'blooms-taxonomy-tests',
    question: "How are the interactive subtopic tests structured?",
    answer: "Tests are calibrated against Bloom's Revised Taxonomy (Analyze, Evaluate, and Synthesize) rather than passive rote recall. You'll defend hypotheses against counter-examples, diagnose flawed equations, and solve multi-step problems to guarantee true conceptual retention before advancing to the next unit."
  },
  {
    id: 'pricing-and-free-tier',
    question: "Is VyomaLearn free to start using?",
    answer: "Yes! You can sign up with Google SSO or email to start creating courses, taking diagnostic quizzes, and conversing with the 24/7 Socratic mentor. During our early preview period, core agentic features are unlocked for all learners. You can also explore our Subscriptions page for complete details on Pro and Institute plans."
  }
];

export default function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 md:py-28 w-full relative z-10 overflow-hidden max-w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-900 text-xs font-semibold mb-3 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />
            <span>Got Questions?</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 mb-4">
            Frequently Asked Questions
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Everything you need to know about VyomaLearn&apos;s autonomous agentic tutor, personalized learning tracks, and adaptive pedagogical system.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? 'bg-white border-slate-300 shadow-[0_12px_32px_-6px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-slate-950/5'
                    : 'bg-white/80 backdrop-blur-md border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 sm:px-7 sm:py-6 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors select-none"
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors ${
                    isOpen ? 'text-slate-950' : 'text-slate-800'
                  }`}>
                    {faq.question}
                  </span>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-slate-950 text-white rotate-180' : 'bg-slate-100 text-slate-700'
                  }`}>
                    <ChevronDown size={17} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100/80">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Help CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div>
            <h4 className="text-lg font-bold text-slate-950 mb-1">
              Still have questions about VyomaLearn?
            </h4>
            <p className="text-sm text-slate-600">
              Explore our transparent subscription tiers or read more about our pedagogical mission.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/subscriptions"
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-md text-center"
            >
              View Pricing
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition-all text-center border border-slate-200"
            >
              About the Team
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
