
import { BellIcon, MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import UserProfile from '@/components/User/UserProfile';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
  const { toast } = useToast();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  
  const showNotification = () => {
    toast({
      title: "System Update",
      description: "Your basil plants need watering in the next 2 hours.",
    });
  };
  
  const handleLogin = () => {
    navigate('/login');
  };
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Button variant="outline" size="icon" className="md:hidden">
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        
        <div className="ml-auto flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={showNotification}
              >
                <BellIcon className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-farm-green-500" />
              </Button>
              
              <UserProfile />
              
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Button size="sm" onClick={handleLogin}>
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopBar;
