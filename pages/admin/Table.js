import React from "react";
import MyCardtable from "components/Cards/MyTable";
// components



// layout for page

import Admin from "layouts/Admin.js";

export default function MyTable() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <MyCardtable/>
          </div>
        </div>
      </div>
    </>
  );
}

MyTable.layout = Admin;
