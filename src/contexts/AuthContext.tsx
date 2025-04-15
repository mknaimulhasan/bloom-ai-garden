
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useTheme } from '@/contexts/ThemeContext';

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
  register: (name: string, email: string, password: string) => Promise<void>;
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

// Enhanced security with proper password hashing
const hashPassword = (password: string): string => {
  // In a real app, this would use a proper hashing library like bcrypt
  // This is a simple mock for demonstration purposes
  return btoa(password + "salt");
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();
  const { setTheme } = useTheme();
  
  // Check for saved session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('bloomai_user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        
        // Set theme based on user preference
        if (parsedUser.preferences.darkMode) {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      } catch (error) {
        localStorage.removeItem('bloomai_user');
      }
    }
  }, [setTheme]);

  const login = async (email: string, password: string) => {
    try {
      // In a real application, this would be an API call
      if (email && password) {
        // Simulate loading
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const hashedPassword = hashPassword(password);
        
        // For demo purposes, we accept any credentials
        // In a real app, we would verify against stored credentials
        
        // Set user
        setUser(mockUser);
        
        // Set theme based on user preference
        if (mockUser.preferences.darkMode) {
          setTheme('dark');
        } else {
          setTheme('light');
        }
        
        // Save to localStorage for persistence (in a real app, would use httpOnly cookies)
        localStorage.setItem('bloomai_user', JSON.stringify(mockUser));
        
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
  
  const register = async (name: string, email: string, password: string) => {
    try {
      // In a real application, this would be an API call to register a new user
      if (name && email && password) {
        // Simulate loading
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const hashedPassword = hashPassword(password);
        
        // Create a new user object
        const newUser: User = {
          id: Math.random().toString(36).substring(2, 9), // Simple random ID
          name,
          email,
          role: 'user', // Default role for new users
          preferences: {
            notifications: true,
            darkMode: false,
            measurementUnits: 'metric',
          },
        };
        
        // Set user
        setUser(newUser);
        
        // Set theme based on user preference (default is light)
        setTheme('light');
        
        // Save to localStorage for persistence
        localStorage.setItem('bloomai_user', JSON.stringify(newUser));
        
        toast({
          title: "Registration successful",
          description: `Welcome to Bloom.AI, ${name}!`,
        });
      } else {
        throw new Error("All fields are required");
      }
    } catch (error) {
      toast({
        title: "Registration failed",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('bloomai_user');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  const updateUserPreferences = (preferences: Partial<User['preferences']>) => {
    if (user) {
      const updatedUser = {
        ...user,
        preferences: {
          ...user.preferences,
          ...preferences,
        },
      };
      
      // Update state
      setUser(updatedUser);
      
      // Update theme if darkMode preference changed
      if (preferences.darkMode !== undefined) {
        setTheme(preferences.darkMode ? 'dark' : 'light');
      }
      
      // Save to localStorage
      localStorage.setItem('bloomai_user', JSON.stringify(updatedUser));
      
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
        register,
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
