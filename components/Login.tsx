import { getDomain } from "@/lib/utils";
import Image from "next/image";
import { Suspense } from "react";
import LoginButtonGoogle from "./login-button-google";
import LoginEmail from "./login-email";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/user-schools/card";
import { hasRemovedBranding } from "@/lib/featureWalling";
import { Tier } from "@prisma/client";
import { Separator } from "./ui/user-schools/separator";

export default function Login({
  name,
  logo,
  tier = "NONE",
}: {
  name?: string;
  logo: string;
  tier?: Tier;
}) {
  const domain = getDomain();

  return (
    <Card className="flex w-full max-w-md flex-col items-center justify-center shadow-md">
      <CardHeader>
        <Image
          alt={`${name} Logo`}
          width={100}
          height={100}
          className="relative mx-auto h-14 w-auto rounded-full border"
          priority
          src={logo}
        />
        <CardTitle className="mt-6 text-3xl">{name}</CardTitle>
        {name !== "Ember Education" && !hasRemovedBranding(tier) && (
          <span className="text-xs text-muted-foreground">
            powered by Ember Education
          </span>
        )}
      </CardHeader>
      <CardContent className="mx-auto mt-4 flex w-11/12 max-w-sm flex-col items-center justify-center sm:w-full">
        <div className="flex w-56 flex-col items-center sm:w-80">
          <Suspense
            fallback={<div className="my-2 h-12 w-full rounded-md border" />}
          >
            <LoginButtonGoogle />
          </Suspense>

          <Separator className="my-4 w-10/12" />
          <Suspense
            fallback={<div className="my-2 h-12 w-full rounded-md border" />}
          >
            <LoginEmail />
          </Suspense>
        </div>
      </CardContent>
      <CardFooter>
        <span className="text-center text-sm">
          By signing up, you agree to our{" "}
          <Link href={`${domain}/privacy-policy.html`} className="text-link">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href={`${domain}/terms-of-service.html`} className="text-link">
            Terms of Service
          </Link>
          .
        </span>
      </CardFooter>
    </Card>
  );
}
