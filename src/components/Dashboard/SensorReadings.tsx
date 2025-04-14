
import { DropletIcon, SunIcon, ThermometerIcon, GlassWater } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface SensorCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
  unit: string;
  status: 'optimal' | 'warning' | 'danger';
  trend?: 'up' | 'down' | 'stable';
}

const statusColors = {
  optimal: 'bg-farm-green-100 text-farm-green-700',
  warning: 'bg-amber-100 text-amber-700',
  danger: 'bg-red-100 text-red-700',
};

const SensorCard = ({ icon: Icon, title, value, unit, status }: SensorCardProps) => {
  return (
    <Card className={cn('sensor-card overflow-hidden', statusColors[status])}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">{title}</p>
          <div className="flex items-baseline gap-1">
            <p className="data-value">{value}</p>
            <span className="text-sm">{unit}</span>
          </div>
        </div>
        <Icon className="h-10 w-10 opacity-80" />
      </div>
    </Card>
  );
};

const SensorReadings = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <SensorCard
        icon={ThermometerIcon}
        title="Temperature"
        value="24.5"
        unit="°C"
        status="optimal"
      />
      <SensorCard
        icon={DropletIcon}
        title="Humidity"
        value="65"
        unit="%"
        status="optimal"
      />
      <SensorCard
        icon={SunIcon}
        title="Light Intensity"
        value="850"
        unit="lux"
        status="warning"
      />
      <SensorCard
        icon={GlassWater}
        title="CO₂ Level"
        value="620"
        unit="ppm"
        status="optimal"
      />
    </div>
  );
};

export default SensorReadings;
