"use client"

import { useCallback, useRef, useState, useEffect, type ReactNode } from "react"

interface OsWindowProps {
  id: string
  title: string
  icon: ReactNode
  children: ReactNode
  isActive: boolean
  isMinimized: boolean
  isMaximized: boolean
  zIndex: number
  defaultPosition?: { x: number; y: number }
  defaultSize?: { width: number; height: number }
  minSize?: { width: number; height: number }
  onFocus: () => void
  onClose: () => void
  onMinimize: () => void
  onMaximize: () => void
}

export function OsWindow({
  title,
  icon,
  children,
  isActive,
  isMinimized,
  isMaximized,
  zIndex,
  defaultPosition = { x: 100, y: 60 },
  defaultSize = { width: 700, height: 480 },
  minSize = { width: 400, height: 300 },
  onFocus,
  onClose,
  onMinimize,
  onMaximize,
}: OsWindowProps) {
  const windowRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(defaultPosition)
  const [size, setSize] = useState(defaultSize)
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const dragOffset = useRef({ x: 0, y: 0 })
  const resizeStart = useRef({ x: 0, y: 0, width: 0, height: 0 })
  const prevState = useRef({ position: defaultPosition, size: defaultSize })

  useEffect(() => {
    if (isMaximized) {
      prevState.current = { position, size }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMaximized])

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (isMaximized) return
      onFocus()
      setIsDragging(true)
      dragOffset.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      }
    },
    [isMaximized, onFocus, position]
  )

  const handleResizeStart = useCallback(
    (e: React.MouseEvent) => {
      if (isMaximized) return
      e.stopPropagation()
      e.preventDefault()
      onFocus()
      setIsResizing(true)
      resizeStart.current = {
        x: e.clientX,
        y: e.clientY,
        width: size.width,
        height: size.height,
      }
    },
    [isMaximized, onFocus, size]
  )

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: Math.max(0, e.clientX - dragOffset.current.x),
          y: Math.max(0, e.clientY - dragOffset.current.y),
        })
      }
      if (isResizing) {
        const dx = e.clientX - resizeStart.current.x
        const dy = e.clientY - resizeStart.current.y
        setSize({
          width: Math.max(minSize.width, resizeStart.current.width + dx),
          height: Math.max(minSize.height, resizeStart.current.height + dy),
        })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      setIsResizing(false)
    }

    if (isDragging || isResizing) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, isResizing, minSize])

  if (isMinimized) return null

  const windowStyle = isMaximized
    ? { left: 0, top: 0, width: "100%", height: "calc(100vh - 44px)", zIndex }
    : { left: position.x, top: position.y, width: size.width, height: size.height, zIndex }

  return (
    <div
      ref={windowRef}
      className={`absolute flex flex-col overflow-hidden rounded-lg border shadow-lg ${
        isActive ? "border-primary/40 shadow-primary/10" : "border-border opacity-90"
      }`}
      style={{
        ...windowStyle,
        backgroundColor: "var(--window-bg)",
      }}
      onMouseDown={onFocus}
    >
      {/* Title bar */}
      <div
        className={`flex items-center h-9 px-3 shrink-0 select-none cursor-default border-b ${
          isActive ? "bg-primary" : "bg-muted"
        }`}
        onMouseDown={handleMouseDown}
        onDoubleClick={onMaximize}
      >
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="w-4 h-4 shrink-0 pixel-icon">{icon}</span>
          <span className={`text-xs font-semibold truncate ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`}>
            {title}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={(e) => { e.stopPropagation(); onMinimize() }}
            className="w-6 h-5 flex items-center justify-center rounded-sm bg-background/20 hover:bg-background/40 text-xs transition-colors"
            aria-label="Minimize"
          >
            <span className={isActive ? "text-primary-foreground" : "text-muted-foreground"}>&#8211;</span>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onMaximize() }}
            className="w-6 h-5 flex items-center justify-center rounded-sm bg-background/20 hover:bg-background/40 transition-colors"
            aria-label="Maximize"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke={isActive ? "white" : "currentColor"} strokeWidth="1.5">
              <rect x="1" y="1" width="8" height="8" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onClose() }}
            className="w-6 h-5 flex items-center justify-center rounded-sm bg-destructive/80 hover:bg-destructive text-destructive-foreground text-xs font-bold transition-colors"
            aria-label="Close"
          >
            X
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">{children}</div>

      {/* Resize handle */}
      {!isMaximized && (
        <div
          className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
          onMouseDown={handleResizeStart}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" className="absolute bottom-0.5 right-0.5 text-muted-foreground/40">
            <circle cx="8" cy="8" r="1" fill="currentColor" />
            <circle cx="4" cy="8" r="1" fill="currentColor" />
            <circle cx="8" cy="4" r="1" fill="currentColor" />
          </svg>
        </div>
      )}
    </div>
  )
}
