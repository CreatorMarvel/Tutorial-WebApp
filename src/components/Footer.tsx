function Footer() {
	return (
		<footer
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				fontWeight: 500,
				padding: "3.2rem 2.4rem",
				fontSize: "1.6rem",
			}}
		>
			&copy; {new Date().getFullYear()} &#8208; Created by Lawrence Mile 😉
		</footer>
	);
}

export default Footer;
