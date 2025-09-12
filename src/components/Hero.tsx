import { ArrowRight, Play, Target, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-sports.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Indian sports talent"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Discover India's
            <span className="block bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
              Sports Champions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            AI-powered talent discovery and performance tracking for athletes across India. 
            Democratizing sports excellence from rural villages to urban centers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/talent-discovery">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary-dark text-secondary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Start Talent Discovery
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-xl backdrop-blur-sm"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
              <div className="text-white/80 flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Athletes Assessed
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80 flex items-center justify-center">
                <Target className="w-5 h-5 mr-2" />
                Talents Discovered
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-white/80 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Accuracy Rate
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full animate-float" />
      <div className="absolute bottom-40 right-20 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "-2s" }} />
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: "-4s" }} />
    </div>
  );
};

export default Hero;