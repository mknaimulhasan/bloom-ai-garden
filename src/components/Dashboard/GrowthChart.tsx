
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// Mock growth data over time
const growthData = [
  { day: '1', height: 1.2, ideal: 1.3 },
  { day: '3', height: 2.1, ideal: 2.4 },
  { day: '6', height: 4.3, ideal: 4.2 },
  { day: '9', height: 6.8, ideal: 6.5 },
  { day: '12', height: 8.5, ideal: 8.9 },
  { day: '15', height: 12.2, ideal: 11.5 },
  { day: '18', height: 15.6, ideal: 14.8 },
  { day: '21', height: 18.1, ideal: 18.4 },
];

const GrowthChart = () => {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader className="pb-2">
        <CardTitle>Plant Growth Tracking</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={growthData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorHeight" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3C9F56" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3C9F56" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorIdeal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#29B6F6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#29B6F6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="day" label={{ value: 'Days', position: 'insideBottomRight', offset: -5 }} />
              <YAxis label={{ value: 'Height (cm)', angle: -90, position: 'insideLeft' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  borderColor: 'hsl(var(--border))',
                  borderRadius: '0.5rem',
                }}
              />
              <Area
                type="monotone"
                dataKey="height"
                stroke="#3C9F56"
                fillOpacity={1}
                fill="url(#colorHeight)"
                strokeWidth={2}
                name="Actual Height"
                unit=" cm"
              />
              <Area
                type="monotone"
                dataKey="ideal"
                stroke="#29B6F6"
                fillOpacity={0.3}
                fill="url(#colorIdeal)"
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Ideal Growth"
                unit=" cm"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default GrowthChart;
