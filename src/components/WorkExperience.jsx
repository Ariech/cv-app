function WorkExperience({ state, onInputChange }) {
  const { company, position, responsibilites, fromDate, toDate } = state;

  return (
    <>
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
      </form>
    </>
  );
}

export default WorkExperience;
