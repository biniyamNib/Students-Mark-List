export const getSubjects = (batch, stream) => {
    if (["KG1", "KG2", "KG3"].includes(batch)) {
      return ["English", "Amharic", "Maths", "Science", "Art", "Sport"];
    } else if (["1", "2", "3", "4", "5", "6"].includes(batch)) {
      return ["English", "Amharic", "Maths", "Science", "Civics", "Art", "Music"];
    } else if (["7", "8"].includes(batch)) {
      return ["English", "Amharic", "Maths", "Biology", "Chemistry", "Physics", "Civics"];
    } else if (["9", "10", "11", "12"].includes(batch)) {
      return stream === "Social"
        ? ["English", "Amharic", "Maths", "History", "Geography", "Economics", "Civics"]
        : ["English", "Amharic", "Maths", "Biology", "Chemistry", "Physics", "Civics"];
    }
    return [];
  };