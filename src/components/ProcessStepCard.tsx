import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface ProcessCardProps {
	icon: ReactNode;
	title: string;
	content: string;
}

function ProcessStepCard({ title, content, icon }: ProcessCardProps) {
	return (
		<Box
			sx={{
				gap: "2.4rem",
				padding: "2.4rem",
				backgroundColor: "var(--white)",
				boxShadow: "0 0 24px rgba(0, 0, 0, 0.08)",
				borderRadius: "5px",
				width: {
					md: "300px",
					xs: "100%",
				},
				height: {
					md: "300px",
				},
			}}
		>
			<Box>{icon}</Box>
			<Typography
				variant="h4"
				component="h1"
				sx={{
					textTransform: "uppercase",
					fontWeight: 700,
					fontSize: "1.6rem",
					marginBottom: "1.2rem",
					mt: "2.4rem",
				}}
			>
				{title}
			</Typography>
			<Typography
				variant="h6"
				component="h1"
				sx={{
					lineHeight: 1.5,
					fontSize: "1.6rem",
					color: "var(--light-gray)",
				}}
			>
				{content}
			</Typography>
		</Box>
	);
}

export default ProcessStepCard;
