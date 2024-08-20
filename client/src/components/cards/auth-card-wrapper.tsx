import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type AuthCardWrapperProps = {
  children: React.ReactNode;
  title: string;
  description: string;
  footer: string;
};

export default function AuthCardWrapper({
  children,
  description,
  title,
  footer,
}: AuthCardWrapperProps) {
  return (
    <Card>
      <CardHeader className="select-none">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        {footer}
      </CardFooter>
    </Card>
  );
}
