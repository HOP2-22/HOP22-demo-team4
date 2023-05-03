import {
  Box,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Grid,
} from "@mui/material";
import Image from "next/image";
import InfoIcon from "@mui/icons-material/Info";
import Link from "next/link";

export const AdminAccountImage = ({ data }) => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        display: "flex",
        flexDirection: "row",
        overflowY: "auto",
        margin: "0px",
        padding: "0px",
        gap: 1,
      }}
    >
      {data.map((item, index) => {
        console.log(item);
        return (
          <Link href={`admin/accounts/${data?._id}`}>
            <Box sx={{ width: "300px", height: "250px", display: "flex" }}>
              <ImageListItem key={index}>
                <img
                  src={item.mainImage}
                  alt={item.title}
                  loading="lazy"
                  width={100}
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.createdAt}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            </Box>
          </Link>
        );
      })}
    </Grid>
  );
};
