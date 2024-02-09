import LoginForm from "@/components/forms/login-form";
import RegisterForm from "@/components/forms/register-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Auth() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-5 p-4 md:p-6 lg:p-8">
      <div className="w-[350px] space-y-1 text-center sm:w-[400px] md:w-[420px] lg:w-[450px]">
        <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">4at</h1>
        <p className="text-sm leading-tight text-muted-foreground lg:text-base">
          A modern chat app for the people who love to experiment with new
          things. Register today and claim your username!
        </p>
      </div>
      <Tabs
        defaultValue="login"
        className="w-[350px] sm:w-[400px] md:w-[420px] lg:w-[450px]"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Welcome Back!</CardTitle>
              <CardDescription>
                If you already have an account just login to start from where
                you left, if you're new just switch to register tab.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm className="space-y-3" />
            </CardContent>
            <CardFooter>
              <Button>Continue</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Create your account</CardTitle>
              <CardDescription>
                Thank you for considering us. Create a new account here or if
                you already have one switch to login tab.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RegisterForm className="space-y-2" />
            </CardContent>
            <CardFooter>
              <Button>Register</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
