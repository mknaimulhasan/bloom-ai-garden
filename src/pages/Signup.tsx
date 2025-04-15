
import { useState, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { Lightbulb, Lock, Mail, User, ArrowRight, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { register } = useAuth();

  const checkPasswordStrength = (pass: string) => {
    let strength = 0;
    if (pass.length >= 8) strength += 1;
    if (/[A-Z]/.test(pass)) strength += 1;
    if (/[0-9]/.test(pass)) strength += 1;
    if (/[^A-Za-z0-9]/.test(pass)) strength += 1;
    setPasswordStrength(strength);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (passwordStrength < 3) {
      toast({
        title: "Weak password",
        description: "Please use a stronger password with uppercase, numbers, and symbols",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }
    
    try {
      await register(name, email, password);
      toast({
        title: "Account created",
        description: "Your account has been created successfully",
      });
      navigate('/');
    } catch (error) {
      toast({
        title: "Registration failed",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-sidebar p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            <Lightbulb className="h-10 w-10 text-farm-green-500" />
            <span className="text-3xl font-display font-bold">Bloom.AI</span>
          </div>
        </div>
        
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Create Account</CardTitle>
            <CardDescription className="text-center">
              Enter your details to sign up for Bloom.AI
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      placeholder="name@example.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        checkPasswordStrength(e.target.value);
                      }}
                      className="pl-10"
                      required
                    />
                  </div>
                  <div className="mt-1">
                    <div className="flex gap-1 mb-1">
                      <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 1 ? 'bg-red-500' : 'bg-gray-200'}`}></div>
                      <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 2 ? 'bg-yellow-500' : 'bg-gray-200'}`}></div>
                      <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 3 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                      <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 4 ? 'bg-farm-green-500' : 'bg-gray-200'}`}></div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Password should be at least 8 characters with uppercase, numbers and symbols
                    </p>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-farm-green-600 hover:underline">
                Sign in
              </Link>
            </div>
            <div className="mt-2 text-center text-sm text-muted-foreground">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignupPage;
