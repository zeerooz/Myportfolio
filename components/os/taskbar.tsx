"use client"

import { useState, useEffect, type ReactNode } from "react"
import { useTheme } from "./theme-provider"
import {
  PixelShieldIcon,
  PixelUserIcon,
  PixelFolderIcon,
  PixelTerminalIcon,
  PixelFileIcon,
  PixelGlobeIcon,
  PixelExplorerIcon,
  PixelPhotoIcon,
} from "./pixel-icons"

interface TaskbarItem {
  id: string
  title: string
  icon: ReactNode
  isActive: boolean
  isMinimized: boolean
}

interface TaskbarProps {
  items: TaskbarItem[]
  onItemClick: (id: string) => void
  onStartClick: () => void
  onOpenWindow: (id: string) => void
  startMenuOpen: boolean
}

function Clock() {
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
      setDate(now.toLocaleDateString([], { month: "short", day: "numeric" }))
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-end text-[10px] leading-tight text-muted-foreground">
      <span className="font-medium">{time}</span>
      <span className="text-[9px]">{date}</span>
    </div>
  )
}

function PixelPythonSkill() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="pixel-icon">
      <rect x="3" y="0" width="4" height="2" fill="#3776AB" />
      <rect x="1" y="2" width="6" height="2" fill="#3776AB" />
      <rect x="5" y="4" width="6" height="2" fill="#FFD43B" />
      <rect x="7" y="6" width="4" height="2" fill="#FFD43B" />
      <rect x="4" y="3" width="2" height="2" fill="#FFD43B" />
      <rect x="8" y="5" width="2" height="2" fill="#3776AB" />
    </svg>
  )
}

function PixelLinuxSkill() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="pixel-icon">
      <rect x="5" y="0" width="4" height="2" fill="#333" />
      <rect x="4" y="2" width="6" height="2" fill="#FDD835" />
      <rect x="5" y="3" width="1" height="1" fill="#333" />
      <rect x="8" y="3" width="1" height="1" fill="#333" />
      <rect x="3" y="4" width="8" height="2" fill="#FDD835" />
      <rect x="6" y="5" width="2" height="1" fill="#E65100" />
      <rect x="2" y="6" width="10" height="4" fill="#FDD835" />
      <rect x="1" y="10" width="4" height="2" fill="#333" />
      <rect x="9" y="10" width="4" height="2" fill="#333" />
    </svg>
  )
}

function PixelLockSkill() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="pixel-icon">
      <rect x="4" y="1" width="6" height="2" fill="#43A047" />
      <rect x="3" y="3" width="2" height="3" fill="#43A047" />
      <rect x="9" y="3" width="2" height="3" fill="#43A047" />
      <rect x="2" y="6" width="10" height="6" fill="#66BB6A" />
      <rect x="6" y="8" width="2" height="2" fill="#1B5E20" />
      <rect x="6" y="10" width="2" height="1" fill="#2E7D32" />
    </svg>
  )
}

function ThemeToggleIcon({ theme }: { theme: string }) {
  if (theme === "light") {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="pixel-icon">
        <rect x="5" y="1" width="4" height="2" fill="#B0BEC5" />
        <rect x="3" y="3" width="6" height="2" fill="#CFD8DC" />
        <rect x="2" y="5" width="6" height="4" fill="#ECEFF1" />
        <rect x="3" y="9" width="6" height="2" fill="#B0BEC5" />
        <rect x="5" y="11" width="4" height="2" fill="#90A4AE" />
      </svg>
    )
  }
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="pixel-icon">
      <rect x="6" y="0" width="2" height="2" fill="#FDD835" />
      <rect x="2" y="2" width="2" height="2" fill="#FDD835" />
      <rect x="10" y="2" width="2" height="2" fill="#FDD835" />
      <rect x="0" y="6" width="2" height="2" fill="#FDD835" />
      <rect x="12" y="6" width="2" height="2" fill="#FDD835" />
      <rect x="4" y="4" width="6" height="6" fill="#FFA000" />
      <rect x="5" y="5" width="4" height="4" fill="#FFC107" />
    </svg>
  )
}

// Pinned app definitions for the taskbar dock
const PINNED_APPS = [
  { id: "about", icon: <PixelUserIcon size={20} />, label: "About Me" },
  { id: "projects", icon: <PixelFolderIcon size={20} />, label: "Projects" },
  { id: "terminal", icon: <PixelTerminalIcon size={20} />, label: "Terminal" },
  { id: "pdf", icon: <PixelFileIcon size={20} />, label: "My CV" },
  { id: "browser", icon: <PixelGlobeIcon size={20} />, label: "Browser" },
  { id: "files", icon: <PixelExplorerIcon size={20} />, label: "Files" },
  { id: "photos", icon: <PixelPhotoIcon size={20} />, label: "Photos" },
]

export function Taskbar({ items, onItemClick, onStartClick, onOpenWindow, startMenuOpen }: TaskbarProps) {
  const { theme, toggleTheme } = useTheme()

  // Track which windows are open by id
  const openIds = new Set(items.map((i) => i.id))

  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-12 flex items-center px-1.5 gap-1 border-t z-[9999] backdrop-blur-md"
      style={{ backgroundColor: "var(--taskbar-bg)" }}
    >
      {/* Start button */}
      <button
        onClick={onStartClick}
        className={`flex items-center gap-1.5 h-9 px-2.5 rounded-md transition-colors shrink-0 ${
          startMenuOpen
            ? "bg-primary/20 border border-primary/30"
            : "bg-transparent hover:bg-muted border border-transparent"
        }`}
        aria-label="Start menu"
      >
        <span className="pixel-icon"><PixelShieldIcon size={18} /></span>
        <span className="text-xs font-semibold text-foreground hidden sm:inline">Start</span>
      </button>

      {/* Separator */}
      <div className="w-px h-6 bg-border shrink-0" />

      {/* Pinned app icons (dock) */}
      <div className="flex items-center gap-0.5 flex-1 justify-center">
        {PINNED_APPS.map((app) => {
          const openWin = items.find((w) => w.id === app.id)
          const isOpen = openIds.has(app.id)
          const isActive = openWin?.isActive && !openWin?.isMinimized

          return (
            <button
              key={app.id}
              onClick={() => {
                if (isOpen) {
                  onItemClick(app.id)
                } else {
                  onOpenWindow(app.id)
                }
              }}
              className={`relative flex items-center justify-center w-9 h-9 rounded-md transition-all ${
                isActive
                  ? "bg-primary/15 border border-primary/25"
                  : isOpen
                  ? "bg-muted/60 border border-transparent hover:bg-muted"
                  : "bg-transparent border border-transparent hover:bg-muted/80"
              }`}
              title={app.label}
              aria-label={app.label}
            >
              <span className="pixel-icon">{app.icon}</span>
              {/* Open indicator dot */}
              {isOpen && (
                <span
                  className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 rounded-full ${
                    isActive ? "w-3 h-[3px] bg-primary" : "w-1.5 h-[3px] bg-muted-foreground"
                  }`}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Separator */}
      <div className="w-px h-6 bg-border shrink-0" />

      {/* System tray */}
      <div className="flex items-center gap-1 px-2 bg-muted/40 rounded-md py-1 shrink-0">
        {/* Skills */}
        <div className="hidden md:flex items-center gap-1">
          <div className="w-5 h-5 flex items-center justify-center hover:bg-muted rounded transition-colors" title="Python">
            <PixelPythonSkill />
          </div>
          <div className="w-5 h-5 flex items-center justify-center hover:bg-muted rounded transition-colors" title="Linux">
            <PixelLinuxSkill />
          </div>
          <div className="w-5 h-5 flex items-center justify-center hover:bg-muted rounded transition-colors" title="Security">
            <PixelLockSkill />
          </div>
          <div className="w-px h-4 bg-border mx-0.5" />
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="w-6 h-6 flex items-center justify-center hover:bg-muted rounded transition-colors"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          <ThemeToggleIcon theme={theme} />
        </button>

        <div className="w-px h-4 bg-border mx-0.5" />
        <Clock />
      </div>
    </div>
  )
}
