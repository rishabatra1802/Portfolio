import { 
  SiPython, 
  SiC, 
  SiCplusplus, 
  SiGnubash, 
  SiLinux, 
  SiKalilinux, 
  SiGithub,
  SiJupyter
} from "react-icons/si";
import { Shield, Terminal, Network, Lock, Search, FileSearch, Database, Cpu, Code } from "lucide-react";

const techItems = [
  { name: "Python", Icon: SiPython },
  { name: "C", Icon: SiC },
  { name: "C++", Icon: SiCplusplus },
  { name: "Bash", Icon: SiGnubash },
  { name: "Nmap", Icon: Network },
  { name: "Burp Suite", Icon: Shield },
  { name: "Metasploit", Icon: Terminal },
  { name: "Nessus", Icon: Search },
  { name: "Hydra", Icon: Lock },
  { name: "Wireshark", Icon: Network },
  { name: "KAPE", Icon: FileSearch },
  { name: "Autopsy", Icon: Database },
  { name: "Volatility", Icon: Cpu },
  { name: "Kali Linux", Icon: SiKalilinux },
  { name: "Linux", Icon: SiLinux },
  { name: "Git/GitHub", Icon: SiGithub },
  { name: "VS Code", Icon: Code },
  { name: "Jupyter", Icon: SiJupyter },
];

export default function TechStackCarousel() {
  const duplicatedItems = [...techItems, ...techItems];

  return (
    <div className="w-full overflow-hidden py-12 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="flex flex-col gap-6">
        <div className="flex animate-scroll">
          {duplicatedItems.map((item, index) => (
            <div
              key={`row1-${index}`}
              className="flex items-center gap-3 px-6 py-3 mx-2 bg-card/50 border border-card-border rounded-md backdrop-blur-sm whitespace-nowrap min-w-fit"
            >
              <item.Icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{item.name}</span>
            </div>
          ))}
        </div>

        <div className="flex animate-scroll-reverse">
          {duplicatedItems.map((item, index) => (
            <div
              key={`row2-${index}`}
              className="flex items-center gap-3 px-6 py-3 mx-2 bg-card/50 border border-card-border rounded-md backdrop-blur-sm whitespace-nowrap min-w-fit"
            >
              <item.Icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
