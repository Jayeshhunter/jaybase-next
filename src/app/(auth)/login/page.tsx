import LoginForm from "@/features/auth/components/login-form";
import { requireUnauth } from "@/lib/auth-utils";

export default async function Login() {
    await requireUnauth();

    return (
        // <div className="min-h-screen flex items-center justify-center" style={{minWidth: '1000px'}}>
        <div className="min-h-screen flex items-center justify-center">
           <LoginForm />
        </div>
    );
}