import { Box } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";

function GetInTouch() {
	return (
		<Box
			sx={{
				backgroundColor: "var(--primary-blue-800)",
				color: "var(--white)",
				padding: "1.2rem",
				display: "flex",
				fontSize: "1.4rem",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			Call now!
			<span
				style={{
					marginLeft: "1.2rem",
					display: "flex",
					alignItems: "center",
				}}
			>
				<CallIcon sx={{ width: 26, height: 26 }} /> +27 67 093 6321
			</span>
		</Box>
	);
}

export default GetInTouch;
