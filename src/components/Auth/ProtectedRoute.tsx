
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const { toast } = useToast();
  
  useEffect(() => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please log in to access this page",
        variant: "destructive",
      });
    }
  }, [isAuthenticated, toast]);
  
  if (!isAuthenticated) {
    // Save the location they tried to access for redirecting after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return <Outlet />;
};

export default ProtectedRoute;
