import Logo from "@/components/Logo";
import Text from "@/components/Text";
import Image from "next/image";
import DontHaveAccount from "./DontHaveAccount";
import LoginForm from "@/components/forms/LoginForm";
import { ArrowLeftCircle, HomeIcon } from "lucide-react";
import Link from "@/components/Link";

export default function SignInPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <div className="absolute sm:hidden left-5 top-5">
        <Link
          href="/"
          variant="plain"
          className="rounded-full block p-2 bg-gray-200 hover:bg-gray-100 fill-gray-500"
          ariaLabel="go home link"
        >
          <HomeIcon className="text-gray-500 sm:h-8" width={"100%"} />
        </Link>
      </div>
      <div className="relative  w-full max-w-6xl rounded-3xl shadow-sm overflow-hidden flex flex-col md:flex-row">
        <div className="absolute z-30 left-5 top-5">
          <Link
            href="/"
            variant="plain"
            className="rounded-full hidden sm:block p-1 bg-gray-200 hover:bg-gray-100 fill-gray-500"
            ariaLabel="go home link"
          >
            <HomeIcon className="text-gray-500 sm:h-8" width={"100%"} />
          </Link>
        </div>
        <div className="w-full hidden  md:w-1/2 bg-[#f8f7f5] p-8 md:flex flex-col items-center justify-center relative">
          <div className="h-16 w-16 flex flex-col justify-center items-center">
            <Logo type="svg" />
            <Text variant="p">Bohío</Text>
          </div>
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
        <div className="w-full md:w-1/2 p-8 flex gap-4 flex-col">
          <LoginForm />
          <DontHaveAccount />
        </div>
      </div>
    </div>
  );
}
