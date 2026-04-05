import { motion } from "framer-motion";

export default function Process() {
  return (
    <section id="العمليات" className="py-24 bg-card/50 border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 relative">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            آلية العمل
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            بروتوكول <span className="text-primary">التنفيذ</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            لا نترك شيئاً للصدفة. كل عملية تمر عبر 4 مراحل صارمة لضمان الوصول الآمن وفي الموعد المحدد.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-8 left-12 right-12 h-[2px] bg-border hidden lg:block" />
          <div className="absolute top-8 right-12 w-0 h-[2px] bg-primary hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {[
              {
                step: "01",
                title: "التحليل الاستراتيجي",
                desc: "دراسة الشحنة، المسارات المتاحة، والمخاطر المحتملة لوضع خطة محكمة."
              },
              {
                step: "02",
                title: "تأمين الموارد",
                desc: "تخصيص الأسطول المناسب والمساحات التخزينية واستخراج التصاريح اللازمة."
              },
              {
                step: "03",
                title: "التنفيذ والمراقبة",
                desc: "التحرك تحت مراقبة غرف التحكم المركزية على مدار الساعة."
              },
              {
                step: "04",
                title: "التقييم والتسليم",
                desc: "الفحص النهائي في الموقع وتسليم تقارير الأداء للعميل."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group text-center lg:text-right"
              >
                <div className="w-16 h-16 mx-auto lg:mx-0 bg-background border-2 border-border group-hover:border-primary rounded-full flex items-center justify-center text-xl font-black font-mono text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300 mb-6 shadow-xl relative z-10">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 rounded-3xl overflow-hidden aspect-[21/9] border border-border relative"
        >
          <img 
            src="/images/services.png" 
            alt="Trucks at night" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
          
          <div className="absolute bottom-10 right-10 left-10 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h3 className="text-3xl font-black text-white mb-2">أسطول لا يتوقف</h3>
              <p className="text-white/70 max-w-md">نعمل ليلاً ونهاراً لضمان تدفق عصب الصناعة بلا انقطاع.</p>
            </div>
            <div className="flex gap-4">
              <div className="px-4 py-2 rounded-lg bg-background/50 backdrop-blur-md border border-white/10 text-white font-mono text-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                ACTIVE UNITS: 1,248
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
