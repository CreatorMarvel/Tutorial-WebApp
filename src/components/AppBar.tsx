import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
	children?: React.ReactElement<unknown>;
}

function HideOnScroll(props: Props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children ?? <div />}
		</Slide>
	);
}

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<>
			<CssBaseline />
			<HideOnScroll>
				<AppBar
					position="static"
					sx={{
						backgroundColor: "var(--primary-blue-800)",
					}}
				>
					<Container maxWidth="xl">
						<Toolbar disableGutters>
							<LightbulbIcon
								sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
							/>
							<Typography
								variant="h6"
								noWrap
								component="a"
								href="#app-bar-with-responsive-menu"
								sx={{
									mr: 2,
									display: { xs: "none", md: "flex" },
									fontFamily: "monospace",
									fontWeight: 700,
									letterSpacing: ".3rem",
									color: "inherit",
									textDecoration: "none",
								}}
							>
								TutorHub
							</Typography>

							{/* <Box
								sx={{
									flexGrow: 1,
									display: { xs: "flex", md: "none" },
								}}
							>
								<IconButton
									size="large"
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={handleOpenNavMenu}
									color="inherit"
								>
									<MenuIcon />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorElNav}
									anchorOrigin={{
										vertical: "bottom",
										horizontal: "left",
									}}
									keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "left",
									}}
									open={Boolean(anchorElNav)}
									onClose={handleCloseNavMenu}
									sx={{ display: { xs: "block", md: "none" } }}
								>
									{pages.map((page) => (
										<MenuItem key={page} onClick={handleCloseNavMenu}>
											<Typography sx={{ textAlign: "center" }}>
												{page}
											</Typography>
										</MenuItem>
									))}
								</Menu>
							</Box> */}
							<LightbulbIcon
								sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
							/>
							<Typography
								variant="h5"
								noWrap
								component="a"
								href="#app-bar-with-responsive-menu"
								sx={{
									mr: 2,
									display: { xs: "flex", md: "none" },
									flexGrow: 1,
									fontFamily: "monospace",
									fontWeight: 700,
									letterSpacing: ".3rem",
									color: "inherit",
									textDecoration: "none",
								}}
							>
								TutorHub
							</Typography>
							{/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
								{pages.map((page) => (
									<Button
										key={page}
										onClick={handleCloseNavMenu}
										sx={{ my: 2, color: "white", display: "block" }}
									>
										{page}
									</Button>
								))}
							</Box> */}
							{/* <Box
								sx={{
									flexGrow: 0,
									display: { xs: "none", md: "flex" },
									justifyContent: "flex-end",
								}}
							>
								<Menu
									sx={{ mt: "45px" }}
									id="menu-appbar"
									anchorEl={anchorElUser}
									anchorOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									open={Boolean(anchorElUser)}
									onClose={handleCloseUserMenu}
								>
									{settings.map((setting) => (
										<MenuItem key={setting} onClick={handleCloseUserMenu}>
											<Typography
												sx={{
													textAlign: "center",
													fontSize: "1.6rem",
													fontWeight: 800,
												}}
											>
												{setting}
											</Typography>
										</MenuItem>
									))}
								</Menu>
							</Box> */}
						</Toolbar>
					</Container>
				</AppBar>
			</HideOnScroll>
		</>
	);
}
export default ResponsiveAppBar;
