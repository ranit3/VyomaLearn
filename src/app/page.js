import HomeView from "@/components/HomeView";

export const metadata = {
  title: 'Vyoma Learn (VyomaLearn) — Agentic AI Personalized Learning Platform',
  description: 'Vyoma Learn (VyomaLearn) analyzes your learning patterns to deliver personalized practice sessions, adapting dynamically to your pace and ensuring profound comprehension.',
  alternates: {
    canonical: 'https://vyomalearn.in/',
  },
};

export default function HomePage() {
  return <HomeView />;
}