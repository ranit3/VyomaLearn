'use client';

import React, { useRef } from 'react';
import { Star, CheckCircle2, Play, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

export const REVIEWS = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Computer Science & Engineering",
    institution: "IIT Kharagpur",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    topic: "Operating Systems & Distributed Systems",
    quote: "The adaptive re-teaching feature is incredible. When I struggled with multi-threading race conditions, it didn't just dump code—it caught my conceptual gap and explained it through an analogy before re-testing me.",
    hasVideo: true,
    videoDuration: "1:42"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Electrical & Electronics",
    institution: "BITS Pilani",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    topic: "Signal Processing & Fourier Transforms",
    quote: "Being able to paste my exact university syllabus codes and have VyomaLearn decompose it into structured modules saved me weeks of aimless study. KaTeX math formulas render flawlessly.",
    hasVideo: false
  },
  {
    id: 3,
    name: "Rohan Mukherjee",
    role: "Physics & Mathematics",
    institution: "IISc Bangalore",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    topic: "Quantum Mechanics & Linear Algebra",
    quote: "Most AI tools hallucinate or act like passive search engines. VyomaLearn's Socratic companion actually probes your thinking with counter-examples instead of spoon-feeding answers.",
    hasVideo: true,
    videoDuration: "2:08"
  },
  {
    id: 4,
    name: "Ananya Sen",
    role: "Data Science & Statistics",
    institution: "NIT Trichy",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    topic: "Bayesian Inference & Neural Networks",
    quote: "The low-stakes subtopic tests after every concept ensure you never advance with foundational blind spots. It feels like having an attentive private tutor sitting beside you 24/7.",
    hasVideo: false
  },
  {
    id: 5,
    name: "Devansh Iyer",
    role: "Mechanical Engineering",
    institution: "IIT Bombay",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    topic: "Thermodynamics & Fluid Dynamics",
    quote: "The Deep Dive Track gave me the rigorous multi-step derivations I needed for competitive exams. The platform's cognitive load balancing keeps you focused without mental burnout.",
    hasVideo: true,
    videoDuration: "1:15"
  },
  {
    id: 6,
    name: "Sanya Verma",
    role: "Biotechnology & Bioinformatics",
    institution: "Delhi University",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    topic: "Molecular Genetics & Genomics",
    quote: "Clean, distraction-free interface. The knowledge graph tracking makes it immediately obvious which sub-modules you have mastered versus where you need quick remediation drills.",
    hasVideo: false
  }
];

export default function ReviewsGallery() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  // Duplicate reviews for seamless infinite marquee loop
  const duplicatedReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section className="py-24 w-full relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-900 text-xs font-semibold mb-3 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />
            <span>Learner Feedback & Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 mb-3">
            Trusted by Rigorous Learners
          </h2>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <div className="flex items-center gap-1 text-slate-900 font-bold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} className="fill-slate-950 text-slate-950" />
              ))}
              <span className="ml-1 text-sm font-black">4.9 / 5.0</span>
            </div>
            <span className="text-slate-300">•</span>
            <span>Based on 1,280+ verified student reviews across leading universities</span>
          </div>
        </div>

        {/* Manual Scroll Buttons */}
        <div className="flex items-center gap-2 self-start md:self-end">
          <button
            type="button"
            onClick={scrollLeft}
            className="w-11 h-11 rounded-full bg-white border border-slate-200/90 text-slate-800 hover:bg-slate-950 hover:text-white transition-all shadow-sm flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Scroll reviews left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={scrollRight}
            className="w-11 h-11 rounded-full bg-white border border-slate-200/90 text-slate-800 hover:bg-slate-950 hover:text-white transition-all shadow-sm flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Scroll reviews right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Infinite Horizontal Sliding Marquee Track */}
      <div 
        ref={scrollRef}
        className="w-full overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing px-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="animate-marquee flex gap-6 pb-6 pt-2">
          {duplicatedReviews.map((review, idx) => (
            <article
              key={`${review.id}-${idx}`}
              className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 w-[340px] sm:w-[380px] shrink-0 flex flex-col justify-between relative group before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-slate-300 before:to-transparent"
            >
              <div>
                {/* Header: Avatar, Info, and Video Indicator */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-2xl object-cover border border-slate-200 shadow-sm"
                        loading="lazy"
                      />
                      {review.hasVideo && (
                        <div 
                          className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center shadow-xs"
                          title="Video Testimonial Available"
                        >
                          <Play size={9} className="fill-white ml-0.5" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-950 text-sm flex items-center gap-1.5">
                        <span>{review.name}</span>
                        {review.verified && (
                          <CheckCircle2 size={13} className="text-slate-900 shrink-0" title="Verified Learner" />
                        )}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-medium">{review.institution}</p>
                    </div>
                  </div>

                  {review.hasVideo ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-950 text-white shadow-2xs">
                      <Play size={8} className="fill-white" />
                      <span>{review.videoDuration}</span>
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      Verified
                    </span>
                  )}
                </div>

                {/* Rating & Topic Pill */}
                <div className="flex items-center justify-between mb-3.5 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={13} className="fill-slate-950 text-slate-950" />
                    ))}
                  </div>
                  <span className="text-[10px] font-medium text-slate-500 truncate max-w-[200px]">
                    {review.topic}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic relative">
                  "{review.quote}"
                </p>
              </div>

              {/* Card Footer Tag */}
              <div className="mt-5 pt-3 border-t border-slate-100/90 flex items-center justify-between text-[11px] text-slate-400">
                <span>{review.role}</span>
                <span className="font-mono text-[10px]">Verified Study Session</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}