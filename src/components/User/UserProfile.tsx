
import { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Bell, Edit, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const UserProfile = () => {
  const { user, isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  
  if (!isAuthenticated || !user) return null;
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" alt={user.name} />
            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
          </Avatar>
          <span className="sr-only">User profile</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>User Profile</DialogTitle>
          <DialogDescription>
            View and edit your profile information
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center py-4">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarImage src="/placeholder.svg" alt={user.name} />
            <AvatarFallback className="text-xl">{getInitials(user.name)}</AvatarFallback>
          </Avatar>
          
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-muted-foreground">{user.email}</p>
          
          <div className="flex gap-2 mt-2">
            <Badge variant="secondary" className="bg-farm-green-100 text-farm-green-700">
              {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
            </Badge>
          </div>
        </div>
        
        <div className="space-y-4 py-2">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="notifications" className="col-span-3">
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </div>
            </Label>
            <div className="flex justify-end">
              <Input 
                id="notifications" 
                type="checkbox" 
                className="h-4 w-4" 
                defaultChecked={user.preferences.notifications} 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="units" className="col-span-3">Units</Label>
            <div className="text-right">
              {user.preferences.measurementUnits === 'metric' ? 'Metric' : 'Imperial'}
            </div>
          </div>
        </div>
        
        <div className="flex justify-between mt-4">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Close
          </Button>
          <Button onClick={() => setIsOpen(false)}>
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserProfile;
