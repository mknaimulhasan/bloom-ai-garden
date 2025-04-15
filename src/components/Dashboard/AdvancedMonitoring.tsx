
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileBarChart, FileBarChart2, FileSpreadsheet, LineChart } from 'lucide-react';

// Mock data for nutrient levels over time
const nutrientData = [
  { time: '00:00', nitrogen: 14, phosphorus: 8, potassium: 12 },
  { time: '04:00', nitrogen: 15, phosphorus: 7, potassium: 11 },
  { time: '08:00', nitrogen: 13, phosphorus: 9, potassium: 13 },
  { time: '12:00', nitrogen: 17, phosphorus: 8, potassium: 15 },
  { time: '16:00', nitrogen: 19, phosphorus: 10, potassium: 14 },
  { time: '20:00', nitrogen: 16, phosphorus: 9, potassium: 13 },
  { time: '23:59', nitrogen: 15, phosphorus: 8, potassium: 12 },
];

// Mock data for water quality
const waterQualityData = [
  { time: '00:00', ph: 6.2, ec: 1.2, oxygen: 8, temperature: 21 },
  { time: '04:00', ph: 6.1, ec: 1.1, oxygen: 7.9, temperature: 20 },
  { time: '08:00', ph: 6.0, ec: 1.0, oxygen: 7.8, temperature: 20 },
  { time: '12:00', ph: 6.3, ec: 1.3, oxygen: 8.1, temperature: 22 },
  { time: '16:00', ph: 6.4, ec: 1.4, oxygen: 8.2, temperature: 23 },
  { time: '20:00', ph: 6.3, ec: 1.3, oxygen: 8.0, temperature: 22 },
  { time: '23:59', ph: 6.2, ec: 1.2, oxygen: 7.9, temperature: 21 },
];

// Mock photosynthesis data 
const photosynthesisData = [
  { time: '00:00', rate: 2.1, chlorophyll: 42, ndvi: 0.71 },
  { time: '04:00', rate: 1.8, chlorophyll: 41, ndvi: 0.70 },
  { time: '08:00', rate: 4.2, chlorophyll: 43, ndvi: 0.72 },
  { time: '12:00', rate: 5.7, chlorophyll: 45, ndvi: 0.75 },
  { time: '16:00', rate: 4.5, chlorophyll: 44, ndvi: 0.74 },
  { time: '20:00', rate: 3.2, chlorophyll: 43, ndvi: 0.73 },
  { time: '23:59', rate: 2.3, chlorophyll: 42, ndvi: 0.72 },
];

const AdvancedMonitoring = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Advanced Monitoring</CardTitle>
        <CardDescription>AI-powered plant health and environmental analytics</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="nutrients">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="nutrients">
              <FileBarChart className="h-4 w-4 mr-2" />
              Nutrients
            </TabsTrigger>
            <TabsTrigger value="water">
              <FileSpreadsheet className="h-4 w-4 mr-2" />
              Water Quality
            </TabsTrigger>
            <TabsTrigger value="photosynthesis">
              <LineChart className="h-4 w-4 mr-2" />
              Photosynthesis
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="nutrients" className="space-y-4">
            <div className="h-[250px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={nutrientData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorNitrogen" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3C9F56" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3C9F56" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPhosphorus" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#29B6F6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#29B6F6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPotassium" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F97316" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#F97316" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area type="monotone" dataKey="nitrogen" stroke="#3C9F56" fillOpacity={1} fill="url(#colorNitrogen)" />
                  <Area type="monotone" dataKey="phosphorus" stroke="#29B6F6" fillOpacity={1} fill="url(#colorPhosphorus)" />
                  <Area type="monotone" dataKey="potassium" stroke="#F97316" fillOpacity={1} fill="url(#colorPotassium)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>NPK levels are within optimal range. Nitrogen slightly elevated at 16:00 - adjusting nutrient mix.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="water" className="space-y-4">
            <div className="h-[250px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={waterQualityData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorPh" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorEc" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorOxygen" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#29B6F6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#29B6F6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area type="monotone" dataKey="ph" stroke="#8884d8" fillOpacity={1} fill="url(#colorPh)" />
                  <Area type="monotone" dataKey="ec" stroke="#82ca9d" fillOpacity={1} fill="url(#colorEc)" />
                  <Area type="monotone" dataKey="oxygen" stroke="#29B6F6" fillOpacity={1} fill="url(#colorOxygen)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Water quality metrics stable. Dissolved oxygen levels optimal. Temperature steady at 21-22°C.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="photosynthesis" className="space-y-4">
            <div className="h-[250px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={photosynthesisData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3C9F56" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3C9F56" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorChlorophyll" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8BC34A" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8BC34A" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorNdvi" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#4CAF50" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area type="monotone" dataKey="rate" stroke="#3C9F56" fillOpacity={1} fill="url(#colorRate)" />
                  <Area type="monotone" dataKey="chlorophyll" stroke="#8BC34A" fillOpacity={1} fill="url(#colorChlorophyll)" />
                  <Area type="monotone" dataKey="ndvi" stroke="#4CAF50" fillOpacity={1} fill="url(#colorNdvi)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Photosynthesis rate peaks at midday. NDVI index at 0.75 indicates excellent plant vitality. Chlorophyll levels increasing.</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AdvancedMonitoring;
