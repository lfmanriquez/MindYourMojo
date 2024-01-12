import styled from "@emotion/styled";
import { AppBar, Button, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavButton = styled(Button)`
  color: black;
  &:hover {
    background-color: rgba(80, 80, 80, 0.1);
  }
`;

export default function NavigationBar() {
  const navigate = useNavigate();
  const pages = [
    { name: "Test", route: "/test" },
    { name: "List of Values", route: "/values" },
    { name: "About", route: "/about" },
  ];

  const handleRouteChange = (route) => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ position: "sticky", top: 0 }}
    >
      <Grid container xs={12} alignItems="center">
        <Grid
          item
          xs={4}
          textAlign="start"
          sx={{ margin: " auto", paddingLeft: "1vh" }}
        >
          <Button sx={{ color: "black" }}>
            <Typography
              variant="h6"
              noWrap
              onClick={() => handleRouteChange("/")}
            >
              Know Your Mojo
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={8} textAlign="end">
          <Stack direction="row">
            {pages.map((page) => (
              <NavButton
                key={page}
                onClick={() => handleRouteChange(page.route)}
              >
                {page.name}
              </NavButton>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </AppBar>
  );
}
