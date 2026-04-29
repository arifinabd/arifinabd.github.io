import { resumeData } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-12 rounded-full" />

        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-12">
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="relative pl-12 sm:pl-20">
                <div className="absolute left-2.5 sm:left-6.5 top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background animate-pulse-glow" />

                <div className="bg-surface/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-surface-light/30 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary-light font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-muted mt-2 sm:mt-0 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 self-start">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
