import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Zap,
  Bot,
  Calendar,
  Phone,
  ChevronRight,
} from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-surface/50 bg-surface/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <Zap className="h-6 w-6 text-brand-600" />
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            Jarvis AI
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/(auth)/login"
            className="px-4 py-2 text-sm font-medium text-white bg-brand-600 rounded-md hover:bg-brand-700 transition-colors"
          >
            Get started
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-slate-600 hover:text-brand-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-surface/50 bg-surface/90 backdrop-blur-md py-4 px-6">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/(auth)/login"
              className="px-4 py-2 text-sm font-medium text-white bg-brand-600 rounded-md hover:bg-brand-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export function FooterLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className="text-sm text-slate-500 hover:text-brand-600 transition-colors"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-surface/20 bg-surface py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-brand-600" />
            <span className="text-sm font-bold text-slate-900 tracking-tight">
              Jarvis AI
            </span>
          </div>
          <div className="text-sm text-slate-500">
            Jarvis AI Auto-Repair Receptionist. Automate your front desk.
          </div>
          <div className="flex gap-4 text-sm">
            <FooterLink href="/(auth)/login">Log in</FooterLink>
            <FooterLink href="/(auth)/signup">Sign up</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
