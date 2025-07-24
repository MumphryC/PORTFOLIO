import { ExternalLink, Github, Code, Smartphone, Database, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function PortfolioProjects() {
  const projects = [
    {
      title: "TaskFlow Pro",
      tagline: "A collaborative project management platform with real-time updates",
      summary:
        "Built a full-stack web application that helps teams organize tasks, track progress, and collaborate efficiently. Solves the problem of scattered project communication by centralizing everything in one intuitive dashboard with real-time synchronization.",
      features: [
        "Real-time collaboration with WebSocket integration",
        "Drag-and-drop Kanban board interface",
        "Role-based access control and team management",
        "Interactive analytics dashboard with Chart.js",
        "Mobile-responsive design with dark/light themes",
        "Automated email notifications and reminders",
      ],
      techStack: {
        frontend: ["JavaScript", "HTML/CSS", "Chart.js"],
        backend: ["Flask", "Python"],
        database: ["MySQL"],
        tools: ["Git", "GitHub", "AWS", "Docker"],
      },
      liveUrl: "https://taskflow-pro.vercel.app",
      githubUrl: "https://github.com/username/taskflow-pro",
      learned:
        "Mastered WebSocket implementation for real-time features and gained deep experience with Flask's blueprint architecture for scalable applications.",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      title: "ExpenseTracker Mobile",
      tagline: "Cross-platform expense tracking app with smart categorization",
      summary:
        "Developed a Flutter mobile application that automatically categorizes expenses and provides insightful spending analytics. Addresses the need for effortless expense tracking with intelligent features that learn from user behavior.",
      features: [
        "Smart expense categorization with ML suggestions",
        "Cross-platform compatibility (iOS & Android)",
        "Offline-first architecture with data sync",
        "Interactive spending charts and budget alerts",
        "Receipt scanning with OCR integration",
        "Multi-currency support with live exchange rates",
      ],
      techStack: {
        frontend: ["Flutter", "Dart"],
        backend: ["Django", "Python"],
        database: ["SQLite"],
        tools: ["Git", "GitHub", "Figma", "Firebase"],
      },
      liveUrl: "https://play.google.com/store/apps/expensetracker",
      githubUrl: "https://github.com/username/expense-tracker-flutter",
      learned:
        "Gained expertise in Flutter's state management and learned to implement offline-first architecture with seamless data synchronization.",
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      title: "DevOps Pipeline Manager",
      tagline: "Automated CI/CD pipeline orchestration with monitoring dashboard",
      summary:
        "Created a comprehensive DevOps tool that automates deployment pipelines and provides real-time monitoring. Streamlines the development workflow by integrating multiple tools into a unified interface with intelligent error handling.",
      features: [
        "Automated CI/CD pipeline configuration",
        "Real-time build status monitoring",
        "Integration with Jenkins and Docker",
        "Automated testing and deployment workflows",
        "Performance metrics and error tracking",
        "Slack/email notifications for pipeline events",
      ],
      techStack: {
        frontend: ["JavaScript", "HTML/CSS"],
        backend: ["Python", "Flask"],
        database: ["MySQL"],
        tools: ["Docker", "Jenkins", "Git", "AWS", "GitHub"],
      },
      liveUrl: "https://devops-manager.herokuapp.com",
      githubUrl: "https://github.com/username/devops-pipeline-manager",
      learned:
        "Deepened understanding of containerization with Docker and mastered Jenkins integration for seamless CI/CD automation.",
      icon: <Code className="w-5 h-5" />,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Featured Projects</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A showcase of full-stack applications demonstrating modern development practices and user-centered design
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {project.icon}
                  <div>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary/80 mt-1">
                      {project.tagline}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Source
                    </a>
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">{project.summary}</p>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">✨ Key Features</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">💻 Tech Stack</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-primary mb-2">Frontend</p>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.frontend.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-primary mb-2">Backend</p>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.backend.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-primary mb-2">Database</p>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.database.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-primary mb-2">Tools</p>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.tools.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">📚 Key Learnings</h4>
                <p className="text-sm text-muted-foreground italic">{project.learned}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center pt-8">
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <Database className="w-4 h-4" />
          <span>More projects available on</span>
          <Button variant="link" className="p-0 h-auto" asChild>
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
              GitHub →
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
