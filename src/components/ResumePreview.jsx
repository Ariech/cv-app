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

      <div className="resume-section">
        <h3>Education</h3>
        {educationInfo.map(({ id, school, degree, fromDate, toDate }) => (
          <div className="resume-container" key={id}>
            <div className="resume-dates">
              <p>{fromDate}</p>
              <p>{toDate}</p>
            </div>
            <div className="resume-info">
              <p>
                <span className="resume-info--school">{school}</span>
              </p>
              <p>{degree}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="resume-section">
        <h3>Professional Experience</h3>
        {workExperience.map(
          ({ id, company, position, responsibilities, fromDate, toDate }) => (
            <div className="resume-container" key={id}>
              <div className="resume-dates">
                <p>{fromDate}</p>
                <p>{toDate}</p>
              </div>
              <div className="resume-info">
                <p>
                  <span className="resume-info--company">{company}</span>
                </p>
                <p>{position}</p>
                <p>{responsibilities}</p>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default ResumePreview;
