import "../styles/Form.css";

function EducationInfo({ state, onInputChange, index, onRemove, onSubmit }) {
  const { school, degree, fromDate, toDate, isEdit } = state;

  return (
    <>
      {isEdit ? (
        <form className="form">
          <label>
            School name:
            <input
              type="text"
              name="school"
              value={school}
              onChange={onInputChange}
            />
          </label>

          <label>
            Degree:
            <input
              type="text"
              name="degree"
              value={degree}
              onChange={onInputChange}
            />
          </label>

          <label>
            From Date:
            <input
              type="date"
              value={fromDate}
              name="fromDate"
              onChange={onInputChange}
            />
          </label>

          <label>
            To Date:
            <input
              type="date"
              value={toDate}
              name="toDate"
              onChange={onInputChange}
            />
          </label>

          {index > 0 && (
            <button type="button" onClick={onRemove}>
              Remove Education
            </button>
          )}

          <button type="button" name="isEdit" onClick={onSubmit}>
            Submit Content
          </button>
        </form>
      ) : (
        <div>
          <p>School name: {school}</p>
          <p>Degree: {degree}</p>
          <p>From: {fromDate}</p>
          <p>To: {toDate}</p>
          {index > 0 && (
            <button type="button" onClick={onRemove}>
              Remove Education
            </button>
          )}
          <button type="button" name="isEdit" onClick={onInputChange}>
            Edit Content
          </button>
        </div>
      )}
    </>
  );
}

export default EducationInfo;
