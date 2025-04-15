
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, Leaf, Lightbulb, Plant, Sprout } from 'lucide-react';

const AIInsights = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">AI Insights</h1>
        <p className="text-muted-foreground">Machine learning powered recommendations for optimal growing</p>
      </div>

      <Tabs defaultValue="recommendations">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="recommendations">
            <Lightbulb className="h-4 w-4 mr-2" />
            Growth Recommendations
          </TabsTrigger>
          <TabsTrigger value="disease">
            <Plant className="h-4 w-4 mr-2" />
            Disease Detection
          </TabsTrigger>
          <TabsTrigger value="growth">
            <Sprout className="h-4 w-4 mr-2" />
            Growth Patterns
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="recommendations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-farm-green-600" />
                AI Growing Recommendations
              </CardTitle>
              <CardDescription>Personalized tips for your growing environment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 rounded-lg bg-farm-green-50 dark:bg-farm-green-900/20 border border-farm-green-100">
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-farm-green-600" />
                  Basil Optimization
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Based on 24 days of sensor data and plant metrics, here are AI-generated recommendations:
                </p>
                
                <div className="space-y-4">
                  <div className="p-3 bg-white dark:bg-background rounded border">
                    <h4 className="font-medium mb-1">Light Adjustment</h4>
                    <p className="text-sm text-muted-foreground">Increase light duration to 14 hours daily. Current 12-hour cycle limiting growth potential.</p>
                  </div>
                  
                  <div className="p-3 bg-white dark:bg-background rounded border">
                    <h4 className="font-medium mb-1">Temperature Optimization</h4>
                    <p className="text-sm text-muted-foreground">Maintain daytime temperature at 75-78°F. Current fluctuations affecting leaf development.</p>
                  </div>
                  
                  <div className="p-3 bg-white dark:bg-background rounded border">
                    <h4 className="font-medium mb-1">Nutrient Balance</h4>
                    <p className="text-sm text-muted-foreground">Slight nitrogen deficiency detected. Increase N in next nutrient solution by 15%.</p>
                  </div>
                  
                  <div className="p-3 bg-white dark:bg-background rounded border">
                    <h4 className="font-medium mb-1">Pruning Strategy</h4>
                    <p className="text-sm text-muted-foreground">Recommend pinching top growth to encourage bushier plant and higher yield.</p>
                  </div>
                </div>
              </div>
              
              {/* Placeholder for more recommendations */}
              <div className="text-center py-12 text-muted-foreground">
                <p>More plant insights are being generated...</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="disease" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Disease Detection</CardTitle>
              <CardDescription>AI-powered plant health monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-16 text-muted-foreground">
                <Plant className="h-16 w-16 mx-auto mb-4 text-farm-green-400" />
                <p className="text-lg mb-2">No Plant Health Issues Detected</p>
                <p className="text-sm max-w-md mx-auto">Our AI system is actively monitoring your plants for signs of disease or nutrient deficiencies.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="growth" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Growth Pattern Analysis</CardTitle>
              <CardDescription>Statistical analysis of plant development</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-16 text-muted-foreground">
                <Sprout className="h-16 w-16 mx-auto mb-4 text-farm-green-400" />
                <p className="text-lg mb-2">Growth Analysis Coming Soon</p>
                <p className="text-sm max-w-md mx-auto">Our advanced machine learning models are currently being trained with your plant growth data.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default AIInsights;
