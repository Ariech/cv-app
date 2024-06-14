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
    isEdit: true,
  };

  const workExperienceTemplate = {
    company: "",
    position: "",
    responsibilites: "",
    fromDate: "",
    toDate: "",
    isEdit: true,
  };

  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    isEdit: true,
  });

  const [educationInfo, setEducationInfo] = useState([
    {
      id: generateId(),
      ...educationInfoTemplate,
    },
  ]);

  const [workExperience, setWorkExperience] = useState([
    {
      id: generateId(),
      ...workExperienceTemplate,
    },
  ]);

  const handleSingleInputChange = (e, setState) => {
    const { value, name } = e.target;

    setState((prevInfo) => ({
      ...prevInfo,
      [name]: name === "isEdit" ? !prevInfo.isEdit : value,
    }));
  };

  const handleArrayInputChange = (e, setState, id) => {
    const { value, name } = e.target;

    setState((prevInfo) =>
      prevInfo.map((info) => {
        if (info.id === id) {
          return {
            ...info,
            [name]: name === "isEdit" ? !info.isEdit : value,
          };
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

  const handleSubmit = (state, setState) => {
    console.log("Submitting state:", state);

    setState((prevState) => {
      if (Array.isArray(prevState)) {
        return prevState.map((info) =>
          info.id === state.id ? { ...state, isEdit: !state.isEdit } : info
        );
      }

      return {
        ...prevState,
        isEdit: !prevState.isEdit,
      };
    });
  };

  return (
    <>
      <GeneralInfo
        state={generalInfo}
        onInputChange={(e) => handleSingleInputChange(e, setGeneralInfo)}
        onSubmit={() => handleSubmit(generalInfo, setGeneralInfo)}
      />

      <div>
        {educationInfo.map((info, index) => (
          <div key={info.id}>
            <EducationInfo
              state={info}
              onInputChange={(e) =>
                handleArrayInputChange(e, setEducationInfo, info.id)
              }
              index={index}
              onRemove={() => handleRemoveInfo(info.id, setEducationInfo)}
              onSubmit={() => handleSubmit(info, setEducationInfo)}
            />
          </div>
        ))}

        <button
          onClick={() => handleAddInfo(educationInfoTemplate, setEducationInfo)}
        >
          Add Education
        </button>
      </div>

      <div>
        {workExperience.map((info, index) => (
          <div key={info.id}>
            <WorkExperience
              state={info}
              onInputChange={(e) =>
                handleArrayInputChange(e, setWorkExperience, info.id)
              }
              index={index}
              onRemove={() => handleRemoveInfo(info.id, setWorkExperience)}
              onSubmit={() => handleSubmit(info, setWorkExperience)}
            />
          </div>
        ))}

        <button
          onClick={() =>
            handleAddInfo(workExperienceTemplate, setWorkExperience)
          }
        >
          Add Work Experience
        </button>
      </div>
    </>
  );
}

export default App;
