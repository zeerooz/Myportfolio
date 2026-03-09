"use client"

import { Shield, GraduationCap, MapPin, Mail, Github, Linkedin, ExternalLink, Phone, Briefcase } from "lucide-react"

export function AboutWindow() {
  return (
    <div className="h-full overflow-y-auto os-scrollbar p-6">
      <div className="max-w-lg mx-auto space-y-6">
        {/* Profile Header */}
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center shrink-0">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-1">
            <h1 className="text-xl font-bold text-foreground">Ahmed Alaa</h1>
            <p className="text-sm text-primary font-medium">CS Graduate | IT Security Specialist</p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3" />
              <span>Cairo, Egypt</span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-2">
          <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">About</h2>
          <p className="text-sm text-foreground/80 leading-relaxed">
            Graduated Computer Science student with an IT Security Major. Passionate about cybersecurity with a strong 
            foundation in network security, penetration testing, and digital forensics. Practical experience in penetration 
            testing and web/mobile application security through platforms like TryHackMe and Hack The Box. Always eager to 
            apply practical skills in real-world scenarios to safeguard systems and information.
          </p>
        </div>

        {/* Education */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">Education</h2>
          <div className="flex items-start gap-3 p-3 rounded-md bg-muted/30 border border-border/30">
            <GraduationCap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <p className="text-sm font-medium text-foreground">B.Sc. Informatics and Computer Science</p>
              <p className="text-xs text-primary">Major: IT Security</p>
              <p className="text-xs text-muted-foreground">Minor: Software Engineering</p>
              <p className="text-xs text-muted-foreground">German International University (GIU) | 2020 - 2025</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">Experience</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-md bg-muted/30 border border-border/30">
              <Briefcase className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <p className="text-sm font-medium text-foreground">Network Security Intern</p>
                <p className="text-xs text-primary">Khwarizm Consulting</p>
                <p className="text-xs text-muted-foreground">Firewalls, Cisco ACI, VPN, PRTG Monitoring</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-md bg-muted/30 border border-border/30">
              <Briefcase className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <p className="text-sm font-medium text-foreground">Full-Stack Developer (Contract)</p>
                <p className="text-xs text-primary">Sam Cha Report System & Home Haven</p>
                <p className="text-xs text-muted-foreground">MongoDB, NestJS, Next.js, JWT Auth</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-md bg-muted/30 border border-border/30">
              <Briefcase className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <p className="text-sm font-medium text-foreground">Teaching Assistant</p>
                <p className="text-xs text-primary">German International University</p>
                <p className="text-xs text-muted-foreground">Ethical Hacking Courses</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">Skills</h2>
          <div className="space-y-2">
            <SkillCategory label="Security" skills={["Penetration Testing", "Network Security", "Digital Forensics", "Burp Suite", "Wireshark"]} />
            <SkillCategory label="Languages" skills={["Python", "Java", "JavaScript", "C++", "C#", "PHP"]} />
            <SkillCategory label="Tools" skills={["Nmap", "Metasploit", "Git", "Docker", "MySQL", "MongoDB"]} />
            <SkillCategory label="Frameworks" skills={["Next.js", "React", "NestJS", "Node.js", "Angular", ".NET"]} />
            <SkillCategory label="Platforms" skills={["Linux", "AWS", "TryHackMe", "Hack The Box"]} />
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">Certifications</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 text-[11px] font-medium rounded-md bg-chart-2/20 text-chart-2 border border-chart-2/30">
              Full Stack Development
            </span>
            <span className="px-2 py-1 text-[11px] font-medium rounded-md bg-chart-2/20 text-chart-2 border border-chart-2/30">
              Wireless Penetration Testing (StationX)
            </span>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">Connect</h2>
          <div className="flex flex-wrap gap-2">
            <LinkButton icon={<Mail className="w-3.5 h-3.5" />} label="Email" href="mailto:ahmed.alaa.alkhawaga@gmail.com" />
            <LinkButton icon={<Phone className="w-3.5 h-3.5" />} label="+20 1091916350" href="tel:+201091916350" />
            <LinkButton icon={<Github className="w-3.5 h-3.5" />} label="GitHub" href="https://github.com/zeerooz" />
            <LinkButton icon={<Linkedin className="w-3.5 h-3.5" />} label="LinkedIn" href="https://linkedin.com/in/ahmed-elkhawaga" />
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillCategory({ label, skills }: { label: string; skills: string[] }) {
  return (
    <div className="space-y-1.5">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

function LinkButton({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-muted/40 hover:bg-muted/70 text-foreground/80 hover:text-foreground transition-colors border border-border/30"
    >
      {icon}
      {label}
      <ExternalLink className="w-2.5 h-2.5 opacity-50" />
    </a>
  )
}
