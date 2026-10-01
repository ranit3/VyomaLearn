import React, { useRef, useState, useEffect, useCallback } from 'react';
import { 
  Star, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, 
  Video, FileText, Maximize2, X, CheckCircle2 
} from 'lucide-react';

export const INITIAL_REVIEWS = [
  {
    id: 'rev_1',
    name: 'Aarav Sharma',
    organisation: 'IIT Kharagpur',
    type: 'video',
    rating: 5,
    quote: '',
    videoUrl: 'https://tmlnfaeeglawwsrmvvab.supabase.co/storage/v1/object/public/reviews-media/sample_review_aarav.mp4',
    videoDuration: '1:42',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    active: true
  },
  {
    id: 'rev_2',
    name: 'Priyanka Deshmukh',
    organisation: 'BITS Pilani',
    type: 'text',
    rating: 5,
    quote: 'The adaptive re-teaching diagnosed exactly why I kept stumbling on linear algebra proofs and rebuilt my intuition without spoon-feeding solutions.',
    videoUrl: '',
    videoDuration: '',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    active: true
  },
  {
    id: 'rev_3',
    name: 'Devendra Rao',
    organisation: 'IISc Bangalore',
    type: 'video',
    rating: 5,
    quote: '',
    videoUrl: 'https://tmlnfaeeglawwsrmvvab.supabase.co/storage/v1/object/public/reviews-media/sample_review_devendra.mp4',
    videoDuration: '2:08',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    active: true
  },
  {
    id: 'rev_4',
    name: 'Ananya Iyer',
    organisation: 'NIT Trichy',
    type: 'text',
    rating: 5,
    quote: "Bloom's taxonomy active recall quizzes after each concept make revision effortless. I feel genuinely confident entering exams now.",
    videoUrl: '',
    videoDuration: '',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80',
    active: true
  },
  {
    id: 'rev_5',
    name: 'Rohan Nair',
    organisation: 'IIT Bombay',
    type: 'video',
    rating: 5,
    quote: '',
    videoUrl: 'https://tmlnfaeeglawwsrmvvab.supabase.co/storage/v1/object/public/reviews-media/sample_review_rohan.mp4',
    videoDuration: '1:15',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    active: true
  },
  {
    id: 'rev_6',
    name: 'Sanya Verma',
    organisation: 'Delhi University',
    type: 'text',
    rating: 5,
    quote: 'The knowledge graph tracking makes it immediately obvious which sub-modules you have mastered versus where you need quick remediation drills.',
    videoUrl: '',
    videoDuration: '',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    active: true
  }
];

export default function ReviewsGallery() {
  const scrollRef = useRef(null);
  const isInteracting = useRef(false);
  const resumeTimeoutRef = useRef(null);
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [mutedStates, setMutedStates] = useState({});
  const [isPlayingStates, setIsPlayingStates] = useState({});
  const [modalVideo, setModalVideo] = useState(null);
  const videoRefs = useRef({});

  // Dynamic fetch from API
  useEffect(() => {
    let isMounted = true;
    const loadDynamicReviews = async () => {
      try {
        const res = await fetch('/api/reviews');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0 && isMounted) {
            setReviews(data);
          }
        }
      } catch (err) {
        console.warn('Using fallback reviews:', err);
      }
    };
    loadDynamicReviews();
    return () => { isMounted = false; };
  }, []);

  // Smooth continuous auto-scroll loop
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId;
    const speed = 0.65;

    const step = () => {
      if (!isInteracting.current && el) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [reviews]);

  const pauseAutoScroll = useCallback(() => {
    isInteracting.current = true;
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
  }, []);

  const resumeAutoScroll = useCallback(() => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      isInteracting.current = false;
    }, 2800);
  }, []);

  const scrollLeft = () => {
    pauseAutoScroll();
    if (scrollRef.current) {
      const el = scrollRef.current;
      if (el.scrollLeft <= 30) {
        el.scrollLeft += el.scrollWidth / 2;
      }
      const scrollAmount = Math.min(el.clientWidth * 0.85, 380);
      el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
    resumeAutoScroll();
  };

  const scrollRight = () => {
    pauseAutoScroll();
    if (scrollRef.current) {
      const el = scrollRef.current;
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft -= el.scrollWidth / 2;
      }
      const scrollAmount = Math.min(el.clientWidth * 0.85, 380);
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
    resumeAutoScroll();
  };

  const toggleMute = (uniqueKey, e) => {
    e.stopPropagation();
    const vidEl = videoRefs.current[uniqueKey];
    const willBeMuted = mutedStates[uniqueKey] === false ? true : false;
    
    setMutedStates(prev => ({
      ...prev,
      [uniqueKey]: willBeMuted
    }));

    if (vidEl) {
      vidEl.muted = willBeMuted;
    }
  };

  const togglePlay = (uniqueKey, e) => {
    e.stopPropagation();
    const vidEl = videoRefs.current[uniqueKey];
    if (!vidEl) return;

    if (vidEl.paused) {
      vidEl.play().catch(() => {});
      setIsPlayingStates(prev => ({ ...prev, [uniqueKey]: true }));
    } else {
      vidEl.pause();
      setIsPlayingStates(prev => ({ ...prev, [uniqueKey]: false }));
    }
  };

  // Duplicate reviews for seamless infinite loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-16 md:py-24 w-full relative z-10 overflow-hidden max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-900 text-xs font-semibold mb-3 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />
            <span>Learner Feedback & Video Testimonials</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 mb-3">
            Trusted by Rigorous Learners
          </h2>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-1 text-slate-900 font-bold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-slate-950 text-slate-950" />
              ))}
              <span className="ml-1 text-xs sm:text-sm font-black">4.9 / 5.0</span>
            </div>
            <span className="text-slate-300">•</span>
            <span>Verified student reviews across leading universities</span>
          </div>
        </div>

        {/* Manual Scroll Controls */}
        <div className="flex items-center gap-2 self-start md:self-end">
          <button
            type="button"
            onClick={scrollLeft}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white border border-slate-200/90 text-slate-800 hover:text-slate-950 hover:bg-slate-50 flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
            aria-label="Previous reviews"
          >
            <ChevronLeft size={19} />
          </button>
          <button
            type="button"
            onClick={scrollRight}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white border border-slate-200/90 text-slate-800 hover:text-slate-950 hover:bg-slate-50 flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
            aria-label="Next reviews"
          >
            <ChevronRight size={19} />
          </button>
        </div>
      </div>

      {/* Interactive Horizontal Touch & Gesture Carousel */}
      <div 
        ref={scrollRef}
        onMouseEnter={pauseAutoScroll}
        onMouseLeave={resumeAutoScroll}
        onTouchStart={pauseAutoScroll}
        onTouchEnd={resumeAutoScroll}
        className="w-full overflow-x-auto flex gap-4 sm:gap-6 px-4 sm:px-6 pb-6 pt-2 select-none touch-pan-x cursor-grab active:cursor-grabbing max-w-full"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {duplicatedReviews.map((review, idx) => {
          const isVideo = review.type === 'video' && review.videoUrl;
          const uniqueKey = `${review.id}-${idx}`;
          const isMuted = mutedStates[uniqueKey] !== false;
          const isPlaying = isPlayingStates[uniqueKey] !== false;

          return (
            <article
              key={uniqueKey}
              className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 w-[82vw] max-w-[340px] sm:w-[360px] md:w-[380px] shrink-0 flex flex-col justify-between relative group before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-slate-300 before:to-transparent"
            >
              <div>
                {/* Header: Student Name & School / Organisation */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={review.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${review.name}`}
                      alt={review.name}
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl object-cover border border-slate-200 shadow-sm shrink-0 bg-slate-100"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <h3 className="font-bold text-slate-950 text-sm sm:text-base leading-tight truncate">
                        {review.name}
                      </h3>
                      <p className="text-xs text-slate-600 font-medium mt-0.5 truncate">
                        {review.organisation}
                      </p>
                    </div>
                  </div>

                  {/* Format Pill Badge */}
                  {isVideo ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-950 text-white shadow-2xs shrink-0">
                      <Video size={10} className="fill-white" />
                      <span>{review.videoDuration || 'Video'}</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
                      <CheckCircle2 size={11} className="text-slate-900" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3 pt-2 border-t border-slate-100">
                  {[...Array(review.rating || 5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-slate-950 text-slate-950" />
                  ))}
                </div>

                {/* Body: Video Review (Autoplaying Video, NO written text) vs Written Review */}
                {isVideo ? (
                  <div className="mt-2">
                    <div 
                      onClick={(e) => togglePlay(uniqueKey, e)}
                      className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 relative group/video shadow-md border border-slate-800 cursor-pointer"
                    >
                      <video
                        ref={el => { videoRefs.current[uniqueKey] = el; }}
                        src={review.videoUrl}
                        autoPlay
                        muted={isMuted}
                        defaultMuted
                        loop
                        playsInline
                        webkit-playsinline="true"
                        preload="metadata"
                        className="w-full h-full object-cover"
                        onPlay={() => setIsPlayingStates(p => ({ ...p, [uniqueKey]: true }))}
                        onPause={() => setIsPlayingStates(p => ({ ...p, [uniqueKey]: false }))}
                      />

                      {/* Floating Video Overlay Controls */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-95 transition-opacity flex items-end justify-between p-3">
                        <div className="flex items-center gap-2">
                          {/* Play/Pause Button */}
                          <button
                            type="button"
                            onClick={(e) => togglePlay(uniqueKey, e)}
                            className="w-8 h-8 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center backdrop-blur-xs transition-transform hover:scale-110 cursor-pointer shadow-sm"
                            title={isPlaying ? 'Pause Video' : 'Play Video'}
                          >
                            {isPlaying ? <Pause size={13} /> : <Play size={13} className="ml-0.5 fill-white" />}
                          </button>

                          {/* Sound Mute/Unmute */}
                          <button
                            type="button"
                            onClick={(e) => toggleMute(uniqueKey, e)}
                            className="w-8 h-8 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center backdrop-blur-xs transition-transform hover:scale-110 cursor-pointer shadow-sm"
                            title={isMuted ? 'Unmute Video' : 'Mute Video'}
                          >
                            {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} className="text-emerald-400" />}
                          </button>
                        </div>

                        {/* Fullscreen Expand */}
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); setModalVideo(review); }}
                          className="px-2.5 py-1 rounded-full bg-white/20 hover:bg-white/40 text-white text-[11px] font-medium flex items-center gap-1 backdrop-blur-xs transition-colors cursor-pointer"
                          title="Expand video"
                        >
                          <Maximize2 size={11} />
                          <span>Expand</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-2">
                    <p className="text-slate-800 text-xs sm:text-sm leading-relaxed italic relative line-clamp-4">
                      &ldquo;{review.quote}&rdquo;
                    </p>
                  </div>
                )}
              </div>

              {/* Footer Tag: Username and School / Organisation */}
              <div className="mt-4 sm:mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 gap-2">
                <span className="font-semibold text-slate-900 truncate max-w-[170px]">
                  {review.name}
                </span>
                <span className="text-[11px] text-slate-500 truncate max-w-[130px]">
                  {review.organisation}
                </span>
              </div>
            </article>
          );
        })}
      </div>

      {/* Video Fullscreen Modal */}
      {modalVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="bg-slate-950 rounded-3xl p-4 sm:p-6 max-w-3xl w-full border border-slate-800 shadow-2xl relative">
            <button
              onClick={() => setModalVideo(null)}
              className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-xl hover:scale-105 transition-transform font-bold cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <img
                src={modalVideo.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${modalVideo.name}`}
                alt={modalVideo.name}
                className="w-10 h-10 rounded-xl object-cover border border-slate-700"
              />
              <div>
                <h4 className="text-white font-bold text-base leading-tight">{modalVideo.name}</h4>
                <p className="text-slate-400 text-xs">{modalVideo.organisation}</p>
              </div>
            </div>

            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black shadow-inner">
              <video
                src={modalVideo.videoUrl}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
