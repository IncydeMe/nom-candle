import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TABLE_DATA, TABLE_HEADER } from "@/constants/table.data";
const TotalProductTable = () => {
  return (
    <>
      <Table className="bg-[#EBCBA5] border border-[#EBCBA5] mt-10">
        <TableHeader>
          <TableRow>
            {TABLE_HEADER.map((headerGroup) => (
              <TableHead
                className="text-center border-b border-l  border-r first:border-l-0 last:border-r-0 border-white"
                key={headerGroup.id}
              >
                {headerGroup.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {TABLE_DATA.map(({ id, name, quantity, productDefaultPrice }) => {
            const productPrice = productDefaultPrice * quantity;
            return (
              <>
                <TableRow key={id}>
                  <TableCell className="text-center border-b border-l border-r first:border-l-0 last:border-r-0 border-white">
                    {id}
                  </TableCell>
                  <TableCell className="text-center border-b border-l border-r first:border-l-0 last:border-r-0 border-white">
                    {name}
                  </TableCell>
                  <TableCell className="text-center border-b border-l border-r first:border-l-0 last:border-r-0 border-white">
                    {quantity}
                  </TableCell>
                  <TableCell className="text-center border-b border-l border-r first:border-l-0 last:border-r-0 border-white">
                    {productPrice}
                  </TableCell>
                </TableRow>
              </>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default TotalProductTable;
