import { Avatar, Box, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

function Testimonial() {
	return (
		<Box
			sx={{
				backgroundColor: "var(--primary-blue-800)",
				textAlign: "center",
				color: "var(--white)",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				padding: "4.4rem 0",
			}}
		>
			<FormatQuoteIcon sx={{ width: 80, height: 80 }} />
			<Typography
				variant="h6"
				sx={{
					fontStyle: "italic",
					fontSize: {
						md: "2.4rem",
						xs: "1.8rem",
					},
					width: {
						md: "60%",
						xs: "80%",
					},
					marginBottom: "2.4rem",
				}}
			>
				<blockquote>
					This tutoring service has helped my child improve academically and
					build confidence. The tutors are caring and skilled, making a
					noticeable difference in their performance
				</blockquote>
			</Typography>
			{/* <Avatar
				alt="Remy Sharp"
				src="/images/about.avif"
				sx={{ width: 56, height: 56, marginBottom: "1.6rem" }}
			/> */}
			<Typography variant="h4" sx={{ fontWeight: 800 }}>
				&#8208; Sarah M
			</Typography>
		</Box>
	);
}

export default Testimonial;
