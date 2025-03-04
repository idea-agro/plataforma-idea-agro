import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

import { ScrollArea } from "@/components/ui/scroll-area";

export function TermConditions() {
	const [open, setOpen] = React.useState(false);
	const isDesktop = useMediaQuery("(min-width: 768px)");

	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<p className="text-sm flex flex-row">Términos y condiciones</p>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[750px]">
					<DialogHeader className="text-left  px-6">
						<DialogTitle className="flex flex-row justify-center pb-6 text-[14pt]">
							Términos y condiciones
						</DialogTitle>
						<DialogDescription />
					</DialogHeader>
					<ScrollArea className="h-72 rounded-md">
						<p className=" pb-3">
							Bienvenido al sitio web de Pastizales ROU. Al acceder y utilizar
							nuestro sitio web, aceptas cumplir con los siguientes términos y
							condiciones de uso. Si no estás de acuerdo con alguna parte de
							estos términos, por favor abstente de utilizar nuestro sitio.
						</p>

						<h2>1. Propósito del Sitio</h2>

						<p className=" pb-3">
							Pastizales ROU es un sitio web de código abierto diseñado con
							fines exclusivamente investigativos y educativos. Todo el
							contenido proporcionado en este sitio es para uso informativo y no
							debe ser interpretado como asesoramiento profesional o legal.
						</p>

						<h2>2. Propiedad Intelectual</h2>

						<p className=" pb-3">
							Todo el contenido, incluyendo pero no limitado a textos, imágenes,
							gráficos, logotipos y código fuente, son propiedad exclusiva de
							Pastizales ROU, a menos que se indique lo contrario. Queda
							prohibida la reproducción, distribución o modificación del
							contenido sin autorización previa.
						</p>

						<h2>3. Uso Aceptable</h2>

						<p className=" pb-3">
							Al utilizar nuestro sitio web, aceptas utilizarlo únicamente con
							fines legales y de acuerdo con estos términos y condiciones. No
							debes utilizar nuestro sitio de ninguna manera que pueda causar
							daño, perjuicio o afectar la disponibilidad o accesibilidad del
							sitio.
						</p>

						<h2>4. Responsabilidad</h2>

						<p className=" pb-3">
							Nos esforzamos por garantizar que la información proporcionada en
							nuestro sitio web sea precisa y actualizada. Sin embargo, no
							asumimos responsabilidad por cualquier pérdida o daño directo o
							indirecto que pueda surgir del uso de la información contenida en
							este sitio.
						</p>

						<h2>5. Enlaces a Terceros</h2>

						<p className=" pb-3">
							Nuestro sitio web puede contener enlaces a sitios web de terceros
							que no están bajo nuestro control. No tenemos control ni asumimos
							responsabilidad por el contenido, políticas de privacidad o
							prácticas de sitios web de terceros.
						</p>

						<h2>6. Modificaciones</h2>

						<p className=" pb-3">
							Nos reservamos el derecho de modificar estos términos y
							condiciones en cualquier momento. Es tu responsabilidad revisar
							periódicamente esta página para estar al tanto de los cambios. El
							uso continuado de nuestro sitio web después de la publicación de
							cambios constituirá tu aceptación de dichos cambios.
						</p>

						<p className=" pb-3">
							Al utilizar nuestro sitio web, aceptas estos términos y
							condiciones en su totalidad. Si tienes alguna pregunta o inquietud
							sobre estos términos y condiciones, contáctanos.
						</p>
					</ScrollArea>
				</DialogContent>
			</Dialog>
		);
	}

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<p className="text-sm">Términos y condiciones</p>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className="text-left h-60 overflow-y-auto px-6">
					<DrawerTitle className="flex flex-row justify-center pb-6">
						Términos y condiciones
					</DrawerTitle>
					<DrawerDescription>
						<p className=" pb-3">
							Bienvenido al sitio web de Pastizales ROU. Al acceder y utilizar
							nuestro sitio web, aceptas cumplir con los siguientes términos y
							condiciones de uso. Si no estás de acuerdo con alguna parte de
							estos términos, por favor abstente de utilizar nuestro sitio.
						</p>

						<h2>1. Propósito del Sitio</h2>

						<p className=" pb-3">
							Pastizales ROU es un sitio web de código abierto diseñado con
							fines exclusivamente investigativos y educativos. Todo el
							contenido proporcionado en este sitio es para uso informativo y no
							debe ser interpretado como asesoramiento profesional o legal.
						</p>

						<h2>2. Propiedad Intelectual</h2>

						<p className=" pb-3">
							Todo el contenido, incluyendo pero no limitado a textos, imágenes,
							gráficos, logotipos y código fuente, son propiedad exclusiva de
							Pastizales ROU, a menos que se indique lo contrario. Queda
							prohibida la reproducción, distribución o modificación del
							contenido sin autorización previa.
						</p>

						<h2>3. Uso Aceptable</h2>

						<p className=" pb-3">
							Al utilizar nuestro sitio web, aceptas utilizarlo únicamente con
							fines legales y de acuerdo con estos términos y condiciones. No
							debes utilizar nuestro sitio de ninguna manera que pueda causar
							daño, perjuicio o afectar la disponibilidad o accesibilidad del
							sitio.
						</p>

						<h2>4. Responsabilidad</h2>

						<p className=" pb-3">
							Nos esforzamos por garantizar que la información proporcionada en
							nuestro sitio web sea precisa y actualizada. Sin embargo, no
							asumimos responsabilidad por cualquier pérdida o daño directo o
							indirecto que pueda surgir del uso de la información contenida en
							este sitio.
						</p>

						<h2>5. Enlaces a Terceros</h2>

						<p className=" pb-3">
							Nuestro sitio web puede contener enlaces a sitios web de terceros
							que no están bajo nuestro control. No tenemos control ni asumimos
							responsabilidad por el contenido, políticas de privacidad o
							prácticas de sitios web de terceros.
						</p>

						<h2>6. Modificaciones</h2>

						<p className=" pb-3">
							Nos reservamos el derecho de modificar estos términos y
							condiciones en cualquier momento. Es tu responsabilidad revisar
							periódicamente esta página para estar al tanto de los cambios. El
							uso continuado de nuestro sitio web después de la publicación de
							cambios constituirá tu aceptación de dichos cambios.
						</p>

						<p className=" pb-3">
							Al utilizar nuestro sitio web, aceptas estos términos y
							condiciones en su totalidad. Si tienes alguna pregunta o inquietud
							sobre estos términos y condiciones, contáctanos.
						</p>
					</DrawerDescription>
				</DrawerHeader>

				<DrawerFooter className="pt-2">
					<DrawerClose asChild>
						<Button variant="outline">Cerrar</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
