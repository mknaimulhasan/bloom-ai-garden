
import { useState } from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Clock, Edit, Leaf, Plus, Search, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock plant data
const plantsData = [
  {
    id: 1,
    name: 'Basil',
    variety: 'Sweet Genovese',
    status: 'healthy',
    planted: '2023-03-15',
    daysGrowing: 15,
    nextAction: 'Harvesting in 5 days',
    optimalConditions: {
      temperature: '20-25°C',
      humidity: '60-70%',
      light: '12-16 hours',
      watering: 'Regular'
    },
    image: 'https://placehold.co/250x250/E1F5E6/3C9F56?text=Basil'
  },
  {
    id: 2,
    name: 'Cherry Tomatoes',
    variety: 'Sun Gold',
    status: 'healthy',
    planted: '2023-03-02',
    daysGrowing: 28,
    nextAction: 'Add nutrients today',
    optimalConditions: {
      temperature: '21-27°C',
      humidity: '65-75%',
      light: '14-16 hours',
      watering: 'Moderate'
    },
    image: 'https://placehold.co/250x250/E1F5E6/3C9F56?text=Tomato'
  },
  {
    id: 3,
    name: 'Lettuce',
    variety: 'Butterhead',
    status: 'attention',
    planted: '2023-03-18',
    daysGrowing: 12,
    nextAction: 'Check leaves for spots',
    optimalConditions: {
      temperature: '15-22°C',
      humidity: '50-70%',
      light: '10-12 hours',
      watering: 'Regular'
    },
    image: 'https://placehold.co/250x250/E1F5E6/3C9F56?text=Lettuce'
  },
  {
    id: 4,
    name: 'Mint',
    variety: 'Spearmint',
    status: 'healthy',
    planted: '2023-03-20',
    daysGrowing: 10,
    nextAction: 'Pruning recommended',
    optimalConditions: {
      temperature: '18-26°C',
      humidity: '55-70%',
      light: '12-14 hours',
      watering: 'Generous'
    },
    image: 'https://placehold.co/250x250/E1F5E6/3C9F56?text=Mint'
  },
];

const statusColors = {
  healthy: 'bg-farm-green-100 text-farm-green-700 hover:bg-farm-green-200',
  attention: 'bg-amber-100 text-amber-700 hover:bg-amber-200',
  unhealthy: 'bg-red-100 text-red-700 hover:bg-red-200',
};

const statusText = {
  healthy: 'Healthy',
  attention: 'Needs Attention',
  unhealthy: 'Unhealthy',
};

const PlantsPage = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlant, setSelectedPlant] = useState<number | null>(null);
  
  const filteredPlants = plantsData.filter(plant => 
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plant.variety.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const addNewPlant = () => {
    toast({
      title: "Feature Coming Soon",
      description: "Plant addition will be available in the next update",
    });
  };
  
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-1">Plants Management</h1>
          <p className="text-muted-foreground">Monitor and manage your plants</p>
        </div>
        <Button onClick={addNewPlant}>
          <Plus className="h-4 w-4 mr-2" />
          Add Plant
        </Button>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/3 space-y-6">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search plants..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Tabs defaultValue="all" className="w-[300px]">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="healthy">Healthy</TabsTrigger>
                <TabsTrigger value="attention">Attention</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPlants.map((plant) => (
              <Card 
                key={plant.id} 
                className={`cursor-pointer transition-all duration-200 hover:shadow-md ${selectedPlant === plant.id ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setSelectedPlant(plant.id)}
              >
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="h-16 w-16 rounded-md overflow-hidden shrink-0">
                      <img 
                        src={plant.image} 
                        alt={plant.name} 
                        className="h-full w-full object-cover" 
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{plant.name}</h3>
                          <p className="text-sm text-muted-foreground">{plant.variety}</p>
                        </div>
                        <Badge className={statusColors[plant.status as keyof typeof statusColors]}>
                          {statusText[plant.status as keyof typeof statusText]}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{plant.daysGrowing} days growing</span>
                      </div>
                      
                      <p className="text-sm">{plant.nextAction}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="w-full lg:w-1/3">
          {selectedPlant ? (
            <Card className="h-full">
              {(() => {
                const plant = plantsData.find(p => p.id === selectedPlant);
                if (!plant) return null;
                
                return (
                  <>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle>{plant.name}</CardTitle>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </div>
                      <CardDescription>{plant.variety}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="aspect-square rounded-md overflow-hidden max-w-[250px] mx-auto">
                        <img 
                          src={plant.image} 
                          alt={plant.name} 
                          className="h-full w-full object-cover" 
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-muted-foreground">Planted</p>
                          <p className="font-medium">{plant.planted}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Days Growing</p>
                          <p className="font-medium">{plant.daysGrowing} days</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Status</p>
                          <Badge className={statusColors[plant.status as keyof typeof statusColors]}>
                            {statusText[plant.status as keyof typeof statusText]}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Next Action</p>
                          <p className="font-medium">{plant.nextAction}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-1.5">
                          <Leaf className="h-4 w-4 text-farm-green-500" />
                          Optimal Growing Conditions
                        </h4>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div>
                            <p className="text-muted-foreground">Temperature</p>
                            <p className="font-medium">{plant.optimalConditions.temperature}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Humidity</p>
                            <p className="font-medium">{plant.optimalConditions.humidity}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Light</p>
                            <p className="font-medium">{plant.optimalConditions.light}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Watering</p>
                            <p className="font-medium">{plant.optimalConditions.watering}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </>
                );
              })()}
            </Card>
          ) : (
            <Card className="h-full flex flex-col items-center justify-center p-6 text-center">
              <Leaf className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No Plant Selected</h3>
              <p className="text-muted-foreground">Select a plant from the list to view details</p>
            </Card>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PlantsPage;
