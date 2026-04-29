import { resumeData } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full" />

        <div className="bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-surface-light/30 hover:border-primary/30 transition-all duration-500">
          <p className="text-lg text-muted leading-relaxed mb-8">
            {resumeData.about}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {(resumeData as any).competencies?.map((comp: string) => (
              <span
                key={comp}
                className="px-4 py-1.5 rounded-full bg-surface-light/30 border border-white/5 text-sm font-medium text-primary-light"
              >
                {comp}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-surface-light/30">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">4+</div>
              <div className="text-sm text-muted">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">10+</div>
              <div className="text-sm text-muted">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">12+</div>
              <div className="text-sm text-muted">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-light mb-1">
                100%
              </div>
              <div className="text-sm text-muted">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
