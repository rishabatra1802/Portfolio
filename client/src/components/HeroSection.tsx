import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import rishaImage from "@assets/image_1760809293941.png";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl"></div>
            <img
              src={rishaImage}
              alt="Risha Batra"
              className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-primary/30"
              data-testid="img-profile"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Risha Batra</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              From threats to defense,
            </span>
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              I turn vulnerabilities into
            </span>
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
            <span className="text-primary">fortified systems.</span>
          </h1>
        </div>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Cybersecurity enthusiast with experience in <span className="text-foreground font-semibold">OSINT investigations</span>, 
          <span className="text-foreground font-semibold"> vulnerability assessment</span>, and 
          <span className="text-foreground font-semibold"> incident response</span>. 
          Passionate about securing systems and solving real-world security challenges.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/projects">
            <Button 
              size="lg" 
              className="group px-8"
              data-testid="button-view-projects"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8"
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
