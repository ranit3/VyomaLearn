import HomeView from "@/components/HomeView";

export const metadata = {
  title: 'Vyoma Learn (VyomaLearn) — Agentic AI Personalized Learning Platform',
  description: 'Vyoma Learn (VyomaLearn) is an Agentic AI-powered learning platform delivering personalized practice, adaptive study sessions, and deep conceptual mastery from basics to advanced topics.',
  keywords: [
    'Vyoma Learn',
    'VyomaLearn',
    'AI learning platform',
    'agentic AI tutor',
    'adaptive learning system',
    'Socratic AI',
    'cognitive tracking education',
    'Ranit Purkait Vyoma Learn',
    'personalized practice',
    'Bloom taxonomy AI',
  ],
  alternates: {
    canonical: 'https://vyomalearn.in/',
  },
  openGraph: {
    title: 'Vyoma Learn (VyomaLearn) — Agentic AI Personalized Learning Platform',
    description: 'Autonomous Agentic AI that maps your curriculum, diagnoses cognitive gaps, and adapts lessons in real-time.',
    url: 'https://vyomalearn.in/',
    siteName: 'Vyoma Learn',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function HomePage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How Learning Flows on VyomaLearn — 7-Step Pedagogical Pipeline",
    "description": "Step-by-step autonomous pedagogical learning pipeline from login to verified durable mastery on VyomaLearn.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Login to Platform",
        "text": "Fast, secure sign-in via Google SSO or email to sync your learning workspace, knowledge states, and test history."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Open-Domain Course Creation",
        "text": "Type any topic or subject you wish to master. Instant conceptual mapping with zero catalog restrictions."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Choose Learning Track: Basic vs Deep",
        "text": "Select Foundational Track for rapid comprehension or Deep Dive Track for exhaustive mathematical proofs and derivations."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Curriculum Architecture: AI Generated or Custom",
        "text": "Autonomous Agentic AI-generated curriculum decomposition or match your exact university syllabus."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Interactive Modular Lessons & Subtopic Tests",
        "text": "Active recall testing using Bloom's Taxonomy at every milestone before progressing."
      },
      {
        "@type": "HowToStep",
        "position": 6,
        "name": "Adaptive Re-Teaching Remediation",
        "text": "Self-healing feedback loop diagnosing cognitive gaps with intuitive analogical re-explanations and micro-drills."
      },
      {
        "@type": "HowToStep",
        "position": 7,
        "name": "24/7 Socratic Doubt Solving Companion",
        "text": "Always-available mentorship guiding critical thinking without spoon-feeding answers."
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <HomeView />
    </>
  );
}