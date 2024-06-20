function GeneralInfo({ state, onInputChange, onSubmit }) {
  const { name, email, phone, isEdit } = state;

  return (
    <>
      <h2>Personal Details</h2>
      {isEdit ? (
        <form className="form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={onInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={onInputChange}
            />
          </div>

          <div className="buttons">
            <button
              className="button-submit"
              type="button"
              name="isEdit"
              onClick={onSubmit}
            >
              Submit Content
            </button>
          </div>
        </form>
      ) : (
        <div className="edit-preview">
          <p>
            <span>Name:</span> {name}
          </p>
          <p>
            <span>Email:</span> {email}
          </p>
          <p>
            <span>Phone Number:</span> {phone}
          </p>
          <div className="buttons">
            <button
              className="button-submit"
              type="button"
              name="isEdit"
              onClick={onInputChange}
            >
              Edit Content
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default GeneralInfo;
