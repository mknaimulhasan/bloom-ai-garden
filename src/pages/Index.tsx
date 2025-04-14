
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SensorReadings from '@/components/Dashboard/SensorReadings';
import SystemStatus from '@/components/Dashboard/SystemStatus';
import PlantPreview from '@/components/Dashboard/PlantPreview';
import ActivityFeed from '@/components/Dashboard/ActivityFeed';
import GrowthChart from '@/components/Dashboard/GrowthChart';
import { Plant } from 'lucide-react';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-1">Welcome to Bloom.AI</h1>
          <p className="text-muted-foreground">Your smart farming dashboard</p>
        </div>
        <Card className="bg-farm-green-100 border-farm-green-300">
          <CardContent className="p-3 flex gap-2 items-center">
            <Plant className="h-5 w-5 text-farm-green-600" />
            <span className="font-medium text-farm-green-700">Growing Season: Summer</span>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <SensorReadings />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <PlantPreview />
          <SystemStatus />
          <ActivityFeed />
        </div>
        
        <GrowthChart />
      </div>
    </DashboardLayout>
  );
};

export default Index;
