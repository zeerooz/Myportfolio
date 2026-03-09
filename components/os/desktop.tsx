"use client"

import { useState, useCallback } from "react"
import { OsWindow } from "./os-window"
import { DesktopIcon } from "./desktop-icon"
import { Taskbar } from "./taskbar"
import { StartMenu } from "./start-menu"
import {
  PixelUserIcon,
  PixelFolderIcon,
  PixelTerminalIcon,
  PixelFileIcon,
  PixelGlobeIcon,
  PixelExplorerIcon,
  PixelPhotoIcon,
} from "./pixel-icons"
import { AboutWindow } from "./windows/about-window"
import { ProjectsWindow } from "./windows/projects-window"
import { TerminalWindow } from "./windows/terminal-window"
import { PdfViewerWindow } from "./windows/pdf-viewer-window"
import { BrowserWindow } from "./windows/browser-window"
import { FileExplorerWindow } from "./windows/file-explorer-window"
import { PhotosWindow } from "./windows/photos-window"
import { ShutdownScreen } from "./shutdown-screen"

interface WindowState {
  id: string
  title: string
  icon: React.ReactNode
  isMinimized: boolean
  isMaximized: boolean
  component: React.ReactNode
  defaultPosition: { x: number; y: number }
  defaultSize: { width: number; height: number }
}

const WINDOW_CONFIGS: Record<string, Omit<WindowState, "isMinimized" | "isMaximized">> = {
  about: {
    id: "about",
    title: "About Me",
    icon: <PixelUserIcon size={16} />,
    component: <AboutWindow />,
    defaultPosition: { x: 120, y: 50 },
    defaultSize: { width: 550, height: 520 },
  },
  projects: {
    id: "projects",
    title: "Projects",
    icon: <PixelFolderIcon size={16} />,
    component: <ProjectsWindow />,
    defaultPosition: { x: 180, y: 70 },
    defaultSize: { width: 650, height: 480 },
  },
  terminal: {
    id: "terminal",
    title: "Terminal",
    icon: <PixelTerminalIcon size={16} />,
    component: <TerminalWindow />,
    defaultPosition: { x: 240, y: 90 },
    defaultSize: { width: 620, height: 400 },
  },
  pdf: {
    id: "pdf",
    title: "Resume_CV.pdf",
    icon: <PixelFileIcon size={16} />,
    component: <PdfViewerWindow />,
    defaultPosition: { x: 160, y: 40 },
    defaultSize: { width: 680, height: 560 },
  },
  browser: {
    id: "browser",
    title: "SecureBrowse",
    icon: <PixelGlobeIcon size={16} />,
    component: <BrowserWindow />,
    defaultPosition: { x: 200, y: 60 },
    defaultSize: { width: 720, height: 520 },
  },
  files: {
    id: "files",
    title: "File Explorer",
    icon: <PixelExplorerIcon size={16} />,
    component: <FileExplorerWindow />,
    defaultPosition: { x: 140, y: 80 },
    defaultSize: { width: 700, height: 460 },
  },
  photos: {
    id: "photos",
    title: "Photos",
    icon: <PixelPhotoIcon size={16} />,
    component: <PhotosWindow />,
    defaultPosition: { x: 160, y: 55 },
    defaultSize: { width: 640, height: 500 },
  },
}

export function Desktop() {
  const [openWindows, setOpenWindows] = useState<WindowState[]>([])
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null)
  const [windowOrder, setWindowOrder] = useState<string[]>([])
  const [startMenuOpen, setStartMenuOpen] = useState(false)
  const [isShuttingDown, setIsShuttingDown] = useState(false)

  const handleShutdown = useCallback(() => {
    setStartMenuOpen(false)
    setIsShuttingDown(true)
  }, [])

  const handleShutdownComplete = useCallback(() => {
    setIsShuttingDown(false)
    setOpenWindows([])
    setActiveWindowId(null)
    setWindowOrder([])
  }, [])

  const openWindow = useCallback(
    (id: string) => {
      const existing = openWindows.find((w) => w.id === id)
      if (existing) {
        setOpenWindows((prev) =>
          prev.map((w) => (w.id === id ? { ...w, isMinimized: false } : w))
        )
        setActiveWindowId(id)
        setWindowOrder((prev) => [...prev.filter((wId) => wId !== id), id])
        return
      }

      const config = WINDOW_CONFIGS[id]
      if (!config) return

      const newWindow: WindowState = {
        ...config,
        isMinimized: false,
        isMaximized: false,
      }

      setOpenWindows((prev) => [...prev, newWindow])
      setActiveWindowId(id)
      setWindowOrder((prev) => [...prev, id])
    },
    [openWindows]
  )

  const closeWindow = useCallback((id: string) => {
    setOpenWindows((prev) => prev.filter((w) => w.id !== id))
    setWindowOrder((prev) => {
      const newOrder = prev.filter((wId) => wId !== id)
      return newOrder
    })
    setActiveWindowId((prev) => {
      if (prev === id) {
        const remaining = openWindows.filter((w) => w.id !== id)
        return remaining.length > 0 ? remaining[remaining.length - 1].id : null
      }
      return prev
    })
  }, [openWindows])

  const minimizeWindow = useCallback((id: string) => {
    setOpenWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w))
    )
    setActiveWindowId((prev) => {
      if (prev === id) {
        const visible = openWindows.filter((w) => w.id !== id && !w.isMinimized)
        return visible.length > 0 ? visible[visible.length - 1].id : null
      }
      return prev
    })
  }, [openWindows])

  const maximizeWindow = useCallback((id: string) => {
    setOpenWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMaximized: !w.isMaximized } : w))
    )
  }, [])

  const focusWindow = useCallback((id: string) => {
    setActiveWindowId(id)
    setWindowOrder((prev) => [...prev.filter((wId) => wId !== id), id])
  }, [])

  const handleTaskbarClick = useCallback(
    (id: string) => {
      const win = openWindows.find((w) => w.id === id)
      if (!win) return

      if (win.isMinimized) {
        setOpenWindows((prev) =>
          prev.map((w) => (w.id === id ? { ...w, isMinimized: false } : w))
        )
        setActiveWindowId(id)
        setWindowOrder((prev) => [...prev.filter((wId) => wId !== id), id])
      } else if (activeWindowId === id) {
        minimizeWindow(id)
      } else {
        focusWindow(id)
      }
    },
    [openWindows, activeWindowId, minimizeWindow, focusWindow]
  )

  const desktopIcons = [
    { label: "About Me", icon: <PixelUserIcon size={32} />, action: () => openWindow("about") },
    { label: "Projects", icon: <PixelFolderIcon size={32} />, action: () => openWindow("projects") },
    { label: "Terminal", icon: <PixelTerminalIcon size={32} />, action: () => openWindow("terminal") },
    { label: "My CV", icon: <PixelFileIcon size={32} />, action: () => openWindow("pdf") },
    { label: "Browser", icon: <PixelGlobeIcon size={32} />, action: () => openWindow("browser") },
    { label: "Files", icon: <PixelExplorerIcon size={32} />, action: () => openWindow("files") },
    { label: "Photos", icon: <PixelPhotoIcon size={32} />, action: () => openWindow("photos") },
  ]

  const startMenuItems = [
    { id: "about", label: "About Me", icon: <PixelUserIcon size={20} />, onClick: () => openWindow("about") },
    { id: "projects", label: "Projects", icon: <PixelFolderIcon size={20} />, onClick: () => openWindow("projects") },
    { id: "terminal", label: "Terminal", icon: <PixelTerminalIcon size={20} />, onClick: () => openWindow("terminal") },
    { id: "pdf", label: "View Resume", icon: <PixelFileIcon size={20} />, onClick: () => openWindow("pdf") },
    { id: "browser", label: "SecureBrowse", icon: <PixelGlobeIcon size={20} />, onClick: () => openWindow("browser") },
    { id: "files", label: "File Explorer", icon: <PixelExplorerIcon size={20} />, onClick: () => openWindow("files") },
    { id: "photos", label: "Photos", icon: <PixelPhotoIcon size={20} />, onClick: () => openWindow("photos") },
  ]

  return (
    <div
      className="h-screen w-screen overflow-hidden relative select-none pb-11"
      style={{ backgroundImage: "url('/9.gif')", backgroundSize: "cover" }}
    >
      {/* Desktop icons */}
      <div className="absolute top-4 left-4 flex flex-col gap-1 z-10">
        {desktopIcons.map((item) => (
          <DesktopIcon
            key={item.label}
            label={item.label}
            icon={item.icon}
            onDoubleClick={item.action}
          />
        ))}
      </div>

      {/* Windows */}
      {openWindows.map((win) => (
        <OsWindow
          key={win.id}
          id={win.id}
          title={win.title}
          icon={win.icon}
          isActive={activeWindowId === win.id}
          isMinimized={win.isMinimized}
          isMaximized={win.isMaximized}
          zIndex={100 + windowOrder.indexOf(win.id)}
          defaultPosition={win.defaultPosition}
          defaultSize={win.defaultSize}
          onFocus={() => focusWindow(win.id)}
          onClose={() => closeWindow(win.id)}
          onMinimize={() => minimizeWindow(win.id)}
          onMaximize={() => maximizeWindow(win.id)}
        >
          {win.component}
        </OsWindow>
      ))}

      {/* Shutdown Screen */}
      {isShuttingDown && (
        <ShutdownScreen onComplete={handleShutdownComplete} />
      )}

      {/* Start Menu */}
      <StartMenu
        items={startMenuItems}
        isOpen={startMenuOpen}
        onClose={() => setStartMenuOpen(false)}
        onShutdown={handleShutdown}
      />

      {/* Taskbar */}
      <Taskbar
        items={openWindows.map((w) => ({
          id: w.id,
          title: w.title,
          icon: w.icon,
          isActive: activeWindowId === w.id,
          isMinimized: w.isMinimized,
        }))}
        onItemClick={handleTaskbarClick}
        onOpenWindow={openWindow}
        onStartClick={() => setStartMenuOpen(!startMenuOpen)}
        startMenuOpen={startMenuOpen}
      />
    </div>
  )
}
