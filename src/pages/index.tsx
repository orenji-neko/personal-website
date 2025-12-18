import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Database,
  Palette,
  Sparkles,
  Terminal,
  Github,
  ChevronDown,
  Coffee,
  BookOpen
} from "lucide-react";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="w-full flex flex-col">

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-linear-to-br from-background via-background to-primary/5"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8 px-4">
          <Avatar className="w-40 h-40 border-4 border-primary/20 shadow-2xl ring-4 ring-primary/10 transition-transform hover:scale-105">
            <AvatarImage src="profile.jpg" />
            <AvatarFallback className="text-3xl">ME</AvatarFallback>
          </Avatar>

          <div className="text-center space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Mark Enfermo
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              Software Developer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Building elegant solutions, one line at a time. <br />
              When I'm not coding, I'll probably be doing some random stuff.
            </p>
          </div>

          <div className="flex gap-4 mt-4">
            <Button size="lg" className="gap-2">
              <Github className="h-5 w-5" />
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Coffee className="h-5 w-5" />
              Let's Connect
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <Separator className="w-24 mx-auto bg-primary h-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  Dev Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Will only code if the project is interesting. <br />
                  Also, I love low-level stuff, even if I don't understand it.
                </p>
                <p className="text-sm">
                  Powered by Large-Language Models
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Otaku stuff
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  I am just an average weeb.
                </p>
                <p className="text-sm flex items-center gap-1">
                  Just don't give me NTR stuff or I'll doxx u.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Fun facts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">▸</span>
                    <span>Probably sleeping when not coding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">▸</span>
                    <span>Coffee addict ☕</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">▸</span>
                    <span>Night owl developer 🦉</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
            <Separator className="w-24 mx-auto bg-primary h-1" />
            <p className="text-muted-foreground mt-4 text-lg">
              Tools and technologies I work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Frontend */}
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-primary" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">HTML/CSS</Badge>
                  <Badge variant="secondary">Vite</Badge>
                  <Badge variant="secondary">shadcn/ui</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Backend */}
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">.NET</Badge>
                  <Badge variant="secondary">REST</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Tools */}
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-primary" />
                  Tools & More
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">GitHub</Badge>
                  <Badge variant="secondary">VS Code</Badge>
                  <Badge variant="secondary">npm</Badge>
                  <Badge variant="secondary">Linux</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <Separator className="w-24 mx-auto bg-primary h-1" />
            <p className="text-muted-foreground mt-4 text-lg">
              Some of my recent work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ProjectCard
              title="Personal Website"
              description="The one you're currently looking at."
              technologies={["React", "Typescript", "Tailwind CSS"]}
            />
          </div>
        </div>
      </section>
    </div>
  )
}