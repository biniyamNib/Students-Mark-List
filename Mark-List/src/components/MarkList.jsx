import React, { useState, useEffect } from "react";
import Header from "./Header";
import Table from "./Table";
import { getSubjects } from "../utils/SubjectUtils";
import studentData from "../data/StudentData";

const MarkList = () => {
  const [isSummaryChecked, setIsSummaryChecked] = useState(true);
  const [isDetailChecked, setIsDetailChecked] = useState(false);
  const [batch, setBatch] = useState("KG1");
  const [term, setTerm] = useState("1");
  const [stream, setStream] = useState("Natural");
  const [displayedStudents, setDisplayedStudents] = useState(studentData.KG1[1]);

  const subjects = getSubjects(batch, stream);

  useEffect(() => {
    if (isSummaryChecked) {
      setDisplayedStudents(studentData[batch]?.[term] || []);
    }
  }, [batch, term, isSummaryChecked]);

  const handleSummaryChange = (e) => {
    const isChecked = e.target.checked;
    setIsSummaryChecked(isChecked);
    if (isChecked) {
      setIsDetailChecked(false);
    }
  };

  const handleDetailChange = (e) => {
    const isChecked = e.target.checked;
    setIsDetailChecked(isChecked);
    if (isChecked) {
      setIsSummaryChecked(false);
    }
  };

  return (
    <div className="bg-[#f9fafc] min-h-screen">
      <div className="p-8">
        <Header
          batch={batch}
          term={term}
          stream={stream}
          isSummaryChecked={isSummaryChecked}
          isDetailChecked={isDetailChecked}
          onBatchChange={setBatch}
          onTermChange={setTerm}
          onStreamChange={setStream}
          onSummaryChange={handleSummaryChange}
          onDetailChange={handleDetailChange}
        />
        <Table
          term={term}
          subjects={subjects}
          displayedStudents={displayedStudents}
        />
      </div>
    </div>
  );
};

export default MarkList;