import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-20 pb-10 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg shadow-[0_0_15px_rgba(27,84,248,0.4)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-2xl font-bold font-sans tracking-tight">
                Logisti<span className="text-primary">Craft</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              العمود الفقري لسلاسل الإمداد الصناعية في المملكة العربية السعودية. نقدم حلولاً لوجستية بأعلى معايير الدقة والأمان للشركات الكبرى.
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-6">الخدمات</h4>
            <ul className="space-y-3">
              {["النقل الصناعي الثقيل", "إدارة المستودعات الذكية", "التخليص الجمركي", "سلاسل الإمداد المبردة", "إدارة المشاريع اللوجستية"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-6">الشركة</h4>
            <ul className="space-y-3">
              {["من نحن", "القيادة", "الاستدامة", "المسؤولية الاجتماعية", "الوظائف"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-6">تواصل معنا</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center text-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <span dir="ltr">+966 9200 00000</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center text-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                contact@logisticraft.sa
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center text-primary shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <span>الرياض، طريق الملك فهد، برج الفيصلية، الطابق 45</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} LogistiCraft. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            {['Twitter', 'LinkedIn', 'YouTube'].map((social) => (
              <a key={social} href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
