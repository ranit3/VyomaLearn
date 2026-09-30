import React from 'react';
import { BookOpen, FileCheck2, Users2, Languages, Palette, LayoutTemplate, Code2, Mail, ExternalLink, CheckCircle2 } from 'lucide-react';
import { DEVELOPERS } from '@/lib/constants';

export const metadata = {
  title: 'About Us — Meet the Creators & Mission | Vyoma Learn (VyomaLearn)',
  description: 'Meet the creators behind Vyoma Learn (VyomaLearn) — Ranit Purkait and Saddam Hussain. Explore our mission to build an Agentic AI personalized learning platform.',
  keywords: [
    'Ranit Purkait',
    'Ranit Purkait Vyoma Learn',
    'ranit purkait',
    'Saddam Hussain',
    'ranit3',
    'dev-saddam',
    'Vyoma Learn developers',
    'VyomaLearn creators',
    'about Vyoma Learn',
  ],
  alternates: {
    canonical: 'https://vyomalearn.in/about',
  },
  openGraph: {
    title: 'About Us — Meet Ranit Purkait & Saddam Hussain | Vyoma Learn',
    description: 'The story, vision, and creators behind the Agentic AI personalized learning platform VyomaLearn.',
    url: 'https://vyomalearn.in/about',
  }
};

export default function AboutPage() {
  const usps = [
    {
      title: "Structured Syllabus",
      description: "Unlike generic AI that easily diverts into rabbit holes, VyomaLearn maps a rigorous, step-by-step syllabus tailored precisely to your goals.",
      icon: BookOpen
    },
    {
      title: "Subtopic & Module Tests",
      description: "Frequent, low-stakes subtopic testing ensures you never move forward until foundational concepts are deeply mastered.",
      icon: FileCheck2
    },
    {
      title: "Engaging Community",
      description: "Learning shouldn't be isolating. Connect, collaborate, and share your progress with a thriving community of peers.",
      icon: Users2
    },
    {
      title: "User-Friendly Language",
      description: "Complex concepts are broken down into custom, conversational language that actually makes sense to you, eliminating academic jargon.",
      icon: Languages
    },
    {
      title: "Avatars & Themes",
      description: "Personalize your learning space with custom avatars and soothing themes to create an environment where you feel most comfortable.",
      icon: Palette
    },
    {
      title: "Focused Interface",
      description: "Distraction-free learning zones designed with cognitive science in mind, keeping you completely immersed in your current objective.",
      icon: LayoutTemplate
    }
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Vyoma Learn — Creators & Mission",
    "description": "Meet the creators behind Vyoma Learn (VyomaLearn) — Ranit Purkait and Saddam Hussain. Explore our mission to build an Agentic AI personalized learning platform.",
    "url": "https://vyomalearn.in/about",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "Vyoma Learn",
      "alternateName": "VyomaLearn",
      "url": "https://vyomalearn.in",
      "founder": DEVELOPERS.map((dev) => ({
        "@type": "Person",
        "@id": `https://vyomalearn.in/about#${dev.name.toLowerCase().replace(/\s+/g, '-')}`,
        "name": dev.name,
        "jobTitle": dev.role,
        "email": dev.email,
        "url": `https://vyomalearn.in/about#${dev.name.toLowerCase().replace(/\s+/g, '-')}`,
        "sameAs": [dev.github],
        ...(dev.avatar ? { "image": dev.avatar } : {})
      }))
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <div className="pt-6 md:pt-10 pb-20 px-6 max-w-7xl mx-auto w-full relative z-10">
        
        {/* Hero Section */}
        <div className="mb-24 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">
            <span>Our Mission & Vision</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-8 max-w-4xl leading-[1.25] text-slate-900 dark:text-white">
            Structured learning, not <br className="hidden md:block" />
            <span className="inline-block bg-blue-100 dark:bg-blue-950/80 text-blue-900 dark:text-blue-200 px-4 py-1 mt-2 rounded-md font-serif italic font-normal shadow-xs">
              diverted exploration.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
            Generic AI chatbots are great for answering one-off questions, but terrible at guiding long-term education. VyomaLearn was built to replace aimless prompting with a meticulously structured, personalized learning journey.
          </p>
        </div>

        {/* USP Grid */}
        <div className="mb-24">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-slate-900 dark:text-white tracking-tight">
            The VyomaLearn Concept
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {usps.map((usp, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-8 rounded-3xl hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 group-hover:bg-blue-50 group-hover:text-blue-600 dark:group-hover:bg-blue-950/60 dark:group-hover:text-blue-400 flex items-center justify-center mb-6 transition-colors duration-300">
                  <usp.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{usp.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                  {usp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Developers Section */}
        <div id="developers" className="scroll-mt-24">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <Code2 className="text-blue-600" /> Meet the Creators & Developers
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              The engineers architecting the future of agentic AI-driven personalized education at VyomaLearn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {DEVELOPERS.map((dev) => {
              const idSlug = dev.name.toLowerCase().replace(/\s+/g, '-');
              return (
                <article 
                  key={dev.email}
                  id={idSlug}
                  className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow scroll-mt-28"
                  itemScope 
                  itemType="https://schema.org/Person"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {dev.avatar ? (
                      <img
                        src={dev.avatar}
                        alt={`${dev.name} - ${dev.role}`}
                        width={64}
                        height={64}
                        itemProp="image"
                        className="w-16 h-16 rounded-2xl bg-slate-100 border-2 border-slate-200 dark:border-slate-700 p-0.5 object-cover shrink-0 shadow-md"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white font-bold text-xl flex items-center justify-center shadow-md border border-slate-800 shrink-0">
                        {dev.initials}
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-1.5" itemProp="name">
                        <span>{dev.name}</span>
                        {dev.email === 'ranitpurkait3@gmail.com' && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" title="Verified Creator" />
                        )}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm" itemProp="jobTitle">
                        {dev.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href={dev.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      itemProp="sameAs"
                      className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-slate-200 group"
                    >
                      <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span className="font-mono text-sm flex-1">github.com/{dev.githubHandle}</span>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    <a
                      href={`mailto:${dev.email}`}
                      itemProp="email"
                      className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-slate-200 group"
                    >
                      <Mail className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                      <span className="text-sm font-medium flex-1 truncate">{dev.email}</span>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}