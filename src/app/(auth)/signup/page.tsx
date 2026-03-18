import RegisterForm from "@/features/auth/components/register-form";
import { requireUnauth } from "@/lib/auth-utils";

export default async function Signup() {
    await requireUnauth();
    return (
        // <div className="min-h-screen flex items-center justify-center" style={{minWidth: '1000px'}}>
        <div className="min-h-screen flex items-center justify-center">
           <RegisterForm />
        </div>
    );
}