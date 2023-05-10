import { Box, Typography, Input } from "@mui/material";
import React from "react";

const ariaLabel = { "aria-label": "description" };

const AccountTitle = ({ title, createdAt }) => {
  return (
    <Box sx={{ marginTop: "20px" }}>
      <Box>
        <Input defaultValue={`${title}`} inputProps={ariaLabel} />
      </Box>
      <Typography
        sx={{
          fontFamily: "unset",
          fontSize: "14px",
        }}
      >{`${createdAt.slice(0, 10)}`}</Typography>
    </Box>
  );
};

export default AccountTitle;
