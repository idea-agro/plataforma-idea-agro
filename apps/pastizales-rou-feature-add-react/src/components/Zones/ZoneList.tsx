import React from "react";
import ZoneRow from "@/components/Zones/ZoneRow";

export type Zone = {
	id: string | number;
	name: string;
	type: "POLYGON" | "POINT";
};

export default function ZoneList({ zones }) {
	return zones.map((z) => <ZoneRow key={z.id} zone={z} />);
}
