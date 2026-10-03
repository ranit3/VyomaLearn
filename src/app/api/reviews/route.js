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
    videoUrl: "https://tmlnfaeeglawwsrmvvab.supabase.co/storage/v1/object/public/reviews-media/sample_review_aarav.mp4",
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
    videoUrl: "https://tmlnfaeeglawwsrmvvab.supabase.co/storage/v1/object/public/reviews-media/sample_review_devendra.mp4",
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
    videoUrl: "https://tmlnfaeeglawwsrmvvab.supabase.co/storage/v1/object/public/reviews-media/sample_review_rohan.mp4",
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
  try {
    const { getSupabase } = await import('@/lib/supabase');
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .eq('active', true)
      .order('created_at', { ascending: false });

    if (!error && Array.isArray(data) && data.length > 0) {
      return NextResponse.json(data);
    }
  } catch (err) {
    console.error('Notice: Supabase direct reviews error:', err);
  }

  return NextResponse.json(DEFAULT_REVIEWS);
}
