import React, { useState } from "react";

const Table = ({ term, subjects = [], displayedStudents = [] }) => {
  const [expandedRow, setExpandedRow] = useState(null);

  const handleRowToggle = (studentId) => {
    setExpandedRow(expandedRow === studentId ? null : studentId);
  };

  if (displayedStudents.length === 0) {
    return <div className="text-center py-8">No students available</div>;
  }

  return (
    <div className="overflow-x-auto w-full mt-8">
      <table className="min-w-full border-collapse">
        <thead className="bg-transparent text-gray-800">
          <tr>
            <th className="px-4 py-2 text-sm font-bold text-left"></th>
            <th className="px-4 py-2 text-sm font-bold text-left">NO</th>
            <th className="px-4 py-2 text-sm font-bold text-left">ID</th>
            <th className="px-4 py-2 text-sm font-bold text-left">Name</th>
            <th className="px-4 py-2 text-sm font-bold text-left">Section</th>
            {term === "All" ? (
              <>
                {["Term 1", "Term 2", "Term 3", "Final"].map((termName) => (
                  <th key={termName} className="px-2 py-2 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-bold">{termName}</span>
                      <div className="flex justify-between w-full mt-1">
                        <span className="text-sm font-bold px-1">Avg</span>
                        <span className="text-sm font-bold px-1">Rank</span>
                      </div>
                    </div>
                  </th>
                ))}
                <th className="px-4 py-2 text-center">Remark</th>
              </>
            ) : (
              <>
                <th className="px-4 py-2 text-sm font-bold text-center">Average</th>
                <th className="px-4 py-2 text-sm font-bold text-center">Grade</th>
                <th className="px-4 py-2 text-sm font-bold text-center">Rank</th>
              </>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm text-gray-800 bg-white">
        {displayedStudents.map((student, idx) => (
  <React.Fragment key={student.id}>
    <tr className="hover:bg-[#f9fafc]">
      <td className="px-4 py-2">
        {term !== "All" && (
          <span
            className="text-gray-800 cursor-pointer text-lg"
            onClick={() => handleRowToggle(student.id)}
          >
            {expandedRow === student.id ? "-" : "+"}
          </span>
        )}
      </td>
      <td className="px-4 py-2">{idx + 1}</td>
      <td className="px-4 py-2">{student.id}</td>
      <td className="px-4 py-2">{student.name}</td>
      <td className="px-4 py-2">{student.section}</td>
      {term === "All" ? (
        <>
          {["1", "2", "3", "Final"].map((termKey) => (
            <td key={termKey} className="px-2 py-2 text-center">
              <div className="flex justify-between w-full">
                <span className="text-sm px-1">
                  {student.terms?.[termKey]?.average?.toFixed(2) ?? "-"}
                </span>
                <span className="text-sm px-1">
                  {student.terms?.[termKey]?.rank ?? "-"}
                </span>
              </div>
            </td>
          ))}
          <td className="px-4 py-2 text-center">{student.remark}</td>
        </>
      ) : (
        <>
          <td className="px-4 py-2 text-center">{student.average}</td>
          <td className="px-4 py-2 text-center">{student.overallGrade}</td>
          <td className="px-4 py-2 text-center">{student.rank}</td>
        </>
      )}
    </tr>

    {/* Only render the expandable row when term !== "All" */}
    {term !== "All" && expandedRow === student.id && (
      <tr>
        <td colSpan={7} className="px-4 py-2 bg-gray-50">
          <div className="overflow-x-auto">
            <div className="bg-gray-100 p-4 rounded w-full min-w-[500px]">
              <h4 className="font-semibold text-lg mb-2">Subjects and Scores</h4>
              <table className="w-full border text-sm">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 text-left">Subject</th>
                    <th className="px-4 py-2 text-left">Score</th>
                    <th className="px-4 py-2 text-left">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subject) => {
                    const subjectData = student.marks?.[subject];
                    return (
                      <tr key={subject}>
                        <td className="px-4 py-2">{subject}</td>
                        <td className="px-4 py-2">{subjectData?.score ?? "-"}</td>
                        <td className="px-4 py-2">{subjectData?.grade ?? "-"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </td>
      </tr>
    )}
  </React.Fragment>
))}

        </tbody>
      </table>
    </div>
  );
};

export default Table;
