import React from 'react';
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
				<i className="mx-2 fa-solid fa-trash hover-scale"></i>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Imprtar Zonas</DialogTitle>
					<DialogDescription>Seleccione las zonas que desea importar</DialogDescription>
				</DialogHeader>
				{/* Aquí se imprime CheckboxWithText */}
				{zones.map((zone) => <CheckboxWithText zone={zone} />) }
				<DialogFooter>
					<Button type="submit">Importar</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}


export function CheckboxWithText({zone}) {
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
		
	 
	  
	)
}