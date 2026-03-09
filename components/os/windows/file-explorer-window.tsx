"use client"

import { useState } from "react"
import {
  Folder,
  FolderOpen,
  File,
  FileText,
  FileCode,
  Image,
  ArrowLeft,
  ChevronRight,
} from "lucide-react"

interface FileItem {
  name: string
  type: "folder" | "file"
  icon: React.ReactNode
  size?: string
  modified?: string
  children?: FileItem[]
  content?: string
}

const fileSystem: FileItem[] = [
  {
    name: "Documents",
    type: "folder",
    icon: <Folder className="w-5 h-5 text-primary" />,
    children: [
      {
        name: "Ahmed_Alaa_CV.pdf",
        type: "file",
        icon: <FileText className="w-5 h-5 text-destructive/70" />,
        size: "245 KB",
        modified: "Mar 2025",
        content: "Open this file in the PDF Viewer from the desktop.",
      },
      {
        name: "Cover_Letter.txt",
        type: "file",
        icon: <File className="w-5 h-5 text-muted-foreground" />,
        size: "12 KB",
        modified: "Feb 2025",
        content:
          "Dear Hiring Manager,\n\nI am writing to express my interest in the cybersecurity position.\nAs a Computer Science graduate from German International University\nwith a major in IT Security and minor in Software Engineering,\nI am eager to apply my skills in a professional setting.\n\nMy background includes hands-on experience with penetration testing,\nnetwork security, and full-stack development. I have worked on\nreal-world projects including blockchain-based security frameworks\nand enterprise applications.\n\nI look forward to discussing how I can contribute to your team.\n\nBest regards,\nAhmed Alaa",
      },
      {
        name: "Certifications",
        type: "folder",
        icon: <Folder className="w-5 h-5 text-primary" />,
        children: [
          {
            name: "full_stack_certification.pdf",
            type: "file",
            icon: <FileText className="w-5 h-5 text-destructive/70" />,
            size: "1.2 MB",
            modified: "Jan 2025",
          },
          {
            name: "wireless_pentest_stationx.pdf",
            type: "file",
            icon: <FileText className="w-5 h-5 text-destructive/70" />,
            size: "980 KB",
            modified: "Dec 2024",
          },
        ],
      },
    ],
  },
  {
    name: "Projects",
    type: "folder",
    icon: <Folder className="w-5 h-5 text-primary" />,
    children: [
      {
        name: "miot-blockchain",
        type: "folder",
        icon: <Folder className="w-5 h-5 text-primary" />,
        children: [
          { name: "main.py", type: "file", icon: <FileCode className="w-5 h-5 text-chart-2" />, size: "8.4 KB", modified: "Mar 2025" },
          { name: "ml_classifier.py", type: "file", icon: <FileCode className="w-5 h-5 text-chart-2" />, size: "15.2 KB", modified: "Mar 2025" },
          { name: "README.md", type: "file", icon: <File className="w-5 h-5 text-muted-foreground" />, size: "3.1 KB", modified: "Mar 2025" },
        ],
      },
      {
        name: "home-haven",
        type: "folder",
        icon: <Folder className="w-5 h-5 text-primary" />,
        children: [
          { name: "app.tsx", type: "file", icon: <FileCode className="w-5 h-5 text-chart-1" />, size: "4.2 KB", modified: "Oct 2025" },
          { name: "auth.service.ts", type: "file", icon: <FileCode className="w-5 h-5 text-chart-1" />, size: "6.8 KB", modified: "Oct 2025" },
          { name: "api.controller.ts", type: "file", icon: <FileCode className="w-5 h-5 text-chart-4" />, size: "5.1 KB", modified: "Oct 2025" },
        ],
      },
      {
        name: "e-learning-platform",
        type: "folder",
        icon: <Folder className="w-5 h-5 text-primary" />,
        children: [
          { name: "dashboard.tsx", type: "file", icon: <FileCode className="w-5 h-5 text-chart-1" />, size: "7.2 KB", modified: "Sep 2024" },
          { name: "course.module.ts", type: "file", icon: <FileCode className="w-5 h-5 text-chart-1" />, size: "5.8 KB", modified: "Sep 2024" },
        ],
      },
    ],
  },
  {
    name: "Pictures",
    type: "folder",
    icon: <Folder className="w-5 h-5 text-primary" />,
    children: [
      { name: "profile_photo.jpg", type: "file", icon: <Image className="w-5 h-5 text-chart-4" />, size: "2.1 MB", modified: "Jan 2025" },
      { name: "graduation_giu.jpg", type: "file", icon: <Image className="w-5 h-5 text-chart-4" />, size: "3.4 MB", modified: "Dec 2025" },
      { name: "hackathon_team.jpg", type: "file", icon: <Image className="w-5 h-5 text-chart-4" />, size: "4.2 MB", modified: "Nov 2024" },
    ],
  },
  {
    name: "security_notes.txt",
    type: "file",
    icon: <File className="w-5 h-5 text-muted-foreground" />,
    size: "2 KB",
    modified: "Mar 2025",
    content:
      "== Security Study Notes ==\n\nOWASP Top 10 (2021):\n1. Broken Access Control\n2. Cryptographic Failures\n3. Injection\n4. Insecure Design\n5. Security Misconfiguration\n6. Vulnerable Components\n7. Auth Failures\n8. Data Integrity Failures\n9. Logging & Monitoring Failures\n10. SSRF\n\nPenetration Testing Methodology:\n- Reconnaissance\n- Scanning\n- Gaining Access\n- Maintaining Access\n- Covering Tracks\n\nReminder: Practice more CTF challenges on HackTheBox and TryHackMe!",
  },
]

export function FileExplorerWindow() {
  const [currentPath, setCurrentPath] = useState<string[]>([])
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null)

  const getCurrentItems = (): FileItem[] => {
    let items = fileSystem
    for (const folder of currentPath) {
      const found = items.find((item) => item.name === folder && item.type === "folder")
      if (found?.children) {
        items = found.children
      }
    }
    return items
  }

  const navigateToFolder = (folderName: string) => {
    setCurrentPath([...currentPath, folderName])
    setSelectedFile(null)
  }

  const goBack = () => {
    setCurrentPath(currentPath.slice(0, -1))
    setSelectedFile(null)
  }

  const goToPathIndex = (index: number) => {
    setCurrentPath(currentPath.slice(0, index + 1))
    setSelectedFile(null)
  }

  const items = getCurrentItems()

  return (
    <div className="h-full flex flex-col">
      {/* Navigation bar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border/30 bg-muted/20 shrink-0">
        <button
          onClick={goBack}
          disabled={currentPath.length === 0}
          className="w-7 h-7 flex items-center justify-center rounded-sm hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30"
          aria-label="Go back"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
        </button>
        <div className="flex items-center gap-1 text-xs text-muted-foreground flex-1 min-w-0">
          <button onClick={() => { setCurrentPath([]); setSelectedFile(null) }} className="hover:text-foreground transition-colors shrink-0">
            Home
          </button>
          {currentPath.map((folder, i) => (
            <span key={i} className="flex items-center gap-1 min-w-0">
              <ChevronRight className="w-3 h-3 shrink-0" />
              <button onClick={() => goToPathIndex(i)} className="hover:text-foreground transition-colors truncate">
                {folder}
              </button>
            </span>
          ))}
        </div>
        <span className="text-[10px] text-muted-foreground shrink-0">{items.length} items</span>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* File list */}
        <div className="flex-1 overflow-y-auto os-scrollbar">
          <table className="w-full">
            <thead>
              <tr className="text-[10px] text-muted-foreground uppercase tracking-wider border-b border-border/20">
                <th className="text-left px-3 py-1.5 font-medium">Name</th>
                <th className="text-left px-3 py-1.5 font-medium w-20">Size</th>
                <th className="text-left px-3 py-1.5 font-medium w-24">Modified</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr
                  key={item.name}
                  className={`text-xs cursor-default hover:bg-muted/30 transition-colors ${
                    selectedFile?.name === item.name ? "bg-primary/10" : ""
                  }`}
                  onClick={() => setSelectedFile(item)}
                  onDoubleClick={() => {
                    if (item.type === "folder") {
                      navigateToFolder(item.name)
                    }
                  }}
                >
                  <td className="px-3 py-1.5">
                    <div className="flex items-center gap-2">
                      {item.type === "folder" ? (
                        selectedFile?.name === item.name ? (
                          <FolderOpen className="w-4 h-4 text-primary shrink-0" />
                        ) : (
                          <Folder className="w-4 h-4 text-primary shrink-0" />
                        )
                      ) : (
                        <span className="shrink-0">{item.icon}</span>
                      )}
                      <span className="text-foreground/90 truncate">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-3 py-1.5 text-muted-foreground">{item.size || "--"}</td>
                  <td className="px-3 py-1.5 text-muted-foreground">{item.modified || "--"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Preview pane */}
        {selectedFile && selectedFile.type === "file" && selectedFile.content && (
          <div className="w-60 border-l border-border/30 bg-muted/10 p-3 overflow-y-auto os-scrollbar shrink-0">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {selectedFile.icon}
                <span className="text-xs font-medium text-foreground truncate">{selectedFile.name}</span>
              </div>
              <div className="text-[11px] text-foreground/70 whitespace-pre-wrap font-mono leading-relaxed">
                {selectedFile.content}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
