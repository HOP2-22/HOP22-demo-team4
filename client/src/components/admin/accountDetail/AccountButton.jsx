import * as React from "react";
import { Button, Box, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const AccountButton = ({ data }) => {
  return (
    <Box sx={{ marginTop: "40px" }}>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="outlined" endIcon={<SendIcon />}>
          Edit
        </Button>
      </Stack>
    </Box>
  );
};

export default AccountButton;
