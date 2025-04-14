
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AreaChart, BarChart, Bar, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ArrowUpRight, BarChart3, Droplets, Leaf, TrendingUp } from 'lucide-react';

// Mock data for growth analytics
const growthData = [
  { day: '1', basil: 1.2, tomato: 1.5, lettuce: 1.0, mint: 1.3 },
  { day: '5', basil: 3.8, tomato: 3.2, lettuce: 3.5, mint: 4.1 },
  { day: '10', basil: 7.2, tomato: 6.5, lettuce: 6.8, mint: 8.3 },
  { day: '15', basil: 12.2, tomato: 10.8, lettuce: 9.5, mint: 14.6 },
  { day: '20', basil: 18.5, tomato: 15.3, lettuce: 12.4, mint: 20.8 },
  { day: '25', basil: 24.6, tomato: 20.2, lettuce: 14.8, mint: 26.5 },
  { day: '30', basil: 30.3, tomato: 25.6, lettuce: 16.5, mint: 31.8 },
];

// Mock data for resource usage
const resourceData = [
  { name: 'Mon', water: 25, energy: 40 },
  { name: 'Tue', water: 28, energy: 45 },
  { name: 'Wed', water: 32, energy: 48 },
  { name: 'Thu', water: 30, energy: 47 },
  { name: 'Fri', water: 27, energy: 42 },
  { name: 'Sat', water: 22, energy: 38 },
  { name: 'Sun', water: 20, energy: 36 },
];

// Mock data for plant distribution
const plantDistributionData = [
  { name: 'Basil', value: 35 },
  { name: 'Tomatoes', value: 25 },
  { name: 'Lettuce', value: 20 },
  { name: 'Mint', value: 20 },
];

// Mock data for yield comparison
const yieldData = [
  { month: 'Jan', actual: 80, predicted: 85 },
  { month: 'Feb', actual: 82, predicted: 83 },
  { month: 'Mar', actual: 86, predicted: 85 },
  { month: 'Apr', actual: 90, predicted: 87 },
  { month: 'May', actual: 93, predicted: 90 },
  { month: 'Jun', actual: 95, predicted: 92 },
];

const COLORS = ['#3C9F56', '#4FC3F7', '#FFA726', '#7E69AB'];

const AnalyticsPage = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">Analytics</h1>
        <p className="text-muted-foreground">Insights and data analysis</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Growth Rate</p>
                <h3 className="text-2xl font-bold mt-0.5">
                  +24.3%
                  <span className="text-farm-green-500 ml-1 text-xs">↑</span>
                </h3>
              </div>
              <div className="h-8 w-8 rounded-full bg-farm-green-100 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-farm-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Plants</p>
                <h3 className="text-2xl font-bold mt-0.5">
                  12
                  <span className="text-farm-green-500 ml-1 text-xs">↑</span>
                </h3>
              </div>
              <div className="h-8 w-8 rounded-full bg-farm-green-100 flex items-center justify-center">
                <Leaf className="h-5 w-5 text-farm-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Water Usage</p>
                <h3 className="text-2xl font-bold mt-0.5">
                  2.4L
                  <span className="text-sky-500 ml-1 text-xs">↓</span>
                </h3>
              </div>
              <div className="h-8 w-8 rounded-full bg-sky-100 flex items-center justify-center">
                <Droplets className="h-5 w-5 text-sky-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Yield Prediction</p>
                <h3 className="text-2xl font-bold mt-0.5">
                  95%
                  <span className="text-amber-500 ml-1 text-xs">↑</span>
                </h3>
              </div>
              <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-amber-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="growth" className="w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <TabsList>
            <TabsTrigger value="growth">Growth Tracking</TabsTrigger>
            <TabsTrigger value="resources">Resource Usage</TabsTrigger>
            <TabsTrigger value="yield">Yield Analysis</TabsTrigger>
          </TabsList>
          
          <Select defaultValue="30">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">7 days</SelectItem>
              <SelectItem value="14">14 days</SelectItem>
              <SelectItem value="30">30 days</SelectItem>
              <SelectItem value="90">90 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <TabsContent value="growth" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Plant Growth Progress</CardTitle>
              <CardDescription>Height progress over time (cm)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={growthData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorBasil" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3C9F56" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#3C9F56" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorTomato" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4FC3F7" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#4FC3F7" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorLettuce" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FFA726" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#FFA726" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorMint" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7E69AB" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#7E69AB" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="day" />
                    <YAxis unit=" cm" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        borderColor: 'hsl(var(--border))',
                        borderRadius: '0.5rem',
                      }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="basil"
                      name="Basil"
                      stroke="#3C9F56"
                      fillOpacity={1}
                      fill="url(#colorBasil)"
                    />
                    <Area
                      type="monotone"
                      dataKey="tomato"
                      name="Tomato"
                      stroke="#4FC3F7"
                      fillOpacity={0.3}
                      fill="url(#colorTomato)"
                    />
                    <Area
                      type="monotone"
                      dataKey="lettuce"
                      name="Lettuce"
                      stroke="#FFA726"
                      fillOpacity={0.3}
                      fill="url(#colorLettuce)"
                    />
                    <Area
                      type="monotone"
                      dataKey="mint"
                      name="Mint"
                      stroke="#7E69AB"
                      fillOpacity={0.3}
                      fill="url(#colorMint)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Plant Distribution</CardTitle>
              <CardDescription>Current growing plants</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex flex-col">
                <ResponsiveContainer width="100%" height="80%">
                  <PieChart>
                    <Pie
                      data={plantDistributionData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      {plantDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        borderColor: 'hsl(var(--border))',
                        borderRadius: '0.5rem',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {plantDistributionData.map((entry, index) => (
                    <div key={entry.name} className="flex items-center gap-1.5">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      <span className="text-xs">{entry.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Resource Consumption</CardTitle>
              <CardDescription>Water and energy usage over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={resourceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        borderColor: 'hsl(var(--border))',
                        borderRadius: '0.5rem',
                      }}
                    />
                    <Legend />
                    <Bar dataKey="water" name="Water (L)" fill="#4FC3F7" />
                    <Bar dataKey="energy" name="Energy (kWh)" fill="#FFA726" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="yield">
          <Card>
            <CardHeader>
              <CardTitle>Yield Prediction vs Actual</CardTitle>
              <CardDescription>Comparing predicted to actual harvest yields</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={yieldData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3C9F56" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#3C9F56" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7E69AB" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#7E69AB" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        borderColor: 'hsl(var(--border))',
                        borderRadius: '0.5rem',
                      }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="actual"
                      name="Actual Yield (%)"
                      stroke="#3C9F56"
                      fillOpacity={1}
                      fill="url(#colorActual)"
                    />
                    <Area
                      type="monotone"
                      dataKey="predicted"
                      name="Predicted Yield (%)"
                      stroke="#7E69AB"
                      fillOpacity={0.3}
                      fill="url(#colorPredicted)"
                      strokeDasharray="5 5"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
