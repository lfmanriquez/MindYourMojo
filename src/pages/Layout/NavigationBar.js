import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  Button,
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

const NavButton = styled(Button)`
  color: black;
  &:hover {
    background-color: rgba(80, 80, 80, 0.1);
    font-weight: bold;
  }
`;

const NavBar = styled(AppBar)`
  flex: 1;
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: sticky;
  top: 0;
  color: black;
`;

export default function NavigationBar() {
  const navigate = useNavigate();
  const pages = [
    { name: "Test", route: "/test" },
    { name: "List of Values", route: "/values" },
    { name: "About", route: "/about" },
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
        <Grid
          item
          xs={4}
          textAlign="start"
          sx={{ margin: " auto", paddingLeft: "1vh" }}
        >
          <Button sx={{ color: "black" }}>
            <Typography
              variant="h6"
              onClick={() => handleRouteChange("/")}
              noWrap
            >
              {process.env.REACT_APP_NAME}
            </Typography>
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
            <Drawer
              anchor="right"
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <List>
                {pages.map((page) => (
                  <ListItem key={page.id}>
                    <Button onClick={() => handleRouteChange(page.route)}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Drawer>
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
