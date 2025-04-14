
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Check, Clock } from 'lucide-react';

const plantsData = [
  {
    id: 1,
    name: 'Basil',
    status: 'healthy',
    daysGrowing: 15,
    nextAction: 'Harvesting in 5 days',
  },
  {
    id: 2,
    name: 'Cherry Tomatoes',
    status: 'healthy',
    daysGrowing: 28,
    nextAction: 'Add nutrients today',
  },
  {
    id: 3,
    name: 'Lettuce',
    status: 'attention',
    daysGrowing: 12,
    nextAction: 'Check leaves for spots',
  },
  {
    id: 4,
    name: 'Mint',
    status: 'healthy',
    daysGrowing: 10,
    nextAction: 'Pruning recommended',
  },
];

const statusIcons = {
  healthy: <Check className="h-4 w-4 text-farm-green-500" />,
  attention: <AlertCircle className="h-4 w-4 text-amber-500" />,
  unhealthy: <AlertCircle className="h-4 w-4 text-red-500" />,
};

const statusLabels = {
  healthy: <Badge className="bg-farm-green-100 text-farm-green-700 hover:bg-farm-green-200">Healthy</Badge>,
  attention: <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200">Needs Attention</Badge>,
  unhealthy: <Badge className="bg-red-100 text-red-700 hover:bg-red-200">Unhealthy</Badge>,
};

const PlantPreview = () => {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader className="pb-2">
        <CardTitle>Plants Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plantsData.map((plant) => (
            <div key={plant.id} className="plant-card border-farm-green-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-lg">{plant.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{plant.daysGrowing} days growing</span>
                  </div>
                </div>
                {statusLabels[plant.status as keyof typeof statusLabels]}
              </div>
              <div className="mt-4 text-sm flex items-center gap-1.5">
                {statusIcons[plant.status as keyof typeof statusIcons]}
                <span>{plant.nextAction}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PlantPreview;
