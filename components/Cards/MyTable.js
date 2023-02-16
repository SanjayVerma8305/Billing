import React from "react";


// components


export default function MyCardtable({ color }) {
  return (
    <table className="items-center w-full bg-transparent border-collapse">
      <thead style={{textAlign:"center"}}>
        <tr >
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
            }
          >
            Project
          </th>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
            }
          >
            Budget
          </th>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
            }
          >
            Status
          </th>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
            }
          >
            Users
          </th>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
            }
          >
            Completion
          </th>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
            }
          ></th>
        </tr>
      </thead>
        <tbody style={{textAlign:"center"}}>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1</td>
            <td>Malcolm Lockyer</td>
            <td>61</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>2</td>
            <td>Malcolm Lockyer</td>
            <td>96</td>
          </tr>
          <tr>
            <td>Pecok</td>
            <td>Lighg</td>
            <td>3</td>
            <td>Moop Lock</td>
            <td>208</td>
          </tr>
          <tr>
            <td>slack</td>
            <td>Air</td>
            <td>4</td>
            <td>lcol</td>
            <td>121</td>
          </tr>
          <tr>
            <td>Star</td>
            <td>Blue Flame</td>
            <td>5</td>
            <td>alcm</td>
            <td>161</td>
          </tr>
          <tr>
            <td>hinng</td>
            <td>Markupo</td>
            <td>6</td>
            <td>ammoo</td>
            <td>196</td>
          </tr>
      </tbody>
    </table>
  );
}