
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AreaChart, BarChart, BarChart3, LineChart } from 'lucide-react';
import YieldPrediction from '@/components/Dashboard/YieldPrediction';

const YieldMetrics = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">Yield Metrics</h1>
        <p className="text-muted-foreground">Harvest predictions and growth optimization analytics</p>
      </div>
      
      <div className="space-y-6">
        <YieldPrediction />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AreaChart className="h-5 w-5 text-farm-green-600" />
                Growth Efficiency
              </CardTitle>
              <CardDescription>Resource utilization per gram of yield</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-farm-green-50 dark:bg-farm-green-900/20 rounded-lg border border-farm-green-100">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <span className="text-sm text-muted-foreground">Water</span>
                      <p className="text-xl font-medium">3.2 L/kg</p>
                      <Badge className="mt-1 bg-green-100 text-green-800">-12% vs avg</Badge>
                    </div>
                    <div className="text-center">
                      <span className="text-sm text-muted-foreground">Energy</span>
                      <p className="text-xl font-medium">1.7 kWh/kg</p>
                      <Badge className="mt-1 bg-green-100 text-green-800">-8% vs avg</Badge>
                    </div>
                    <div className="text-center">
                      <span className="text-sm text-muted-foreground">Nutrients</span>
                      <p className="text-xl font-medium">4.5 g/kg</p>
                      <Badge className="mt-1 bg-amber-100 text-amber-800">+2% vs avg</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="text-center py-12 text-muted-foreground">
                  <LineChart className="h-12 w-12 mx-auto mb-4 text-farm-green-400" />
                  <p className="text-lg mb-2">Detailed Analytics Coming Soon</p>
                  <p className="text-sm max-w-md mx-auto">Our system is gathering more data to provide detailed resource optimization recommendations.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-farm-green-600" />
                Projected Annual Yield
              </CardTitle>
              <CardDescription>Estimated yearly production based on current growth rates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-farm-green-50 dark:bg-farm-green-900/20 rounded-lg border border-farm-green-100">
                  <div className="text-center">
                    <span className="text-sm text-muted-foreground">Total Projected Yield</span>
                    <p className="text-3xl font-medium text-farm-green-700 my-2">23.8 kg</p>
                    <Badge className="bg-green-100 text-green-800">+18% vs previous</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center">
                      <span className="text-sm text-muted-foreground">Leafy Greens</span>
                      <p className="text-xl font-medium">14.2 kg</p>
                    </div>
                    <div className="text-center">
                      <span className="text-sm text-muted-foreground">Fruits & Vegetables</span>
                      <p className="text-xl font-medium">9.6 kg</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center py-12 text-muted-foreground">
                  <BarChart className="h-12 w-12 mx-auto mb-4 text-farm-green-400" />
                  <p className="text-lg mb-2">Detailed Projections Coming Soon</p>
                  <p className="text-sm max-w-md mx-auto">Our AI is analyzing your growing patterns to provide more accurate yield forecasts.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default YieldMetrics;
