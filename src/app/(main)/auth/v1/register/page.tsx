import Link from "next/link";

import { RegisterForm } from "@/app/(main)/auth/_components/register-form";
import { GoogleButton } from "@/app/(main)/auth/_components/social-auth/google-button";
import Logo from "@/components/ui/Logo";
import { APP_CONFIG } from "@/config/app-config";

export default function RegisterV1() {
  return (
    <div className="flex h-dvh">
      <div className="bg-background flex w-full items-center justify-center p-8 lg:w-2/3">
        <div className="w-full max-w-md space-y-10 py-24 lg:py-32">
          <div className="space-y-4 text-center">
            <div className="font-medium tracking-tight">Register</div>
            <div className="text-muted-foreground mx-auto max-w-xl">Fill in your details below.</div>
          </div>
          <div className="space-y-4">
            <RegisterForm />
            <GoogleButton className="w-full" variant="outline" />
            <p className="text-muted-foreground text-center text-xs">
              Already have an account?{" "}
              <Link href="login" className="text-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary hidden lg:block lg:w-1/3">
        <div className="flex h-full flex-col items-center justify-center p-12 text-center">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Logo />
              <span className="text-background dark:text-foreground font-semibold">{APP_CONFIG.name}</span>
            </div>
            <div className="space-y-2">
              <h1 className="text-primary-foreground text-5xl font-light">Welcome!</h1>
              <p className="text-primary-foreground/80 text-xl">You&apos;re in the right place.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
