import { Box, Link } from "@mui/material";

function Navigation() {
	const linkStyles = {
		textDecoration: "none",
		fontSize: "1.6rem",
		color: "var(--white)",
		fontWeight: 500,
	};

	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "flex-end",
				padding: "2.4rem",
				backgroundColor: "var(--primary-blue-800)",
				gap: "3.2rem",
			}}
		>
			<Link sx={linkStyles} href="#">
				Home
			</Link>
			<Link sx={linkStyles} href="#">
				Process
			</Link>
			<Link sx={linkStyles} href="#">
				About
			</Link>
			<Link sx={linkStyles} href="#">
				Contact
			</Link>
		</Box>
	);
}

export default Navigation;
