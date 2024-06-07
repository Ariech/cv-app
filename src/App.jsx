import { useState } from "react";
import EducationInfo from "./components/EducationInfo";
import GeneralInfo from "./components/GeneralInfo";
import WorkExperience from "./components/WorkExperience";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e, setState) => {
    const { value, name } = e.target;

    setState((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <>
      <GeneralInfo
        state={generalInfo}
        onInputChange={(e) => handleChange(e, setGeneralInfo)}
      />
      <EducationInfo />
      <WorkExperience />
    </>
  );
}

export default App;
