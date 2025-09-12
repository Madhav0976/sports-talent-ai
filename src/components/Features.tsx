import { Target, BarChart3, Users, Shield, Smartphone, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "AI Video Analysis",
      description: "Advanced computer vision analyzes athlete movements and performance through webcam or uploaded videos",
      gradient: "from-primary to-primary-light"
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Comprehensive dashboards track progress, identify trends, and provide actionable insights",
      gradient: "from-secondary to-secondary-light"
    },
    {
      icon: Users,
      title: "Dual Dashboards",
      description: "Separate interfaces for athletes and coaches with customized features and analytics",
      gradient: "from-accent to-green-400"
    },
    {
      icon: Shield,
      title: "Cheat Detection",
      description: "Machine learning algorithms ensure fair assessment and prevent manipulation",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Responsive design works seamlessly on all devices, enabling rural accessibility",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Instant feedback and recommendations powered by advanced AI algorithms",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features for
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Modern Sports Training
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge AI technology with deep understanding of Indian sports ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 border-0 card-gradient hover:scale-105"
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;