
import { createContext, useContext, useState, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';

type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  preferences: {
    notifications: boolean;
    darkMode: boolean;
    measurementUnits: 'metric' | 'imperial';
  };
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUserPreferences: (preferences: Partial<User['preferences']>) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user for demonstration
const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'admin',
  preferences: {
    notifications: true,
    darkMode: false,
    measurementUnits: 'metric',
  },
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();

  const login = async (email: string, password: string) => {
    try {
      // In a real application, this would be an API call
      if (email && password) {
        // Simulate loading
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Set user
        setUser(mockUser);
        
        toast({
          title: "Login successful",
          description: `Welcome back, ${mockUser.name}!`,
        });
      } else {
        throw new Error("Email and password are required");
      }
    } catch (error) {
      toast({
        title: "Login failed",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  const updateUserPreferences = (preferences: Partial<User['preferences']>) => {
    if (user) {
      setUser({
        ...user,
        preferences: {
          ...user.preferences,
          ...preferences,
        },
      });
      
      toast({
        title: "Preferences updated",
        description: "Your preferences have been saved",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        updateUserPreferences,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
