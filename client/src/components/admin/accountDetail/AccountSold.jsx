import React from "react";
import {
  Box,
  Typography,
  InputLabel,
  FormControl,
  Select,
} from "@mui/material";

const AccountSold = ({ data }) => {
  return (
    <Box sx={{ marginTop: "30px" }}>
      {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">sold</InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          label="Grouping"
        >
          <option aria-label="None" value="" />
          <option value={1}>false</option>
          <option value={2}>true</option>
        </Select>
      </FormControl> */}
      <Typography variant="4">
        {data?.sold ? "Zaragdsan" : "Zaragdaagui"}
      </Typography>
    </Box>
  );
};

export default AccountSold;
