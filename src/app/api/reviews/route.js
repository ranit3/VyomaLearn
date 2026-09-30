import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const DEFAULT_REVIEWS = [
  {
    id: "rev_1",
    name: "Aarav Sharma",
    organisation: "IIT Kharagpur",
    type: "video",
    rating: 5,
    quote: "",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    videoDuration: "1:42",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    active: true
  },
  {
    id: "rev_2",
    name: "Priyanka Deshmukh",
    organisation: "BITS Pilani",
    type: "text",
    rating: 5,
    quote: "The adaptive re-teaching diagnosed exactly why I kept stumbling on linear algebra proofs and rebuilt my intuition without spoon-feeding solutions.",
    videoUrl: "",
    videoDuration: "",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
    active: true
  },
  {
    id: "rev_3",
    name: "Devendra Rao",
    organisation: "IISc Bangalore",
    type: "video",
    rating: 5,
    quote: "",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    videoDuration: "2:08",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    active: true
  },
  {
    id: "rev_4",
    name: "Ananya Iyer",
    organisation: "NIT Trichy",
    type: "text",
    rating: 5,
    quote: "Bloom's taxonomy active recall quizzes after each concept make revision effortless. I feel genuinely confident entering exams now.",
    videoUrl: "",
    videoDuration: "",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
    active: true
  },
  {
    id: "rev_5",
    name: "Rohan Nair",
    organisation: "IIT Bombay",
    type: "video",
    rating: 5,
    quote: "",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    videoDuration: "1:15",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    active: true
  },
  {
    id: "rev_6",
    name: "Sanya Verma",
    organisation: "Delhi University",
    type: "text",
    rating: 5,
    quote: "The knowledge graph tracking makes it immediately obvious which sub-modules you have mastered versus where you need quick remediation drills.",
    videoUrl: "",
    videoDuration: "",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    active: true
  }
];

export async function GET() {
  const backendBaseUrl = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const res = await fetch(`${backendBaseUrl.replace(/\/+$/, '')}/api/reviews`, {
      signal: controller.signal,
      headers: { 'Accept': 'application/json' },
      cache: 'no-store'
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return NextResponse.json(data);
      }
    }
  } catch (_) {
    // If backend is unreachable or local development, fall through to default reviews
  }

  return NextResponse.json(DEFAULT_REVIEWS);
}
