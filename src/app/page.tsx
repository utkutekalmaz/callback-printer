"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PrinterIcon from "@/assets/printer.png";
import Image from "next/image";

// example
// ?request-id=rq%3A4F1RKjfYjhyQVJTfCEkjJ7qMxg4L%3A5zKtXEAq&tokenId=tt%3AFSJW1844wDvpjjHs61ghtgNLMFcM5NyE95YtmAmdSaz7%3AHK5cCSU5TAV8nJYQ1oVM&signature=%7B%22memberId%22%3A%22m%3A2MsNiHgYNphSz2j9GbE83Yqr7iod%3A5zKtXEAq%22%2C%22keyId%22%3A%221x7df4vuFUHYQCa7%22%2C%22signature%22%3A%22sqBfoxpWfRWwpubbBimDVKnwSv-dtQ93pioZGqix0bgUJOEFGHxiAh3mqZkNAYQjY5wWpjDsVzrl0G746HJSAA%22%7D&status=PROCESSED&transfer-id=t%3A6XpVydjXA9rniHGXgBuShAUpaRVBQ3S6V2ocVWb8G6hA%3AHK5cCSU5TAV8nJYQ1oVM&transfer-status=PROCESSING&is_query=true
// ?payment-id=pm2%3A3jVLGCE1BTorhvbLVEVAUT7d8FyA%3A2gFUX1NEcEr&state=CallbackState730971446&is_query=true

function QueryPrinter() {
	const searchParams = useSearchParams();
	const query = Object.fromEntries(searchParams.entries());

	const prettyQuery = Object.fromEntries(
		Object.entries(query).map(([key, value]) => {
			try {
				return [key, JSON.parse(value)];
			} catch {
				return [key, value];
			}
		})
	);

	return <pre className="font-semibold">{JSON.stringify(prettyQuery, null, 2)}</pre>;
}

export default function Home() {
	return (
		<div className="w-screen h-screen p-20 text-wrap overflow-auto break-words bg-[#ebf8ff] text-[#261747]">
			<h1 className="text-2xl font-semibold pb-4">
				<Image className="pr-2 h-12 w-auto inline" src={PrinterIcon} alt="" />
				Callback Printer
			</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<QueryPrinter />
			</Suspense>
		</div>
	);
}
