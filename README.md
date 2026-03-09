# OS-Themed Portfolio Website

A modern, interactive portfolio website with an operating system-inspired interface. Features both desktop and mobile OS-style experiences built with Next.js, React, and TypeScript.

## 🌟 Features

- **Desktop OS Interface**: Complete with windows, taskbar, start menu, and draggable/resizable windows
- **Mobile OS Interface**: iOS-inspired mobile layout with widgets and app icons
- **Dual Theme Support**: Light and dark mode with smooth transitions
- **Interactive Windows**:
  - About Me - Professional profile and skills
  - Projects - Showcase of development work
  - Terminal - Interactive command-line interface
  - PDF Viewer - Real CV/resume display
  - Browser - Simulated browser with bookmarks to GitHub, LinkedIn, etc.
  - File Explorer - Project structure navigation
  - Photos - Image gallery
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Smooth Animations**: Boot screen, shutdown sequence, and window transitions

## 🚀 Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/zeerooz/portfolio3.git

# Navigate to project directory
cd portfolio3

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🎨 Customization

Customize the portfolio with your own information:

1. **Contact Links** (`components/os/mobile-os.tsx`):
   - Update `CONTACT_LINKS` object with your social media URLs

2. **Personal Information** (`components/os/windows/about-window.tsx`):
   - Edit name, title, bio, skills, and experience

3. **Projects** (`components/os/windows/projects-window.tsx`):
   - Add your own projects with descriptions and links

4. **CV/Resume** (`public/`):
   - Replace `Ahmed_Alaa_FlowCV_Sec.pdf` with your CV

5. **Browser Links** (`components/os/windows/browser-window.tsx`):
   - Update GitHub, LinkedIn, and other profile URLs

6. **Wallpaper** (`public/`):
   - Replace `wallpaper.jpg` and `wallpaper-light.jpg` with your images

## 🛠️ Build for Production

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Ahmed Alaa**
- GitHub: [@zeerooz](https://github.com/zeerooz)
- LinkedIn: [ahmed-elkhawaga](https://linkedin.com/in/ahmed-elkhawaga)
- Email: ahmed.alaa.alkhawaga@gmail.com

## 🙏 Acknowledgments

- Inspired by retro OS interfaces and modern design patterns
- Built with modern web technologies and best practices
