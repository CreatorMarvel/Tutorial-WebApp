import { Box, Button, TextField, Typography } from "@mui/material";
import ContentHeading from "./ContentHeading";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import LoadingButton from "@mui/lab/LoadingButton";

interface Field {
	name: string;
	email: string;
	phone: string;
	message: string;
}

function Contact() {
	const [fields, setFields] = useState<Field>({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const form = useRef<HTMLFormElement | string>("");

	const sendEmail = (e: FormEvent<HTMLFormElement>) => {
		// Send email using EmailJS
		e.preventDefault();
		const service_id = import.meta.env.VITE_SERVICE_ID;
		const template_id = import.meta.env.VITE_TEMPLATE_ID;
		const public_id = import.meta.env.VITE_PUBLIC_KEY;
		setIsLoading(true);

		emailjs
			.sendForm(service_id, template_id, form.current, {
				publicKey: public_id,
			})
			.then(
				() => {
					console.log("SUCCESS!");
					setIsLoading(false); // Set loading to false
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		setFields((prevItem) => {
			return { ...prevItem, [name]: value };
		});
	}

	return (
		<Box
			sx={{
				width: {
					md: "60%",
				},
				margin: "auto",
				padding: {
					md: "9.6rem 0",
					xs: "6.4rem",
				},
			}}
		>
			<Box>
				<ContentHeading content="Contact Me" />
				<Typography variant="h4" sx={{ marginBottom: "1.2rem" }}></Typography>
				<Box
					ref={form}
					onSubmit={sendEmail}
					component="form"
					sx={{ "& > :not(style)": { m: 1 } }}
					noValidate
					autoComplete="off"
				>
					<TextField
						value={fields.name}
						onChange={handleChange}
						name="name"
						fullWidth
						id="filled-basic"
						label="Your Name"
						variant="filled"
						required={true}
					/>
					<TextField
						fullWidth
						id="filled-basic"
						label="Your Email"
						name="email"
						variant="filled"
						required={true}
					/>
					<TextField
						fullWidth
						id="filled-basic"
						label="Your Number"
						name="phone"
						variant="filled"
						required={true}
					/>
					<TextField
						fullWidth
						id="filled-multiline-static"
						label="Message"
						name="message"
						multiline
						rows={4}
						defaultValue="Default Value"
						variant="filled"
						required={true}
					/>

					<Button
						disabled={isLoading ? true : false}
						sx={{
							display: "inline-block",
							fontSize: "1.4rem",
							backgroundColor: "var(--primary-blue-800)",
							color: "var(--white)",
							padding: "1.2rem 3.6rem",
							borderRadius: "50px",
							fontWeight: 600,
							textDecoration: "none",
							boxShadow: "0 0 24px rgba(0, 0, 0, 0.1)",
							"&:hover": {
								backgroundColor: "var(--blue-shade)",
							},
						}}
						type="submit"
					>
						{isLoading ? (
							<LoadingButton loading>Submit</LoadingButton>
						) : (
							"Send Message"
						)}
					</Button>
				</Box>
			</Box>
			<Box></Box>
		</Box>
	);
}

export default Contact;
