import prisma from "@/lib/database";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world", triggers: [{ event: "test/hello.world" }] },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");

    await step.run("create-workflow", () => {
        return prisma.workflow.create({
            data: {
                name: 'workflow-from-ingest'
            }
        })
    })
  },
);