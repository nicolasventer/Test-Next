"use client";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div>
			myLayout
			{children}
		</div>
	);
}
