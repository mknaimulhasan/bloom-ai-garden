
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SensorReadings from '@/components/Dashboard/SensorReadings';
import SystemStatus from '@/components/Dashboard/SystemStatus';
import PlantPreview from '@/components/Dashboard/PlantPreview';
import ActivityFeed from '@/components/Dashboard/ActivityFeed';
import GrowthChart from '@/components/Dashboard/GrowthChart';
import FeatureRoadmap from '@/components/Dashboard/FeatureRoadmap';
import AdvancedMonitoring from '@/components/Dashboard/AdvancedMonitoring';
import { LeafyGreen, TrendingUp, ZapIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-1">Welcome to Bloom.AI</h1>
          <p className="text-muted-foreground">Your smart farming dashboard</p>
        </div>
        <div className="flex gap-2">
          <Card className="bg-farm-green-100 border-farm-green-300">
            <CardContent className="p-3 flex gap-2 items-center">
              <LeafyGreen className="h-5 w-5 text-farm-green-600" />
              <span className="font-medium text-farm-green-700">Growing Season: Summer</span>
            </CardContent>
          </Card>
          
          <Button variant="outline" className="gap-2">
            <ZapIcon className="h-4 w-4" />
            <span>Quick Actions</span>
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        <SensorReadings />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <PlantPreview />
          <SystemStatus />
          <ActivityFeed />
        </div>
        
        <AdvancedMonitoring />
        
        <GrowthChart />
        
        <FeatureRoadmap />
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-farm-green-600" />
              Farm Performance Insights
            </CardTitle>
            <CardDescription>AI-generated recommendations for optimal growth</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-4 rounded-lg bg-farm-green-50 dark:bg-farm-green-950/20 border border-farm-green-100 dark:border-farm-green-900/30">
              <h3 className="font-medium text-lg mb-2">Growth Optimization Suggestions</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="rounded-full h-5 w-5 flex items-center justify-center bg-farm-green-100 text-farm-green-800 mt-0.5">1</span>
                  <span>Increase light intensity by 15% during morning hours (6-9 AM) to boost photosynthesis efficiency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full h-5 w-5 flex items-center justify-center bg-farm-green-100 text-farm-green-800 mt-0.5">2</span>
                  <span>Consider reducing water frequency but increasing volume per session to encourage deeper root growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full h-5 w-5 flex items-center justify-center bg-farm-green-100 text-farm-green-800 mt-0.5">3</span>
                  <span>Basil and lettuce plants are ready for partial harvest - this will stimulate fresh growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full h-5 w-5 flex items-center justify-center bg-farm-green-100 text-farm-green-800 mt-0.5">4</span>
                  <span>System detected minor nutrient imbalance - increasing calcium would benefit tomato plants</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Index;
