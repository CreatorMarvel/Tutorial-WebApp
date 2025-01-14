import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

export default function SuccessAlert() {
	return (
		<Alert
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				fontSize: "1.8rem",
				textAlign: "center",
				width: "100%",
				borderRadius: 0,
				position: "fixed",
				top: "0",
				left: "50%",
				transform: "translate(-50%, 0)",
			}}
			icon={<CheckIcon fontSize="inherit" />}
			severity="success"
			variant="filled"
		>
			Message Successfully Sent.
		</Alert>
	);
}
