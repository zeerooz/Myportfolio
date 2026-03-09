"use client"

import { useState } from "react"
import { FolderOpen, ArrowLeft, ExternalLink, Shield, Lock, Code, Globe, Server, Gamepad2, GraduationCap, ClipboardList } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  icon: React.ReactNode
  details: string
  link?: string
}

const projects: Project[] = [
  {
    id: "miot-blockchain",
    title: "Medical IoT Security Framework",
    description: "Bachelor's Thesis - Blockchain-based secure messaging for MIoT",
    tech: ["Hyperledger Fabric", "Python", "Machine Learning", "Blockchain"],
    icon: <Shield className="w-6 h-6" />,
    details:
      "Developed a secure message exchange framework for the Medical Internet of Things (MIoT) using Hyperledger Fabric for private blockchain implementation. The framework ensures the secure sharing of medical data by leveraging blockchain's immutability for data integrity. Additionally, implemented a machine learning model to classify network traffic, proactively detecting and blocking malicious traffic before it enters the blockchain network.",
  },
  {
    id: "sam-cha",
    title: "Sam Cha Report System",
    description: "Full-stack reporting system for restaurant business",
    tech: ["MongoDB", "NestJS", "Next.js", "JWT", "bcryptjs"],
    icon: <ClipboardList className="w-6 h-6" />,
    details:
      "Designed and developed a comprehensive reporting system for Sam Cha restaurant to streamline daily operational reporting by staff. Implemented secure user authentication using JWT and bcryptjs with role-based access control to safeguard sensitive employee data.",
    link: "https://github.com/zeerooz",
  },
  {
    id: "home-haven",
    title: "Home Haven",
    description: "Property maintenance business management platform",
    tech: ["MongoDB", "NestJS", "Next.js", "JWT", "SMS Integration"],
    icon: <Server className="w-6 h-6" />,
    details:
      "Designed and developed a full-stack web application to manage customers, employees, subscriptions, and business operations. Built secure authentication with role-based access control. Implemented financial reporting dashboards, automated invoice generation, and SMS notification services for customer updates.",
    link: "https://github.com/zeerooz",
  },
  {
    id: "ta-dashboard",
    title: "AWS TA Dashboard",
    description: "Cloud-hosted teaching assistant information system",
    tech: ["AWS EC2", "DynamoDB", "Lambda", "S3", "Node.js", "Express"],
    icon: <GraduationCap className="w-6 h-6" />,
    details:
      "Developed a web-based TA Dashboard to streamline communication between students and teaching assistants by displaying crucial TA information such as office hours, room numbers, and contact details. Ensured high availability by deploying across multiple EC2 instances and utilized AWS services including DynamoDB for data storage and S3 for image uploads.",
    link: "https://github.com/zeerooz",
  },
  {
    id: "e-learning",
    title: "E-Learning Platform",
    description: "Adaptive learning platform with performance tracking",
    tech: ["NestJS", "MongoDB", "Next.js", "JWT", "bcrypt", "Real-time Chat"],
    icon: <Globe className="w-6 h-6" />,
    details:
      "Developed a feature-rich E-Learning platform offering adaptive learning experiences and personalized performance insights for students, instructors, and administrators. Key features include user authentication with RBAC, course management with multimedia uploads, version control, adaptive quizzes, real-time chat, discussion forums, notifications, and performance dashboards.",
    link: "https://github.com/zeerooz",
  },
  {
    id: "gamified-edu",
    title: "Gamified Educational Platform",
    description: "Personalized learning through gamification",
    tech: ["SQL Server", ".NET MVC", "C#"],
    icon: <Gamepad2 className="w-6 h-6" />,
    details:
      "Developed an innovative educational platform designed to personalize learning experiences through adaptive and gamified elements. Utilized SQL Server for robust database schema creation with optimized data structures. Implemented differentiated access controls for admins, instructors, and students, with advanced reporting tools and performance dashboards.",
    link: "https://github.com/zeerooz",
  },
  {
    id: "marvel-game",
    title: "2D Marvel-Themed Java Game",
    description: "OOP-based 2D game with interactive gameplay",
    tech: ["Java", "JavaFX", "OOP"],
    icon: <Gamepad2 className="w-6 h-6" />,
    details:
      "Designed and implemented a 2D Marvel-themed game using core Object-Oriented Programming principles such as inheritance, polymorphism, encapsulation, and abstraction. Developed interactive gameplay mechanics, character classes, collision detection, and event handling. Focused on clean architecture and modular design.",
    link: "https://github.com/zeerooz",
  },
  {
    id: "attendance-checker",
    title: "Attendance Checker Application",
    description: "Automated attendance verification tool",
    tech: ["Python", "Pandas", "OpenPyXL", "Tkinter"],
    icon: <ClipboardList className="w-6 h-6" />,
    details:
      "Developed an automated attendance verification tool that extracts student names from downloaded Excel sheets generated by an online learning platform after each session. The application compares session attendance data against a master student list to identify absent students efficiently. Reduced manual checking time and minimized human error.",
    link: "https://github.com/zeerooz",
  },
  {
    id: "portfolio-os",
    title: "Portfolio OS",
    description: "This interactive OS-themed portfolio website",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    icon: <Code className="w-6 h-6" />,
    details:
      "Designed and developed this interactive portfolio website that mimics a desktop operating system. Features draggable windows, a file system, terminal emulator, PDF viewer, and mobile-responsive design with iOS-style interface.",
    link: "https://github.com/zeerooz",
  },
]

export function ProjectsWindow() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  if (selectedProject) {
    return (
      <div className="h-full flex flex-col">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-border/30 bg-muted/20 shrink-0">
          <button
            onClick={() => setSelectedProject(null)}
            className="flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Projects
          </button>
          <span className="text-xs text-muted-foreground">/</span>
          <span className="text-xs text-foreground/70">{selectedProject.title}</span>
        </div>

        {/* Project detail */}
        <div className="flex-1 overflow-y-auto os-scrollbar p-6">
          <div className="max-w-lg space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
                {selectedProject.icon}
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground">{selectedProject.title}</h2>
                <p className="text-sm text-muted-foreground">{selectedProject.description}</p>
              </div>
            </div>

            <p className="text-sm text-foreground/80 leading-relaxed">{selectedProject.details}</p>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-foreground uppercase tracking-wider">Tech Stack</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-primary/10 text-primary border border-primary/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                View on GitHub
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-border/30 bg-muted/20 shrink-0">
        <FolderOpen className="w-4 h-4 text-primary" />
        <span className="text-xs text-foreground/70">Projects</span>
        <span className="text-xs text-muted-foreground ml-auto">{projects.length} items</span>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto os-scrollbar p-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/40 transition-colors text-center border border-transparent hover:border-border/30"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {project.icon}
              </div>
              <div>
                <p className="text-xs font-medium text-foreground">{project.title}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5 line-clamp-2">{project.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
