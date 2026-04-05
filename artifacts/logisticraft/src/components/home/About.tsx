import { motion } from "framer-motion";
import { ShieldCheck, Target, Zap, Anchor } from "lucide-react";

export default function About() {
  return (
    <section id="من نحن" className="py-24 relative bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-border"
            >
              <img 
                src="/images/about.png" 
                alt="Automated Warehouse" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                <div className="bg-background/80 backdrop-blur-md border border-border rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs text-muted-foreground font-mono">سعة التخزين</span>
                  </div>
                  <div className="text-2xl font-bold font-mono">850,000 m²</div>
                </div>
                <div className="bg-background/80 backdrop-blur-md border border-border rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs text-muted-foreground font-mono">كفاءة الأتمتة</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-emerald-500">98.4%</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary rounded-2xl flex flex-col items-center justify-center text-white shadow-[0_10px_40px_rgba(27,84,248,0.4)] border border-white/10"
            >
              <div className="text-5xl font-black mb-1">15</div>
              <div className="text-sm font-medium text-white/80">عاماً من الخبرة</div>
            </motion.div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              من نحن
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              نصمم سلاسل الإمداد<br />
              <span className="text-muted-foreground">للمشاريع العملاقة.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              بدأنا كفريق استشاري صغير، واليوم ندير تدفقات المواد لأكبر المشاريع الصناعية في السعودية. لا نقدم حلولاً جاهزة، بل نبني بنية تحتية لوجستية مخصصة تتحمل الضغط العالي ولا تقبل الخطأ.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: "أمان سيادي", desc: "نطبق معايير أمنية تتوافق مع بروتوكولات حماية المنشآت الحساسة." },
                { icon: Target, title: "دقة متناهية", desc: "تتبع لحظي للشحنات الاستراتيجية بهامش خطأ يبلغ 0.01%." },
                { icon: Zap, title: "سرعة الاستجابة", desc: "فرق طوارئ جاهزة للتدخل على مدار الساعة طوال أيام الأسبوع." },
                { icon: Anchor, title: "أساس صلب", desc: "بنية تحتية مصممة للعمل تحت أقسى الظروف المناخية." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background border border-border rounded-2xl p-5 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
