function EducationInfo({ state, onInputChange }) {
  const { school, degree, fromDate, toDate } = state;

  return (
    <>
      <form>
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
      </form>
    </>
  );
}

export default EducationInfo;
