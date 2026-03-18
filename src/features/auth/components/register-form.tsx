"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import {useForm} from "react-hook-form";
import { useRouter } from "next/navigation";
import {z} from "zod";
import {toast} from 'sonner';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import {cn} from "@/lib/utils";
import { authClient } from "@/lib/auth-client";

const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"]
});

type FormValues = z.infer<typeof formSchema>;

export default function RegisterForm() {
    const router = useRouter();
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: ""
        },
      });

      const onSubmit = async (val: any) => {
        await authClient.signUp.email({
            name: val.email,
            email: val.email,
            password: val.password,
            callbackURL: '/'
        }, {
            onSuccess: () => {
                router.push('/')
            },
            onError: (ctx) => {
                toast.error(ctx.error.message);
            }
        })
      }

    return (
        <div className="w-1/3">
            <Card className={cn("w-full")}>
                <CardHeader>
                    <CardTitle>Register</CardTitle>
                    <CardDescription>Enter your credentials to get started.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form className="flex flex-col gap-6" onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <div className="flex flex-col gap-6">
                            <Button variant={'outline'} className='w-full' type="button">
                            <Image alt="github" src={"/logos/github.svg"} width={20} height={20}/>
                                Continue with Github
                            </Button>
                            <Button variant={'outline'} className='w-full' type="button">
                            <Image alt="google" src={"/logos/google.svg"} width={20} height={20}/>
                                Continue with Google
                            </Button>
                        </div>
                        {/* <FormField
                        control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Enter your name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> */}
                        <FormField
                        control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                        control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Enter your password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                        control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Confirm your password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className={cn("w-full")}>Sign up</Button>
                        <div>
                            Already have an account? {"   "}
                            <Link href='/login' className="underline underline-offset-4">Sign In</Link>
                        </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}