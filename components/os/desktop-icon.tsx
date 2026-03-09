"use client"

import type { ReactNode } from "react"

interface DesktopIconProps {
  label: string
  icon: ReactNode
  onDoubleClick: () => void
}

export function DesktopIcon({ label, icon, onDoubleClick }: DesktopIconProps) {
  return (
    <button
      className="flex flex-col items-center gap-1.5 p-2 w-20 rounded-lg hover:bg-[var(--desktop-icon-hover)] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      onDoubleClick={onDoubleClick}
      aria-label={`Open ${label}`}
    >
      <div className="w-11 h-11 flex items-center justify-center group-hover:scale-110 transition-transform pixel-icon">
        {icon}
      </div>
      <span className="text-[11px] font-medium text-white text-center leading-tight [text-shadow:_0_1px_3px_rgb(0_0_0_/_80%),_0_0_8px_rgb(0_0_0_/_50%)]">
        {label}
      </span>
    </button>
  )
}
