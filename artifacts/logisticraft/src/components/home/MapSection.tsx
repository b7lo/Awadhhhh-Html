import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export default function MapSection() {
  return (
    <section id="الشبكة" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              الشبكة الاستراتيجية
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              نغطي الجغرافيا،<br />
              <span className="text-muted-foreground">ونختصر الزمن.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg">
              شبكة عصبية تمتد عبر المملكة العربية السعودية، مع عقد لوجستية رئيسية في الرياض، جدة، الدمام، ونيوم. نحن متواجدون حيث تكون الصناعة.
            </p>

            <div className="space-y-6">
              {[
                { label: "المراكز الإقليمية الكبرى", val: "4", total: "100%", current: "100%" },
                { label: "المستودعات الطرفية", val: "18", total: "100%", current: "85%" },
                { label: "محطات التوزيع السريع", val: "42", total: "100%", current: "60%" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span>{stat.label}</span>
                    <span className="font-mono text-primary">{stat.val}</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: stat.current }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className="h-full bg-gradient-to-r from-primary to-blue-400"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-5 rounded-2xl bg-secondary/50 border border-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary shrink-0">
                <Activity size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">مركز التحكم الموحد</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  يتم مراقبة كافة العقد اللوجستية مركزياً من الرياض باستخدام أنظمة ذكاء اصطناعي تتنبأ بالاختناقات قبل حدوثها.
                </p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] rounded-3xl border border-border overflow-hidden bg-card"
          >
            <img 
              src="/images/network.png" 
              alt="Supply Chain Network" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-transparent to-background/80 mix-blend-multiply" />
            
            {/* Animated Nodes Overlay could go here, but the image handles the aesthetic */}
            <div className="absolute top-6 left-6 px-4 py-2 bg-background/80 backdrop-blur-md border border-border rounded-lg text-xs font-mono text-primary flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              LIVE TRACKING: ACTIVE
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
