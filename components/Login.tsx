import { Suspense } from "react";
import LoginButtonGoogle from "./login-button-google";
import LoginEmail from "./login-email";
import { Card, CardContent } from "./ui/card";

export default function Login() {
	return (
		<Card className="flex flex-col w-full items-center justify-center shadow-xl border max-w-96">
			<CardContent className="w-full">
				<div className="flex w-full flex-col items-center">
					<Suspense
						fallback={<div className="my-2 h-12 w-full rounded-md border" />}
					>
						<LoginButtonGoogle />
					</Suspense>

					<div className="justify-center items-center flex text-xs">OR</div>
					<Suspense
						fallback={<div className="my-2 h-12 w-full rounded-md border" />}
					>
						<LoginEmail />
					</Suspense>
				</div>
			</CardContent>
		</Card>
	);
}
