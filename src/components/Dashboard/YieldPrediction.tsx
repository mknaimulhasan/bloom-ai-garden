
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TabsContent } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { CalendarDays, TrendingUp } from "lucide-react";

// Mock data for predicted yields
const yieldData = [
  { name: 'Basil', current: 120, predicted: 230, unit: 'g' },
  { name: 'Lettuce', current: 350, predicted: 520, unit: 'g' },
  { name: 'Cherry Tomatoes', current: 285, predicted: 780, unit: 'g' },
  { name: 'Mint', current: 90, predicted: 150, unit: 'g' },
  { name: 'Strawberries', current: 110, predicted: 310, unit: 'g' },
];

// Mock historical data for comparison
const historicalData = [
  { name: 'Jan', basil: 140, lettuce: 240, tomatoes: 180, mint: 90, strawberries: 0 },
  { name: 'Feb', basil: 180, lettuce: 280, tomatoes: 250, mint: 110, strawberries: 0 },
  { name: 'Mar', basil: 190, lettuce: 320, tomatoes: 320, mint: 120, strawberries: 50 },
  { name: 'Apr', basil: 210, lettuce: 380, tomatoes: 420, mint: 130, strawberries: 100 },
  { name: 'May', basil: 230, lettuce: 450, tomatoes: 520, mint: 140, strawberries: 180 },
  { name: 'Jun', basil: 250, lettuce: 520, tomatoes: 620, mint: 150, strawberries: 280 },
];

const calculateProgress = (current: number, predicted: number) => {
  return Math.round((current / predicted) * 100);
};

const YieldPrediction = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>AI Yield Prediction</CardTitle>
            <CardDescription>Forecasted harvest quantities based on plant health analysis</CardDescription>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-farm-green-100 dark:bg-farm-green-900/30 text-farm-green-700 dark:text-farm-green-400 rounded-md text-sm">
            <CalendarDays className="h-4 w-4" />
            <span>Next Harvest: 7 days</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {yieldData.map((item) => (
            <div key={item.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{item.name}</span>
                <div className="flex items-center gap-1.5 text-sm">
                  <span className="text-muted-foreground">{item.current}{item.unit}</span>
                  <TrendingUp className="h-3.5 w-3.5 text-farm-green-500" />
                  <span className="font-medium">{item.predicted}{item.unit}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Progress 
                  value={calculateProgress(item.current, item.predicted)} 
                  className="h-2"
                />
                <span className="text-xs text-muted-foreground w-12 text-right">
                  {calculateProgress(item.current, item.predicted)}%
                </span>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-sm font-medium mb-3">Historical Yield Comparison</h3>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={historicalData}
                margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'grams', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="basil" name="Basil" fill="#4CAF50" />
                <Bar dataKey="lettuce" name="Lettuce" fill="#8BC34A" />
                <Bar dataKey="tomatoes" name="Tomatoes" fill="#F44336" />
                <Bar dataKey="mint" name="Mint" fill="#2196F3" />
                <Bar dataKey="strawberries" name="Strawberries" fill="#E91E63" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default YieldPrediction;
