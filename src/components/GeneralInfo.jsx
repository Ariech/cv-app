import { useState } from "react";

function GeneralInfo() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={info.name}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={info.email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={info.phone}
            onChange={(e) => handleChange(e)}
          />
        </label>
      </form>
    </>
  );
}

export default GeneralInfo;
