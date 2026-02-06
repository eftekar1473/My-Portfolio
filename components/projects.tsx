import Image from "next/image";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const featuredProject = {
  title: "Thinkify",
  subtitle: "Connecting Ideas, Inspiring Perspectives",
  description:
    "Thinkify is a vibrant space where people from diverse backgrounds and interests come together to engage in meaningful conversations, fostering an environment rich in idea exchange, knowledge...",
  tags: ["express", "mongodb", "react"],
  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
  liveUrl: "#",
  codeUrl: "#",
};

const otherProjects = [
  {
    title: "AskIIT",
    subtitle: "Ask Questions, Get Answers Quickly",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "VroomGo",
    subtitle: "Rent a Car, Embark on Your Journey",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=250&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Joinify",
    subtitle: "Unify Campus Student Organizations Seamlessly",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Househive",
    subtitle: "Buy, Rent, Sell Property Easily",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Array of Responsibilities"
          subtitle="Ideas That Don't Ask for Permission"
          action={{ label: "View More \u2192", href: "#" }}
        />

        {/* Featured Project */}
        <div className="mb-8 overflow-hidden rounded-xl border border-border bg-card">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-video lg:aspect-auto overflow-hidden">
              <Image
                src={featuredProject.image || "/placeholder.svg"}
                alt={featuredProject.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <h3 className="font-heading text-2xl font-bold text-foreground">
                {featuredProject.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {featuredProject.subtitle}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {featuredProject.description}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-2 border-border text-foreground hover:bg-secondary bg-transparent"
                  asChild
                >
                  <a href="#">
                    <ArrowRight className="h-3.5 w-3.5" />
                    View Details
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-2 border-border text-foreground hover:bg-secondary bg-transparent"
                  asChild
                >
                  <a href={featuredProject.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-3.5 w-3.5" />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Info */}
              <div className="p-4">
                <h4 className="font-heading font-semibold text-foreground">
                  {project.title}
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  {project.subtitle}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <a
                    href="#"
                    className="text-xs font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Details
                  </a>
                  <span className="text-border">|</span>
                  <a
                    href={project.liveUrl}
                    className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Live
                  </a>
                  <span className="text-border">|</span>
                  <a
                    href={project.codeUrl}
                    className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
