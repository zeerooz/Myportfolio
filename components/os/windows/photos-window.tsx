"use client"

import { useState } from "react"

interface Photo {
  id: string
  name: string
  src: string
  caption: string
  date: string
}

// Add your own photos to the /public/photos/ folder and list them here
const photos: Photo[] = [
  {
    id: "1",
    name: "placeholder_1.jpg",
    src: "/photos/placeholder_1.jpg",
    caption: "Add your photo here",
    date: "2024",
  },
  {
    id: "2",
    name: "placeholder_2.jpg",
    src: "/photos/placeholder_2.jpg",
    caption: "Add your photo here",
    date: "2024",
  },
  {
    id: "3",
    name: "placeholder_3.jpg",
    src: "/photos/placeholder_3.jpg",
    caption: "Add your photo here",
    date: "2024",
  },
  {
    id: "4",
    name: "placeholder_4.jpg",
    src: "/photos/placeholder_4.jpg",
    caption: "Add your photo here",
    date: "2024",
  },
]

export function PhotosWindow() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  if (selectedPhoto) {
    return (
      <div className="h-full flex flex-col bg-black">
        {/* Viewer toolbar */}
        <div className="flex items-center gap-2 px-3 py-2 border-b-2 border-border bg-card shrink-0">
          <button
            onClick={() => setSelectedPhoto(null)}
            className="h-6 px-2 pixel-button bg-muted text-[9px] font-bold text-foreground"
          >
            {'<'} BACK
          </button>
          <span className="text-[9px] font-bold text-foreground flex-1 truncate">{selectedPhoto.name}</span>
          <span className="text-[8px] font-bold text-muted-foreground">{selectedPhoto.date}</span>
        </div>

        {/* Full image */}
        <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
          {imageErrors.has(selectedPhoto.id) ? (
            <div className="pixel-border bg-card p-8 text-center">
              <PixelImagePlaceholder size={80} />
              <p className="text-[10px] font-bold text-muted-foreground mt-3">Image not found</p>
              <p className="text-[8px] font-bold text-muted-foreground/60 mt-1">
                Place your JPEG in /public/photos/
              </p>
            </div>
          ) : (
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.caption}
              className="max-h-full max-w-full object-contain pixel-border"
              style={{ imageRendering: "auto" }}
              onError={() => setImageErrors((prev) => new Set(prev).add(selectedPhoto.id))}
            />
          )}
        </div>

        {/* Caption bar */}
        <div className="flex items-center px-3 py-2 border-t-2 border-border bg-card shrink-0">
          <p className="text-[9px] font-bold text-foreground/80">{selectedPhoto.caption}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2 border-b-2 border-border bg-muted/30 shrink-0">
        <PixelImagePlaceholder size={14} />
        <span className="text-[9px] font-bold text-foreground">Photos</span>
        <span className="text-[8px] font-bold text-muted-foreground ml-auto">{photos.length} items</span>
      </div>

      {/* Info bar */}
      <div className="px-3 py-2 border-b border-border/50 bg-primary/5">
        <p className="text-[8px] font-bold text-primary">
          TIP: Add your JPEG/PNG photos to /public/photos/ folder
        </p>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto os-scrollbar p-3">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {photos.map((photo) => (
            <button
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="flex flex-col pixel-border bg-card hover:bg-muted/50 transition-colors overflow-hidden"
            >
              <div className="aspect-square w-full bg-muted/30 flex items-center justify-center overflow-hidden">
                {imageErrors.has(photo.id) ? (
                  <PixelImagePlaceholder size={40} />
                ) : (
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                    style={{ imageRendering: "auto" }}
                    onError={() => setImageErrors((prev) => new Set(prev).add(photo.id))}
                  />
                )}
              </div>
              <div className="px-2 py-1.5 border-t-2 border-border">
                <p className="text-[8px] font-bold text-foreground truncate">{photo.name}</p>
                <p className="text-[7px] font-bold text-muted-foreground">{photo.date}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function PixelImagePlaceholder({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ imageRendering: "pixelated" }}>
      <rect x="1" y="2" width="14" height="12" fill="#E0E0E0" />
      <rect x="2" y="3" width="12" height="10" fill="#BDBDBD" />
      {/* Mountain */}
      <rect x="5" y="8" width="1" height="4" fill="#757575" />
      <rect x="6" y="7" width="1" height="5" fill="#757575" />
      <rect x="7" y="6" width="1" height="6" fill="#616161" />
      <rect x="8" y="7" width="1" height="5" fill="#757575" />
      <rect x="9" y="8" width="1" height="4" fill="#757575" />
      <rect x="10" y="7" width="1" height="5" fill="#616161" />
      <rect x="11" y="6" width="1" height="6" fill="#757575" />
      {/* Sun */}
      <rect x="4" y="4" width="2" height="2" fill="#FDD835" />
    </svg>
  )
}
