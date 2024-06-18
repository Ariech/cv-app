import "../styles/Form.css";

function WorkExperience({ state, onInputChange, index, onRemove, onSubmit }) {
  const { id, company, position, responsibilites, fromDate, toDate, isEdit } =
    state;

  return (
    <>
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
              value={responsibilites}
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
          <p>Company: {company}</p>
          <p>Position: {position}</p>
          <p>Responsibilities: {responsibilites}</p>
          <p>From: {fromDate}</p>
          <p>To: {toDate}</p>

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
    </>
  );
}

export default WorkExperience;
