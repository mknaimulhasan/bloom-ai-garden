
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Label } from '@/components/ui/label';
import { Bell, Moon, Sun } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const UserSettings = () => {
  const { user, updateUserPreferences } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { toast } = useToast();
  
  const [notifications, setNotifications] = useState(user?.preferences.notifications || false);
  const [darkMode, setDarkMode] = useState(theme === 'dark');
  const [units, setUnits] = useState<'metric' | 'imperial'>(user?.preferences.measurementUnits || 'metric');
  
  // Sync dark mode with theme context
  useEffect(() => {
    setDarkMode(theme === 'dark');
  }, [theme]);
  
  const handleDarkModeChange = (checked: boolean) => {
    setDarkMode(checked);
    toggleTheme();
  };
  
  const handleSaveSettings = () => {
    updateUserPreferences({
      notifications,
      darkMode,
      measurementUnits: units,
    });
    
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated successfully",
    });
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Preferences</CardTitle>
        <CardDescription>Customize your experience</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4 text-muted-foreground" />
            <div>
              <h3 className="font-medium">Notifications</h3>
              <p className="text-sm text-muted-foreground">
                Receive alerts about plant conditions
              </p>
            </div>
          </div>
          <Switch 
            checked={notifications}
            onCheckedChange={setNotifications}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {darkMode ? (
              <Moon className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Sun className="h-4 w-4 text-muted-foreground" />
            )}
            <div>
              <h3 className="font-medium">Dark Mode</h3>
              <p className="text-sm text-muted-foreground">
                Switch between light and dark themes
              </p>
            </div>
          </div>
          <Switch 
            checked={darkMode}
            onCheckedChange={handleDarkModeChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="units">Measurement Units</Label>
          <Select 
            value={units}
            onValueChange={(value: 'metric' | 'imperial') => setUnits(value)}
          >
            <SelectTrigger id="units">
              <SelectValue placeholder="Select units" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="metric">Metric (°C, cm, L)</SelectItem>
              <SelectItem value="imperial">Imperial (°F, in, gal)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSaveSettings}>
          Save Preferences
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserSettings;
