import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import rishaImage from "@assets/image_1760809293941.png";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="h-[calc(100vh-240px)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-6 animate-fade-in">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl"></div>
            <img
              src={rishaImage}
              alt="Risha Batra"
              className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-primary/30"
              data-testid="img-profile"
            />
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Risha Batra</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              From threats to <span className="text-primary">defense</span>,
            </span>
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent">
              I turn <span className="text-primary">vulnerabilities</span> into
            </span>
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            <span className="text-primary">fortified systems.</span>
          </h1>
        </div>

        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Cybersecurity enthusiast with experience in <span className="text-foreground font-semibold">OSINT investigations</span>, 
          <span className="text-foreground font-semibold"> vulnerability assessment</span>, and 
          <span className="text-foreground font-semibold"> incident response</span>. 
          Passionate about securing systems and solving real-world security challenges.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link href="/projects">
            <Button 
              size="default" 
              className="group px-6"
              data-testid="button-view-projects"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              size="default" 
              variant="outline" 
              className="px-6"
              data-testid="button-contact"
            >
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
