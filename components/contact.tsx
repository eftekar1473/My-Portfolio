"use client";

import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  Phone,
} from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Just Say Hello!"
          subtitle="Let me know more about you!"
        />

        {/* Contact Form */}
        <form
          className="mx-auto max-w-2xl flex flex-col gap-5 rounded-xl border border-border bg-card p-6 sm:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="text-sm text-foreground">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Your name"
                className="border-border bg-secondary text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-sm text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                className="border-border bg-secondary text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="subject" className="text-sm text-foreground">
              Subject
            </Label>
            <Input
              id="subject"
              placeholder="What is this about?"
              className="border-border bg-secondary text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message" className="text-sm text-foreground">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Tell me about your project..."
              rows={5}
              className="border-border bg-secondary text-foreground placeholder:text-muted-foreground resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
          >
            Submit
          </Button>
        </form>

        {/* Contact Info Below Form */}
        <div className="mx-auto mt-10 max-w-2xl">
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-3 mb-8">
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

          {/* Phone and Email */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
            <a
              href="tel:+8801400095352"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" />
              +8801844898024
            </a>
            <a
              href="tel:+8801400095352"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" />
              +8801522103854
            </a>
            <a
              href="mailto:eftekar@example.com"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4 text-primary" />
              eftekarhossen3223@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
