"use client"

import type { ReactNode } from "react"
import { PixelShieldIcon, PixelPowerIcon } from "./pixel-icons"

interface StartMenuItem {
  id: string
  label: string
  icon: ReactNode
  onClick: () => void
}

interface StartMenuProps {
  items: StartMenuItem[]
  isOpen: boolean
  onClose: () => void
  onShutdown?: () => void
}

export function StartMenu({ items, isOpen, onClose, onShutdown }: StartMenuProps) {
  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 z-[9998]" onClick={onClose} />

      <div className="fixed bottom-12 left-1.5 w-64 rounded-lg border shadow-xl overflow-hidden z-[9999] bg-card">
        {/* Header */}
        <div className="flex items-center gap-2.5 p-3 bg-primary border-b">
          <span className="pixel-icon"><PixelShieldIcon size={24} /></span>
          <div>
            <p className="text-sm font-semibold text-primary-foreground">Portfolio OS</p>
            <p className="text-xs text-primary-foreground/70">CS & IT Security</p>
          </div>
        </div>

        {/* Items */}
        <div className="p-1.5">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                item.onClick()
                onClose()
              }}
              className="flex items-center gap-2.5 w-full px-2.5 py-2 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors text-left group"
            >
              <span className="w-6 h-6 shrink-0 flex items-center justify-center pixel-icon">{item.icon}</span>
              <span className="text-sm font-medium text-foreground group-hover:text-primary-foreground">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t p-1.5 flex items-center gap-1 bg-muted/30">
          <button className="flex items-center gap-2 px-2.5 py-1.5 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors flex-1 group">
            <span className="pixel-icon"><PixelShieldIcon size={14} /></span>
            <span className="text-xs font-medium text-muted-foreground group-hover:text-primary-foreground">Guest</span>
          </button>
          <button
            className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-destructive hover:text-destructive-foreground transition-colors group"
            onClick={() => {
              onClose()
              onShutdown?.()
            }}
            title="Shut Down"
          >
            <span className="pixel-icon"><PixelPowerIcon size={14} /></span>
          </button>
        </div>
      </div>
    </>
  )
}
