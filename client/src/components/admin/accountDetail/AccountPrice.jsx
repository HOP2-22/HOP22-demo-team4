import React from "react";
import {
  Box,
  Typography,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

const AccountPrice = ({ price }) => {
  return (
    <Box sx={{ marginTop: "40px" }}>
      <Box sx={style.container}>
        <Box sx={style.priceContainer}>
          <Typography sx={style.priceTypo}>Үнэ:</Typography>
        </Box>
        <FormControl
          fullWidth
          sx={{ m: 1, width: "300px", marginLeft: "20px" }}
        >
          <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">₮</InputAdornment>}
            label="Price"
            defaultValue={`${price}`}
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default AccountPrice;

const style = {
  priceTypo: {
    fontSize: "28px",
    fontWeight: 500,
  },

  container: {
    display: "flex",
  },
  priceContainer: {
    display: "flex",
    alignContent: "center",
    flexWrap: "wrap",
  },
};
