import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-3xl p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
        >
          {/* Abstract background graphics */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
            <div className="absolute top-[-50%] right-[-10%] w-96 h-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-[-50%] left-[-10%] w-96 h-96 rounded-full bg-black/20 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-2xl text-center md:text-right">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              مستعد للارتقاء بسلسلة<br />
              إمدادك إلى مستوى جديد؟
            </h2>
            <p className="text-white/80 text-lg">
              تواصل مع خبرائنا اليوم لتحليل شبكتك اللوجستية وتصميم حلول مخصصة تضمن الكفاءة، الأمان، والسرعة.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <button className="h-14 px-8 bg-white text-primary rounded-xl font-bold flex items-center justify-center gap-3 transition-all hover:bg-white/90 shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto">
              تحديد موعد استشارة
              <ArrowLeft size={20} />
            </button>
            <button className="h-14 px-8 bg-black/20 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold flex items-center justify-center transition-all hover:bg-black/30 w-full sm:w-auto">
              تصفح الملف التعريفي
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
