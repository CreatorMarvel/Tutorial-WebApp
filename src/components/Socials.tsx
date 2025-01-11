import { Box, Link } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

const socialIconStyles = { width: "24px", height: "24px" };

function Socials() {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				gap: "1.6rem",
			}}
		>
			<Link href="">
				<FacebookRoundedIcon sx={socialIconStyles} />
			</Link>
			<Link href="#">
				<MailOutlineRoundedIcon sx={socialIconStyles} />
			</Link>
		</Box>
	);
}

export default Socials;
