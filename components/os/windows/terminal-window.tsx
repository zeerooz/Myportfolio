"use client"

import { useState, useRef, useEffect, useCallback } from "react"

interface TerminalLine {
  type: "input" | "output" | "error" | "system"
  content: string
}

const COMMANDS: Record<string, string | string[]> = {
  help: [
    "Available commands:",
    "  help           - Show this help message",
    "  about          - Display information about me",
    "  skills         - List my technical skills",
    "  education      - Show my education background",
    "  experience     - Show my work experience",
    "  projects       - List my projects",
    "  contact        - Show contact information",
    "  certifications - Show my certifications",
    "  whoami         - Who am I?",
    "  uname          - System information",
    "  date           - Current date and time",
    "  clear          - Clear the terminal",
    "  neofetch       - System info (fancy)",
  ].join("\n"),
  about:
    "Hi! I'm Ahmed Alaa, a Computer Science graduate from\nGerman International University (GIU) with a major in\nIT Security and a minor in Software Engineering.\n\nI'm passionate about cybersecurity, penetration testing,\nand building secure applications. I have hands-on experience\nwith TryHackMe, Hack The Box, and real-world security projects.",
  skills: [
    "Security     : Penetration Testing, Network Security, Digital Forensics, OWASP",
    "Languages    : Python, Java, JavaScript, C++, C#, PHP, SQL",
    "Security Tools: Wireshark, Burp Suite, Nmap, Metasploit",
    "Frameworks   : Next.js, React, NestJS, Node.js, Angular, .NET MVC",
    "Databases    : MySQL, MongoDB, DynamoDB, SQL Server",
    "Platforms    : Linux, AWS (EC2, Lambda, S3, DynamoDB), Docker",
    "Other        : Git, GitHub, Agile, JWT, Role-Based Access Control",
  ].join("\n"),
  education:
    "B.Sc. Informatics and Computer Science\nMajor: IT Security | Minor: Software Engineering\nGerman International University (GIU)\nCairo, Egypt | 2020 - 2025",
  experience: [
    "Network Security Intern @ Khwarizm Consulting (2025-2026)",
    "  - DMVPN, MPLS, Cisco switches/routers, Fortigate/Fortinet firewalls",
    "  - Cisco ACI, PRTG Monitoring, VPN solutions, incident response",
    "",
    "Full-Stack Developer @ Sam Cha Report System (2025-Present)",
    "  - Restaurant reporting system with JWT auth and RBAC",
    "",
    "Full-Stack Developer @ Home Haven (2025)",
    "  - Property maintenance platform with financial dashboards",
    "",
    "Teaching Assistant @ GIU (2023)",
    "  - Assisted in teaching ethical hacking courses",
  ].join("\n"),
  projects: [
    "1. Medical IoT Security     - Blockchain secure messaging (Thesis)",
    "2. Sam Cha Report System    - Restaurant reporting (MongoDB, NestJS)",
    "3. Home Haven               - Property maintenance (Next.js, NestJS)",
    "4. AWS TA Dashboard         - Cloud-hosted TA info (AWS, Node.js)",
    "5. E-Learning Platform      - Adaptive learning (NestJS, MongoDB)",
    "6. Gamified Edu Platform    - Learning gamification (.NET, SQL Server)",
    "7. Marvel 2D Game           - Java game with OOP (JavaFX)",
    "8. Attendance Checker       - Automated tool (Python, Pandas)",
    "9. Portfolio OS             - This interactive site (Next.js)",
  ].join("\n"),
  contact: "Email    : ahmed.alaa.alkhawaga@gmail.com\nPhone    : +20 1091916350\nGitHub   : github.com/zeerooz\nLinkedIn : linkedin.com/in/ahmed-elkhawaga\nLocation : Cairo, Egypt",
  certifications: [
    "- Full Stack Development",
    "- Wireless Penetration Testing (StationX)",
    "  - WEP/WPA/WPA2 cracking, Evil Twin attacks",
    "- TryHackMe & Hack The Box practitioner",
    "- OWASP JuiceShop security assessments",
  ].join("\n"),
  whoami: "ahmed@portfolio-os",
  uname: "PortfolioOS 1.0.0 (x86_64) - Built with Next.js & TypeScript",
  date: "", // handled dynamically
  neofetch: "", // handled dynamically
}

export function TerminalWindow() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "system", content: "PortfolioOS Terminal v1.0.0" },
    { type: "system", content: 'Type "help" for available commands.\n' },
  ])
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [lines])

  const handleCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim().toLowerCase()
      const newLines: TerminalLine[] = [
        ...lines,
        { type: "input", content: `ahmed@portfolio-os:~$ ${cmd}` },
      ]

      if (trimmed === "clear") {
        setLines([])
        return
      }

      if (trimmed === "date") {
        newLines.push({ type: "output", content: new Date().toString() })
      } else if (trimmed === "neofetch") {
        const art = [
          "        .--.          ahmed@portfolio-os",
          "       |o_o |         -------------------",
          "       |:_/ |         OS:     PortfolioOS 1.0.0",
          "      //   \\ \\        Host:   Next.js 16",
          "     (|     | )       Kernel: React 19",
          "    /'\\_   _/`\\       Shell:  TypeScript 5.7",
          "    \\___)=(___/       Uni:    GIU Cairo",
          "                      Major:  IT Security",
          "                      Minor:  Software Engineering",
        ]
        newLines.push({ type: "output", content: art.join("\n") })
      } else if (trimmed === "") {
        // do nothing
      } else if (COMMANDS[trimmed] !== undefined) {
        const output = COMMANDS[trimmed]
        if (Array.isArray(output)) {
          newLines.push({ type: "output", content: output.join("\n") })
        } else {
          newLines.push({ type: "output", content: output as string })
        }
      } else {
        newLines.push({
          type: "error",
          content: `bash: ${trimmed}: command not found. Type "help" for available commands.`,
        })
      }

      setLines(newLines)
      if (trimmed) {
        setHistory((h) => [...h, cmd])
      }
      setHistoryIndex(-1)
    },
    [lines]
  )

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input)
      setInput("")
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (history.length > 0) {
        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(history[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= history.length) {
          setHistoryIndex(-1)
          setInput("")
        } else {
          setHistoryIndex(newIndex)
          setInput(history[newIndex])
        }
      }
    }
  }

  return (
    <div
      className="h-full bg-background font-mono text-sm flex flex-col cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      <div ref={scrollRef} className="flex-1 overflow-y-auto os-scrollbar p-3 space-y-0.5">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap break-all leading-relaxed">
            {line.type === "input" && <span className="text-primary">{line.content}</span>}
            {line.type === "output" && <span className="text-foreground/80">{line.content}</span>}
            {line.type === "error" && <span className="text-destructive">{line.content}</span>}
            {line.type === "system" && <span className="text-muted-foreground">{line.content}</span>}
          </div>
        ))}

        {/* Input line */}
        <div className="flex items-center gap-0">
          <span className="text-primary shrink-0">{'ahmed@portfolio-os:~$ '}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-foreground/90 caret-primary font-mono text-sm"
            autoFocus
            spellCheck={false}
            aria-label="Terminal input"
          />
        </div>
      </div>
    </div>
  )
}
