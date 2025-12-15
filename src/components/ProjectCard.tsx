import { Laptop, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
}

export default function ProjectCard({ title, description, technologies }: ProjectCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-primary/50">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Laptop className="h-5 w-5 text-primary" />
            {title}
          </span>
          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index}>{tech}</Badge>
          ))}
        </div>
        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="outline" className="gap-1">
            <Github className="h-4 w-4" />
            Code
          </Button>
          <Button size="sm" className="gap-1">
            <ExternalLink className="h-4 w-4" />
            Demo
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}