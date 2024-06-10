import { useState } from "react";
import EducationInfo from "./components/EducationInfo";
import GeneralInfo from "./components/GeneralInfo";
import WorkExperience from "./components/WorkExperience";

function App() {
  const generateId = () => {
    return new Date().getTime().toString();
  };

  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [educationInfo, setEducationInfo] = useState([
    {
      id: generateId(),
      school: "",
      degree: "",
      fromDate: "",
      toDate: "",
    },
  ]);

  const handleSingleInputChange = (e, setState) => {
    const { value, name } = e.target;

    setState((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleArrayInputChange = (e, setState, id) => {
    const { value, name } = e.target;

    setState((prevInfo) =>
      prevInfo.map((info) => {
        if (info.id === id) {
          return { ...info, [name]: value };
        }

        return info;
      })
    );
  };

  return (
    <>
      <GeneralInfo
        state={generalInfo}
        onInputChange={(e) => handleSingleInputChange(e, setGeneralInfo)}
      />

      {educationInfo.map((info) => (
        <EducationInfo
          key={info.id}
          state={info}
          onInputChange={(e) =>
            handleArrayInputChange(e, setEducationInfo, info.id)
          }
        />
      ))}

      <WorkExperience />
    </>
  );
}

export default App;
