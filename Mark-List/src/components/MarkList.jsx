import React, { useState, useEffect } from "react";
import Header from "./Header";
import Table from "./Table";
import Subjects from "./Subjects";
import studentData from "../data/StudentData";

const MarkList = () => {
  const [isSummaryChecked, setIsSummaryChecked] = useState(true);
  const [isDetailChecked, setIsDetailChecked] = useState(false);
  const [batch, setBatch] = useState("");
  const [term, setTerm] = useState("");
  const [stream, setStream] = useState("");
  const [displayedStudents, setDisplayedStudents] = useState([]);
  
  const subjects = Subjects(batch, stream);

  useEffect(() => {
    if (isSummaryChecked && batch && term) {
      if (["9", "10", "11", "12"].includes(batch) && !stream) {
        setDisplayedStudents([]); // Require stream for grades 9-12
      } else {
        setDisplayedStudents(studentData[batch]?.[term] || []);
      }
    } else {
      setDisplayedStudents([]);
    }
  }, [batch, term, stream, isSummaryChecked]);

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