import * as React from "react";

export function ThemeToggle() {
	const [theme, setTheme] = React.useState<string>();
	const classes = "fa-solid ";
	
	

	React.useEffect(() => {
		const theme =
			localStorage.getItem("theme") ||
			(window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light");
		setTheme(theme);

		document.documentElement.setAttribute("data-theme", theme);
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		document.documentElement.setAttribute("data-theme", newTheme);
		localStorage.setItem("theme", newTheme);
		setTheme(() => newTheme);
	};
	if (theme) {
		const themeClass =
			!theme || theme === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon";
		return (
			<div className="px-2 hover-scale " >
				<i
					className={themeClass}
					onClick={toggleTheme}
					onKeyDown={toggleTheme}
					style={{ cursor: "pointer" }}
					
				/>
			</div>
		);
	}

	return null;
}
