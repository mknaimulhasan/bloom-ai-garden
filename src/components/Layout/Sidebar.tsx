
import { Link, useLocation } from 'react-router-dom';
import { AreaChart, BarChart3, Brain, Droplets, Home, Info, Leaf, LightbulbIcon, LogOut, Microscope, Settings, Thermometer } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const Sidebar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  
  const mainMenuItems = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Sensors', icon: Thermometer, path: '/sensors' },
    { name: 'Controls', icon: Droplets, path: '/controls' },
    { name: 'Plants', icon: Leaf, path: '/plants' },
    { name: 'Analytics', icon: BarChart3, path: '/analytics' },
  ];
  
  const advancedMenuItems = [
    { name: 'AI Insights', icon: Brain, path: '/ai-insights', badge: 'New' },
    { name: 'Monitoring', icon: Microscope, path: '/monitoring', badge: 'Beta' },
    { name: 'Yield Metrics', icon: AreaChart, path: '/yield' },
  ];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="hidden md:flex h-full w-64 flex-col bg-sidebar px-3 py-4">
      <div className="flex items-center gap-3 px-2 py-4">
        <LightbulbIcon className="h-8 w-8 text-farm-green-100" />
        <span className="text-xl font-display text-white">Bloom.AI</span>
      </div>
      
      {user && (
        <div className="mt-4 px-2">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-sidebar-accent">
              <AvatarImage src="/placeholder.svg" alt={user.name} />
              <AvatarFallback className="bg-sidebar-accent text-sidebar-foreground">
                {getInitials(user.name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-white">{user.name}</p>
              <Badge variant="outline" className="bg-sidebar-accent/30 mt-1 text-xs font-normal text-sidebar-foreground">
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
              </Badge>
            </div>
          </div>
        </div>
      )}
      
      <nav className="mt-8 flex flex-col gap-1">
        <div className="px-3 py-2 text-xs uppercase text-sidebar-foreground/70">
          Main
        </div>
        {mainMenuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sidebar-foreground transition-colors",
              location.pathname === item.path ? "bg-sidebar-accent" : "hover:bg-sidebar-accent/50"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </Link>
        ))}
        
        <div className="mt-6 px-3 py-2 text-xs uppercase text-sidebar-foreground/70 flex items-center justify-between">
          <span>Advanced Features</span>
          <Badge variant="outline" className="bg-farm-green-600/30 text-farm-green-100 text-xs">New</Badge>
        </div>
        
        {advancedMenuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sidebar-foreground transition-colors",
              location.pathname === item.path ? "bg-sidebar-accent" : "hover:bg-sidebar-accent/50"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
            {item.badge && (
              <Badge className="ml-auto bg-farm-green-600/30 text-farm-green-100 text-[10px]">
                {item.badge}
              </Badge>
            )}
          </Link>
        ))}
      </nav>
      
      <div className="mt-auto flex flex-col gap-4">
        <div className="rounded-lg bg-farm-green-600/30 p-4 text-sm text-white">
          <div className="flex items-center gap-2 mb-2">
            <Info className="h-4 w-4" />
            <span className="font-medium">Plant Tip</span>
          </div>
          <p>Basil thrives in temperatures between 70-80°F with moderate watering.</p>
        </div>
        
        <Button 
          variant="ghost" 
          className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
          onClick={logout}
        >
          <LogOut className="h-5 w-5 mr-2" />
          <span>Logout</span>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
