import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";
import { Card } from "./ui/card";

export default function FAQ() {
	return (
		<section
			className="w-full p-4 h-[80vh] bg-stone-100 flex flex-col sm:flex-row justify-center sm:space-x-12 sm:space-y-0 space-y-12 items-center sm:px-12"
			id="FAQ"
		>
			<Card className="aspect-video h-2/3 max-w-full"> Add an Image here </Card>
			<Accordion
				type="single"
				orientation="vertical"
				collapsible
				className="w-full"
			>
				<AccordionItem value="item-1" className="w-full">
					<AccordionTrigger className="text-2xl">
						Is it accessible? 1
					</AccordionTrigger>
					<AccordionContent className="text-lg">
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2" className="w-full">
					<AccordionTrigger className="text-2xl">
						Is it accessible? 2
					</AccordionTrigger>
					<AccordionContent className="text-lg">
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3" className="w-full">
					<AccordionTrigger className="text-2xl">
						Is it accessible? 3
					</AccordionTrigger>
					<AccordionContent className="text-lg">
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4" className="w-full">
					<AccordionTrigger className="text-2xl">
						Is it accessible? 4
					</AccordionTrigger>
					<AccordionContent className="text-lg">
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-5" className="w-full">
					<AccordionTrigger className="text-2xl">
						Is it accessible? 5
					</AccordionTrigger>
					<AccordionContent className="text-lg">
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</section>
	);
}
