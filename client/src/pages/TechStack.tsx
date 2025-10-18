import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { SiPython, SiLinux, SiJupyter } from "react-icons/si";
import { Shield, Terminal, Database } from "lucide-react";

const techCategories = [
  {
    title: "Frontend & UI",
    items: ["Python", "C", "C++", "Bash"],
  },
  {
    title: "Security Tools",
    items: [
      "Nmap",
      "Burp Suite",
      "Metasploit",
      "Nessus",
      "Hydra",
      "Wireshark",
      "DirBuster",
    ],
  },
  {
    title: "Backend",
    items: [
      "Redline",
      "KAPE",
      "Autopsy",
      "Volatility",
      "TheHive",
      "Velociraptor",
      "Git/GitHub",
      "VS Code",
    ],
  },
];

export default function TechStack() {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      
      {/* Decorative Icons */}
      <div className="absolute left-8 top-1/3 hidden lg:block opacity-30">
        <div className="w-32 h-32 bg-primary/20 rounded-3xl flex items-center justify-center transform rotate-12">
          <Terminal className="w-16 h-16 text-primary" />
        </div>
      </div>
      
      <div className="absolute right-8 top-1/4 hidden lg:block opacity-30">
        <div className="w-32 h-32 bg-primary/20 rounded-3xl flex items-center justify-center transform -rotate-12">
          <Shield className="w-16 h-16 text-primary" />
        </div>
      </div>

      <div className="absolute left-12 bottom-1/4 hidden lg:block opacity-30">
        <div className="w-24 h-24 bg-primary/20 rounded-3xl flex items-center justify-center transform -rotate-6">
          <Database className="w-12 h-12 text-primary" />
        </div>
      </div>

      <div className="absolute right-12 bottom-1/3 hidden lg:block opacity-30">
        <div className="w-28 h-28 bg-[#c4e64e]/20 rounded-3xl flex items-center justify-center transform rotate-6">
          <SiPython className="w-14 h-14 text-[#c4e64e]" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="mb-12 space-y-4 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
            Tech Stack
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl">
            A blend of security tools and development frameworks I work with daily.
          </p>
        </div>

        <div className="space-y-12 animate-fade-in">
          {techCategories.map((category) => (
            <div key={category.title} className="space-y-6">
              <Badge 
                variant="outline" 
                className="px-4 py-2 text-sm border-primary/30 text-[#c4e64e]"
              >
                {category.title}
              </Badge>
              
              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="px-6 py-3 text-base hover-elevate border-border"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
