import { motion } from "framer-motion";
import { ArrowLeft, Play, ShieldCheck, Box, Route } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-16 overflow-hidden hero-gradient">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.png" 
          alt="Logistics Mission Control" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              سلاسل إمداد تعتمد عليها أكبر كيانات المملكة
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight font-sans text-foreground">
              القوة المطلقة في <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 relative">
                الخدمات اللوجستية
                <span className="absolute bottom-1 left-0 right-0 h-1 bg-primary/30 blur-[2px]" />
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
              نحن العمود الفقري الصناعي الخفي لأرامكو وسابك ونيوم. إدارة سلاسل إمداد فائقة الدقة بنسبة خطأ 0%. لأننا لا ننقل بضائع، بل نؤمن اقتصادات.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button className="h-14 px-8 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(27,84,248,0.3)] hover:shadow-[0_0_30px_rgba(27,84,248,0.5)] hover:-translate-y-1">
                ابدأ شراكة استراتيجية
                <ArrowLeft size={20} />
              </button>
              
              <button className="h-14 px-8 bg-secondary border border-border hover:border-primary/50 text-foreground rounded-xl font-bold flex items-center gap-3 transition-all hover:bg-secondary/80">
                <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center">
                  <Play size={14} className="text-primary translate-x-[1px]" />
                </div>
                شاهد عملياتنا
              </button>
            </div>

            <div className="mt-16 flex items-center gap-8 border-t border-border pt-8">
              <div>
                <div className="text-3xl font-black text-foreground mb-1">
                  99.9<span className="text-primary">%</span>
                </div>
                <div className="text-sm font-medium text-muted-foreground">دقة التسليم في الوقت المحدد</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-black text-foreground mb-1">
                  12<span className="text-primary">M+</span>
                </div>
                <div className="text-sm font-medium text-muted-foreground">طن تم نقله في 2024</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Abstract holographic UI elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl border border-primary/20 backdrop-blur-sm p-6 overflow-hidden flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="px-3 py-1 bg-primary/20 text-primary text-xs font-mono rounded font-bold">
                  SYS.ONLINE // 200 OK
                </div>
              </div>

              <div className="relative h-64 w-full my-auto flex items-center">
                <div className="w-full h-1 bg-border relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-background border-2 border-muted-foreground rounded-full" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_rgba(27,84,248,0.8)]" />
                  <div className="absolute top-1/2 -translate-y-1/2 w-3/4 right-0 h-1 bg-gradient-to-l from-primary to-transparent" />
                  <motion.div 
                    animate={{ right: ["0%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"
                  />
                </div>
                <div className="absolute inset-0 flex justify-around items-center px-10">
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-3 rounded-xl bg-secondary border border-border text-muted-foreground"><Box size={24}/></div>
                    <span className="text-[10px] font-mono text-muted-foreground">التعبئة</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-3 rounded-xl bg-primary/20 border border-primary/50 text-primary glow-line"><Route size={24}/></div>
                    <span className="text-[10px] font-mono text-primary font-bold">العبور</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500"><ShieldCheck size={24}/></div>
                    <span className="text-[10px] font-mono text-emerald-500">التسليم</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary/50 border border-border rounded-xl p-4">
                  <div className="text-xs text-muted-foreground mb-1">الأسطول النشط</div>
                  <div className="text-2xl font-bold font-mono text-foreground">1,248</div>
                </div>
                <div className="bg-secondary/50 border border-border rounded-xl p-4">
                  <div className="text-xs text-muted-foreground mb-1">حالة الشبكة</div>
                  <div className="text-lg font-bold text-emerald-500 flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    مستقرة
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-card border border-border p-4 rounded-2xl shadow-xl flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">أمان تام</div>
                <div className="text-xs text-muted-foreground">شهادة ISO 28000</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
