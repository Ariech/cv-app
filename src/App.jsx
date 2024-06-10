import { useState } from "react";
import EducationInfo from "./components/EducationInfo";
import GeneralInfo from "./components/GeneralInfo";
import WorkExperience from "./components/WorkExperience";

function App() {
  const generateId = () => {
    return new Date().getTime().toString();
  };

  const educationInfoTemplate = {
    school: "",
    degree: "",
    fromDate: "",
    toDate: "",
  };

  const workExperienceTemplate = {
    company: "",
    position: "",
    responsibilites: "",
    fromDate: "",
    toDate: "",
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

  const [workExperience, setWorkExperience] = useState([
    {
      company: "",
      position: "",
      responsibilites: "",
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

  const handleAddInfo = (newInfo, setter) => {
    setter((prevInfo) => [...prevInfo, { id: generateId(), ...newInfo }]);
  };

  const handleRemoveInfo = (id, setter) => {
    setter((prevInfo) => prevInfo.filter((item) => item.id !== id));
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
            <button onClick={() => handleRemoveInfo(info.id, setEducationInfo)}>
              Remove Education
            </button>
          </div>
        ))}

        <button
          onClick={() => handleAddInfo(educationInfoTemplate, setEducationInfo)}
        >
          Add Education
        </button>
      </div>

      <WorkExperience />
    </>
  );
}

export default App;
