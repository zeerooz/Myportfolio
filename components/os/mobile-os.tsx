"use client"

import { useState, useEffect } from "react"
import { useTheme } from "./theme-provider"
import {
  PixelUserIcon,
  PixelFolderIcon,
  PixelTerminalIcon,
  PixelFileIcon,
  PixelGlobeIcon,
  PixelExplorerIcon,
  PixelPhotoIcon,
  PixelShieldIcon,
  PixelLinkedInIcon,
  PixelGitHubIcon,
  PixelEmailIcon,
  PixelPhoneIcon,
} from "./pixel-icons"
import { AboutWindow } from "./windows/about-window"
import { ProjectsWindow } from "./windows/projects-window"
import { TerminalWindow } from "./windows/terminal-window"
import { PdfViewerWindow } from "./windows/pdf-viewer-window"
import { BrowserWindow } from "./windows/browser-window"
import { FileExplorerWindow } from "./windows/file-explorer-window"
import { PhotosWindow } from "./windows/photos-window"

// ============================================
// CUSTOMIZE YOUR CONTACT LINKS HERE
// ============================================
const CONTACT_LINKS = {
  linkedin: "https://linkedin.com/in/ahmed-elkhawaga",
  github: "https://github.com/zeerooz",
  email: "mailto:ahmed.alaa.alkhawaga@gmail.com",
  phone: "tel:+201091916350",
}
// ============================================

const apps = [
  { id: "about", label: "About", icon: PixelUserIcon },
  { id: "projects", label: "Projects", icon: PixelFolderIcon },
  { id: "terminal", label: "Terminal", icon: PixelTerminalIcon },
  { id: "cv", label: "My CV", icon: PixelFileIcon },
  { id: "browser", label: "Browser", icon: PixelGlobeIcon },
  { id: "files", label: "Files", icon: PixelExplorerIcon },
  { id: "photos", label: "Photos", icon: PixelPhotoIcon },
] as const

type AppId = (typeof apps)[number]["id"]

const appContent: Record<AppId, React.ReactNode> = {
  about: <AboutWindow />,
  projects: <ProjectsWindow />,
  terminal: <TerminalWindow />,
  cv: <PdfViewerWindow />,
  browser: <BrowserWindow />,
  files: <FileExplorerWindow />,
  photos: <PhotosWindow />,
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="pixel-icon">
          <rect x="5" y="1" width="4" height="2" fill="#B0BEC5" />
          <rect x="3" y="3" width="6" height="2" fill="#CFD8DC" />
          <rect x="2" y="5" width="6" height="4" fill="#ECEFF1" />
          <rect x="3" y="9" width="6" height="2" fill="#B0BEC5" />
          <rect x="5" y="11" width="4" height="2" fill="#90A4AE" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="pixel-icon">
          <rect x="6" y="0" width="2" height="2" fill="#FDD835" />
          <rect x="2" y="2" width="2" height="2" fill="#FDD835" />
          <rect x="10" y="2" width="2" height="2" fill="#FDD835" />
          <rect x="0" y="6" width="2" height="2" fill="#FDD835" />
          <rect x="12" y="6" width="2" height="2" fill="#FDD835" />
          <rect x="4" y="4" width="6" height="6" fill="#FFA000" />
          <rect x="5" y="5" width="4" height="4" fill="#FFC107" />
        </svg>
      )}
    </button>
  )
}

// Status Bar
function StatusBar() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-between px-5 pt-3 pb-2">
      <span className="text-sm font-semibold text-white">{time}</span>
      <div className="flex items-center gap-1">
        {/* Signal bars */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="white">
          <rect x="0" y="8" width="3" height="4" />
          <rect x="4" y="5" width="3" height="7" />
          <rect x="8" y="2" width="3" height="10" />
          <rect x="12" y="0" width="3" height="12" opacity="0.3" />
        </svg>
        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="white" className="ml-1">
          <path d="M8 9.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
          <path d="M4.5 7.5c2-2 5-2 7 0" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M2 5c3.5-3 8.5-3 12 0" stroke="white" strokeWidth="1.5" fill="none" />
        </svg>
        {/* Battery */}
        <div className="flex items-center ml-1">
          <div className="w-6 h-3 border border-white rounded-sm flex items-center p-0.5">
            <div className="w-4 h-2 bg-green-400 rounded-sm" />
          </div>
          <div className="w-0.5 h-1.5 bg-white rounded-r-sm" />
        </div>
      </div>
    </div>
  )
}

// Widget: Skills/Education
function SkillsWidget() {
  return (
    <div className="flex-1 rounded-2xl bg-gradient-to-br from-cyan-600/90 to-cyan-800/90 p-4 backdrop-blur-xl min-h-[120px]">
      <div className="flex items-center gap-2 mb-2">
        <PixelShieldIcon size={20} />
        <span className="text-xs font-semibold text-white/90">Security</span>
      </div>
      <div className="text-xl font-bold text-white">IT Security</div>
      <div className="text-xs text-white/70 mt-1">Major</div>
      <div className="flex gap-1.5 mt-3">
        <span className="text-[10px] px-2 py-1 bg-white/20 rounded text-white">Python</span>
        <span className="text-[10px] px-2 py-1 bg-white/20 rounded text-white">Linux</span>
      </div>
    </div>
  )
}

// Widget: Calendar/Status
function CalendarWidget() {
  const [date, setDate] = useState({ day: "", dayNum: 0, status: "" })

  useEffect(() => {
    const now = new Date()
    setDate({
      day: now.toLocaleDateString("en-US", { weekday: "long" }).toUpperCase(),
      dayNum: now.getDate(),
      status: "Open to work",
    })
  }, [])

  return (
    <div className="flex-1 rounded-2xl bg-gray-800/90 p-4 backdrop-blur-xl min-h-[120px]">
      <div className="text-xs font-semibold text-red-400">{date.day}</div>
      <div className="text-4xl font-bold text-white mt-1">{date.dayNum}</div>
      <div className="text-xs text-white/60 mt-3">{date.status}</div>
    </div>
  )
}

// App Icon Component
function AppIcon({
  icon: Icon,
  label,
  onClick
}: {
  icon: React.ComponentType<{ size?: number }>
  label: string
  onClick: () => void
}) {
  return (
    <button onClick={onClick} className="flex flex-col items-center gap-1.5 active:scale-95 transition-transform">
      <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-lg">
        <Icon size={30} />
      </div>
      <span className="text-[11px] font-medium text-white drop-shadow-md">{label}</span>
    </button>
  )
}

// Contact Dock at bottom
function ContactDock() {
  const contacts = [
    { icon: PixelLinkedInIcon, label: "LinkedIn", href: CONTACT_LINKS.linkedin },
    { icon: PixelGitHubIcon, label: "GitHub", href: CONTACT_LINKS.github },
    { icon: PixelEmailIcon, label: "Email", href: CONTACT_LINKS.email },
    { icon: PixelPhoneIcon, label: "Phone", href: CONTACT_LINKS.phone },
  ]

  return (
    <div className="mx-4 mb-2 rounded-3xl bg-white/15 backdrop-blur-xl border border-white/20 p-2">
      <div className="flex items-center justify-around">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center active:scale-95 transition-transform"
            aria-label={contact.label}
          >
            <contact.icon size={32} />
          </a>
        ))}
      </div>
    </div>
  )
}

export function MobileOS() {
  const [activeApp, setActiveApp] = useState<AppId | null>(null)

  // Home screen
  if (!activeApp) {
    return (
      <div className="h-[100dvh] w-screen flex flex-col bg-black overflow-hidden">
        {/* Status bar */}
        <StatusBar />

        {/* Widgets row */}
        <div className="flex gap-3 px-4 py-3">
          <SkillsWidget />
          <CalendarWidget />
        </div>

        {/* App grid - 4 columns like iOS */}
        <div className="flex-1 flex items-start justify-center px-4 pt-4">
          <div className="grid grid-cols-4 gap-x-5 gap-y-5 w-full max-w-sm">
            {apps.map((app) => (
              <AppIcon
                key={app.id}
                icon={app.icon}
                label={app.label}
                onClick={() => setActiveApp(app.id)}
              />
            ))}
          </div>
        </div>

        {/* Page indicator */}
        <div className="flex justify-center py-3">
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
          </div>
        </div>

        {/* Contact Dock */}
        <ContactDock />

        {/* Home indicator - with iOS safe area */}
        <div className="flex justify-center pb-[max(0.5rem,env(safe-area-inset-bottom))]">
          <div className="w-32 h-1 rounded-full bg-white/30" />
        </div>
      </div>
    )
  }

  // App open view
  const currentApp = apps.find((a) => a.id === activeApp)

  return (
    <div className="h-[100dvh] w-screen flex flex-col bg-card overflow-hidden">
      {/* App header */}
      <div className="flex items-center gap-2 px-3 py-2.5 border-b bg-card shrink-0">
        <button
          onClick={() => setActiveApp(null)}
          className="h-8 px-3 flex items-center justify-center rounded-lg bg-muted hover:bg-secondary text-sm font-medium text-foreground transition-colors"
          aria-label="Go home"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="mr-1">
            <path d="M10 13L5 8l5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Home
        </button>
        <div className="flex items-center gap-2 flex-1">
          {currentApp && (
            <>
              <currentApp.icon size={18} />
              <span className="text-sm font-semibold text-foreground">{currentApp.label}</span>
            </>
          )}
        </div>
        <ThemeToggle />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {activeApp && appContent[activeApp]}
      </div>

      {/* Bottom navigation bar */}
      <div className="flex items-center justify-around border-t bg-card py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shrink-0">
        {apps.slice(0, 5).map((app) => {
          const isActive = app.id === activeApp
          return (
            <button
              key={app.id}
              onClick={() => setActiveApp(app.id)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors ${isActive ? "text-primary" : "text-muted-foreground"
                }`}
            >
              <app.icon size={20} />
              <span className="text-[10px] font-medium">{app.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
