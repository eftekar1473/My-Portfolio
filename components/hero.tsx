import Image from "next/image";
import { Github, Linkedin, Twitter, Facebook, ArrowDownToLine } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/eftekar1473", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/eftekar-hossen-6b088a245 ", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium uppercase tracking-widest text-primary animate-fade-in-up">
            Hey There!
          </p>

          <h1 className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-in-up animate-delay-100 text-balance">
            I am <span className="text-primary">Eftekar Hossen</span>
          </h1>

          <h2 className="font-heading text-xl font-semibold text-muted-foreground sm:text-2xl animate-fade-in-up animate-delay-200">
            Software Engineer
          </h2>

          <p className="max-w-lg text-base leading-relaxed text-muted-foreground animate-fade-in-up animate-delay-300">
            An engineer in training, on a mission to build things... and then
            un-build them just to see what happens.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 animate-fade-in-up animate-delay-400">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-all hover:border-primary hover:text-primary"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div  className="animate-fade-in-up animate-delay-400">
            <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
              <ArrowDownToLine  className="h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative hidden lg:block">
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=500&fit=crop"
              alt="Developer workspace with code on screen"
              width={600}
              height={500}
              className="h-auto w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
}
