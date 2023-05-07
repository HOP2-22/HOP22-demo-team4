import { Box, Typography } from "@mui/material";

const AccountDetailTitle = ({ title, createdAt }) => {
  return (
    <Box
      sx={{
        marginTop: "40px",
        display: "flex",
        alignItems: "end",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "unset",
        }}
      >{`${title}`}</Typography>
      <Typography
        sx={{
          fontFamily: "unset",
          fontSize: "16px",
        }}
      >{`${createdAt.slice(0, 10)}`}</Typography>
    </Box>
  );
};

export default AccountDetailTitle;
