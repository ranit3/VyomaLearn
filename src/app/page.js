import HomeView from "@/components/HomeView";

export const metadata = {
  title: 'Vyoma Learn (VyomaLearn) — Agentic AI Personalized Learning Platform',
  description: 'Vyoma Learn is an Agentic AI-powered learning platform delivering personalized practice, adaptive study sessions, and deep conceptual mastery from basics to advanced topics.',
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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
            "name": "Interactive Modular Lessons and Subtopic Tests",
            "text": "Active recall testing using Bloom's Taxonomy at every milestone before progressing."
          },
          {
            "@type": "HowToStep",
            "position": 6,
            "name": "Adaptive Remediation Loop",
            "text": "Self-healing feedback loop diagnosing cognitive gaps with intuitive analogical re-explanations and micro-drills."
          },
          {
            "@type": "HowToStep",
            "position": 7,
            "name": "24/7 Socratic Doubt Solving Companion",
            "text": "Always-available mentorship guiding critical thinking without spoon-feeding answers."
          }
        ]
      },
      {
        "@type": "Product",
        "name": "VyomaLearn Platform",
        "description": "Agentic AI Personalized Learning Platform delivering adaptive study sessions and deep conceptual mastery.",
        "brand": {
          "@type": "Brand",
          "name": "Vyoma Learn"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "1280"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Aarav Sharma"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Vyoma's Socratic dialogue stopped me from passively scanning solutions. When I hit a snag in Fourier analysis, the diagnostic re-teaching broke down the math conceptually rather than just dumping answers."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Priyanka Deshmukh"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Creating custom modules mapped exactly to our university syllabus saved me dozens of hours. The active recall Bloom quizzes after each subtopic verify you actually comprehend before moving on."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rohan Nair"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "The Deep Dive Track gave me the rigorous multi-step derivations I needed for competitive exams. The platform's cognitive load balancing keeps you focused without mental burnout."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How is VyomaLearn different from standard AI tutors or ChatGPT?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Traditional AI tools act as answer engines—dumping complete solutions that create an 'illusion of competence' where learners passively recognize logic without building durable problem-solving pathways. VyomaLearn's Agentic Socratic architecture continuously tracks your cognitive state. Instead of spoon-feeding solutions, it asks targeted diagnostic questions, surfaces hidden misconceptions, and guides your step-by-step thinking so you achieve genuine, lasting mastery."
            }
          },
          {
            "@type": "Question",
            "name": "How does Open-Domain Course Creation work? Can I study any topic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, with zero catalog limitations. Whether you are studying AP Calculus, Graduate-level Quantum Field Theory, Organic Chemistry, or Distributed Systems, simply enter your target topic. VyomaLearn's curriculum engine autonomously constructs an individualized knowledge graph—decomposing the subject into bite-sized modular lessons, math equations, active-recall checkpoints, and diagnostic tests."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between the Foundational Track and Deep Dive Track?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every course can be calibrated to your exact academic needs: The Foundational Track is engineered for rapid conceptual clarity, visual analogies, and high-yield core axioms (ideal for catching up or quick exam revision). The Deep Dive Track provides exhaustive mathematical derivations, rigorous multi-step proofs, and complex edge-case problem solving for competitive exams and engineering rigor."
            }
          },
          {
            "@type": "Question",
            "name": "What happens when I get a question wrong? How does Adaptive Re-Teaching work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "VyomaLearn never penalizes mistakes. When you stumble, the Agentic Re-Teacher diagnoses whether your error was a simple calculation slip or a deeper conceptual gap. It temporarily creates a pedagogical detour: framing the principle through intuitive real-world analogies and serving micro-targeted drills to resolve the bottleneck before seamlessly returning you to your curriculum."
            }
          },
          {
            "@type": "Question",
            "name": "Can I align the curriculum to my university or school syllabus?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. In addition to autonomous AI curriculum generation, you can input your university syllabus, lecture roadmap, or textbook chapter index. VyomaLearn will match your exact course outline so every milestone test and lesson directly prepares you for your semester exams."
            }
          },
          {
            "@type": "Question",
            "name": "How are the interactive subtopic tests structured?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tests are calibrated against Bloom's Revised Taxonomy (Analyze, Evaluate, and Synthesize) rather than passive rote recall. You'll defend hypotheses against counter-examples, diagnose flawed equations, and solve multi-step problems to guarantee true conceptual retention before advancing to the next unit."
            }
          },
          {
            "@type": "Question",
            "name": "Is VyomaLearn free to start using?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! You can sign up with Google SSO or email to start creating courses, taking diagnostic quizzes, and conversing with the 24/7 Socratic mentor. During our early preview period, core agentic features are unlocked for all learners. You can also explore our Subscriptions page for complete details on Pro and Institute plans."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeView />
    </>
  );
}
