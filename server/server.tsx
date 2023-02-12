import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

const appRouter = t.router({
  greeting: t.procedure
    .input((name: string) => name)
    .query((req) => {
      const { input } = req;
      return `Hello ${input}. Welcome to tRPC Procedure Call!`;
    }),
});

export type AppRouter = typeof appRouter;
