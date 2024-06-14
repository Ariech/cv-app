function WorkExperience({ state, onInputChange, index, onRemove, onSubmit }) {
  const { company, position, responsibilites, fromDate, toDate, isEdit } =
    state;

  return (
    <>
      {isEdit ? (
        <form>
          <label>
            Company name:
            <input
              type="text"
              name="company"
              value={company}
              onChange={onInputChange}
            />
          </label>

          <label>
            Position:
            <input
              type="text"
              name="position"
              value={position}
              onChange={onInputChange}
            />
          </label>

          <label>
            Responsibilites:
            <input
              type="text"
              name="responsibilites"
              value={responsibilites}
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
        <>
          <p>Company: {company}</p>
          <p>Position: {position}</p>
          <p>Responsibilities: {responsibilites}</p>
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
        </>
      )}
    </>
  );
}

export default WorkExperience;
