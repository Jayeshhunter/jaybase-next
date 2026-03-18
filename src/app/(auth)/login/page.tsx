import LoginForm from "@/features/auth/components/login-form";
import { requireUnauth } from "@/lib/auth-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Login() {
    await requireUnauth();

    return <LoginForm />;
}