import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 relative group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg shadow-[0_0_15px_rgba(27,84,248,0.4)] group-hover:shadow-[0_0_25px_rgba(27,84,248,0.6)] transition-all">
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

        <nav className="hidden md:flex items-center gap-8">
          {["من نحن", "خدماتنا", "العمليات", "الشبكة", "آراء العملاء"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg font-bold transition-all text-sm shadow-[0_0_10px_rgba(27,84,248,0.1)] hover:shadow-[0_0_20px_rgba(27,84,248,0.3)]"
          >
            تواصل معنا
          </a>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-card border-b border-border p-6 flex flex-col gap-4 shadow-xl md:hidden">
          {["من نحن", "خدماتنا", "العمليات", "الشبكة", "آراء العملاء"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-3 bg-primary text-white rounded-lg font-bold text-center mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            تواصل معنا
          </a>
        </div>
      )}
    </header>
  );
}
