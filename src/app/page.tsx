"use client"
import { cn } from "@/lib/utils";
import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function Home() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const {data} = useQuery(trpc.getWorkflows.queryOptions());
  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: () => {
      toast.message("job queued");
      queryClient.invalidateQueries(trpc.getWorkflows.queryOptions())
    }
  }));

  return (
    <div
      className={cn(
        "font-bold min-h-screen min-w-screen flex items-center justify-center"
      )}
    >
    {JSON.stringify(data)}
    <Button disabled={create.isPending} onClick={() => create.mutate()}>Create workflow</Button>
    </div>
  );
}
