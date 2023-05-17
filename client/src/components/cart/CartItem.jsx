import { useRouter } from "next/router";
import Link from "next/link";
import { TableCell, TableRow, Box } from "@mui/material";
import Image from "next/image";

import { XCircleIcon } from "@heroicons/react/24/solid";

export const CartItem = ({ item, removeItemHandler, index }) => {
  const { push } = useRouter();

  const buy = () => {
    push(`/payment?d=${item?._id}`);
  };

  return (
    <TableRow className="border-b">
      <TableCell component="th" scope="row">
        <Link
          href={`/category/${item?.category?.slugify}/${item?._id}`}
          className="min-w-[180px]"
        >
          <Image
            src={item?.mainImage}
            alt={item?.name}
            width={200}
            height={200}
            className="object-cover"
            draggable="false"
          />
        </Link>
      </TableCell>
      <TableCell align="center" className="text-[20px]">
        {item?.price}
      </TableCell>
      <TableCell align="center">
        <button className="">
          <XCircleIcon
            className="w-6 fill-pink-600 cursor-pointer"
            onClick={() => {
              removeItemHandler(index, item);
            }}
          />
        </button>
      </TableCell>
      <TableCell align="center">
        <Box
          className="mx-auto w-14 h-8 flex justify-center items-center rounded-[8px] btn transition-colors cursor-pointer"
          onClick={() => buy()}
        >
          <p>Buy</p>
        </Box>
      </TableCell>
    </TableRow>
  );
};
