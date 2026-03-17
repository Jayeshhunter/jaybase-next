"use client";


import { useTRPC } from "@/trpc/client";
import { useSuspenseQueries, useSuspenseQuery } from "@tanstack/react-query";

const Client = () => {
    const trpc = useTRPC();

    const {data: users} = useSuspenseQuery(trpc.getUsers.queryOptions());
    return (
        <div>
        <h1>Client Component : {JSON.stringify(users)}</h1>
        </div>
    );
};

export default Client;