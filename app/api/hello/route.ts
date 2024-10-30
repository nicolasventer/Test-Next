import { type NextRequest, NextResponse } from "next/server";

type ResponseData = {
	message: string;
};

export function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;
	const joined = Array.from(searchParams)
		.map(([key, value]) => `${key} is ${value}`)
		.join(" and ");
	return NextResponse.json<ResponseData>({ message: "Hello " + joined });
}
