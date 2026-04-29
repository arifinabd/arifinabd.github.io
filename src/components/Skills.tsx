"use client";

import { resumeData } from "@/data/resume";

const categoryColors: Record<string, { bg: string; bar: string; text: string }> = {
  Frontend: {
    bg: "bg-primary/10",
    bar: "bg-gradient-to-r from-primary to-primary-light",
    text: "text-primary-light",
  },
  Backend: {
    bg: "bg-secondary/10",
    bar: "bg-gradient-to-r from-secondary to-pink-400",
    text: "text-secondary",
  },
  Tools: {
    bg: "bg-accent/10",
    bar: "bg-gradient-to-r from-accent to-accent-light",
    text: "text-accent-light",
  },
};

export default function Skills() {
  const categories = [...new Set(resumeData.skills.map((s) => s.category))];

  return (
    <section id="skills" className="py-24 px-6 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const colors = categoryColors[category] ?? {
              bg: "bg-primary/10",
              bar: "bg-primary",
              text: "text-primary",
            };

            return (
              <div
                key={category}
                className="bg-surface/50 backdrop-blur-sm rounded-2xl p-6 border border-surface-light/30 hover:border-primary/30 transition-all duration-500"
              >
                <h3
                  className={`text-lg font-bold mb-6 ${colors.text} flex items-center gap-2`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${colors.bar}`}
                  />
                  {category}
                </h3>

                <div className="space-y-4">
                  {resumeData.skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted">
                            {skill.level}%
                          </span>
                        </div>
                        <div className={`h-2 rounded-full ${colors.bg}`}>
                          <div
                            className={`h-full rounded-full ${colors.bar} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
