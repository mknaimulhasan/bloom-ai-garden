import { useState } from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Area, AreaChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { DropletIcon, SunIcon, ThermometerIcon, GlassWater } from 'lucide-react';

const temperatureData = [
  { time: '00:00', value: 22.3 },
  { time: '02:00', value: 21.8 },
  { time: '04:00', value: 21.5 },
  { time: '06:00', value: 21.9 },
  { time: '08:00', value: 23.2 },
  { time: '10:00', value: 24.5 },
  { time: '12:00', value: 25.1 },
  { time: '14:00', value: 25.8 },
  { time: '16:00', value: 25.2 },
  { time: '18:00', value: 24.5 },
  { time: '20:00', value: 23.8 },
  { time: '22:00', value: 23.1 },
];

const humidityData = [
  { time: '00:00', value: 65 },
  { time: '02:00', value: 66 },
  { time: '04:00', value: 68 },
  { time: '06:00', value: 67 },
  { time: '08:00', value: 64 },
  { time: '10:00', value: 60 },
  { time: '12:00', value: 58 },
  { time: '14:00', value: 56 },
  { time: '16:00', value: 58 },
  { time: '18:00', value: 61 },
  { time: '20:00', value: 63 },
  { time: '22:00', value: 64 },
];

const lightData = [
  { time: '00:00', value: 0 },
  { time: '02:00', value: 0 },
  { time: '04:00', value: 0 },
  { time: '06:00', value: 120 },
  { time: '08:00', value: 450 },
  { time: '10:00', value: 780 },
  { time: '12:00', value: 850 },
  { time: '14:00', value: 820 },
  { time: '16:00', value: 650 },
  { time: '18:00', value: 320 },
  { time: '20:00', value: 50 },
  { time: '22:00', value: 0 },
];

const co2Data = [
  { time: '00:00', value: 580 },
  { time: '02:00', value: 570 },
  { time: '04:00', value: 560 },
  { time: '06:00', value: 580 },
  { time: '08:00', value: 620 },
  { time: '10:00', value: 650 },
  { time: '12:00', value: 670 },
  { time: '14:00', value: 680 },
  { time: '16:00', value: 660 },
  { time: '18:00', value: 640 },
  { time: '20:00', value: 610 },
  { time: '22:00', value: 590 },
];

const formatData = {
  temperature: { color: '#f97316', unit: '°C', name: 'Temperature', icon: ThermometerIcon },
  humidity: { color: '#0284c7', unit: '%', name: 'Humidity', icon: DropletIcon },
  light: { color: '#eab308', unit: 'lux', name: 'Light', icon: SunIcon },
  co2: { color: '#6b7280', unit: 'ppm', name: 'CO₂', icon: GlassWater },
};

const SensorPage = () => {
  const [timeRange, setTimeRange] = useState('24h');
  
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">Sensor Data</h1>
        <p className="text-muted-foreground">Monitor environmental conditions in real-time</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <SensorCard 
          type="temperature" 
          value="24.5" 
          min="21.5" 
          max="25.8" 
          status="optimal" 
        />
        <SensorCard 
          type="humidity" 
          value="65" 
          min="56" 
          max="68" 
          status="optimal" 
        />
        <SensorCard 
          type="light" 
          value="850" 
          min="0" 
          max="850" 
          status="warning" 
        />
        <SensorCard 
          type="co2" 
          value="620" 
          min="560" 
          max="680" 
          status="optimal" 
        />
      </div>
      
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Sensor History</CardTitle>
          <CardDescription>View trends over time</CardDescription>
          <Tabs defaultValue="temperature" className="w-full">
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="temperature">Temperature</TabsTrigger>
                <TabsTrigger value="humidity">Humidity</TabsTrigger>
                <TabsTrigger value="light">Light</TabsTrigger>
                <TabsTrigger value="co2">CO₂</TabsTrigger>
              </TabsList>
              
              <div className="flex gap-2">
                <button 
                  className={`px-2 py-1 text-xs rounded ${timeRange === '24h' ? 'bg-primary text-white' : 'bg-secondary'}`}
                  onClick={() => setTimeRange('24h')}
                >
                  24h
                </button>
                <button 
                  className={`px-2 py-1 text-xs rounded ${timeRange === '7d' ? 'bg-primary text-white' : 'bg-secondary'}`}
                  onClick={() => setTimeRange('7d')}
                >
                  7d
                </button>
                <button 
                  className={`px-2 py-1 text-xs rounded ${timeRange === '30d' ? 'bg-primary text-white' : 'bg-secondary'}`}
                  onClick={() => setTimeRange('30d')}
                >
                  30d
                </button>
              </div>
            </div>
            
            <TabsContent value="temperature">
              <SensorChart data={temperatureData} sensorType="temperature" />
            </TabsContent>
            <TabsContent value="humidity">
              <SensorChart data={humidityData} sensorType="humidity" />
            </TabsContent>
            <TabsContent value="light">
              <SensorChart data={lightData} sensorType="light" />
            </TabsContent>
            <TabsContent value="co2">
              <SensorChart data={co2Data} sensorType="co2" />
            </TabsContent>
          </Tabs>
        </CardHeader>
      </Card>
    </DashboardLayout>
  );
};

interface SensorCardProps {
  type: keyof typeof formatData;
  value: string;
  min: string;
  max: string;
  status: 'optimal' | 'warning' | 'danger';
}

const statusColors = {
  optimal: 'bg-farm-green-100 text-farm-green-700',
  warning: 'bg-amber-100 text-amber-700',
  danger: 'bg-red-100 text-red-700',
};

const SensorCard = ({ type, value, min, max, status }: SensorCardProps) => {
  const { color, unit, name, icon: Icon } = formatData[type];
  
  return (
    <Card className={`sensor-card overflow-hidden ${statusColors[status]}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">{name}</p>
          <div className="flex items-baseline gap-1">
            <p className="data-value">{value}</p>
            <span className="text-sm">{unit}</span>
          </div>
          <p className="text-xs mt-1">Range: {min} - {max} {unit}</p>
        </div>
        <Icon className="h-10 w-10 opacity-80" />
      </div>
    </Card>
  );
};

interface SensorChartProps {
  data: Array<{ time: string; value: number }>;
  sensorType: keyof typeof formatData;
}

const SensorChart = ({ data, sensorType }: SensorChartProps) => {
  const { color, unit, name } = formatData[sensorType];
  
  return (
    <div className="h-[300px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id={`color${sensorType}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.8} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" />
          <YAxis unit={unit} />
          <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              borderColor: 'hsl(var(--border))',
              borderRadius: '0.5rem',
            }}
            formatter={(value: number) => [`${value} ${unit}`, name]}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            fillOpacity={1}
            fill={`url(#color${sensorType})`}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SensorPage;
