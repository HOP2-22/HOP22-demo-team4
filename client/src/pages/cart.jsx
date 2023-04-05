import axios from "axios";
import Link from "next/link";

import Container from "@/components/Container";
import Layout from "@/components/layout/Layout";

import { BsFillTrash3Fill } from "react-icons/bs";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { AuthContext } from "@/provider/AuthContext";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";

export default function cart({ data }) {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState(data);

  const clear = async () => {
    setItems([]);
    try {
      // await axios.post("http://localhost:8000/api/v1/account/clfavorite", {
      //   userId: user?._id,
      // });
    } catch (error) {
      console.error(error);
    }
  };

  const removeItemHandler = async (item) => {
    try {
      // await axios.post("http://localhost:8000/api/v1/account/refavorite", {
      //   accountId: item?._id,
      //   userId: user?._id,
      // });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // <Guard>
    <Layout title={"Shopping Cart"}>
      <Container className="px-4 sm:px-0 pt-[90px] pb-[150px]">
        <p className="mb-4 text-[26px] font-semibold">Shopping Cart</p>
        {items.length === 0 ? (
          <div className="text-[18px]">
            Cart is empty
            <Link href="/" className="underline underline-offset-4 pl-1">
              go home page
            </Link>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-4 md:gap-5">
            <div className="bg-white p-5 rounded-[10px] lg:col-span-3">
              <TableContainer>
                <Table sx={{ minWidth: 500 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="text-[20px]">Item</TableCell>
                      <TableCell align="center">Price</TableCell>
                      <TableCell align="center">Action</TableCell>
                      <TableCell align="center">Purchase</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {items.map((item, index) => (
                      <CartItem item={item} key={index} />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        )}
        <div
          className={`${
            items.length === 0 ? "hidden" : "flex"
          } w-full justify-end lg:justify-center pt-6  mr-10 lg:mr-0 lg:ml-32`}
        >
          <div
            className="px-5 py-[10px] rounded-[8px] text-black flex gap-1 items-center bg-[#a1d4e8] cursor-pointer hover:bg-[#c8e4ee] transition-colors "
            onClick={() => clear()}
          >
            <span>
              <BsFillTrash3Fill className="text-[18px]" />
            </span>
            Empty cart
          </div>
        </div>
      </Container>
    </Layout>
    // </Guard>
  );
}

export async function getServerSideProps(context) {
  const res = await axios.get("http://localhost:8000/api/v1/category/accounts");

  return {
    props: {
      data: res.data.data,
    },
  };
}

export const CartItem = ({ item }) => {
  return (
    <>
      <TableRow className="border-b">
        <TableCell component="th" scope="row">
          <Link
            href={`/${item?.slugify}/${item?.id}`}
            className="min-w-[180px]"
          >
            <img
              src={item?.mainImage}
              alt={item?.name}
              width={200}
              className="object-cover"
            />
          </Link>
        </TableCell>
        <TableCell align="center" className="text-[20px]">
          {item?.price}₮
        </TableCell>
        <TableCell align="center">
          <button className="">
            <XCircleIcon
              className="w-6 fill-[#FF6900] cursor-pointer"
              onClick={() => {
                removeItemHandler(item);
              }}
            />
          </button>
        </TableCell>
        <TableCell align="center">
          <Box className="mx-auto w-14 h-8 flex justify-center items-center rounded-[8px] btn transition-colors cursor-pointer">
            Buy
          </Box>
        </TableCell>
      </TableRow>
    </>
  );
};
