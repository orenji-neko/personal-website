import { Outlet } from "react-router";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RootLayout() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-screen min-h-screen antialiased">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold hover:text-primary transition-colors"
          >
            Mark Enfermo
          </button>
          <div className="flex gap-6 items-center">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projects
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-secondary/30 border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:your.email@example.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              <p>© 2025 Mark Enfermo. Built with React & Tailwind.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}