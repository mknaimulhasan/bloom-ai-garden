
import { BellIcon, MenuIcon, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const TopBar = () => {
  const { toast } = useToast();
  
  const showNotification = () => {
    toast({
      title: "System Update",
      description: "Your basil plants need watering in the next 2 hours.",
    });
  };
  
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Button variant="outline" size="icon" className="md:hidden">
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        
        <div className="ml-auto flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={showNotification}
          >
            <BellIcon className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-farm-green-500" />
          </Button>
          
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
            <span className="sr-only">User profile</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
