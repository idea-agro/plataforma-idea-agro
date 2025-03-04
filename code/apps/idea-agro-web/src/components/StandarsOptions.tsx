import React from "react";
import { AddZoneModal } from "./AddZoneModal";
import { DeleteZonesModal } from "./DeleteZonesModal";
import { ThemeToggle } from "@/components/ThemeToggle";

export function StandarsOptions() {
	return (
		<nav className="flex text-1sm [&>i]:inline-block font:medium [&>i]:px-2 [&>i]:py-2 items-center">
			<i className="e hover-scale">
				<ThemeToggle />
			</i>
		
			<i className="e hover-scale">
				<AddZoneModal />
			</i>
			<i className="e hover-scale">
				<DeleteZonesModal />
			</i>
		</nav>
	);
}