import { Box, Typography } from "@mui/material";
import Socials from "./Socials";
import ContentHeading from "./ContentHeading";

function AboutMe() {
	return (
		<Box
			sx={{
				display: "grid",
				gridTemplateColumns: {
					md: "200px 600px",
				},
				justifyContent: "center",
				gap: "6.4rem",
				padding: {
					md: "12.8rem",
					xs: "6.4rem",
				},
			}}
		>
			<img
				style={{
					width: "200px",
					display: "block",
					boxShadow: "8px 8px 0 var(--primary-blue-800)",
					objectFit: "cover",
				}}
				src="/images/IMG_6460.jpeg"
				alt=""
			/>
			<Box>
				<ContentHeading content="About me" />
				<Typography
					variant="h6"
					component="h1"
					sx={{
						textTransform: "uppercase",
						fontWeight: 800,
						fontSize: "1.4rem",
						marginBottom: "2.4rem",
					}}
				>
					Lawrence Mile (Tutor)
				</Typography>
				<Typography
					variant="h6"
					sx={{
						lineHeight: 1.5,
						fontSize: "1.6rem",
						mb: "1.6rem",
						color: "var(--light-gray)",
					}}
				>
					I am a patient and dedicated tutor with a strong passion for
					Mathematics, Science, and Technology. My tutoring journey began in
					high school, where I discovered my love for teaching. Over the years,
					I’ve helped many students succeed, each with unique learning needs
					<br />
					<br />
					With a medical studies background, I have in-depth knowledge of
					Biology, Chemistry, and other sciences. I excel at simplifying complex
					concepts, making them easy to understand for my students
					<br />
					<br />
					Outside of tutoring, I enjoy playing guitar, coding, and solving
					challenging math and coding problems. These hobbies keep me sharp and
					fuel my passion for learning
					<br />
				</Typography>
				<Socials />
			</Box>
		</Box>
	);
}

export default AboutMe;
