import { Github, Linkedin, Twitter, Facebook } from "lucide-react";

const footerLinks = [
 // { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/eftekar1473", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/eftekar-hossen-6b088a245", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8">
        {/* Logo */}
        <a
          href="#"
          className="font-heading text-xl font-bold tracking-tight text-foreground"
        >
          {"Eftekar Hossen "}
        </a>

        {/* Navigation links */}
        <nav className="flex flex-wrap items-center justify-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-all hover:border-primary hover:text-primary"
              aria-label={social.label}
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border" />

        {/* Copyright */}
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:w-full">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Eftekar Hossen. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Fueled by curiosity, briyani, and the occasional Aha! moment.
          </p>
        </div>
      </div>
    </footer>
  );
}
