import { Grid, Paper, Typography } from "@mui/material";
import MardenMediaLogo from "./MardenMediaLogo.png";
import styled from "@emotion/styled";
import { useLocation } from "react-router";

const MojoFooter = styled(Paper)`
  visibility: ${(props) => props.visible && "hidden"};
  bottom: 0;
  background-color: ${(props) => props.theme.palette.primary.main};
  color: white;
  width: 100%;
  padding-top: 1%;
  position: relative;
`;

const FooterImg = styled.img`
  max-width: 100%;
  max-height: 10dvh;
  border-radius: 3dvh;
`;

export default function Footer() {
  const location = useLocation();
  return (
    <MojoFooter component="footer" visible={location.pathname.match("/test")}>
      <Grid container textAlign="center" alignItems="center">
        <Grid item xs={12}>
          <FooterImg src={MardenMediaLogo} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant fontSize={"2dvh"}>
            © 2024 Marden Media, LLC
          </Typography>
        </Grid>
      </Grid>
    </MojoFooter>
  );
}
