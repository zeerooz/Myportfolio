"use client"

import { useState, useEffect } from "react"
import { PixelShieldIcon } from "./pixel-icons"

interface BootScreenProps {
  onComplete: () => void
}

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

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-48 h-2 bg-white/10 overflow-hidden" style={{ imageRendering: "pixelated" }}>
      <div
        className="h-full transition-all duration-300 ease-linear"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #0ea5e9, #38bdf8)",
        }}
      />
    </div>
  )
}

export function BootScreen({ onComplete }: BootScreenProps) {
  const [phase, setPhase] = useState<"bios" | "loading" | "welcome" | "done">("bios")
  const [biosLine, setBiosLine] = useState(0)
  const [progress, setProgress] = useState(0)

  const biosLines = [
    "BIOS v2.4.1 - Portfolio OS",
    "CPU: Creative Core i7 @ 4.2GHz",
    "RAM: 16GB DDR5 Imagination",
    "Checking disk integrity......... OK",
    "Loading security modules........ OK",
    "Mounting /home/portfolio........ OK",
    "Starting display server........ OK",
  ]

  useEffect(() => {
    // Phase 1: BIOS text (0-2.5s)
    let line = 0
    const biosInterval = setInterval(() => {
      line++
      setBiosLine(line)
      if (line >= biosLines.length) {
        clearInterval(biosInterval)
        setTimeout(() => setPhase("loading"), 300)
      }
    }, 300)

    return () => clearInterval(biosInterval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (phase !== "loading") return

    // Phase 2: Loading bar (2.5s - 4.5s)
    let p = 0
    const loadInterval = setInterval(() => {
      p += 5
      setProgress(p)
      if (p >= 100) {
        clearInterval(loadInterval)
        setTimeout(() => setPhase("welcome"), 200)
      }
    }, 80)

    return () => clearInterval(loadInterval)
  }, [phase])

  useEffect(() => {
    if (phase !== "welcome") return

    // Phase 3: Welcome splash (4.5s - 5s)
    const timer = setTimeout(() => {
      setPhase("done")
      onComplete()
    }, 800)

    return () => clearTimeout(timer)
  }, [phase, onComplete])

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
      style={{ cursor: "none" }}
    >
      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04]"
        style={{ mixBlendMode: "overlay" }}
      >
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="h-px w-full bg-white"
            style={{ marginBottom: "2px" }}
          />
        ))}
      </div>

      {phase === "bios" && (
        <div
          className="absolute inset-0 p-6 font-mono text-xs text-green-400 overflow-hidden"
          style={{ animation: "pixelFadeIn 0.3s ease-out" }}
        >
          <div className="flex flex-col gap-1">
            {biosLines.slice(0, biosLine).map((line, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-green-600">{">"}</span>
                <span style={{ animation: "pixelFadeIn 0.2s ease-out" }}>
                  {line}
                </span>
              </div>
            ))}
            {biosLine < biosLines.length && (
              <span className="terminal-cursor inline-block w-2 h-3 bg-green-400 ml-4" />
            )}
          </div>
        </div>
      )}

      {phase === "loading" && (
        <div
          className="flex flex-col items-center gap-6"
          style={{ animation: "pixelFadeIn 0.4s ease-out" }}
        >
          <PixelShieldIcon size={56} />

          <div className="flex flex-col items-center gap-1">
            <p className="text-sm font-medium text-white/80 tracking-wide">
              Portfolio OS
            </p>
            <p className="text-[10px] text-white/30">v1.0</p>
          </div>

          <ProgressBar progress={progress} />

          <p className="text-[10px] text-white/40">
            Loading desktop environment...
          </p>
        </div>
      )}

      {phase === "welcome" && (
        <div
          className="flex flex-col items-center gap-4"
          style={{ animation: "pixelFadeIn 0.3s ease-out" }}
        >
          <PixelShieldIcon size={64} />

          <div className="flex flex-col items-center gap-1">
            <p className="text-lg font-semibold text-white/90 tracking-wide">
              Welcome
            </p>
          </div>

          <PixelSpinner />
        </div>
      )}
    </div>
  )
}
