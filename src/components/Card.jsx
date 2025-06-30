import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from './Icon';

// Base Card Component
const Card = ({ 
  children, 
  className = '', 
  hover = true,
  clickable = false,
  onClick,
  ...props 
}) => {
  const cardClasses = `card ${hover ? 'card-hover' : ''} ${clickable ? 'card-clickable' : ''} ${className}`;
  
  const CardWrapper = clickable ? motion.div : 'div';
  const cardProps = clickable ? {
    whileHover: { y: -4, scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
    onClick
  } : {};

  return (
    <CardWrapper className={cardClasses} {...cardProps} {...props}>
      {children}
    </CardWrapper>
  );
};

// Feature Card
export const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  href, 
  to,
  className = '',
  ...props 
}) => {
  const content = (
    <Card className={`feature-card ${className}`} hover clickable={!!href || !!to} {...props}>
      <div className="feature-card-icon">
        {typeof icon === 'string' ? <Icon name={icon} size={32} /> : icon}
      </div>
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-description">{description}</p>
      {(href || to) && (
        <div className="feature-card-arrow">
          <Icon name="arrow-right" size={16} />
        </div>
      )}
    </Card>
  );

  if (href) {
    return (
      <a href={href} className="card-link" target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className="card-link">
        {content}
      </Link>
    );
  }

  return content;
};

// Stat Card
export const StatCard = ({ 
  number, 
  label, 
  icon, 
  trend,
  trendValue,
  className = '',
  style = {},
  ...props 
}) => (
  <Card className={`stat-card ${className}`} {...props}>
    <div className="stat-card-content">
      <div className="stat-card-header">
        {icon && (
          <div className="stat-card-icon">
            {typeof icon === 'string' ? <Icon name={icon} size={24} /> : icon}
          </div>
        )}
        {trend && (
          <div className={`stat-card-trend ${trend}`}>
            <Icon name={trend === 'up' ? 'trending-up' : 'trending-down'} size={16} />
            {trendValue && <span>{trendValue}</span>}
          </div>
        )}
      </div>
      <div className="stat-card-number" style={style}>{number}</div>
      <div className="stat-card-label" style={style}>{label}</div>
    </div>
  </Card>
);

// Event Card
export const EventCard = ({ 
  title, 
  date, 
  time, 
  location, 
  description, 
  image, 
  status = 'upcoming',
  href,
  to,
  className = '',
  ...props 
}) => {
  const content = (
    <Card className={`event-card ${className}`} hover clickable={!!href || !!to} {...props}>
      {image && (
        <div className="event-card-image">
          <img src={image} alt={title} />
          <div className={`event-card-status ${status}`}>
            {status}
          </div>
        </div>
      )}
      <div className="event-card-content">
        <h3 className="event-card-title">{title}</h3>
        <div className="event-card-meta">
          <div className="event-card-date">
            <Icon name="calendar" size={14} />
            <span>{date}</span>
          </div>
          {time && (
            <div className="event-card-time">
              <Icon name="time" size={14} />
              <span>{time}</span>
            </div>
          )}
          {location && (
            <div className="event-card-location">
              <Icon name="location" size={14} />
              <span>{location}</span>
            </div>
          )}
        </div>
        {description && (
          <p className="event-card-description">{description}</p>
        )}
      </div>
    </Card>
  );

  if (href) {
    return (
      <a href={href} className="card-link" target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className="card-link">
        {content}
      </Link>
    );
  }

  return content;
};

// Project Card
export const ProjectCard = ({ 
  title, 
  description, 
  technologies = [], 
  image, 
  githubUrl, 
  liveUrl,
  status,
  team,
  className = '',
  ...props 
}) => (
  <Card className={`project-card ${className}`} hover {...props}>
    {image && (
      <div className="project-card-image">
        <img src={image} alt={title} />
        {status && (
          <div className={`project-card-status ${status}`}>
            {status}
          </div>
        )}
      </div>
    )}
    <div className="project-card-content">
      <h3 className="project-card-title">{title}</h3>
      <p className="project-card-description">{description}</p>
      
      {technologies.length > 0 && (
        <div className="project-card-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="project-card-tech-tag">
              {tech}
            </span>
          ))}
        </div>
      )}
      
      {team && (
        <div className="project-card-team">
          <Icon name="team" size={14} />
          <span>{team}</span>
        </div>
      )}
      
      <div className="project-card-actions">
        {githubUrl && (
          <a 
            href={githubUrl} 
            className="project-card-link"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Icon name="github" size={16} />
            Code
          </a>
        )}
        {liveUrl && (
          <a 
            href={liveUrl} 
            className="project-card-link primary"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Icon name="external-link" size={16} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </Card>
);

// News Card
export const NewsCard = ({ 
  title, 
  summary, 
  date, 
  author, 
  category, 
  image, 
  href,
  to,
  className = '',
  ...props 
}) => {
  const content = (
    <Card className={`news-card ${className}`} hover clickable={!!href || !!to} {...props}>
      {image && (
        <div className="news-card-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="news-card-content">
        {category && (
          <span className="news-card-category">{category}</span>
        )}
        <h3 className="news-card-title">{title}</h3>
        <p className="news-card-summary">{summary}</p>
        <div className="news-card-meta">
          <span className="news-card-date">{date}</span>
          {author && <span className="news-card-author">by {author}</span>}
        </div>
      </div>
    </Card>
  );

  if (href) {
    return (
      <a href={href} className="card-link" target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className="card-link">
        {content}
      </Link>
    );
  }

  return content;
};

export default Card;
