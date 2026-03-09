"use client"

import { useEffect, useState } from "react"
import { ThemeProvider } from "./theme-provider"
import { Desktop } from "./desktop"
import { MobileOS } from "./mobile-os"
import { BootScreen } from "./boot-screen"

const MOBILE_BREAKPOINT = 768

function PortfolioOSInner() {
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isBooting, setIsBooting] = useState(true)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    check()
    setMounted(true)
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  if (!mounted) {
    return (
      <div className="h-screen w-screen bg-black" />
    )
  }

  return (
    <>
      {isBooting && <BootScreen onComplete={() => setIsBooting(false)} />}
      {!isBooting && (isMobile ? <MobileOS /> : <Desktop />)}
    </>
  )
}

export function PortfolioOS() {
  return (
    <ThemeProvider>
      <PortfolioOSInner />
    </ThemeProvider>
  )
}
