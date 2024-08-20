import LoginForm from "@/components/forms/login-form";
import RegisterForm from "@/components/forms/register-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Auth() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-5 p-4 md:p-6 lg:p-8">
      <div className="w-[350px] space-y-1 text-center sm:w-[400px] md:w-[420px] lg:w-[450px]">
        <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">Ch88r</h1>
        <p className="text-sm leading-tight text-muted-foreground lg:text-base">
          For people who loves to connect and chat!
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
          <LoginForm />
        </TabsContent>
        <TabsContent value="register">
          <RegisterForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
