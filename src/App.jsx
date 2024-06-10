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

  const handleAddEducation = () => {
    const newEducation = {
      id: generateId(),
      school: "",
      degree: "",
      fromDate: "",
      toDate: "",
    };

    setEducationInfo([...educationInfo, newEducation]);
  };

  const handleRemoveEducation = (id) => {
    setEducationInfo((prevEducationInfo) =>
      prevEducationInfo.filter((item) => item.id !== id)
    );
  };

  return (
    <>
      <GeneralInfo
        state={generalInfo}
        onInputChange={(e) => handleSingleInputChange(e, setGeneralInfo)}
      />

      <div>
        {educationInfo.map((info) => (
          <div key={info.id}>
            <EducationInfo
              state={info}
              onInputChange={(e) =>
                handleArrayInputChange(e, setEducationInfo, info.id)
              }
            />
            <button onClick={() => handleRemoveEducation(info.id)}>
              Remove Education
            </button>
          </div>
        ))}

        <button onClick={handleAddEducation}>Add Education</button>
      </div>

      <WorkExperience />
    </>
  );
}

export default App;
