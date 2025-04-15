import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export interface PlantType {
  id: number;
  name: string;
  variety: string;
  status: 'healthy' | 'attention' | 'unhealthy';
  planted: string;
  daysGrowing: number;
  nextAction: string;
  optimalConditions: {
    temperature: string;
    humidity: string;
    light: string;
    watering: string;
  };
  image: string;
}

interface AddPlantDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddPlant: (plant: Omit<PlantType, 'id'>) => void;
}

const AddPlantDialog = ({ open, onOpenChange, onAddPlant }: AddPlantDialogProps) => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [variety, setVariety] = useState('');
  const [status, setStatus] = useState<'healthy' | 'attention' | 'unhealthy'>('healthy');
  const [nextAction, setNextAction] = useState('');
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [light, setLight] = useState('');
  const [watering, setWatering] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !variety) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    const today = new Date().toISOString().split('T')[0];
    
    const newPlant: Omit<PlantType, 'id'> = {
      name,
      variety,
      status,
      planted: today,
      daysGrowing: 0,
      nextAction: nextAction || 'Monitor growth',
      optimalConditions: {
        temperature: temperature || '20-25°C',
        humidity: humidity || '60-70%',
        light: light || '12-16 hours',
        watering: watering || 'Regular',
      },
      image: `https://placehold.co/250x250/E1F5E6/3C9F56?text=${encodeURIComponent(name)}`
    };
    
    onAddPlant(newPlant);
    resetForm();
    onOpenChange(false);
    
    toast({
      title: "Plant Added",
      description: `${name} has been added to your plants.`,
    });
  };
  
  const resetForm = () => {
    setName('');
    setVariety('');
    setStatus('healthy');
    setNextAction('');
    setTemperature('');
    setHumidity('');
    setLight('');
    setWatering('');
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add New Plant</DialogTitle>
            <DialogDescription>
              Fill in the details to add a new plant to your collection.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-medium">Plant Name*</Label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="e.g., Basil" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="variety" className="font-medium">Variety*</Label>
              <Input 
                id="variety" 
                value={variety} 
                onChange={(e) => setVariety(e.target.value)} 
                placeholder="e.g., Sweet Genovese" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="status" className="font-medium">Status</Label>
              <Select value={status} onValueChange={(value) => setStatus(value as 'healthy' | 'attention' | 'unhealthy')}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="healthy">Healthy</SelectItem>
                  <SelectItem value="attention">Needs Attention</SelectItem>
                  <SelectItem value="unhealthy">Unhealthy</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="nextAction" className="font-medium">Next Action</Label>
              <Input 
                id="nextAction" 
                value={nextAction} 
                onChange={(e) => setNextAction(e.target.value)} 
                placeholder="e.g., Water in 2 days" 
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="temperature" className="font-medium">Temperature</Label>
                <Input 
                  id="temperature" 
                  value={temperature} 
                  onChange={(e) => setTemperature(e.target.value)} 
                  placeholder="e.g., 20-25°C" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="humidity" className="font-medium">Humidity</Label>
                <Input 
                  id="humidity" 
                  value={humidity} 
                  onChange={(e) => setHumidity(e.target.value)} 
                  placeholder="e.g., 60-70%" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="light" className="font-medium">Light</Label>
                <Input 
                  id="light" 
                  value={light} 
                  onChange={(e) => setLight(e.target.value)} 
                  placeholder="e.g., 12-16 hours" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="watering" className="font-medium">Watering</Label>
                <Input 
                  id="watering" 
                  value={watering} 
                  onChange={(e) => setWatering(e.target.value)} 
                  placeholder="e.g., Regular" 
                />
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Add Plant</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPlantDialog;
