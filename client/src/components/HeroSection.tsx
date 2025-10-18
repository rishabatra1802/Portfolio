import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import rishaImage from "@assets/image_1760809293941.png";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-32">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        <div className="flex items-center gap-3 mb-8">
          <img
            src={rishaImage}
            alt="Risha Batra"
            className="w-12 h-12 rounded-full object-cover border-2 border-border"
            data-testid="img-profile"
          />
          <span className="text-base text-muted-foreground">Risha Batra</span>
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-foreground">
            From threats to defense, I turn vulnerabilities into fortified systems.
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I have experience working on both <span className="text-foreground font-semibold">OSINT investigations</span> and <span className="text-foreground font-semibold">vulnerability assessment</span>. Focused on securing systems through hands-on penetration testing and incident response.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
            <Link href="/chat">
              <Button 
                size="lg" 
                className="bg-[#c4e64e] text-black hover:bg-[#b5d741] px-8 font-medium"
                data-testid="button-say-hello"
              >
                Say Hello
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8"
                data-testid="button-view-projects"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
