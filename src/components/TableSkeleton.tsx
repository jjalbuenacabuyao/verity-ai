import React from "react";

type Props = {};

const TableSkeleton = (props: Props) => {
  return (
    <div className="rounded-xl border border-slate-400 pb-8">
      <table className="w-full table-auto">
        <thead>
          <tr className="border-b border-b-slate-400">
            {Array.from([1, 2, 3]).map((item) => (
              <td key={item} className="p-8 pb-4">
                <div className={`h-5 ${item === 1 ? "w-12" : ""} ${item === 2 ? "w-9" : ""} ${item === 3 ? "w-16" : ""} animate-pulse rounded bg-slate-400`}></div>
              </td>
            ))}
          </tr>
        </thead>

        <tbody>
          {Array.from([1, 2, 3, 4, 5]).map((item) => (
            <tr key={item} className="border-b border-b-gray-300">
              <td className="px-8 py-4">
                <div className="h-5 w-[408px] animate-pulse rounded bg-slate-400"></div>
              </td>
              <td className="px-8 py-4">
                <div className="h-5 w-[138px] animate-pulse rounded bg-slate-400"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;
