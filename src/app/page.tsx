import { cn } from "@/lib/utils";
import { caller } from "@/trpc/server";
import { Button } from "@/components/ui/button";
import { requireAuth } from "@/lib/auth-utils";

export default async function Home() {
  await requireAuth();
  // const {data}  = authClient.useSession();
  const data = await caller.getUsers();

  return (
    <div
      className={cn(
        "font-bold min-h-screen min-w-screen flex items-center justify-center"
      )}
    >
    {JSON.stringify(data)}
    </div>
  );
}
