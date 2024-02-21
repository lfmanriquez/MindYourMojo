import { Grid, Paper, Typography } from "@mui/material";
import MardenMediaLogo from "./MardenMediaLogo.png";
import styled from "@emotion/styled";

const MojoFooter = styled(Paper)`
  height: var(--footer-height);
  position: fixed;
  bottom: 0;
  background-color: ${(props) => props.theme.palette.primary.main};
  color: white;
  width: 100%;
  padding-top: 1%;
`;

const FooterImg = styled.img`
  max-width: 100%;
  max-height: 5dvh;
`;

export default function Footer() {
  return (
    <MojoFooter component="footer">
      <Grid container textAlign="center" alignItems="center">
        <Grid item xs={12}>
          <FooterImg src={MardenMediaLogo} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant fontSize={"1dvh"}>
            © 2024 Marden Media, LLC
          </Typography>
        </Grid>
      </Grid>
    </MojoFooter>
  );
}
