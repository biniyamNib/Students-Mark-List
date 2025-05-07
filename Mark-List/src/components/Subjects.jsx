import { subjectsData } from "../data/SubjectData";

const Subjects = (batch, stream) => {
    const batchData = subjectsData[batch];
    if (!batchData) return [];
  
    if (Array.isArray(batchData)) {
      return batchData;
    }
  
    return batchData[stream] || [];
  };

export default Subjects; 