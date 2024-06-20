function EducationInfo({ state, onInputChange, index, onRemove, onSubmit }) {
  const { id, school, degree, fromDate, toDate, isEdit } = state;

  return (
    <div className="form-container">
      <h2>Education Details</h2>
      {isEdit ? (
        <form className="form">
          <div className="form-group">
            <label htmlFor={`school-${id}`}>School name:</label>
            <input
              type="text"
              id={`school-${id}`}
              name="school"
              value={school}
              onChange={onInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor={`degree-${id}`}>Degree:</label>
            <input
              type="text"
              id={`degree-${id}`}
              name="degree"
              value={degree}
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
                Remove Education
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
            <span>School name:</span> {school}
          </p>
          <p>
            <span>Degree:</span> {degree}
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
                Remove Education
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

export default EducationInfo;
