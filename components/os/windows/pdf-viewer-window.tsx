"use client"

import { Download, FileText, ExternalLink } from "lucide-react"

export function PdfViewerWindow() {
  // Path to your PDF file in the public folder
  const pdfPath = "/Ahmed_Alaa_FlowCV_Sec.pdf"

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = pdfPath
    link.download = "Ahmed_Alaa_CV.pdf"
    link.click()
  }

  const handleOpenInNewTab = () => {
    window.open(pdfPath, "_blank")
  }

  return (
    <div className="h-full flex flex-col">
      {/* PDF Toolbar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border/30 bg-muted/20 shrink-0">
        <FileText className="w-4 h-4 text-primary" />
        <span className="text-xs text-foreground/70">Ahmed_Alaa_CV.pdf</span>
        <div className="flex-1" />
        <button
          onClick={handleOpenInNewTab}
          className="w-7 h-7 flex items-center justify-center rounded-sm hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Open in new tab"
          title="Open in new tab"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={handleDownload}
          className="w-7 h-7 flex items-center justify-center rounded-sm hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Download CV"
          title="Download CV"
        >
          <Download className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* PDF Content */}
      <div className="flex-1 overflow-hidden bg-muted/10">
        <iframe
          src={pdfPath}
          className="w-full h-full border-0"
          title="CV PDF Viewer"
        />
      </div>
    </div>
  )
}
