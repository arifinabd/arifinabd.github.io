import { resumeData } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-surface-light/30">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {resumeData.name}. All rights
          reserved.
        </p>
        <p className="text-sm text-muted">
          Built with{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
            Dedication
          </span>{" "}
          &{" "}
          <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent font-medium">
            Sincerity
          </span>{" "}
          {" "}
          <span>🤟</span>
        </p>
      </div>
    </footer>
  );
}
