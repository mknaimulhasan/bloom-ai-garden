
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Droplets, Fan, Lightbulb, Sprout, Thermometer } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ControlsPage = () => {
  const { toast } = useToast();
  
  const [lightIntensity, setLightIntensity] = useState(80);
  const [temperature, setTemperature] = useState(24);
  const [fanSpeed, setFanSpeed] = useState(50);
  const [waterAmount, setWaterAmount] = useState(65);
  
  const [autoLight, setAutoLight] = useState(true);
  const [autoTemp, setAutoTemp] = useState(true);
  const [autoFan, setAutoFan] = useState(true);
  const [autoWater, setAutoWater] = useState(true);
  
  const handleAutoToggle = (system: string, value: boolean) => {
    switch (system) {
      case 'light':
        setAutoLight(value);
        break;
      case 'temp':
        setAutoTemp(value);
        break;
      case 'fan':
        setAutoFan(value);
        break;
      case 'water':
        setAutoWater(value);
        break;
    }
    
    toast({
      title: `${value ? 'Enabled' : 'Disabled'} auto mode`,
      description: `${system.charAt(0).toUpperCase() + system.slice(1)} system is now ${value ? 'in automatic mode' : 'in manual control'}`,
    });
  };
  
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">System Controls</h1>
        <p className="text-muted-foreground">Manage your growing environment</p>
      </div>
      
      <Tabs defaultValue="manual" className="w-full mb-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="manual">Manual Controls</TabsTrigger>
          <TabsTrigger value="schedules">Schedules</TabsTrigger>
        </TabsList>
        
        <TabsContent value="manual" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Lighting Control */}
            <ControlCard
              title="Lighting"
              description="Adjust grow light intensity"
              icon={<Lightbulb className="h-5 w-5 text-amber-500" />}
              isAuto={autoLight}
              onAutoChange={(value) => handleAutoToggle('light', value)}
              value={lightIntensity}
              onChange={setLightIntensity}
              min={0}
              max={100}
              step={5}
              unit="%"
              actionLabel="Test Lights"
              onAction={() => {
                toast({
                  title: "Light Test Activated",
                  description: "Running a 10-second light test at full intensity",
                });
              }}
            />
            
            {/* Temperature Control */}
            <ControlCard
              title="Temperature"
              description="Set target temperature"
              icon={<Thermometer className="h-5 w-5 text-red-500" />}
              isAuto={autoTemp}
              onAutoChange={(value) => handleAutoToggle('temp', value)}
              value={temperature}
              onChange={setTemperature}
              min={18}
              max={30}
              step={0.5}
              unit="°C"
              actionLabel="Reset"
              onAction={() => {
                setTemperature(24);
                toast({
                  title: "Temperature Reset",
                  description: "Temperature target reset to 24°C",
                });
              }}
            />
            
            {/* Fan Control */}
            <ControlCard
              title="Ventilation"
              description="Adjust air circulation"
              icon={<Fan className="h-5 w-5 text-blue-500" />}
              isAuto={autoFan}
              onAutoChange={(value) => handleAutoToggle('fan', value)}
              value={fanSpeed}
              onChange={setFanSpeed}
              min={0}
              max={100}
              step={5}
              unit="%"
              actionLabel="Boost"
              onAction={() => {
                setFanSpeed(100);
                toast({
                  title: "Ventilation Boost",
                  description: "Running fans at 100% for 5 minutes",
                });
              }}
            />
            
            {/* Watering Control */}
            <ControlCard
              title="Irrigation"
              description="Set watering amount"
              icon={<Droplets className="h-5 w-5 text-sky-500" />}
              isAuto={autoWater}
              onAutoChange={(value) => handleAutoToggle('water', value)}
              value={waterAmount}
              onChange={setWaterAmount}
              min={0}
              max={100}
              step={5}
              unit="%"
              actionLabel="Water Now"
              onAction={() => {
                toast({
                  title: "Manual Watering",
                  description: `Manual watering cycle started at ${waterAmount}% volume`,
                });
              }}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="schedules" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>System Schedules</CardTitle>
              <CardDescription>Configure automated schedules for your system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-center text-muted-foreground py-12">
                  <Sprout className="h-8 w-8 mx-auto mb-4 text-farm-green-400" />
                  Schedule configuration will be available in the next update
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Card>
        <CardHeader>
          <CardTitle>Automation Settings</CardTitle>
          <CardDescription>Configure global automation behavior</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">AI-assisted growing</h3>
                <p className="text-sm text-muted-foreground">Let AI optimize growing conditions</p>
              </div>
              <Switch id="ai-mode" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Alert notifications</h3>
                <p className="text-sm text-muted-foreground">Receive alerts for critical conditions</p>
              </div>
              <Switch id="alerts" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Night mode</h3>
                <p className="text-sm text-muted-foreground">Reduce light activity during night hours</p>
              </div>
              <Switch id="night-mode" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Power saving</h3>
                <p className="text-sm text-muted-foreground">Optimize energy usage when possible</p>
              </div>
              <Switch id="power-save" defaultChecked />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button variant="outline">Reset Defaults</Button>
          <Button onClick={() => {
            toast({
              title: "Settings Saved",
              description: "Your automation settings have been updated",
            });
          }}>Save Settings</Button>
        </CardFooter>
      </Card>
    </DashboardLayout>
  );
};

interface ControlCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isAuto: boolean;
  onAutoChange: (value: boolean) => void;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  unit: string;
  actionLabel: string;
  onAction: () => void;
}

const ControlCard = ({
  title,
  description,
  icon,
  isAuto,
  onAutoChange,
  value,
  onChange,
  min,
  max,
  step,
  unit,
  actionLabel,
  onAction
}: ControlCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {icon}
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Auto</span>
            <Switch 
              checked={isAuto} 
              onCheckedChange={onAutoChange} 
            />
          </div>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm">Min</span>
            <span className="text-2xl font-semibold">{value}{unit}</span>
            <span className="text-sm">Max</span>
          </div>
          <Slider
            value={[value]}
            min={min}
            max={max}
            step={step}
            disabled={isAuto}
            onValueChange={(vals) => onChange(vals[0])}
            className={isAuto ? "opacity-50" : ""}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onAction} 
          className="w-full"
          variant="outline"
          disabled={isAuto}
        >
          {actionLabel}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ControlsPage;
