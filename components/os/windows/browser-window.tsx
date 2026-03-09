"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, RotateCw, Search, Star, ExternalLink, Lock } from "lucide-react"

interface Bookmark {
  title: string
  url: string
  icon: React.ReactNode
}

const bookmarks: Bookmark[] = [
  { title: "GitHub", url: "https://github.com/zeerooz", icon: <span className="text-xs font-bold">GH</span> },
  { title: "LinkedIn", url: "https://linkedin.com/in/ahmed-elkhawaga", icon: <span className="text-xs font-bold">in</span> },
  { title: "HackTheBox", url: "https://hackthebox.com", icon: <span className="text-xs font-bold">HTB</span> },
  { title: "TryHackMe", url: "https://tryhackme.com", icon: <span className="text-xs font-bold">THM</span> },
]

interface PageContent {
  title: string
  content: React.ReactNode
}

const getPages = (navigate: (url: string) => void): Record<string, PageContent> => ({
  "about:home": {
    title: "New Tab",
    content: (
      <div className="flex flex-col items-center justify-center h-full gap-6 p-8">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-foreground">Welcome to SecureBrowse</h1>
          <p className="text-sm text-muted-foreground">Your gateway to my online presence</p>
        </div>
        <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
          {[
            { label: "GitHub Profile", desc: "View my repositories", url: "https://github.com/zeerooz" },
            { label: "LinkedIn", desc: "Professional network", url: "https://linkedin.com/in/ahmed-elkhawaga" },
            { label: "HackTheBox", desc: "CTF platform", url: "https://hackthebox.com" },
            { label: "TryHackMe", desc: "Security training", url: "https://tryhackme.com" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.url)}
              className="p-3 rounded-lg bg-muted/30 border border-border/30 hover:bg-muted/50 transition-colors cursor-pointer text-left"
            >
              <p className="text-sm font-medium text-foreground">{item.label}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</p>
              <p className="text-[10px] text-primary/60 mt-1 truncate">{item.url}</p>
            </button>
          ))}
        </div>
      </div>
    ),
  },
  "https://github.com/zeerooz": {
    title: "GitHub - zeerooz",
    content: (
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-muted/50 border border-border/30 flex items-center justify-center text-2xl font-bold text-primary">
            A
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">zeerooz</h2>
            <p className="text-sm text-muted-foreground">CS Graduate | Security Enthusiast</p>
            <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
              <span>12 repositories</span>
              <span>45 followers</span>
              <span>30 following</span>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-foreground">Pinned Repositories</h3>
          {[
            { name: "vulnerability-scanner", desc: "Automated web app vulnerability scanner", lang: "Python", stars: 24 },
            { name: "secure-chat", desc: "End-to-end encrypted messaging app", lang: "TypeScript", stars: 18 },
            { name: "siem-dashboard", desc: "Security event management dashboard", lang: "Python", stars: 12 },
            { name: "portfolio-os", desc: "OS-themed portfolio website", lang: "TypeScript", stars: 56 },
          ].map((repo) => (
            <div key={repo.name} className="p-3 rounded-md border border-border/30 bg-muted/20 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-primary">{repo.name}</span>
              </div>
              <p className="text-xs text-muted-foreground">{repo.desc}</p>
              <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {repo.lang}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {repo.stars}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  "https://linkedin.com/in/ahmed-elkhawaga": {
    title: "LinkedIn - Ahmed Alaa",
    content: (
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold text-white">
            AA
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">Ahmed Alaa</h2>
            <p className="text-sm text-muted-foreground">Computer Science Graduate | IT Security Specialist</p>
            <p className="text-xs text-muted-foreground mt-1">Cairo, Egypt</p>
            <div className="flex items-center gap-3 mt-2 text-xs text-blue-600">
              <span>500+ connections</span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">About</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Computer Science graduate specializing in IT Security. Passionate about cybersecurity with hands-on experience
              in network security, penetration testing, and web application security. Active on platforms like TryHackMe and Hack The Box.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Experience</h3>
            <div className="space-y-2">
              <div className="p-2 rounded-md bg-muted/20">
                <p className="text-sm font-medium text-foreground">Network Security Intern</p>
                <p className="text-xs text-primary">Khwarizm Consulting</p>
                <p className="text-[11px] text-muted-foreground">2025 - 2026</p>
              </div>
              <div className="p-2 rounded-md bg-muted/20">
                <p className="text-sm font-medium text-foreground">Full-Stack Developer</p>
                <p className="text-xs text-primary">Contract Work</p>
                <p className="text-[11px] text-muted-foreground">2025 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
})

export function BrowserWindow() {
  const [url, setUrl] = useState("about:home")
  const [inputUrl, setInputUrl] = useState("")
  const [historyStack, setHistoryStack] = useState(["about:home"])
  const [historyIndex, setHistoryIndex] = useState(0)

  const navigate = (newUrl: string) => {
    // Check if it's an external link that should open in a new tab
    const externalLinks = [
      "https://github.com/zeerooz",
      "https://linkedin.com/in/ahmed-elkhawaga",
      "https://hackthebox.com",
      "https://tryhackme.com",
    ]

    if (externalLinks.includes(newUrl) || newUrl.startsWith("http")) {
      window.open(newUrl, "_blank", "noopener,noreferrer")
      return
    }

    const newHistory = [...historyStack.slice(0, historyIndex + 1), newUrl]
    setHistoryStack(newHistory)
    setHistoryIndex(newHistory.length - 1)
    setUrl(newUrl)
    setInputUrl(newUrl === "about:home" ? "" : newUrl)
  }

  const pages = getPages(navigate)
  const currentPage = pages[url] || pages["about:home"]

  const goBack = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1
      setHistoryIndex(newIndex)
      setUrl(historyStack[newIndex])
      setInputUrl(historyStack[newIndex] === "about:home" ? "" : historyStack[newIndex])
    }
  }

  const goForward = () => {
    if (historyIndex < historyStack.length - 1) {
      const newIndex = historyIndex + 1
      setHistoryIndex(newIndex)
      setUrl(historyStack[newIndex])
      setInputUrl(historyStack[newIndex] === "about:home" ? "" : historyStack[newIndex])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputUrl.trim()) {
      navigate(inputUrl.trim())
    }
  }

  return (
    <div className="h-full flex flex-col">
      {/* Browser toolbar */}
      <div className="flex flex-col border-b border-border/30 bg-muted/20 shrink-0">
        {/* Navigation + URL bar */}
        <div className="flex items-center gap-1.5 px-2 py-1.5">
          <button
            onClick={goBack}
            disabled={historyIndex <= 0}
            className="w-7 h-7 flex items-center justify-center rounded-sm hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30"
            aria-label="Go back"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={goForward}
            disabled={historyIndex >= historyStack.length - 1}
            className="w-7 h-7 flex items-center justify-center rounded-sm hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30"
            aria-label="Go forward"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => navigate(url)}
            className="w-7 h-7 flex items-center justify-center rounded-sm hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Refresh"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>

          {/* URL bar */}
          <form onSubmit={handleSubmit} className="flex-1 flex items-center">
            <div className="flex items-center flex-1 h-7 px-2.5 rounded-md bg-background/50 border border-border/30">
              <Lock className="w-3 h-3 text-primary mr-1.5 shrink-0" />
              <input
                type="text"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="Search or enter URL"
                className="flex-1 bg-transparent text-xs text-foreground/80 outline-none placeholder:text-muted-foreground/50"
                aria-label="URL bar"
              />
              <Search className="w-3 h-3 text-muted-foreground shrink-0" />
            </div>
          </form>
        </div>

        {/* Bookmarks bar */}
        <div className="flex items-center gap-1 px-3 py-1 border-t border-border/20">
          {bookmarks.map((bm) => (
            <button
              key={bm.title}
              onClick={() => navigate(bm.url)}
              className="flex items-center gap-1 px-2 py-0.5 rounded text-[11px] text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
            >
              <span className="w-4 h-4 flex items-center justify-center text-primary shrink-0">{bm.icon}</span>
              {bm.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto os-scrollbar">{currentPage.content}</div>

      {/* Status bar */}
      <div className="flex items-center px-3 py-1 border-t border-border/20 bg-muted/10 shrink-0">
        <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
          <Lock className="w-2.5 h-2.5 text-primary" />
          <span>{url === "about:home" ? "Ready" : url}</span>
        </div>
      </div>
    </div>
  )
}
