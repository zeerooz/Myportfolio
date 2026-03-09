// Colorful pixel-art style SVG icons for the OS desktop
// Each icon has its own distinct color like Windows/macOS

export function PixelUserIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="pixel-icon">
      {/* Head */}
      <rect x="5" y="1" width="6" height="1" fill="#4FC3F7" />
      <rect x="4" y="2" width="8" height="1" fill="#4FC3F7" />
      <rect x="4" y="3" width="8" height="1" fill="#29B6F6" />
      <rect x="4" y="4" width="8" height="1" fill="#29B6F6" />
      <rect x="5" y="5" width="6" height="1" fill="#0288D1" />
      {/* Body */}
      <rect x="3" y="7" width="10" height="1" fill="#4FC3F7" />
      <rect x="2" y="8" width="12" height="1" fill="#29B6F6" />
      <rect x="2" y="9" width="12" height="1" fill="#0288D1" />
      <rect x="2" y="10" width="12" height="1" fill="#0277BD" />
      <rect x="3" y="11" width="10" height="1" fill="#01579B" />
      {/* Eyes */}
      <rect x="5" y="3" width="2" height="1" fill="#FFFFFF" />
      <rect x="9" y="3" width="2" height="1" fill="#FFFFFF" />
      <rect x="6" y="3" width="1" height="1" fill="#0D47A1" />
      <rect x="10" y="3" width="1" height="1" fill="#0D47A1" />
    </svg>
  )
}

export function PixelFolderIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="pixel-icon">
      <rect x="1" y="3" width="6" height="1" fill="#FFB74D" />
      <rect x="1" y="4" width="14" height="1" fill="#FFA726" />
      <rect x="1" y="5" width="14" height="1" fill="#FF9800" />
      <rect x="1" y="6" width="14" height="1" fill="#FF9800" />
      <rect x="1" y="7" width="14" height="1" fill="#FB8C00" />
      <rect x="1" y="8" width="14" height="1" fill="#FB8C00" />
      <rect x="1" y="9" width="14" height="1" fill="#F57C00" />
      <rect x="1" y="10" width="14" height="1" fill="#F57C00" />
      <rect x="1" y="11" width="14" height="1" fill="#EF6C00" />
      <rect x="1" y="12" width="14" height="1" fill="#E65100" />
      {/* Tab highlight */}
      <rect x="2" y="4" width="5" height="1" fill="#FFE0B2" />
    </svg>
  )
}

export function PixelTerminalIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="pixel-icon">
      {/* Screen bg */}
      <rect x="1" y="2" width="14" height="11" fill="#263238" />
      <rect x="2" y="3" width="12" height="9" fill="#37474F" />
      {/* Prompt > */}
      <rect x="3" y="4" width="1" height="1" fill="#66BB6A" />
      <rect x="4" y="5" width="1" height="1" fill="#66BB6A" />
      <rect x="3" y="6" width="1" height="1" fill="#66BB6A" />
      {/* Cursor */}
      <rect x="6" y="5" width="3" height="1" fill="#66BB6A" />
      {/* Text lines */}
      <rect x="3" y="8" width="8" height="1" fill="#4CAF50" />
      <rect x="3" y="10" width="5" height="1" fill="#81C784" />
      {/* Base */}
      <rect x="4" y="13" width="8" height="1" fill="#546E7A" />
      <rect x="3" y="14" width="10" height="1" fill="#455A64" />
    </svg>
  )
}

export function PixelFileIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="pixel-icon">
      {/* Page */}
      <rect x="3" y="1" width="8" height="14" fill="#FFFFFF" />
      <rect x="3" y="1" width="8" height="1" fill="#E53935" />
      <rect x="3" y="2" width="8" height="1" fill="#EF5350" />
      {/* Corner fold */}
      <rect x="9" y="1" width="2" height="2" fill="#C62828" />
      <rect x="10" y="2" width="1" height="1" fill="#FFCDD2" />
      {/* Text lines */}
      <rect x="4" y="4" width="6" height="1" fill="#EF9A9A" />
      <rect x="4" y="6" width="7" height="1" fill="#BDBDBD" />
      <rect x="4" y="8" width="5" height="1" fill="#BDBDBD" />
      <rect x="4" y="10" width="7" height="1" fill="#BDBDBD" />
      <rect x="4" y="12" width="4" height="1" fill="#BDBDBD" />
      {/* Border */}
      <rect x="2" y="0" width="1" height="16" fill="#B71C1C" />
      <rect x="11" y="0" width="1" height="16" fill="#B71C1C" />
      <rect x="3" y="0" width="8" height="1" fill="#B71C1C" />
      <rect x="3" y="15" width="8" height="1" fill="#B71C1C" />
    </svg>
  )
}

export function PixelGlobeIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="pixel-icon">
      {/* Globe circle */}
      <rect x="5" y="1" width="6" height="1" fill="#7E57C2" />
      <rect x="3" y="2" width="10" height="1" fill="#7E57C2" />
      <rect x="2" y="3" width="12" height="1" fill="#9575CD" />
      <rect x="2" y="4" width="12" height="1" fill="#9575CD" />
      <rect x="1" y="5" width="14" height="1" fill="#B39DDB" />
      <rect x="1" y="6" width="14" height="1" fill="#9575CD" />
      <rect x="1" y="7" width="14" height="1" fill="#7E57C2" />
      <rect x="1" y="8" width="14" height="1" fill="#7E57C2" />
      <rect x="1" y="9" width="14" height="1" fill="#673AB7" />
      <rect x="1" y="10" width="14" height="1" fill="#673AB7" />
      <rect x="2" y="11" width="12" height="1" fill="#5E35B1" />
      <rect x="2" y="12" width="12" height="1" fill="#5E35B1" />
      <rect x="3" y="13" width="10" height="1" fill="#4527A0" />
      <rect x="5" y="14" width="6" height="1" fill="#4527A0" />
      {/* Latitude lines */}
      <rect x="3" y="5" width="10" height="1" fill="#EDE7F6" />
      <rect x="2" y="9" width="12" height="1" fill="#EDE7F6" />
      {/* Longitude line */}
      <rect x="7" y="2" width="2" height="12" fill="#D1C4E9" />
    </svg>
  )
}

export function PixelExplorerIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="pixel-icon">
      {/* Outer folder */}
      <rect x="1" y="2" width="5" height="1" fill="#26A69A" />
      <rect x="1" y="3" width="14" height="1" fill="#26A69A" />
      <rect x="1" y="4" width="14" height="9" fill="#4DB6AC" />
      {/* Drawer lines */}
      <rect x="2" y="5" width="12" height="1" fill="#80CBC4" />
      <rect x="2" y="7" width="12" height="1" fill="#80CBC4" />
      <rect x="2" y="9" width="12" height="1" fill="#80CBC4" />
      <rect x="2" y="11" width="12" height="1" fill="#80CBC4" />
      {/* Handle dots */}
      <rect x="7" y="5" width="2" height="1" fill="#00695C" />
      <rect x="7" y="7" width="2" height="1" fill="#00695C" />
      <rect x="7" y="9" width="2" height="1" fill="#00695C" />
      <rect x="7" y="11" width="2" height="1" fill="#00695C" />
      {/* Border */}
      <rect x="0" y="2" width="1" height="11" fill="#00796B" />
      <rect x="15" y="3" width="1" height="10" fill="#00796B" />
      <rect x="1" y="13" width="14" height="1" fill="#00796B" />
    </svg>
  )
}

export function PixelPhotoIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="pixel-icon">
      {/* Frame */}
      <rect x="1" y="2" width="14" height="12" fill="#FFF8E1" />
      <rect x="2" y="3" width="12" height="10" fill="#FFE082" />
      {/* Mountains */}
      <rect x="3" y="9" width="1" height="3" fill="#43A047" />
      <rect x="4" y="8" width="1" height="4" fill="#43A047" />
      <rect x="5" y="7" width="1" height="5" fill="#2E7D32" />
      <rect x="6" y="8" width="1" height="4" fill="#43A047" />
      <rect x="7" y="9" width="1" height="3" fill="#43A047" />
      <rect x="8" y="8" width="1" height="4" fill="#66BB6A" />
      <rect x="9" y="7" width="1" height="5" fill="#43A047" />
      <rect x="10" y="6" width="1" height="6" fill="#2E7D32" />
      <rect x="11" y="7" width="1" height="5" fill="#43A047" />
      <rect x="12" y="8" width="1" height="4" fill="#66BB6A" />
      {/* Sun */}
      <rect x="4" y="4" width="2" height="2" fill="#FDD835" />
      <rect x="3" y="5" width="1" height="1" fill="#FFEB3B" />
      <rect x="6" y="4" width="1" height="1" fill="#FFEB3B" />
      {/* Sky */}
      <rect x="2" y="3" width="12" height="3" fill="#42A5F5" />
      <rect x="4" y="4" width="2" height="2" fill="#FDD835" />
      {/* Border */}
      <rect x="0" y="1" width="16" height="1" fill="#F9A825" />
      <rect x="0" y="14" width="16" height="1" fill="#F9A825" />
      <rect x="0" y="2" width="1" height="12" fill="#F9A825" />
      <rect x="15" y="2" width="1" height="12" fill="#F9A825" />
    </svg>
  )
}

export function PixelShieldIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="pixel-icon">
      <rect x="4" y="1" width="8" height="1" fill="#42A5F5" />
      <rect x="3" y="2" width="10" height="1" fill="#42A5F5" />
      <rect x="2" y="3" width="12" height="1" fill="#2196F3" />
      <rect x="2" y="4" width="12" height="1" fill="#2196F3" />
      <rect x="2" y="5" width="12" height="1" fill="#1E88E5" />
      <rect x="2" y="6" width="12" height="1" fill="#1E88E5" />
      <rect x="3" y="7" width="10" height="1" fill="#1976D2" />
      <rect x="3" y="8" width="10" height="1" fill="#1976D2" />
      <rect x="3" y="9" width="10" height="1" fill="#1565C0" />
      <rect x="4" y="10" width="8" height="1" fill="#1565C0" />
      <rect x="4" y="11" width="8" height="1" fill="#0D47A1" />
      <rect x="5" y="12" width="6" height="1" fill="#0D47A1" />
      <rect x="6" y="13" width="4" height="1" fill="#0D47A1" />
      <rect x="7" y="14" width="2" height="1" fill="#0D47A1" />
      {/* Check mark */}
      <rect x="5" y="6" width="1" height="1" fill="#FFFFFF" />
      <rect x="6" y="7" width="1" height="1" fill="#FFFFFF" />
      <rect x="7" y="8" width="1" height="1" fill="#FFFFFF" />
      <rect x="8" y="7" width="1" height="1" fill="#FFFFFF" />
      <rect x="9" y="6" width="1" height="1" fill="#FFFFFF" />
      <rect x="10" y="5" width="1" height="1" fill="#FFFFFF" />
    </svg>
  )
}

export function PixelPowerIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="pixel-icon">
      <rect x="7" y="1" width="2" height="5" fill="#EF5350" />
      <rect x="4" y="3" width="2" height="1" fill="#EF5350" />
      <rect x="10" y="3" width="2" height="1" fill="#EF5350" />
      <rect x="3" y="4" width="1" height="3" fill="#EF5350" />
      <rect x="12" y="4" width="1" height="3" fill="#EF5350" />
      <rect x="2" y="7" width="1" height="3" fill="#EF5350" />
      <rect x="13" y="7" width="1" height="3" fill="#EF5350" />
      <rect x="3" y="10" width="1" height="2" fill="#EF5350" />
      <rect x="12" y="10" width="1" height="2" fill="#EF5350" />
      <rect x="4" y="12" width="2" height="1" fill="#EF5350" />
      <rect x="10" y="12" width="2" height="1" fill="#EF5350" />
      <rect x="6" y="13" width="4" height="1" fill="#EF5350" />
    </svg>
  )
}

// Contact/Social Icons for mobile dock
export function PixelLinkedInIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="pixel-icon">
      {/* Blue background */}
      <rect x="1" y="1" width="14" height="14" fill="#0077B5" />
      <rect x="2" y="2" width="12" height="12" fill="#0A66C2" />
      {/* in logo */}
      <rect x="3" y="5" width="2" height="6" fill="#FFFFFF" />
      <rect x="3" y="3" width="2" height="2" fill="#FFFFFF" />
      <rect x="6" y="5" width="2" height="6" fill="#FFFFFF" />
      <rect x="8" y="5" width="1" height="1" fill="#FFFFFF" />
      <rect x="9" y="5" width="2" height="1" fill="#FFFFFF" />
      <rect x="10" y="6" width="2" height="5" fill="#FFFFFF" />
      <rect x="8" y="7" width="2" height="4" fill="#FFFFFF" />
    </svg>
  )
}

export function PixelGitHubIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="pixel-icon">
      {/* Circle bg */}
      <rect x="5" y="1" width="6" height="1" fill="#333333" />
      <rect x="3" y="2" width="10" height="1" fill="#333333" />
      <rect x="2" y="3" width="12" height="1" fill="#24292E" />
      <rect x="1" y="4" width="14" height="1" fill="#24292E" />
      <rect x="1" y="5" width="14" height="6" fill="#24292E" />
      <rect x="2" y="11" width="12" height="1" fill="#24292E" />
      <rect x="3" y="12" width="10" height="1" fill="#333333" />
      <rect x="5" y="13" width="6" height="1" fill="#333333" />
      {/* Eyes */}
      <rect x="4" y="6" width="2" height="2" fill="#FFFFFF" />
      <rect x="10" y="6" width="2" height="2" fill="#FFFFFF" />
      {/* Tentacles */}
      <rect x="3" y="10" width="2" height="2" fill="#24292E" />
      <rect x="11" y="10" width="2" height="2" fill="#24292E" />
      <rect x="4" y="12" width="1" height="2" fill="#333333" />
      <rect x="11" y="12" width="1" height="2" fill="#333333" />
    </svg>
  )
}

export function PixelEmailIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="pixel-icon">
      {/* Envelope */}
      <rect x="1" y="3" width="14" height="10" fill="#EA4335" />
      <rect x="2" y="4" width="12" height="8" fill="#FBBC05" />
      {/* Flap */}
      <rect x="2" y="4" width="1" height="1" fill="#EA4335" />
      <rect x="13" y="4" width="1" height="1" fill="#EA4335" />
      <rect x="3" y="5" width="1" height="1" fill="#EA4335" />
      <rect x="12" y="5" width="1" height="1" fill="#EA4335" />
      <rect x="4" y="6" width="1" height="1" fill="#EA4335" />
      <rect x="11" y="6" width="1" height="1" fill="#EA4335" />
      <rect x="5" y="7" width="1" height="1" fill="#EA4335" />
      <rect x="10" y="7" width="1" height="1" fill="#EA4335" />
      <rect x="6" y="8" width="1" height="1" fill="#EA4335" />
      <rect x="9" y="8" width="1" height="1" fill="#EA4335" />
      <rect x="7" y="9" width="2" height="1" fill="#EA4335" />
      {/* Inner white */}
      <rect x="3" y="6" width="10" height="5" fill="#FFFFFF" />
    </svg>
  )
}

export function PixelPhoneIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="pixel-icon">
      {/* Green bg circle */}
      <rect x="5" y="1" width="6" height="1" fill="#34A853" />
      <rect x="3" y="2" width="10" height="1" fill="#34A853" />
      <rect x="2" y="3" width="12" height="10" fill="#4CAF50" />
      <rect x="3" y="13" width="10" height="1" fill="#34A853" />
      <rect x="5" y="14" width="6" height="1" fill="#34A853" />
      {/* Phone handset */}
      <rect x="4" y="4" width="2" height="3" fill="#FFFFFF" />
      <rect x="4" y="7" width="1" height="1" fill="#FFFFFF" />
      <rect x="5" y="8" width="1" height="1" fill="#FFFFFF" />
      <rect x="6" y="9" width="1" height="1" fill="#FFFFFF" />
      <rect x="7" y="10" width="1" height="1" fill="#FFFFFF" />
      <rect x="8" y="9" width="1" height="1" fill="#FFFFFF" />
      <rect x="9" y="8" width="1" height="1" fill="#FFFFFF" />
      <rect x="10" y="7" width="1" height="1" fill="#FFFFFF" />
      <rect x="10" y="4" width="2" height="3" fill="#FFFFFF" />
    </svg>
  )
}
