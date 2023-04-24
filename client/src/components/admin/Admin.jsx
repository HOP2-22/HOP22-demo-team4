import axios from "axios";
import { useEffect, useState } from "react";

import SideBar from "./SideBar";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 grid-flow-col gap-2">
      <div className="col-span-3 ">
        <SideBar />
      </div>
    </div>
  );
}
