
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, CloudCog, Gauge, Leaf, LineChart, Microscope, RainbowIcon, ScanText, Sprout, Zap } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  status: 'coming-soon' | 'in-development' | 'planned';
}

const FeatureCard = ({ icon, title, description, status }: FeatureCardProps) => {
  const statusBadge = {
    'coming-soon': <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200">Coming Soon</Badge>,
    'in-development': <Badge className="bg-farm-green-100 text-farm-green-700 hover:bg-farm-green-200">In Development</Badge>,
    'planned': <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-200">Planned</Badge>,
  };

  return (
    <div className="feature-card relative p-4 border rounded-lg hover:bg-farm-green-50 dark:hover:bg-farm-green-900/10 transition-colors">
      <div className="flex items-start gap-3">
        <div className="shrink-0 p-2 rounded-md bg-farm-green-100 text-farm-green-700 dark:bg-farm-green-700/20 dark:text-farm-green-400">
          {icon}
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{title}</h3>
            {statusBadge[status]}
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

const FeatureRoadmap = () => {
  const features = [
    {
      icon: <Microscope className="h-5 w-5" />,
      title: "Multi-Spectral Imaging",
      description: "Analyze plant stress and health with near-infrared imaging",
      status: "in-development" as const,
    },
    {
      icon: <Brain className="h-5 w-5" />,
      title: "AI Yield Prediction",
      description: "Forecast harvest quantities based on growing conditions",
      status: "coming-soon" as const,
    },
    {
      icon: <ScanText className="h-5 w-5" />,
      title: "Growth Stage Detection",
      description: "Automatically identify plant growth phases with CV",
      status: "in-development" as const,
    },
    {
      icon: <Sprout className="h-5 w-5" />,
      title: "Custom Crop Templates",
      description: "Pre-configured settings for common plant varieties",
      status: "coming-soon" as const,
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Dynamic LED Tuning",
      description: "Optimize light spectrum for different growth stages",
      status: "planned" as const,
    },
    {
      icon: <CloudCog className="h-5 w-5" />,
      title: "Smart Home Integration",
      description: "Connect with Google Home, Alexa and IFTTT",
      status: "planned" as const,
    },
    {
      icon: <LineChart className="h-5 w-5" />,
      title: "Anomaly Detection",
      description: "AI-powered monitoring for unusual sensor readings",
      status: "in-development" as const,
    },
    {
      icon: <RainbowIcon className="h-5 w-5" />,
      title: "Historical Timelapse",
      description: "Generate growth videos from camera data",
      status: "planned" as const,
    },
  ];

  return (
    <Card className="col-span-1 lg:col-span-4">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle>Feature Roadmap</CardTitle>
        <Badge variant="outline" className="bg-farm-green-100/50 text-farm-green-600 hover:bg-farm-green-100">
          <Leaf className="h-3.5 w-3.5 mr-1" />
          New Features Coming
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              status={feature.status}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureRoadmap;
