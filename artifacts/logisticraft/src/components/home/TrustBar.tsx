import { motion } from "framer-motion";

export default function TrustBar() {
  return (
    <section className="bg-background border-y border-border py-12 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          
          <div className="shrink-0 flex items-center gap-4">
            <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
              شركاء الثقة
            </span>
            <div className="w-px h-8 bg-border hidden md:block" />
          </div>

          <div className="flex-1 overflow-hidden relative w-full">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, ease: "linear", repeat: Infinity }}
              className="flex items-center gap-20 w-max"
              dir="ltr" // Keep logos sliding consistently
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-20">
                  <div className="text-2xl font-black text-muted-foreground/40 hover:text-foreground transition-colors cursor-default">
                    ARAMCO
                  </div>
                  <div className="text-2xl font-black text-muted-foreground/40 hover:text-foreground transition-colors cursor-default">
                    SABIC
                  </div>
                  <div className="text-2xl font-black text-muted-foreground/40 hover:text-foreground transition-colors cursor-default tracking-[0.2em]">
                    NEOM
                  </div>
                  <div className="text-2xl font-black text-muted-foreground/40 hover:text-foreground transition-colors cursor-default">
                    MA'ADEN
                  </div>
                  <div className="text-2xl font-black text-muted-foreground/40 hover:text-foreground transition-colors cursor-default">
                    STC
                  </div>
                  <div className="text-2xl font-black text-muted-foreground/40 hover:text-foreground transition-colors cursor-default">
                    TASNEE
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
