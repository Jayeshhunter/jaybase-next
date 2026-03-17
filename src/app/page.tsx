import { Button } from "@/components/ui/button";
import prisma from "@/lib/database";
import { cn } from "@/lib/utils";

export default async function Home() {
  const users = await prisma.user.findMany();

  return <div className={cn("text-red-500 font-bold")}>hello
  <Button variant="outline">{JSON.stringify(users)}</Button>
  </div>;
}
