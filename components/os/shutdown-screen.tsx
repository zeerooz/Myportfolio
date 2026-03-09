"use client"

import { useState, useEffect } from "react"

interface ShutdownScreenProps {
  onComplete: () => void
}

// Pixelated loading spinner made with divs
function PixelSpinner() {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % 8)
    }, 150)
    return () => clearInterval(interval)
  }, [])

  const positions = [
    [0, 1], [1, 2], [2, 2], [2, 1], [2, 0], [1, 0], [0, 0], [0, 1],
  ]

  return (
    <div className="grid grid-cols-3 gap-1" style={{ width: 28, height: 28 }}>
      {Array.from({ length: 9 }).map((_, i) => {
        const row = Math.floor(i / 3)
        const col = i % 3
        const isActive = positions.some(
          (pos, idx) =>
            pos[0] === row &&
            pos[1] === col &&
            (idx === frame || idx === (frame + 1) % 8 || idx === (frame + 2) % 8)
        )
        return (
          <div
            key={i}
            className="transition-colors duration-100"
            style={{
              width: 8,
              height: 8,
              backgroundColor: isActive ? "#0ea5e9" : "rgba(255,255,255,0.1)",
            }}
          />
        )
      })}
    </div>
  )
}

export function ShutdownScreen({ onComplete }: ShutdownScreenProps) {
  const [phase, setPhase] = useState<"shutting-down" | "black" | "booting" | "done">("shutting-down")
  const [dots, setDots] = useState("")
  const [bootLine, setBootLine] = useState(0)

  const bootLines = [
    "BIOS v2.4.1 - Portfolio OS",
    "CPU: Creative Core i7 @ 4.2GHz",
    "RAM: 16GB DDR5 Imagination",
    "Checking disk integrity... OK",
    "Loading security modules... OK",
    "Initializing desktop...",
    "Welcome back!",
  ]

  // Animate dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  // Phase transitions
  useEffect(() => {
    const timers: NodeJS.Timeout[] = []

    // Phase 1: "Shutting down" for 3 seconds
    timers.push(
      setTimeout(() => setPhase("black"), 3000)
    )

    // Phase 2: Black screen for 1.5 seconds
    timers.push(
      setTimeout(() => setPhase("booting"), 4500)
    )

    // Phase 3: Boot sequence - type lines
    timers.push(
      setTimeout(() => {
        let line = 0
        const bootInterval = setInterval(() => {
          line++
          setBootLine(line)
          if (line >= bootLines.length) {
            clearInterval(bootInterval)
            setTimeout(() => {
              setPhase("done")
              onComplete()
            }, 1000)
          }
        }, 400)
        timers.push(bootInterval as unknown as NodeJS.Timeout)
      }, 4500)
    )

    return () => timers.forEach(clearTimeout)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
      style={{ cursor: "none" }}
    >
      {/* Scanline effect */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-10"
        style={{ mixBlendMode: "overlay" }}
      >
        <div
          className="absolute left-0 right-0 h-[2px] bg-white"
          style={{ animation: "scanline 3s linear infinite" }}
        />
      </div>

      {phase === "shutting-down" && (
        <div className="flex flex-col items-center gap-6" style={{ animation: "pixelFadeIn 0.5s ease-out" }}>
          {/* Pixel power icon */}
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ imageRendering: "pixelated" }}>
            <rect x="22" y="4" width="4" height="16" fill="#0ea5e9" />
            <rect x="14" y="8" width="4" height="4" fill="#0ea5e9" />
            <rect x="10" y="12" width="4" height="4" fill="#0ea5e9" />
            <rect x="8" y="16" width="4" height="8" fill="#0ea5e9" />
            <rect x="8" y="24" width="4" height="4" fill="#0ea5e9" />
            <rect x="10" y="28" width="4" height="4" fill="#0ea5e9" />
            <rect x="14" y="32" width="4" height="4" fill="#0ea5e9" />
            <rect x="18" y="36" width="4" height="4" fill="#0ea5e9" />
            <rect x="22" y="38" width="4" height="4" fill="#0ea5e9" />
            <rect x="26" y="36" width="4" height="4" fill="#0ea5e9" />
            <rect x="30" y="32" width="4" height="4" fill="#0ea5e9" />
            <rect x="34" y="28" width="4" height="4" fill="#0ea5e9" />
            <rect x="36" y="24" width="4" height="4" fill="#0ea5e9" />
            <rect x="36" y="16" width="4" height="8" fill="#0ea5e9" />
            <rect x="34" y="12" width="4" height="4" fill="#0ea5e9" />
            <rect x="30" y="8" width="4" height="4" fill="#0ea5e9" />
          </svg>

          <PixelSpinner />

          <p className="text-sm font-medium text-white/70 tracking-wider">
            {'Shutting down'}{dots}
          </p>

          <p className="text-xs text-white/30">
            Portfolio OS v1.0
          </p>
        </div>
      )}

      {phase === "black" && (
        <div className="w-full h-full bg-black" />
      )}

      {phase === "booting" && (
        <div
          className="absolute inset-0 p-6 font-mono text-xs text-green-400 overflow-hidden"
          style={{ animation: "pixelFadeIn 0.3s ease-out" }}
        >
          <div className="flex flex-col gap-1">
            {bootLines.slice(0, bootLine).map((line, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-green-600">{">"}</span>
                <span
                  style={{
                    animation: "pixelFadeIn 0.2s ease-out",
                    color: i === bootLines.length - 1 ? "#0ea5e9" : undefined,
                  }}
                >
                  {line}
                </span>
              </div>
            ))}
            {bootLine < bootLines.length && (
              <span className="terminal-cursor inline-block w-2 h-3 bg-green-400 ml-4" />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
