import React from 'react';
import { Check, Star, Zap, Shield, Gift, ArrowRight } from 'lucide-react';
import { PLATFORM_URL } from '@/lib/constants';

export const metadata = {
  title: 'Subscriptions & Pricing — Free Early Beta | Vyoma Learn (VyomaLearn)',
  description: 'Explore Vyoma Learn subscriptions and pricing plans. All features and Agentic AI tools are 100% unlocked and free during our open beta preview period.',
  alternates: {
    canonical: 'https://vyomalearn.in/subscriptions',
  },
  openGraph: {
    title: 'Subscriptions & Pricing | Vyoma Learn (VyomaLearn)',
    description: 'Simple, transparent pricing. Free forever during our early beta preview period.',
    url: 'https://vyomalearn.in/subscriptions',
  }
};

export default function SubscriptionsPage() {
  const plans = [
    {
      name: "Starter",
      badge: "Free Forever",
      price: "0",
      description: "Essential tools for personal study and exploration.",
      iconBg: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200",
      features: [
        "Up to 5 Active Courses",
        "Open-Domain Course Creation",
        "Foundational Track (Basic)",
        "Topic-wise Diagnostic Quizzes",
        "Community Discussion Access",
        "Cloud Progress Synchronization"
      ],
      popular: false,
      buttonText: "Start for Free"
    },
    {
      name: "Pro",
      badge: "Most Popular",
      price: "229",
      oldPrice: "399",
      description: "Complete autonomous AI tutoring for serious conceptual mastery.",
      iconBg: "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400",
      features: [
        "Unlimited Courses (Any Subject)",
        "AI-Generated & Custom Syllabi",
        "Foundational & Deep Dive Tracks",
        "Adaptive Re-Teaching Remediation",
        "Unlimited Diagnostic Milestone Tests",
        "24/7 Doubt Solving Companion",
        "Verified Community Member Badge"
      ],
      popular: true,
      buttonText: "Get Started Free in Beta"
    },
    {
      name: "Pro Plus",
      badge: "Complete Suite",
      price: "349",
      oldPrice: "499",
      description: "Advanced prep suite for competitive exams and interviews.",
      iconBg: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400",
      features: [
        "Everything in Pro Included",
        "Full Competitive Exam Mock Tests",
        "Live AI Interview Simulation",
        "Exhaustive Mathematical Derivations",
        "Priority AI Agentic Compute Speed",
        "Cognitive Gap & Retention Analytics",
        "VIP Support & Early Feature Access"
      ],
      popular: false,
      buttonText: "Get Started Free in Beta"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 pt-6 md:pt-10 pb-20 relative z-10">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold mb-4 shadow-xs">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>EARLY ACCESS • FREE IN BETA</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
          Simple, Transparent <span className="text-blue-600 dark:text-blue-400 font-serif italic font-normal">Pricing</span>
        </h1>
        
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          Whether you are exploring fundamentals or preparing for competitive milestones, choose the plan tailored for your learning goals.
        </p>

        {/* Free Banner Notification */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 shadow-sm flex items-center gap-4 text-left max-w-2xl mx-auto">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
            <Gift size={20} />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              Paid Subscriptions are Disabled for Now
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
              All plans and advanced AI learning features are currently unlocked and free to use during our beta period. No credit card required!
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={`w-full bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
              plan.popular 
                ? 'border-2 border-blue-500 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/20' 
                : 'border border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-lg'
            }`}
          >
            <div>
              {/* Card Header & Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className={`w-10 h-10 rounded-xl ${plan.iconBg} flex items-center justify-center shadow-xs font-bold`}>
                  {plan.popular ? <Zap size={20} /> : <Star size={20} />}
                </div>
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                  plan.popular 
                    ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                }`}>
                  {plan.badge}
                </span>
              </div>

              {/* Plan Name & Description */}
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{plan.name}</h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5 min-h-[40px]">
                {plan.description}
              </p>

              {/* Price Display */}
              <div className="pb-5 mb-5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">₹{plan.price}</span>
                  {plan.oldPrice && (
                    <span className="text-sm font-medium line-through text-slate-400">₹{plan.oldPrice}</span>
                  )}
                  <span className="text-xs font-semibold text-slate-500">/ month</span>
                </div>
              </div>

              {/* Feature List */}
              <div className="space-y-3 mb-8">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Included Features</p>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <a 
                href={`${PLATFORM_URL}/login`}
                className={`w-full py-3.5 px-4 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white'
                }`}
              >
                <span>{plan.buttonText}</span>
                <ArrowRight size={14} />
              </a>
              <p className="text-[11px] text-slate-400 text-center mt-2.5">
                Instant access • No payment required during beta
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}