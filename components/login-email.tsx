"use client";

import LoadingDots from "@/components/icons/loading-dots";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Button } from "./ui/user-schools/button";

export default function LoginEmail() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const searchParams = useSearchParams();
  const verify = searchParams.get("verify");

  useEffect(() => {
    if (verify) {
      toast.info("Check your email for your login link🔥");
    }
  }, [verify]);

  const handleSignIn = () => {
    setLoading(true);
    signIn("email", { email });
  };

  return (
    <div className="my-2 w-full">
      <Input
        type="email"
        placeholder="Email address"
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSignIn();
          }
        }}
        className="h-12 w-full"
      />
      <Button
        onClick={handleSignIn}
        disabled={loading}
        variant={"outline"}
        className="mt-2 h-12 w-full space-x-2"
      >
        {loading ? (
          <LoadingDots color="#A8A29E" />
        ) : (
          <span>Continue with Email</span>
        )}
      </Button>
    </div>
  );
}
