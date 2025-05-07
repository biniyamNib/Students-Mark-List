import React from "react";

const Header = ({
  batch,
  term,
  stream,
  isSummaryChecked,
  isDetailChecked,
  onBatchChange,
  onTermChange,
  onStreamChange,
  onSummaryChange,
  onDetailChange,
}) => {
  return (
    <div className="header flex justify-between">
      <h1 className="font-bold text-2xl text-gray-900">Mark List</h1>
      <div className="flex space-x-8 font-semibold text-lg">
        <div className="flex items-center space-x-2">
          {["9", "10", "11", "12"].includes(batch) && (
            <>
              <p>Stream</p>
              <select
                className="bg-[#235dec] px-4 py-1 text-sm outline-0 rounded text-white"
                value={stream}
                onChange={(e) => onStreamChange(e.target.value)}
              >
                {["Natural", "Social"].map((val) => (
                  <option key={val} value={val}>{val}</option>
                ))}
              </select>
            </>
          )}
        </div>
        <div className="flex items-center  space-x-2">
          <p>Batch</p>
          <select
            className="bg-[#235dec] px-4 py-1 text-sm outline-0 rounded text-white"
            value={batch}
            onChange={(e) => onBatchChange(e.target.value)}
          >
            {["KG1", "KG2", "KG3", ...Array.from({ length: 12 }, (_, i) => i + 1)].map((val) => (
              <option key={val} value={val}>{val}</option>
            ))}
          </select>
        </div>
        <div className="flex space-x-2 items-center">
          <p>Term</p>
          <select
            className="bg-[#235dec] text-sm py-1 px-4 outline-0 rounded text-white"
            value={term}
            onChange={(e) => onTermChange(e.target.value)}
          >
            {["1", "2", "3", "All"].map((val) => (
              <option key={val} value={val}>{val}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-1">
            <input
              type="checkbox"
              checked={isDetailChecked}
              onChange={onDetailChange}
            />
            <p>Detail</p>
          </div>
          <div className="flex space-x-1">
            <input
              type="checkbox"
              checked={isSummaryChecked}
              onChange={onSummaryChange}
            />
            <p>Summary</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;