"use client";

import { Counter } from "@/components/Counter";
import { useSearchParams } from "next/navigation";

export default function A() {
	const searchParams = useSearchParams();

	fetch("/api/hello")
		.then((res) => res.json())
		.then((data) => console.log(data))
		.catch((err) => console.error(err));

	return (
		<div>
			Test
			{JSON.stringify(Array.from(searchParams))}
			<Counter />
		</div>
	);
}
