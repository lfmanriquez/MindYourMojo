import styled from "@emotion/styled";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";

const CustomDialog = styled(Dialog)`
  backdrop-filter: blur(3px);
  .MuiDialog-paper {
    @media screen and (max-width: 500px) {
      max-width: 85%;
      max-height: 50%;
    }
  }
`;

export default function DetailsDialog(props) {
  const { selectedValue, handleOpenCard, isDetailsOpen } = props;
  return (
    <>
      <CustomDialog open={isDetailsOpen} onClose={() => handleOpenCard()}>
        <DialogTitle>
          <Grid container>
            <Grid item xs={12}>
              {selectedValue.name}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2">
                {selectedValue.exerpt}
              </Typography>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Typography>{selectedValue.description}</Typography>
        </DialogContent>
      </CustomDialog>
    </>
  );
}
