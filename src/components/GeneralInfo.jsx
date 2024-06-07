function GeneralInfo({ state, onInputChange }) {
  const { name, email, phone } = state;

  return (
    <>
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
      </form>
    </>
  );
}

export default GeneralInfo;
