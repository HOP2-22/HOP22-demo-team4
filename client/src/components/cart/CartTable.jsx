import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { CartItem } from "./CartItem";

export const CartTable = ({ items, removeItemHandler }) => {
  return (
    <div className="lg:grid lg:grid-cols-4 md:gap-5">
      <div className="bg-white p-5 rounded-[10px] lg:col-span-3">
        <TableContainer>
          <Table
            sx={{ minWidth: 500 }}
            aria-label="simple table"
            className=" overflow-scroll"
          >
            <TableHead>
              <TableRow>
                <TableCell className="text-[20px]">Бараа</TableCell>
                <TableCell align="center">Үнэ</TableCell>
                <TableCell align="center">Устгах</TableCell>
                <TableCell align="center">Худалдах</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items?.map((item, index) => (
                <CartItem
                  item={item}
                  key={index}
                  index={index}
                  removeItemHandler={removeItemHandler}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
