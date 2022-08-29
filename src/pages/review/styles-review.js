import { Autocomplete, Button, Paper, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "30px 20px",
  width: 500,
  margin: "20px auto",
  elevation: 10,
}));

export const StyledTextField = styled(TextField)({
  marginBottom: "10px",
});

export const StyledAutocomplete = styled(Autocomplete)({
  marginBottom: "10px",
});

export const StyledButton = styled(Button)({
  margin: "10px 0",
});
