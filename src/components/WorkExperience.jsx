function WorkExperience({ state, onInputChange, index, onRemove, onSubmit }) {
  const { id, company, position, responsibilities, fromDate, toDate, isEdit } =
    state;

  return (
    <div className="form-container">
      <h2>Work Details</h2>
      {isEdit ? (
        <form className="form">
          <div className="form-group">
            <label htmlFor={`company-${id}`}>Company name:</label>
            <input
              type="text"
              id={`company-${id}`}
              name="company"
              value={company}
              onChange={onInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor={`position-${id}`}>Position:</label>
            <input
              type="text"
              id={`position-${id}`}
              name="position"
              value={position}
              onChange={onInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor={`responsibilities-${id}`}>Responsibilities:</label>
            <input
              type="text"
              id={`responsibilities-${id}`}
              name="responsibilities"
              value={responsibilities}
              onChange={onInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor={`fromDate-${id}`}>From Date:</label>
            <input
              type="date"
              id={`fromDate-${id}`}
              name="fromDate"
              value={fromDate}
              onChange={onInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor={`toDate-${id}`}>To Date:</label>
            <input
              type="date"
              id={`toDate-${id}`}
              name="toDate"
              value={toDate}
              onChange={onInputChange}
            />
          </div>

          <div className="buttons">
            {index > 0 && (
              <button
                className="button-remove"
                type="button"
                onClick={onRemove}
              >
                Remove Work Experience
              </button>
            )}
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
            <span>Company:</span> {company}
          </p>
          <p>
            <span>Position:</span> {position}
          </p>
          <p>
            <span>Responsibilities:</span> {responsibilities}
          </p>
          <p>
            <span>From:</span> {fromDate}
          </p>
          <p>
            <span>To:</span> {toDate}
          </p>

          <div className="buttons">
            {index > 0 && (
              <button
                className="button-remove"
                type="button"
                onClick={onRemove}
              >
                Remove Work Experience
              </button>
            )}
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
    </div>
  );
}

export default WorkExperience;
