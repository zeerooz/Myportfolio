# Portfolio OS - Customization Guide

This guide explains how to customize your portfolio, including adding photos, changing icons, updating the CV, and modifying the wallpaper/background.

---

## Table of Contents
1. [Adding Photos](#adding-photos)
2. [Changing the CV PDF File](#changing-the-cv-pdf-file)
3. [Adding/Changing Icons](#addingchanging-icons)
4. [Changing the Wallpaper/Background](#changing-the-wallpaperbackground)
5. [Updating Contact Information](#updating-contact-information)
6. [Modifying Projects](#modifying-projects)
7. [Updating About Me](#updating-about-me)
8. [Terminal Commands](#terminal-commands)

---

## Adding Photos

### Step 1: Add Image Files
Place your image files in the `public/` folder:
```
public/
  images/
    profile.jpg
    project1.jpg
    graduation.jpg
```

### Step 2: Update Photos Window
Edit `components/os/windows/photos-window.tsx`:

```tsx
const photos = [
  {
    id: "1",
    name: "Profile Photo",
    src: "/images/profile.jpg",        // Path to your image
    description: "My profile picture",
  },
  {
    id: "2", 
    name: "Graduation",
    src: "/images/graduation.jpg",
    description: "GIU Graduation 2025",
  },
  // Add more photos here
]
```

---

## Changing the CV PDF File

### Option 1: Embed Real PDF (Recommended)
1. Place your PDF in `public/`:
   ```
   public/
     Ahmed_Alaa_CV.pdf
   ```

2. Update `components/os/windows/pdf-viewer-window.tsx`:
   ```tsx
   // Replace the simulated CV with an iframe
   <iframe
     src="/Ahmed_Alaa_CV.pdf"
     className="w-full h-full"
     title="CV"
   />
   ```

3. Update the download button:
   ```tsx
   <a
     href="/Ahmed_Alaa_CV.pdf"
     download="Ahmed_Alaa_CV.pdf"
     className="w-7 h-7 flex items-center justify-center..."
   >
     <Download className="w-3.5 h-3.5" />
   </a>
   ```

### Option 2: Keep Simulated CV
Edit the content directly in `pdf-viewer-window.tsx` - update the text in the `CvSection` components.

---

## Adding/Changing Icons

### Using Lucide Icons
The project uses [Lucide React](https://lucide.dev/icons/) icons. To add new icons:

1. Import the icon:
   ```tsx
   import { Shield, Code, Server, Database } from "lucide-react"
   ```

2. Use it in your component:
   ```tsx
   <Shield className="w-6 h-6 text-primary" />
   ```

### Using Pixel Icons (for mobile view)
Edit `components/os/pixel-icons.tsx` to add custom pixel art icons:

```tsx
export function PixelCustomIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      {/* Add your pixel art rectangles here */}
      <rect x="4" y="4" width="2" height="2" fill="#4CAF50" />
      {/* ... more rectangles */}
    </svg>
  )
}
```

### Changing Project Icons
Edit `components/os/windows/projects-window.tsx`:
```tsx
const projects = [
  {
    id: "my-project",
    title: "My Project",
    icon: <Shield className="w-6 h-6" />,  // Change this icon
    // ...
  },
]
```

---

## Changing the Wallpaper/Background

### Desktop Background
Edit `components/os/desktop.tsx` - find the main container:

```tsx
// Current: Gradient background
<div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

// Option 1: Solid color
<div className="min-h-screen w-full bg-slate-900">

// Option 2: Image background
<div 
  className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/wallpaper.jpg')" }}
>

// Option 3: Gradient with different colors
<div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
```

### Mobile Background
Edit `components/os/mobile-os.tsx`:

```tsx
// Find the home screen container
<div className="h-screen w-screen flex flex-col bg-black">

// Change to image:
<div 
  className="h-screen w-screen flex flex-col bg-cover bg-center"
  style={{ backgroundImage: "url('/images/mobile-wallpaper.jpg')" }}
>
```

### Adding Wallpaper Image
1. Place wallpaper in `public/images/wallpaper.jpg`
2. Recommended sizes:
   - Desktop: 1920x1080 or larger
   - Mobile: 1170x2532 (iPhone 12/13/14 resolution)

---

## Updating Contact Information

### Desktop Version
Edit `components/os/desktop.tsx` - find `CONTACT_LINKS`:

```tsx
const CONTACT_LINKS = {
  linkedin: "https://linkedin.com/in/your-username",
  github: "https://github.com/your-username",
  email: "mailto:your.email@example.com",
  phone: "tel:+1234567890",
}
```

### Mobile Version
Edit `components/os/mobile-os.tsx` - find `CONTACT_LINKS`:

```tsx
const CONTACT_LINKS = {
  linkedin: "https://linkedin.com/in/ahmed-elkhawaga",
  github: "https://github.com/zeerooz",
  email: "mailto:ahmed.alaa.alkhawaga@gmail.com",
  phone: "tel:+201091916350",
}
```

---

## Modifying Projects

Edit `components/os/windows/projects-window.tsx`:

```tsx
const projects: Project[] = [
  {
    id: "unique-id",
    title: "Project Title",
    description: "Short description",
    tech: ["React", "Node.js", "MongoDB"],
    icon: <Code className="w-6 h-6" />,
    details: "Full description of the project...",
    link: "https://github.com/username/repo",  // Optional
  },
  // Add more projects
]
```

---

## Updating About Me

Edit `components/os/windows/about-window.tsx`:

### Profile Header
```tsx
<h1 className="text-xl font-bold text-foreground">Your Name</h1>
<p className="text-sm text-primary font-medium">Your Title</p>
<span>Your Location</span>
```

### Bio
```tsx
<p className="text-sm text-foreground/80 leading-relaxed">
  Your bio text goes here...
</p>
```

### Skills
```tsx
<SkillCategory 
  label="Category Name" 
  skills={["Skill 1", "Skill 2", "Skill 3"]} 
/>
```

---

## Terminal Commands

Edit `components/os/windows/terminal-window.tsx`:

### Update Command Output
```tsx
const COMMANDS: Record<string, string | string[]> = {
  about: "Your about text...",
  skills: [
    "Languages: Python, Java, JavaScript",
    "Tools: Git, Docker, AWS",
  ].join("\n"),
  contact: "Email: your@email.com\nGitHub: github.com/username",
  // Add custom commands
  mycommand: "Custom output for my command",
}
```

### Add Custom Commands
Add new entries to the `COMMANDS` object and update the `help` command to list them.

---

## File Structure Reference

```
components/os/
├── desktop.tsx              # Desktop layout & contact links
├── mobile-os.tsx            # Mobile layout & widgets
├── pixel-icons.tsx          # Pixel art icons
├── theme-provider.tsx       # Light/dark theme
└── windows/
    ├── about-window.tsx     # About me content
    ├── browser-window.tsx   # Browser simulation
    ├── file-explorer-window.tsx  # File system
    ├── pdf-viewer-window.tsx     # CV viewer
    ├── photos-window.tsx    # Photo gallery
    ├── projects-window.tsx  # Projects list
    └── terminal-window.tsx  # Terminal emulator

public/
├── images/                  # Your images (create this folder)
│   ├── profile.jpg
│   ├── wallpaper.jpg
│   └── ...
└── Ahmed_Alaa_CV.pdf       # Your CV PDF (optional)
```

---

## Quick Tips

1. **Test on both desktop and mobile** - The layout is responsive
2. **Use consistent image sizes** - For photos, use similar aspect ratios
3. **Optimize images** - Compress images for faster loading
4. **Keep text concise** - Especially in the simulated CV view
5. **Check color contrast** - Ensure readability in both light/dark modes

---

## Need Help?

If you need to make more complex changes or add new features, feel free to ask!
