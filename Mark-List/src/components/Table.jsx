// Table.jsx
const Table = ({ term, subjects, displayedStudents }) => {
    if (displayedStudents.length === 0) {
      return null;
    }

    return (
      <div className="table mt-8">
        <table className="w-full border-collapse">
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
                          <span className="text-sm font-bold px-1">Average</span>
                          <span className="text-sm font-bold px-1">Rank</span>
                        </div>
                      </div>
                    </th>
                  ))}
                  <th className="px-4 py-2 text-center">Remark</th>
                </>
              ) : (
                <>
                  {subjects.map((subject) => (
                    <th key={subject} className="px-2 py-2 text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-sm font-bold">{subject}</span>
                        <div className="flex justify-between w-full mt-1">
                          <span className="text-sm font-bold px-1">Total</span>
                          <span className="text-sm font-bold px-1">Grade</span>
                        </div>
                      </div>
                    </th>
                  ))}
                  <th className="px-4 py-2 text-sm font-bold text-center">Average</th>
                  <th className="px-4 py-2 text-sm font-bold text-center">Grade</th>
                  <th className="px-4 py-2 text-sm font-bold text-center">Rank</th>
                </>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm text-gray-800 bg-white">
            {displayedStudents.map((student, idx) => (
              <tr key={student.id} className="hover:bg-[#f9fafc]">
                <td className="px-4 py-2 text-left">
                  <span className="text-gray-800 cursor-pointer text-lg">+</span>
                </td>
                <td className="px-4 py-2 text-left">{idx + 1}</td>
                <td className="px-4 py-2 text-left">{student.id}</td>
                <td className="px-4 py-2 text-left">{student.name}</td>
                <td className="px-4 py-2 text-left">{student.section}</td>
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
                    {subjects.map((subject) => (
                      <td key={subject} className="px-2 py-2 text-center">
                        <div className="flex justify-between w-full">
                          <span className="text-sm px-1">{student.marks?.[subject]?.score ?? "-"}</span>
                          <span className="text-sm px-1">{student.marks?.[subject]?.grade ?? "-"}</span>
                        </div>
                      </td>
                    ))}
                    <td className="px-4 py-2 text-center">{student.average}</td>
                    <td className="px-4 py-2 text-center">{student.overallGrade}</td>
                    <td className="px-4 py-2 text-center">{student.rank}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
export default Table;