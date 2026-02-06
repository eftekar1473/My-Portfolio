"use client";

import { useState } from "react";

const categories = [
  {
    name: "Backend",
    skills: [
      "TypeScript",
      "NodeJS",
     // "ExpressJS",
    //  "GraphQL",
    //  "AWS",
    //  "RabbitMQ",
   //   "Kafka",
    //  "NGINX",
    //  "Docker",
    //  "Kubernetes",
    ],
  },
  {
    name: "Frontend",
    skills: [
     // "React",
     // "Next.js",
    //  "Tailwind CSS",
  //    "Redux",
      "HTML5",
      "CSS3",
      "JavaScript",
     // "Framer Motion",
    ],
  },
  {
    name: "Database",
    skills: [
    //  "MongoDB",
    //  "PostgreSQL",
      "MySQL",
   //   "Redis",
      "Firebase",
    //  "Prisma",
    //  "Mongoose",
    ],
  },
  {
    name: "Mobile Apps",
    skills: [ "Flutter", "Android Studio"],// "React Native",  , "Expo"
  },
  {
    name: "AI/ML",
    skills: [
      "Python",
      "TensorFlow",
     // "PyTorch",
    //  "LangChain",
      "OpenCV",
    //  "Scikit-learn",
    //  "MediaPipe",
    ],
  },
  {
    name: "IoT",
    skills: ["Arduino",  "ESP32"], //"Raspberry Pi",, "MQTT"
  },
  {
    name: "Other",
    skills: ["Git", "Linux"], //, "Figma", "Postman", "Jest", "CI/CD", "Agile"
  },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header area */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-1">
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              Cognitive Toolbox
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Syntax to Shape Digital Dreams.
          </p>
        
        </div>

        {/* Category Tabs */}
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((cat, index) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => setActiveCategory(index)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="mb-5 font-heading text-lg font-semibold text-foreground">
            {categories[activeCategory].name}
          </h3>
          <div className="flex flex-wrap gap-3">
            {categories[activeCategory].skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground transition-all hover:border-primary/40 hover:bg-secondary/80"
              >
                <div className="h-5 w-5 rounded bg-muted flex items-center justify-center">
                  <span className="text-[10px] font-bold text-muted-foreground">
                    {skill.charAt(0)}
                  </span>
                </div>
                {skill}
              </div>
            ))}
          </div>

          {/* Loading indicator like the reference */}
          <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <div className="h-1 w-1 animate-pulse rounded-full bg-primary" />
            <span>Loading ...</span>
          </div>
        </div>
      </div>
    </section>
  );
}
