import { Link, useLocation } from "wouter";
import { FileText, Mail } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

const navLinks = [
  { name: "Projects", path: "/projects" },
  { name: "Tech Stack", path: "/tech-stack" },
  { name: "Achievements", path: "/achievements" },
  { name: "Experience", path: "/experience" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
            <span className="text-xl font-bold text-primary cursor-pointer hover-elevate px-3 py-1 rounded-md">
              RB
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} data-testid={`link-${link.name.toLowerCase().replace(" ", "-")}`}>
                <span
                  className={`px-4 py-2 text-sm font-medium rounded-md cursor-pointer transition-all hover-elevate ${
                    location === link.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/rishabatra1802"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-linkedin"
              className="p-2 rounded-md hover-elevate active-elevate-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <SiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/rishabatra1802"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-github"
              className="p-2 rounded-md hover-elevate active-elevate-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <SiGithub className="w-5 h-5" />
            </a>
            <a
              href="/attached_assets/risha_resume (9)_1760809252094.pdf"
              target="_blank"
              data-testid="link-resume"
              className="p-2 rounded-md hover-elevate active-elevate-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <FileText className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="lg:hidden pb-3 flex flex-wrap gap-2">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path} data-testid={`link-mobile-${link.name.toLowerCase().replace(" ", "-")}`}>
              <span
                className={`px-3 py-1.5 text-xs font-medium rounded-md cursor-pointer transition-all hover-elevate ${
                  location === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
