
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplets, Leaf, LineChart, ThermometerIcon } from 'lucide-react';

// Mock activity data with timestamps
const activityData = [
  {
    id: 1,
    type: 'system',
    icon: <ThermometerIcon className="h-4 w-4 text-sky-500" />,
    content: 'Temperature increased to 25°C',
    timestamp: '10 minutes ago',
  },
  {
    id: 2,
    type: 'water',
    icon: <Droplets className="h-4 w-4 text-blue-500" />,
    content: 'Watering cycle completed',
    timestamp: '35 minutes ago',
  },
  {
    id: 3,
    type: 'ai',
    icon: <LineChart className="h-4 w-4 text-purple-500" />,
    content: 'AI adjusted light schedule for optimal growth',
    timestamp: '2 hours ago',
  },
  {
    id: 4,
    type: 'plant',
    icon: <Leaf className="h-4 w-4 text-farm-green-500" />,
    content: 'Basil reached vegetative growth stage',
    timestamp: '5 hours ago',
  },
  {
    id: 5,
    type: 'water',
    icon: <Droplets className="h-4 w-4 text-blue-500" />,
    content: 'Nutrient solution refreshed',
    timestamp: '1 day ago',
  },
];

const ActivityFeed = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        <div className="space-y-4">
          {activityData.map((activity, index) => (
            <div key={activity.id} className="relative pl-6 pb-4 last:pb-0">
              {/* Timeline connector */}
              {index < activityData.length - 1 && (
                <div className="absolute left-2.5 top-3 h-full w-0.5 bg-border" />
              )}
              
              {/* Activity icon */}
              <div className="absolute left-0 top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-background border">
                {activity.icon}
              </div>
              
              {/* Activity content */}
              <div className="flex flex-col">
                <p className="text-sm">{activity.content}</p>
                <span className="text-xs text-muted-foreground mt-1">{activity.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;
