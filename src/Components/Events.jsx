import React from "react";
import PropTypes from "prop-types";

const Events = ({ activities }) => {
  return (
    <section className="padding" id="activities">
      <div className="section-heading">
        <p className="eyebrow">Atividades extracurriculares</p>
        <h2>Experiências e certificações</h2>
        <p className="section-copy">Participações acadêmicas, cursos complementares e certificações.</p>
      </div>

      <div className="events-grid">
        {activities.map((activity) => (
          <article className="detail-card" key={`${activity.title}-${activity.period}`}>
            <div className="card-topline">
              <span>{activity.subtitle}</span>
              <span>{activity.period}</span>
            </div>
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
            {activity.link && (
              <a className="project-link" href={activity.link} target="_blank" rel="noopener noreferrer" style={{ marginTop: '0.5rem', display: 'inline-block' }}>
                Ver Certificado/Link
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

Events.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string,
    }),
  ).isRequired,
};

export default Events;