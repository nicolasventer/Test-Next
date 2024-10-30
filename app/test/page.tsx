"use client";

import { Counter } from "@/components/Counter";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function A() {
	const searchParams = useSearchParams();

	fetch("/api/hello")
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

export default function Page() {
	return (
		<Suspense fallback={"wtf..."}>
			<A />
		</Suspense>
	);
}
