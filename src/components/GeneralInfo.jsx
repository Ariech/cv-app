function GeneralInfo({ state, onInputChange, onSubmit }) {
  const { name, email, phone, isEdit } = state;

  return (
    <>
      {isEdit ? (
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={onInputChange}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </label>

          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={onInputChange}
            />
          </label>
          <button type="button" name="isEdit" onClick={onSubmit}>
            Submit Content
          </button>
        </form>
      ) : (
        <>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Phone Number: {phone}</p>
          <button type="button" name="isEdit" onClick={onInputChange}>
            Edit Content
          </button>
        </>
      )}
    </>
  );
}

export default GeneralInfo;
