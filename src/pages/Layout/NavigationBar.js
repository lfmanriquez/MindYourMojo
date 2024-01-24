import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import {
  AccountCircle,
  Checklist,
  Home,
  Info,
  ListAlt,
} from "@mui/icons-material";
import MindYourMojoLogo from "./mindyourmojo.png";

const NavButton = styled(Button)`
  cursor: pointer;
  color: ${(props) => props.theme.palette.secondary.main};
  &:hover {
    background-color: ${(props) => props.theme.palette.secondary.light};
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

const NavBar = styled(AppBar)`
  height: 100%;
  flex: 1;
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.palette.primary.main};
  position: sticky;
  top: 0;
  color: ${(props) => props.theme.palette.secondary.main};
`;

const SideNav = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.secondary.main};
  }
`;

export default function NavigationBar() {
  const navigate = useNavigate();
  const pages = [
    { name: "Home", route: "/", icon: <Home /> },
    {
      name: "QuizHub",
      route: "/test",
      icon: <Checklist />,
    },
    {
      name: "List of Values",
      route: "/values",
      icon: <ListAlt />,
    },
    {
      name: "About",
      route: "/about",
      icon: <Info />,
    },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleRouteChange = (route) => {
    if (route) {
      navigate(route);
      handleCloseNavMenu();
    }
  };

  return (
    <NavBar>
      <Grid container alignItems="center">
        <Grid item xs={4} textAlign="start">
          <Button
            sx={{ maxHeight: "5vh" }}
            color="secondary"
            onClick={() => handleRouteChange("/")}
          >
            <img src={MindYourMojoLogo} height={"100%"} width={"100vw"} />
          </Button>
        </Grid>
        <Grid item xs={8} textAlign="end">
          <Box sx={{ flexGrow: 1, display: { xs: "block", sm: "none" } }}>
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
            <SideNav
              anchor="right"
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <List>
                <ListItem>
                  <Button color="secondary" startIcon={<AccountCircle />}>
                    <Typography textAlign="center">Profile</Typography>
                  </Button>
                </ListItem>
                <Divider sx={{ backgroundColor: "white" }} variant="middle" />
                {pages.map((page) => (
                  <ListItem key={page.id}>
                    <Button
                      style={{ cursor: "pointer" }}
                      startIcon={page.icon}
                      color="secondary"
                      onClick={() => handleRouteChange(page.route)}
                    >
                      <Typography textAlign="center">{page.name}</Typography>
                    </Button>
                  </ListItem>
                ))}
              </List>
            </SideNav>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            <Stack direction="row">
              {pages.map((page) => (
                <NavButton
                  key={page.id}
                  onClick={() => handleRouteChange(page.route)}
                >
                  {page.name}
                </NavButton>
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </NavBar>
  );
}
