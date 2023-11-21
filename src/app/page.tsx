"use client"

import { Toggle } from "@/components/toggle/Toggle";
import { useState } from "react";
import useLocalStorage from "use-local-storage";

import Home from "./(routes)/home/page";

async function generateMetadata({ params }: { params: { id: string } }) {
	return {
		title: 'Prime max',
		description:
			'100% Organic Protein Powder (Prime Max), Nutritional Supplement filled with natural ingredents, all working together to support your strength and health',
	};
}

export default function LandingPage() {
    // const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark, setIsDark] = useLocalStorage("isDark", false);

  return (
		<main className="" data-theme={isDark ? "dark" : "light"}>
            <Home />
            <Toggle
                isChecked={isDark}  
                handleChange={() => setIsDark(!isDark)}
            />
		</main>
	);
}
