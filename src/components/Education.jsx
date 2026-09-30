function Education() {
  const educationData = [
    {
      degree: "Bachelor of Computer Application",
      institution: "Techno India University",
      year: "2023 - 2027",
      description: "Computer Application",
    },
    {
      degree: "Higher Secondary",
      institution: "Christ Church Girls High School",
      year: "2021 - 2023",
      description: "Science Stream",
    },
    {
      degree: "Secondary School",
      institution: "Christ Church Girls High School",
      year: "2021",
      description: "General Education",
    },
  ];

  return (
    <section id="education" className="section">
      <h2>Education</h2>

      <div className="education-container">
        {educationData.map((item, index) => (
          <div className="education-card" key={index}>
            <h3>{item.degree}</h3>
            <h4>{item.institution}</h4>
            <p className="year">{item.year}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
