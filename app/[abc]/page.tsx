"use client";

import { Counter } from "@/components/Counter";
import { useParams, useSearchParams } from "next/navigation";

export default function A() {
	const params = useParams();
	const searchParams = useSearchParams();

	fetch("/api/hello")
		.then((res) => res.json())
		.then((data) => console.log(data))
		.catch((err) => console.error(err));

	return (
		<div>
			Test
			{JSON.stringify(params)}
			{JSON.stringify(Array.from(searchParams))}
			<Counter />
		</div>
	);
}
