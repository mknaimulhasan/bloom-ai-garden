
import { Battery, CloudSun, Droplets, Thermometer, Wind } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SystemStatus = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>System Status</CardTitle>
        <CardDescription>Current operation metrics</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Thermometer className="h-4 w-4 text-farm-green-500" />
            <span className="text-sm">Temperature Control</span>
          </div>
          <span className="text-sm font-medium text-farm-green-500">Online</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplets className="h-4 w-4 text-farm-green-500" />
            <span className="text-sm">Irrigation System</span>
          </div>
          <span className="text-sm font-medium text-farm-green-500">Online</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CloudSun className="h-4 w-4 text-farm-green-500" />
            <span className="text-sm">Lighting System</span>
          </div>
          <span className="text-sm font-medium text-farm-green-500">Online</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wind className="h-4 w-4 text-farm-green-500" />
            <span className="text-sm">Ventilation</span>
          </div>
          <span className="text-sm font-medium text-farm-green-500">Online</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Battery className="h-4 w-4 text-farm-green-500" />
              <span className="text-sm">System Battery</span>
            </div>
            <span className="text-sm font-medium">87%</span>
          </div>
          <Progress value={87} className="h-1.5 bg-muted" />
        </div>
      </CardContent>
    </Card>
  );
};

export default SystemStatus;
