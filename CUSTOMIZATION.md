# Portfolio OS - Customization Guide

## File Structure

```
components/os/
  desktop.tsx          - Main desktop (icons, windows, layout)
  desktop-icon.tsx     - Desktop icon component
  os-window.tsx        - Draggable/resizable window component
  taskbar.tsx          - Bottom taskbar (open apps, clock, skills)
  start-menu.tsx       - Start menu popup
  mobile-os.tsx        - Mobile phone-style layout
  portfolio-os.tsx     - Responsive wrapper (desktop vs mobile)
  theme-provider.tsx   - Light/dark mode toggle
  pixel-icons.tsx      - All colorful pixel SVG icons
  shutdown-screen.tsx  - Shutdown/reboot animation
  windows/
    about-window.tsx       - About Me content
    projects-window.tsx    - Projects gallery
    terminal-window.tsx    - Interactive terminal
    pdf-viewer-window.tsx  - CV/Resume viewer
    browser-window.tsx     - Simulated browser
    file-explorer-window.tsx - File system browser
    photos-window.tsx      - Photo gallery viewer
```

---

## Change Wallpaper

**File:** `components/os/desktop.tsx` (line ~224)

The desktop background is set via a CSS class on the root div:

```tsx
className="h-screen w-screen overflow-hidden relative select-none bg-black pb-11"
```

**Option A - Solid color:** Change `bg-black` to any Tailwind color like `bg-slate-900` or `bg-zinc-800`.

**Option B - Image wallpaper:**
1. Place your image in `public/` folder (e.g., `public/my-wallpaper.jpg`)
2. Replace the className with a style prop:

```tsx
<div
  className="h-screen w-screen overflow-hidden relative select-none pb-11"
  style={{ backgroundImage: "url('/my-wallpaper.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
>
```

**Mobile wallpaper:** `components/os/mobile-os.tsx` - same approach, find the `bg-black` class on the home screen div.

---

## Add Photos

**File:** `components/os/windows/photos-window.tsx`

Find the `photos` array at the top of the component:

```tsx
const photos = [
  { id: "1", name: "landscape.jpg", src: "/photos/placeholder_1.jpg", date: "2024" },
  { id: "2", name: "workspace.jpg", src: "/photos/placeholder_2.jpg", date: "2024" },
  ...
]
```

**Steps:**
1. Place your `.jpg` or `.png` files in the `public/photos/` folder
2. Add new entries to the `photos` array:

```tsx
{ id: "5", name: "my-photo.jpg", src: "/photos/my-photo.jpg", date: "2025" },
```

---

## Edit About Me

**File:** `components/os/windows/about-window.tsx`

This contains your name, title, bio, skills, education, and contact links. Edit the JSX content directly. Look for:
- Name and title at the top
- Skills list
- Education section
- Contact links (email, GitHub, LinkedIn)

---

## Edit Projects

**File:** `components/os/windows/projects-window.tsx`

Find the `projects` array:

```tsx
const projects = [
  {
    id: "1",
    name: "SecureAuth System",
    description: "...",
    tech: ["Python", "OAuth", "JWT"],
    ...
  },
]
```

Edit, add, or remove project objects. Each project has: `name`, `description`, `tech` (array of tags), and optionally a `link`.

---

## Edit CV / Resume

**File:** `components/os/windows/pdf-viewer-window.tsx`

The CV content is rendered as styled HTML (not an actual PDF). Edit the JSX sections for:
- Personal info header
- Experience section
- Education section
- Skills section
- Certifications

**To use a real PDF:** Replace the HTML content with an iframe:
```tsx
<iframe src="/my-cv.pdf" className="w-full h-full" />
```
Place `my-cv.pdf` in the `public/` folder.

---

## Edit Terminal Commands

**File:** `components/os/windows/terminal-window.tsx`

Find the `processCommand` function. Each `case` is a command:

```tsx
case "about":
  return ["Name: Your Name", "Role: ..."]
case "skills":
  return ["- Python", "- JavaScript", ...]
```

Add new commands by adding new `case` blocks. Update `neofetch` output for your info.

---

## Edit Browser Bookmarks & Pages

**File:** `components/os/windows/browser-window.tsx`

Find the `bookmarks` array and `pages` object to edit URLs, titles, and simulated page content.

---

## Edit File Explorer

**File:** `components/os/windows/file-explorer-window.tsx`

Find the `fileSystem` object that defines the folder/file tree structure. Add folders, files, and their preview content.

---

## Change Desktop Icons

**File:** `components/os/desktop.tsx`

The `desktopIcons` array defines what appears on the desktop:

```tsx
const desktopIcons = [
  { label: "About Me", icon: <PixelUserIcon size={32} />, action: () => openWindow("about") },
  ...
]
```

To add a new icon:
1. Create the window component in `windows/`
2. Add a config entry in `WINDOW_CONFIGS`
3. Add it to `desktopIcons` and `startMenuItems`

---

## Change Skill Icons in Taskbar

**File:** `components/os/taskbar.tsx`

Look for the system tray section with `PixelPythonSkill`, `PixelLinuxSkill`, `PixelLockSkill`. Replace or add new pixel SVG skill icons.

---

## Customize Colors

**File:** `app/globals.css`

The `:root` block defines light mode colors, and `.dark` defines dark mode. Key tokens:
- `--primary` - Main accent color (buttons, active states)
- `--background` / `--foreground` - Base colors
- `--card` - Window/card backgrounds
- `--border` - Border color
- `--muted` - Subtle backgrounds

---

## Custom Cursors

The pixel cursors are SVG files:
- `public/cursors/pointer.svg` - Default arrow cursor
- `public/cursors/hand.svg` - Pointer/click cursor

Replace these SVGs with your own designs. The cursor CSS is in `app/globals.css` under `@layer base`.
