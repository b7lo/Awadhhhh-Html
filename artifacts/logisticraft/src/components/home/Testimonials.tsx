import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "في مشاريع الطاقة العملاقة، التأخير ليوم واحد يكلف الملايين. LogistiCraft هي الشركة الوحيدة التي استطاعت تلبية معاييرنا الصارمة بنسبة نجاح مبهرة.",
    author: "م. خالد الرشيد",
    role: "مدير المشتريات الاستراتيجية",
    company: "أرامكو السعودية"
  },
  {
    quote: "دقة استثنائية في التعامل مع المواد الكيميائية الحساسة. البنية التحتية التقنية التي يمتلكونها تضعهم في مستوى مختلف تماماً عن أي منافس آخر.",
    author: "د. طارق العبدالله",
    role: "نائب الرئيس لسلاسل الإمداد",
    company: "سابك"
  },
  {
    quote: "لبناء مدينة المستقبل، احتجنا إلى شريك لوجستي يفكر بعقلية المستقبل. السرعة والمرونة التي تقدمها LogistiCraft كانت حاسمة في تحقيق أهدافنا.",
    author: "سارة المانع",
    role: "مدير العمليات اللوجستية",
    company: "نيوم"
  }
];

export default function Testimonials() {
  return (
    <section id="آراء العملاء" className="py-24 bg-card/30 border-y border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            شهادات الثقة
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            لا نعد بالنجاح،<br />
            <span className="text-muted-foreground">نحن نثبته.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testi, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-background border border-border p-8 rounded-3xl relative"
            >
              <div className="text-6xl text-primary/10 font-serif absolute top-6 right-6 leading-none">"</div>
              
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#D4A017" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-foreground text-base leading-relaxed mb-8 relative z-10 font-medium">
                "{testi.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto border-t border-border pt-6">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-lg font-serif">
                  {testi.author.charAt(3)}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{testi.author}</h4>
                  <div className="text-xs text-muted-foreground">{testi.role} • <span className="text-primary font-bold">{testi.company}</span></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
