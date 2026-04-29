"use client";

import { resumeData } from "@/data/resume";
import Image from "next/image";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof resumeData.projects)[0] | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openModal = (project: (typeof resumeData.projects)[0]) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="projects" className="py-24 px-6 bg-surface/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent via-primary to-secondary mx-auto mb-16 rounded-full" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-surface/40 backdrop-blur-md rounded-3xl overflow-hidden border border-surface-light/30 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="relative h-56 w-full overflow-hidden bg-surface-light/20">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
                <div className="absolute top-4 right-4 z-20">
                  <div className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-primary-light">
                    {project.tags[0]}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary-light transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-surface-light/40 text-[10px] font-semibold tracking-wider uppercase text-muted border border-surface-light/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => openModal(project)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-light hover:text-primary transition-colors duration-300 group/link"
                >
                  View Details
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Gallery */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-10 bg-background/90 backdrop-blur-xl animate-fade-in">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 p-2 rounded-full bg-surface-light/50 text-foreground hover:bg-primary hover:text-white transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="max-w-5xl w-full flex flex-col gap-6">
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-surface shadow-2xl border border-surface-light/30">
              <Image
                src={selectedProject.images[activeImageIndex]}
                alt={selectedProject.title}
                fill
                className="object-contain"
              />
              
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : selectedProject.images.length - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/60 backdrop-blur-md text-white hover:bg-primary transition-all"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev < selectedProject.images.length - 1 ? prev + 1 : 0))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/60 backdrop-blur-md text-white hover:bg-primary transition-all"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-foreground">{selectedProject.title}</h3>
                <div className="text-sm text-muted">
                  {activeImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>
              <p className="text-muted leading-relaxed max-w-3xl">{selectedProject.description}</p>
              
              <div className="flex overflow-x-auto gap-4 py-2 scrollbar-hide">
                {selectedProject.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`relative w-24 h-16 shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImageIndex === i ? "border-primary scale-105" : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt={`Thumbnail ${i}`} fill className="object-cover" />
                  </button>
                ))}
              </div>

              {selectedProject.link !== "#" && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-8 py-3 rounded-full bg-primary text-white font-semibold text-center hover:bg-primary-light transition-all w-fit"
                >
                  Visit Website
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
