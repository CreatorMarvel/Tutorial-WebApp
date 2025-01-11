import { Typography } from "@mui/material";

interface ContentProps {
	content: string;
	marginBottom?: string;
}

function ContentHeading({ content, marginBottom = "0.8rem" }: ContentProps) {
	return (
		<Typography
			variant="h4"
			component="h1"
			sx={{
				fontSize: "3.6rem",
				fontWeight: 500,
				marginBottom,
			}}
		>
			{content}
		</Typography>
	);
}

export default ContentHeading;
