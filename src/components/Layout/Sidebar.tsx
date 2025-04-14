
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, Home, Leaf, Settings, Thermometer, Droplets, Lightbulb, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Sensors', icon: Thermometer, path: '/sensors' },
    { name: 'Controls', icon: Droplets, path: '/controls' },
    { name: 'Plants', icon: Leaf, path: '/plants' },
    { name: 'Analytics', icon: BarChart3, path: '/analytics' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <div className="hidden md:flex h-full w-64 flex-col bg-sidebar px-3 py-4">
      <div className="flex items-center gap-3 px-2 py-4">
        <Lightbulb className="h-8 w-8 text-farm-green-100" />
        <span className="text-xl font-display text-white">Bloom.AI</span>
      </div>
      
      <nav className="mt-8 flex flex-col gap-1">
        {menuItems.map((item) => (
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
      </nav>
      
      <div className="mt-auto">
        <div className="rounded-lg bg-farm-green-600/30 p-4 text-sm text-white">
          <div className="flex items-center gap-2 mb-2">
            <Info className="h-4 w-4" />
            <span className="font-medium">Plant Tip</span>
          </div>
          <p>Basil thrives in temperatures between 70-80°F with moderate watering.</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
