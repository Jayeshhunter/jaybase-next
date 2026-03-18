import Link from "next/link";
import Image from "next/image";

const Layout = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="min-h-svh flex flex-col items-center justify-center gap-6 p-6 md:p-10">
            <Link href="/" className="flex items-center gap-2 self-center font-medium">
                <Image src={"/logos/logo.svg"} alt="jaybase" height={30} width={30}/>
                Jaybase
            </Link>
            {children}
        </div>
    )
};

export default Layout;