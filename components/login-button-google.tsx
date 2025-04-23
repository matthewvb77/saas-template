"use client";

import LoadingDots from "@/components/icons/loading-dots";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Button } from "./ui/user-schools/button";
import VersatileTooltip from "./versatile-tooltip";

export default function LoginButtonGoogle() {
  const [loading, setLoading] = useState(false);
  const [isInIframe, setIsInIframe] = useState(false);

  useEffect(() => {
    try {
      setIsInIframe(window.self !== window.top);
    } catch (e) {
      // If we can't access window.top due to security restrictions,
      // we're probably in a cross-origin iframe
      setIsInIframe(true);
    }
  }, [setIsInIframe]);

  const searchParams = useSearchParams();
  const error = searchParams?.get("error");

  function Errors() {
    function getErrorMessage(err: string) {
      switch (err) {
        case "OAuthAccountNotLinked":
          return "OAuthAccountNotLinked Error: Use the login provider used when creating the account";
        default:
          return "Error: " + err;
      }
    }

    return (
      <div className="absolute top-0 -translate-y-14 text-destructive">
        {Array.isArray(error) ? (
          error.map((err) => <p key="_">{getErrorMessage(err)}</p>)
        ) : (
          <p>{getErrorMessage(error!)}</p>
        )}
      </div>
    );
  }

  function LoginButton() {
    return (
      <Button
        disabled={loading || isInIframe}
        onClick={() => {
          setLoading(true);
          signIn("google");
        }}
        variant={"outline"}
        className="my-2 h-12 w-full space-x-2"
      >
        {loading ? (
          <LoadingDots color="#A8A29E" />
        ) : (
          <>
            <Image
              aria-hidden="true"
              src="/google-icon.svg"
              alt="Google Icon"
              width="24"
              height="24"
              priority
              className="h-8 w-8"
            />
            <span>Continue with Google</span>
          </>
        )}
      </Button>
    );
  }

  return (
    <div className="flex w-full justify-center">
      {error && <Errors />}
      {isInIframe ? (
        <VersatileTooltip
          content={"Must log in via email."}
          className="w-full cursor-not-allowed"
        >
          <LoginButton />
        </VersatileTooltip>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}
