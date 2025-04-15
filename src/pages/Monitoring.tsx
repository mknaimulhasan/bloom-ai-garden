
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Droplets, LineChart, Microscope, Sun } from 'lucide-react';
import AdvancedMonitoring from '@/components/Dashboard/AdvancedMonitoring';

const Monitoring = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">Advanced Monitoring</h1>
        <p className="text-muted-foreground">Multi-spectral analysis and environmental metrics</p>
      </div>
      
      <Tabs defaultValue="spectral">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="spectral">
            <Microscope className="h-4 w-4 mr-2" />
            Spectral Analysis
          </TabsTrigger>
          <TabsTrigger value="water">
            <Droplets className="h-4 w-4 mr-2" />
            Water Quality
          </TabsTrigger>
          <TabsTrigger value="light">
            <Sun className="h-4 w-4 mr-2" />
            Light Spectrum
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="spectral" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Microscope className="h-5 w-5 text-farm-green-600" />
                Multi-Spectral Plant Analysis
              </CardTitle>
              <CardDescription>Near-infrared and visible light spectrum data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="bg-farm-green-100 w-full aspect-square rounded-md mb-2"></div>
                    <span className="text-sm font-medium">RGB View</span>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="bg-purple-100 w-full aspect-square rounded-md mb-2"></div>
                    <span className="text-sm font-medium">Near-Infrared</span>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="bg-red-100 w-full aspect-square rounded-md mb-2"></div>
                    <span className="text-sm font-medium">NDVI</span>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="bg-blue-100 w-full aspect-square rounded-md mb-2"></div>
                    <span className="text-sm font-medium">Thermal</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center py-8 text-muted-foreground">
                <LineChart className="h-12 w-12 mx-auto mb-4 text-farm-green-400" />
                <p className="text-lg mb-2">Spectral Analysis In Progress</p>
                <p className="text-sm max-w-md mx-auto">Our multi-spectral system is gathering data about your plants' health and photosynthetic activity.</p>
              </div>
            </CardContent>
          </Card>
          
          <AdvancedMonitoring />
        </TabsContent>
        
        <TabsContent value="water" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Water Quality Monitoring</CardTitle>
              <CardDescription>Detailed analysis of hydroponics solution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-16 text-muted-foreground">
                <Droplets className="h-16 w-16 mx-auto mb-4 text-farm-green-400" />
                <p className="text-lg mb-2">Advanced Water Monitoring Coming Soon</p>
                <p className="text-sm max-w-md mx-auto">Extended water quality parameters including dissolved oxygen, turbidity, and ORP will be available in the next update.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="light" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Light Spectrum Analysis</CardTitle>
              <CardDescription>Detailed breakdown of light quality</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-16 text-muted-foreground">
                <Sun className="h-16 w-16 mx-auto mb-4 text-farm-green-400" />
                <p className="text-lg mb-2">Light Spectrum Analysis Coming Soon</p>
                <p className="text-sm max-w-md mx-auto">Advanced PAR (Photosynthetically Active Radiation) metrics and spectrum optimization will be available in the next update.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Monitoring;
