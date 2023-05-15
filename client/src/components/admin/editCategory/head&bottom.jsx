import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import CoverPhoto from "./categoryImage";
import Details from "./detail";
import FrontImage from "./FrontImage";
import { Typography } from "@mui/material";

const HeadBottom = ({ data }) => {
  const [value, setValue] = React.useState("1");

  //   const changeCategory = async () => {
  //     try {
  //       const change = await axios.put(
  //         `http://localhost:8000/api/v1/category/${data}`,
  //         {
  //           coverPhoto: coverPhoto,
  //           photo: photo,
  //           name: name,
  //           slugify: slugify,
  //         }
  //       );
  //       console.log(change.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  console.log(data.type)
  const handleChange = (event = React.SyntheticEvent, newValue = String) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box
        sx={{
          width: "98%",
          typography: "body1",
          height: "100%",
          border: "1px grey solid",
          borderRadius: "10px",
          margin : "12px"
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Cover Photo" value="1" />
              <Tab label="Image" value="2" />
              <Tab label="Details" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <CoverPhoto data={data} />
          </TabPanel>
          <TabPanel value="2">
            <FrontImage data={data} />
          </TabPanel>
          <TabPanel value="3">
            <Details data={data} />
          </TabPanel>
        </TabContext>
        <Box className='flex items-center justify-between rounded-b-lg h-[60px] xl:h-[70px] 2xl:h-[85px] bg-gray-200'>
          <button className="text-2xl ml-5 bg-blue-600 lg:h-[40px] h-[50px] w-[100px] rounded-xl text-white hover:shadow-xl hover:bg-blue-800 duration-200">Save</button>
          <button className="text-2xl transition hover:bg-red-200 duration-200 mr-5 lg:h-[40px] h-[50px] text-red-600 w-[100px] rounded-xl">Delete</button>
        </Box>
      </Box>
    </Box>
  );
};
export default HeadBottom;
