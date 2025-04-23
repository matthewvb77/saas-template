import { Card, CardContent, CardHeader } from "./ui/card";

export default function Feature1Example() {
	return (
		<section
			className="w-full p-4 flex flex-col sm:flex-row justify-center sm:space-x-20 sm:space-y-0 space-y-10 items-center h-[80vh] bg-stone-200"
			id="Feature1"
		>
			<Card className="h-2/3 aspect-square">
				<CardHeader>
					<h2 className="text-2xl">Feature 1</h2>
				</CardHeader>
				<CardContent>
					<p>
						You can do some cool stuff with feature 1 lorem ipsume blabh blahb
						alb halb h
					</p>
				</CardContent>
			</Card>
			<Card className="h-2/3 aspect-video max-w-full">Video or something</Card>
		</section>
	);
}
