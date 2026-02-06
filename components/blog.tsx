import Image from "next/image";
import { SectionHeader } from "@/components/section-header";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title:
      "Bangladesh National Cadet Corps",
    excerpt:
      "Role : Cadet Corporal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVF2-qDmAp-AvW4ROqST7qi8aNRQnjcidVQ&s",
    href: "#",
  },
  {
    title:
      "NSTU Mechatronics Club",
    excerpt:
      "Role : Joint Secretry",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAWDNEvNwDs7LN_KaaT4a1aCe4LNL2yZGw-A&s",
    href: "#",
  },
  {
    title:
      "NSTU Debating Society",
    excerpt:
      "Role : Sub Executive Member",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqB1v-x-Fk33SIaJde_ZWzaMs7sKlLYSGVkA&s",
    href: "#",
  },
];

export function Blog() {
  return (
    <section id="blog" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Beyond the Classroom"
          subtitle="A Journey Through Learning, Leadership, and Fun"
          action={{ label: "View More \u2192", href: "#" }}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30"
            >
              {/* Blog Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Blog Content */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="font-heading text-base font-semibold leading-snug text-foreground line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                <a
                  href={post.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Activities....
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
