import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ProcessStepCard from "./ProcessStepCard";
import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

interface ProcessProps {
	icon: ReactNode;
	title: string;
	content: string;
}

const iconStyle = { width: "60px", height: "60px" };

const processes: ProcessProps[] = [
	{
		icon: <MenuBookIcon fontSize="small" sx={iconStyle} />,
		title: "Exam Preparation",
		content:
			"Provide personalized study plans, practice tests, and targeted support to boost your confidence and ensure you’re fully prepared",
	},
	{
		icon: <LocalLibraryIcon fontSize="small" sx={iconStyle} />,
		title: "Subjects",
		content:
			"We offer tutoring in Mathematics, Physics, and Life Science, providing expert guidance to help you master each subject and excel in your studies.",
	},
	{
		icon: <AttachMoneyIcon fontSize="small" sx={iconStyle} />,
		title: "Payment Details",
		content:
			"Registration is R100 for the first month, with a fee of R150 per subject for each subsequent month",
	},
];

function ProcessOverview() {
	return (
		<Box
			sx={{
				backgroundColor: "rgb(247, 247, 248)",
				display: "flex",
				gap: "8rem",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				fontWeight: 600,
				padding: "6.4rem",
			}}
		>
			<Typography variant="h2" sx={{ textAlign: "center", fontWeight: 500 }}>
				How it works
			</Typography>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					flexDirection: {
						xs: "column",
						lg: "row",
					},
					justifyContent: "center",
					gap: "3.2rem",
				}}
			>
				{processes.map((process) => {
					return (
						<ProcessStepCard
							key={process.title}
							title={process.title}
							icon={process.icon}
							content={process.content}
						/>
					);
				})}
			</Box>
		</Box>
	);
}

export default ProcessOverview;
