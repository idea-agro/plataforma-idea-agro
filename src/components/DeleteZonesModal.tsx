// import {
// 	Dialog,
// 	DialogContent,
// 	DialogDescription,
// 	DialogFooter,
// 	DialogHeader,
// 	DialogTitle,
// 	DialogTrigger,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox"

// export function DeleteZonesModal() {
// 	return (
// 		<Dialog>
// 			<DialogTrigger asChild>
// 				<i className="mx-2 fa-solid fa-trash hover-scale"></i>
// 			</DialogTrigger>
// 			<DialogContent>
// 				<DialogHeader>
// 					<DialogTitle>Eliminar Zonas</DialogTitle>
// 					<DialogDescription>Seleccione las zonas que desea borrar</DialogDescription>
// 				</DialogHeader>
// 				Lista de Zonas

// 				<DialogFooter>
// 					<Button type="submit">Eliminar Zonas</Button>
// 				</DialogFooter>
// 			</DialogContent>
// 		</Dialog>
// 	);
// }
// export function CheckboxWithText() {
// 	return (
// 	  <div className="items-top flex space-x-2">
// 		<Checkbox id="terms1" />
// 		<div className="grid gap-1.5 leading-none">
// 		  <label
// 			htmlFor="terms1"
// 			className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
// 		  >
// 			Accept terms and conditions
// 		  </label>
// 		  <p className="text-sm text-muted-foreground">
// 			You agree to our Terms of Service and Privacy Policy.
// 		  </p>
// 		</div>
// 	  </div>
// 	)
//   }

import React from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export function DeleteZonesModal() {
	const zones = [
		{
			id: 1,
			title: "Zona 1",
			description: "england",
			type: "POLYGON",
		},
		{
			id: 2,
			title: "Zona 2",
			description: "spain",
			type: "POINT",
		},
		{
			id: 3,
			title: "Zona 3",
			description: "zona 3 desc",
			type: "POLYGON",
		},
	];

	return (
		<Dialog>
			<DialogTrigger asChild>
				<i className="ml-2 fa-solid fa-trash hover-scale" />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Eliminar Zonas</DialogTitle>
					<DialogDescription>
						Seleccione las zonas que desea borrar
					</DialogDescription>
				</DialogHeader>

				{zones.map((zone) => (
					<CheckboxWithText zone={zone} key={zone.id} />
				))}
				<DialogFooter>
					<Button type="submit">Eliminar Zonas</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

export function CheckboxWithText({ zone }) {
	return (
		<div className="items-top flex flex-col">
			<div className="flex flex-row pt-3">
				<Checkbox id={zone.id} />

				<label
					htmlFor={zone.id}
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-3 "
				>
					{zone.title}
				</label>
			</div>
		</div>
	);
}
