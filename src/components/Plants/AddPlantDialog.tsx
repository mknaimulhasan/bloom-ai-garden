
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

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
  const [formData, setFormData] = useState({
    name: '',
    variety: '',
    status: 'healthy' as const,
    planted: new Date().toISOString().split('T')[0],
    optimalTemp: '',
    optimalHumidity: '',
    optimalLight: '',
    optimalWater: '',
    nextAction: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, field: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Calculate days growing
    const plantedDate = new Date(formData.planted);
    const today = new Date();
    const daysGrowing = Math.floor((today.getTime() - plantedDate.getTime()) / (1000 * 60 * 60 * 24));
    
    const newPlant: Omit<PlantType, 'id'> = {
      name: formData.name,
      variety: formData.variety,
      status: formData.status,
      planted: formData.planted,
      daysGrowing,
      nextAction: formData.nextAction,
      optimalConditions: {
        temperature: formData.optimalTemp,
        humidity: formData.optimalHumidity,
        light: formData.optimalLight,
        watering: formData.optimalWater,
      },
      image: `https://placehold.co/250x250/E1F5E6/3C9F56?text=${encodeURIComponent(formData.name)}`,
    };
    
    onAddPlant(newPlant);
    
    // Reset form
    setFormData({
      name: '',
      variety: '',
      status: 'healthy',
      planted: new Date().toISOString().split('T')[0],
      optimalTemp: '',
      optimalHumidity: '',
      optimalLight: '',
      optimalWater: '',
      nextAction: '',
    });
    
    onOpenChange(false);
    
    toast({
      title: "Plant Added",
      description: `${formData.name} has been added to your collection.`,
    });
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Add New Plant</DialogTitle>
          <DialogDescription>
            Enter the details of your new plant to add it to your collection.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Plant Name</Label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Basil"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="variety">Variety</Label>
              <Input 
                id="variety" 
                name="variety" 
                value={formData.variety}
                onChange={handleChange}
                placeholder="e.g., Sweet Genovese"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="status">Health Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) => handleSelectChange(value, 'status')}
              >
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="healthy">Healthy</SelectItem>
                  <SelectItem value="attention">Needs Attention</SelectItem>
                  <SelectItem value="unhealthy">Unhealthy</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="planted">Date Planted</Label>
              <Input 
                id="planted" 
                name="planted" 
                type="date" 
                value={formData.planted}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="nextAction">Next Action</Label>
            <Input 
              id="nextAction" 
              name="nextAction" 
              value={formData.nextAction}
              onChange={handleChange}
              placeholder="e.g., Harvest in 1 week"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label>Optimal Growing Conditions</Label>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="optimalTemp" className="text-xs">Temperature</Label>
                <Input 
                  id="optimalTemp" 
                  name="optimalTemp" 
                  value={formData.optimalTemp}
                  onChange={handleChange}
                  placeholder="e.g., 20-25°C"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="optimalHumidity" className="text-xs">Humidity</Label>
                <Input 
                  id="optimalHumidity" 
                  name="optimalHumidity" 
                  value={formData.optimalHumidity}
                  onChange={handleChange}
                  placeholder="e.g., 60-70%"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="optimalLight" className="text-xs">Light</Label>
                <Input 
                  id="optimalLight" 
                  name="optimalLight" 
                  value={formData.optimalLight}
                  onChange={handleChange}
                  placeholder="e.g., 12-16 hours"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="optimalWater" className="text-xs">Watering</Label>
                <Input 
                  id="optimalWater" 
                  name="optimalWater" 
                  value={formData.optimalWater}
                  onChange={handleChange}
                  placeholder="e.g., Regular"
                  required
                />
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button type="submit">Add Plant</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPlantDialog;
