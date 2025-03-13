import Logo from "@/components/Logo";
import Text from "@/components/Text";
import Image from "next/image";
import DontHaveAccount from "./DontHaveAccount";
import LoginForm from "@/components/forms/LoginForm";
import { ArrowLeftCircle } from "lucide-react";
import Link from "@/components/Link";

export default function SignInPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <div className="absolute left-5 top-5">
        <Link
          href="/"
          variant="plain"
          className="rounded-full block p-2 bg-gray-200 hover:bg-gray-100 fill-gray-500"
          ariaLabel="go home link"
        >
          <ArrowLeftCircle className="text-gray-500 sm:h-8" width={"100%"} />
        </Link>
      </div>
      <div className="  w-full max-w-6xl rounded-3xl shadow-sm overflow-hidden flex flex-col md:flex-row">
        {/* Left side with illustration */}
        <div className="w-full hidden  md:w-1/2 bg-[#f8f7f5] p-8 md:flex flex-col items-center justify-center relative">
          {/* Logo */}
          <div className="h-16 w-16 flex flex-col justify-center items-center">
            <Logo type="svg" />
            <Text variant="p">Bohío</Text>
          </div>

          {/* Main illustration */}
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/room.webp"
              alt="Robot illustration"
              width={400}
              height={400}
              className="object-contain rounded-2xl"
              priority
            />
          </div>
        </div>

        {/* Right side with form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col">
          {/* Sign up link */}
          <DontHaveAccount />
          {/* Sign in form */}
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
