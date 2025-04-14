
import { useState } from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Check, Clock, Cloud, CloudOff, Mail, Send, Shield, Smartphone, User } from 'lucide-react';
import { Label } from '@/components/ui/label';
import UserSettings from '@/components/Settings/UserSettings';
import { useAuth } from '@/contexts/AuthContext';

const SettingsPage = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [formValues, setFormValues] = useState({
    name: user?.name || 'John Doe',
    email: user?.email || 'john.doe@example.com',
    notifications: true,
    darkMode: false,
    dataBackup: true,
    mobileAlerts: true,
    timeZone: 'UTC',
    measurementUnits: 'metric',
  });
  
  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated successfully",
    });
  };
  
  const handleResetSettings = () => {
    toast({
      title: "Settings Reset",
      description: "Your preferences have been reset to default values",
    });
  };
  
  const handleSystemRestart = () => {
    toast({
      title: "System Restarting",
      description: "The system will restart shortly. This may take a few minutes.",
    });
  };
  
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">Settings</h1>
        <p className="text-muted-foreground">Configure your farming system</p>
      </div>
      
      <Tabs defaultValue="user" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-[500px] mb-6">
          <TabsTrigger value="user">User</TabsTrigger>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>
        
        <TabsContent value="user" className="space-y-6">
          <UserSettings />
        </TabsContent>
        
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>Manage your interface and notification settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Dark Mode</h3>
                  <p className="text-sm text-muted-foreground">Enable dark theme for the interface</p>
                </div>
                <Switch 
                  checked={formValues.darkMode}
                  onCheckedChange={(checked) => setFormValues({...formValues, darkMode: checked})}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Notifications</h3>
                  <p className="text-sm text-muted-foreground">Receive system notifications</p>
                </div>
                <Switch 
                  checked={formValues.notifications}
                  onCheckedChange={(checked) => setFormValues({...formValues, notifications: checked})}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Mobile Alerts</h3>
                  <p className="text-sm text-muted-foreground">Receive alerts on your phone</p>
                </div>
                <Switch 
                  checked={formValues.mobileAlerts}
                  onCheckedChange={(checked) => setFormValues({...formValues, mobileAlerts: checked})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="timeZone">Time Zone</Label>
                <Select 
                  value={formValues.timeZone}
                  onValueChange={(value) => setFormValues({...formValues, timeZone: value})}
                >
                  <SelectTrigger id="timeZone">
                    <SelectValue placeholder="Select time zone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="UTC">UTC</SelectItem>
                    <SelectItem value="EST">Eastern Time (ET)</SelectItem>
                    <SelectItem value="CST">Central Time (CT)</SelectItem>
                    <SelectItem value="MST">Mountain Time (MT)</SelectItem>
                    <SelectItem value="PST">Pacific Time (PT)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="units">Measurement Units</Label>
                <Select 
                  value={formValues.measurementUnits}
                  onValueChange={(value) => setFormValues({...formValues, measurementUnits: value})}
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
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleResetSettings}>Reset</Button>
              <Button onClick={handleSaveSettings}>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="system" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>System Configuration</CardTitle>
              <CardDescription>Manage your system settings and maintenance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Data Backup</h3>
                  <p className="text-sm text-muted-foreground">Automatically backup system data</p>
                </div>
                <Switch 
                  checked={formValues.dataBackup}
                  onCheckedChange={(checked) => setFormValues({...formValues, dataBackup: checked})}
                />
              </div>
              
              <div className="flex items-center justify-between p-2 rounded-md bg-farm-green-100 text-farm-green-700">
                <div className="flex items-center gap-2">
                  <Cloud className="h-5 w-5" />
                  <span className="text-sm font-medium">System is online</span>
                </div>
                <Button variant="ghost" size="sm" className="h-8">
                  <CloudOff className="h-4 w-4 mr-2" />
                  Disconnect
                </Button>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">System Information</h3>
                </div>
                <div className="space-y-2 rounded-md border p-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Software Version</span>
                    <span>v1.2.3</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Hardware Version</span>
                    <span>Mark II</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Last Updated</span>
                    <span>2023-03-15</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Storage</span>
                    <span>1.2 GB / 8 GB</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-2">
                <h3 className="font-medium mb-2">System Maintenance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Button variant="outline" className="justify-start" onClick={handleSystemRestart}>
                    <Clock className="h-4 w-4 mr-2" />
                    Restart System
                  </Button>
                  
                  <Button variant="outline" className="justify-start" onClick={() => {
                    toast({
                      title: "Firmware Update",
                      description: "Checking for updates...",
                    });
                  }}>
                    <Shield className="h-4 w-4 mr-2" />
                    Check for Updates
                  </Button>
                  
                  <Button variant="outline" className="justify-start" onClick={() => {
                    toast({
                      title: "Calibration Mode",
                      description: "System sensors are being calibrated",
                    });
                  }}>
                    <Check className="h-4 w-4 mr-2" />
                    Calibrate Sensors
                  </Button>
                  
                  <Button variant="outline" className="justify-start" onClick={() => {
                    toast({
                      title: "Data Export",
                      description: "System data is being exported",
                    });
                  }}>
                    <Send className="h-4 w-4 mr-2" />
                    Export Data
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Manage your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    value={formValues.name}
                    onChange={(e) => setFormValues({...formValues, name: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={formValues.email}
                    onChange={(e) => setFormValues({...formValues, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleResetSettings}>Cancel</Button>
              <Button onClick={handleSaveSettings}>Update Profile</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>Manage your security settings</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" onClick={() => {
                toast({
                  title: "Feature Coming Soon",
                  description: "Password management will be available in the next update",
                });
              }}>
                Change Password
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default SettingsPage;
