import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-24 pb-0 overflow-hidden hero-gradient">
      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[120px] bg-primary/15 pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-bold mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          حلول B2B لسلاسل الإمداد في المملكة
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight max-w-4xl"
        >
          نظام اللوجستيات الوحيد
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-primary">
            الذي تحتاجه
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
        >
          أسرع، أسهل، أرخص... ببساطة أفضل. إدارة كاملة لسلاسل إمدادك من مكان واحد.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button className="h-13 px-8 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold flex items-center gap-3 transition-all shadow-[0_0_30px_rgba(99,120,255,0.35)] hover:shadow-[0_0_45px_rgba(99,120,255,0.5)] hover:-translate-y-0.5 text-base">
            ابدأ شراكة استراتيجية
            <ArrowLeft size={18} />
          </button>
          <button className="h-13 px-8 py-3.5 bg-white/5 border border-white/15 hover:bg-white/10 text-white rounded-xl font-bold flex items-center gap-3 transition-all text-base">
            احجز موعد لعرض توضيحي
            <ChevronLeft size={18} />
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex items-center justify-center gap-10 mb-14 text-sm"
        >
          {[
            { val: "99.9%", label: "دقة التسليم" },
            { val: "1,200+", label: "مركبة نشطة" },
            { val: "15+", label: "عاماً من الخبرة" },
            { val: "38%", label: "توفير في التكاليف" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-black text-white mb-0.5">{s.val}</div>
              <div className="text-muted-foreground text-xs">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Dashboard Screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6"
        style={{ perspective: "1200px" }}
      >
        <div
          className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.8),0_0_60px_rgba(99,120,255,0.15)]"
          style={{ transform: "rotateX(5deg)" }}
        >
          {/* Fake browser chrome */}
          <div className="bg-[#1a1a2e] px-4 py-3 flex items-center gap-2 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 mx-4 bg-white/5 rounded-md h-6 flex items-center justify-center">
              <span className="text-xs text-white/30 font-mono">app.logisticraft.sa</span>
            </div>
          </div>
          <img
            src="/images/hero.png"
            alt="لوحة تحكم LogistiCraft"
            className="w-full object-cover"
            style={{ maxHeight: "480px", objectPosition: "top" }}
          />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Floating badges */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 -right-4 md:right-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center">
            <span className="text-emerald-400 text-sm font-black">↑</span>
          </div>
          <div>
            <div className="text-xs font-bold text-white">99.9% دقة</div>
            <div className="text-[10px] text-muted-foreground">معدل التسليم</div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-24 -left-4 md:left-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3"
        >
          <div className="flex items-center gap-1">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
          </div>
          <div>
            <div className="text-xs font-bold text-white">1,248 وحدة</div>
            <div className="text-[10px] text-muted-foreground">الأسطول النشط</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
