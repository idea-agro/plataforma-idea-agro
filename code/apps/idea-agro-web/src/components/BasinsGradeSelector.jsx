import * as React from "react";
import texts from "@/../texts.json";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function BasinsGradeSelector() {
	return (
		<Select>
			<SelectTrigger className="w-[200px]">
				<SelectValue placeholder={texts.basinsNavOptions.gradeOne} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>{texts.common.Basins}</SelectLabel>
					<SelectItem value="basinsGradeOne">
						{texts.basinsNavOptions.gradeOne}
					</SelectItem>
					<SelectItem value="basinsGradeTwo">
						{texts.basinsNavOptions.gradeTwo}
					</SelectItem>
					<SelectItem value="basinsGradeThree">
						{texts.basinsNavOptions.gradeThree}
					</SelectItem>
					<SelectItem value="basinsGradeFour">
						{texts.basinsNavOptions.gradeFour}
					</SelectItem>
					<SelectItem value="basinsGradeFive">
						{texts.basinsNavOptions.gradeFive}
					</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
