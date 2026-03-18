import { z } from 'zod';
import { baseProcedure, createTRPCRouter, protectedProcedure } from '../init';
import prisma from '@/lib/database';
 
export const appRouter = createTRPCRouter({
  getUsers: protectedProcedure
    .query(async ({ctx}) => {
        const userId = ctx.auth.user.id;
      const users = await prisma.user.findMany({
        where: {
            id: userId
        }
      });
      return users;
    }),
});
 
// export type definition of API
export type AppRouter = typeof appRouter;