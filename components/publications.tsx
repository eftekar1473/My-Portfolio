import Image from "next/image";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const publications = [
  {
    title:
      "Gesture Controlled Arithmetic and Matrix Calculator Using Computer Vision",
    description:
      "A lightweight computer vision framework designed for resource-constrained edge devices, enabling high-speed obstacle avoidance and path planning in GPS-denied environments.",
    journal: "Springer - Nature Communications",
    tags: ["computer-vision", "mediapipe"],
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=600&h=340&fit=crop",
  },
  {
    title: "Multi-Modal AI Solutions for Automated Academic Support",
    description:
      "A university Q&A platform empowering students with instant answers, project insights, and internship tracking -- all enhanced by AI.",
    journal: "ACM Digital Library",
    tags: ["langchain", "lang-graph"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=340&fit=crop",
  },
  {
    title: "Privacy-Preserving Healthcare Data Sharing",
    description:
      "A blockchain-based framework ensuring HIPAA compliance while allowing seamless medical record interoperability between hospital networks.",
    journal: "Journal of Medical Systems",
    tags: ["blockchain", "cyber-security", "healthcare"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=340&fit=crop",
  },
  {
    title: "Optimizing Smart Grid Efficiency via Reinforcement Learning",
    description:
      "An analysis of multi-agent reinforcement learning algorithms to balance load distribution and reduce energy waste in urban smart grid infrastructures.",
    journal: "Elsevier - Energy Reports",
    tags: ["python", "rl", "smart-grid"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=340&fit=crop",
  },
];

export function Publications() {
  return (
    <section id="publications" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Scholarly Contributions"
          subtitle="Exploring Ideas Through Curiosity"
          action={{ label: "View More \u2192", href: "#" }}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {publications.map((pub) => (
            <article
              key={pub.title}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30"
            >
              {/* Publication Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={pub.image || "/placeholder.svg"}
                  alt={pub.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <h3 className="font-heading text-sm font-semibold leading-snug text-foreground drop-shadow-md">
                    {pub.title}
                  </h3>
                </div>
              </div>

              {/* Publication Content */}
              <div className="flex flex-col gap-3 p-5">
                <h3 className="font-heading text-base font-semibold leading-snug text-foreground">
                  {pub.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {pub.description}
                </p>

                <p className="text-xs font-medium text-primary">
                  {pub.journal}
                </p>

                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="mt-1 w-fit gap-2 border-border text-foreground hover:bg-secondary bg-transparent"
                  asChild
                >
                  <a href="#">
                    View Details
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
