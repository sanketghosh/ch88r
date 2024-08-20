import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type AuthCardWrapperProps = {
  children: React.ReactNode;
  title: string;
  description: string;
};

export default function AuthCardWrapper({
  children,
  description,
  title,
}: AuthCardWrapperProps) {
  return (
    <Card>
      <CardHeader className="select-none">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
