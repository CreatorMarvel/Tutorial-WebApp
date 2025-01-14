import { Box, Link, Typography } from "@mui/material";

function Hero() {
	return (
		<Box
			sx={{
				display: "grid",
				gridTemplateColumns: {
					md: "repeat(2, 1fr)",
				},
				textAlign: {
					md: "start",
					xs: "center",
				},
				alignItems: "center",
				gap: "8rem",
				padding: "9.6rem 2.4rem",
				backgroundImage: "url('/images/Untitled.png')",
				backgroundSize: "cover",
			}}
		>
			<Box>
				<Typography
					variant="h1"
					sx={{
						fontSize: {
							lg: "4.4rem",
							sm: "3.6rem",
							xs: "3rem",
						},
						marginBottom: "3.2rem",
						fontWeight: 600,
						letterSpacing: "-0.5px",
					}}
				>
					Your local Tutoring Solution
				</Typography>
				<Typography
					variant="h4"
					component="h1"
					sx={{
						lineHeight: 1.55,
						marginBottom: "3rem",
						color: "var(--light-gray)",
					}}
				>
					I offer personalized tutoring in math and science, helping you master
					concepts and boost your confidence. Whether it's exam prep or
					overcoming challenges, let's work together to reach your academic
					goals!
				</Typography>
				<Link
					href="#contact"
					sx={{
						display: "inline-block",
						fontSize: "1.4rem",
						backgroundColor: "var(--primary-blue-800)",
						color: "var(--white)",
						padding: "1.8rem 2.4rem",
						borderRadius: "10px",
						fontWeight: 600,
						textDecoration: "none",
						boxShadow: "0 0 24px rgba(0, 0, 0, 0.1)",
						"&:hover": {
							backgroundColor: "var(--blue-shade)",
						},
					}}
				>
					Start Learning
				</Link>
			</Box>
			<Box>
				<img
					className="hero-image"
					style={{
						border: "5px solid var(--primary-blue-800)",
						display: "block",
						margin: "auto",
						width: "100%",
						objectFit: "cover",
						borderRadius: "5px",
					}}
					src="/images/premium_photo-1683195783423-f7b69d845bdf.avif"
					alt="Hero landing page"
				/>
			</Box>
		</Box>
	);
}

export default Hero;
