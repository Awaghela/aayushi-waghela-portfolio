import { motion, useScroll, useMotionValueEvent, useSpring } from 'motion/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Magnetic } from './Magnetic';
import { ThemeToggle } from './ThemeToggle';

export function Navigation() {
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'About', href: '#' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills-education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-teal-500 origin-left z-50"
        style={{ scaleX }}
      />
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
          isScrolled ? 'bg-white/80 dark:bg-[#020617]/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10' : 'bg-transparent'
        }`}
      >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Magnetic>
          <a href="#" className="interactive text-2xl font-bold tracking-tighter inline-block bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-500">
            Aayushi Waghela<span className="text-emerald-500">.</span>
          </a>
        </Magnetic>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Magnetic key={link.name}>
              <a
                href={link.href}
                className="interactive text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors inline-block px-2 py-1"
              >
                {link.name}
              </a>
            </Magnetic>
          ))}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            className="interactive p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-white dark:bg-[#020617] border-b border-slate-200 dark:border-white/10"
      >
        <div className="px-6 py-4 space-y-4 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="interactive text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
    </>
  );
}
