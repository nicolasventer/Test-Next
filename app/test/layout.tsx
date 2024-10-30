"use client";

import { Suspense } from "react";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div>
			myLayout
			<Suspense fallback="loading...">{children}</Suspense>
		</div>
	);
}
