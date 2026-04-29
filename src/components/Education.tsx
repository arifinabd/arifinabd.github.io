import { resumeData } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-12 rounded-full" />

        <div className="space-y-8">
          {resumeData.education.map((edu, index) => (
            <div
              key={index}
              className="bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-surface-light/30 hover:border-accent/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <span className="text-sm text-muted mt-1 sm:mt-0 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 self-start">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-accent font-medium mb-3">{edu.school}</p>
                  <p className="text-muted">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
