import { motion } from "framer-motion";
import { Truck, Warehouse, Globe, Cog, ShieldAlert, Cpu } from "lucide-react";

const services = [
  {
    icon: Truck,
    number: "01",
    title: "النقل الصناعي الثقيل",
    desc: "نقل المعدات الاستراتيجية والمواد الخطرة بأساطيل مخصصة وبروتوكولات أمان صارمة ومرافقة أمنية للوجهات الحساسة.",
  },
  {
    icon: Warehouse,
    number: "02",
    title: "إدارة المستودعات الذكية",
    desc: "تشغيل مرافق تخزين ضخمة تعتمد على الروبوتات والذكاء الاصطناعي لتحسين المساحة وتسريع عمليات الفرز.",
  },
  {
    icon: Globe,
    number: "03",
    title: "التخليص الجمركي السيادي",
    desc: "فريق متخصص في تخليص الشحنات الكبرى للمشاريع الحكومية بسرعة قياسية وامتثال تام للقوانين.",
  },
  {
    icon: Cog,
    number: "04",
    title: "هندسة سلاسل الإمداد",
    desc: "تحليل وإعادة هيكلة الشبكات اللوجستية للشركات لخفض التكاليف بنسبة تصل إلى 30٪ وتحسين سرعة التدفق.",
  },
  {
    icon: ShieldAlert,
    number: "05",
    title: "سلاسل الإمداد المبردة",
    desc: "نقل وتخزين المواد الكيميائية والدوائية الحساسة تحت تحكم حراري دقيق يضمن سلامة الشحنات 100٪.",
  },
  {
    icon: Cpu,
    number: "06",
    title: "غرف التحكم المركزية",
    desc: "توفير أنظمة تتبع مبنية على إنترنت الأشياء تتيح للإدارات التنفيذية مراقبة أصولها حية على الشاشات.",
  }
];

export default function Services() {
  return (
    <section id="خدماتنا" className="py-24 relative">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              خدماتنا الرئيسية
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              حلول مصممة<br />
              <span className="text-muted-foreground">للمهام المعقدة.</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md">
            نغطي كافة مراحل سلسلة الإمداد من التصنيع إلى الوجهة النهائية، بأنظمة مترابطة تمنع أي فرصة للتوقف أو التأخير.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border hover:border-primary/50 rounded-3xl p-8 relative overflow-hidden group transition-all"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon size={28} />
                </div>
                <div className="text-5xl font-black font-serif text-muted-foreground/10 group-hover:text-primary/10 transition-colors duration-300 pointer-events-none select-none">
                  {service.number}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                {service.desc}
              </p>
              
              <div className="inline-flex items-center gap-2 text-primary font-bold text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                استكشف الخدمة
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
