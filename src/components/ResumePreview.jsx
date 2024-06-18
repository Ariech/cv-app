function ResumePreview({ generalInfo, educationInfo, workExperience }) {
  const { name, email, phone } = generalInfo;
  return (
    <>
      <div className="personal-info">
        <h1>{name}</h1>
        <div className="contact-info">
          <span>{email}</span>
          <span>{phone}</span>
        </div>
      </div>

      <div>
        <h3>Education</h3>
        {educationInfo.map(({ id, school, degree, fromDate, toDate }) => (
          <div key={id}>
            <p>{school}</p>
            <p>{degree}</p>
            <p>{fromDate}</p>
            <p>{toDate}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>Professional Experience</h3>
        {workExperience.map(
          ({ id, company, position, responsibilites, fromDate, toDate }) => (
            <div key={id}>
              <p>{company}</p>
              <p>{position}</p>
              <p>{responsibilites}</p>
              <p>{fromDate}</p>
              <p>{toDate}</p>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default ResumePreview;
