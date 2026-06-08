import React from "react";
import PropTypes from "prop-types";

const Curriculum = ({ education }) => {
  return (
    <section className="padding section-surface" id="curriculum">
      <div className="section-heading">
        <p className="eyebrow">Currículo</p>
        <h2>Formação acadêmica</h2>
        <p className="section-copy">Resumo objetivo da trajetória acadêmica.</p>
      </div>

      <div className="two-column-grid">
        <div className="card-stack">
          <h3>Formação acadêmica</h3>
          {education.map((item) => (
            <article className="detail-card" key={`${item.institution}-${item.course}`}>
              <div className="card-topline">
                <span>{item.status}</span>
                <span>{item.period}</span>
              </div>
              <h4>{item.institution}</h4>
              <p>{item.course}</p>
              <p className="muted">{item.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

Curriculum.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      institution: PropTypes.string.isRequired,
      course: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Curriculum;