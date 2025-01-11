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
				padding: "2.4rem",
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
					Best tutoring service local
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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
					corporis? Enim facilis sequi ipsum voluptate at sunt vitae quia illo?
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, ad.
				</Typography>
				<Link
					href="#"
					sx={{
						display: "inline-block",
						fontSize: "1.4rem",
						backgroundColor: "var(--primary-blue-800)",
						color: "var(--white)",
						padding: "1.8rem 2.4rem",
						borderRadius: "50px",
						fontWeight: 600,
						textDecoration: "none",
						boxShadow: "0 0 24px rgba(0, 0, 0, 0.2)",
						"&:hover": {
							backgroundColor: "var(--blue-shade)",
						},
					}}
				>
					Contact Me
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
					src="public/images/premium_photo-1683195783423-f7b69d845bdf.avif"
					alt="Hero landing page"
				/>
			</Box>
		</Box>
	);
}

export default Hero;
