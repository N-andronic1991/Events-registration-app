import PropTypes from 'prop-types';
import css from './EventCard.module.css';
import { Link } from 'react-router-dom';

const EventCard = ({ _id, title, description, event_date, organizer }) => {
  return (
    <div className={css.event}>
      <h2 className={css.title}>{title}</h2>
      <div className={`${css.info}, ${css.description}`}>
        <p className={css.info}>{description}</p>
      </div>
      <p className={css.info}>{event_date}</p>
      <p className={css.info}>{organizer}</p>
      <ul className={css.infoList}>
        <li className={css.infoItem}>
          <Link to={`/register/${_id}`}>Register</Link>
        </li>
        <li>
          <Link to={`/participants/${_id}`}>
            <button type="button">View</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default EventCard;

EventCard.proptypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  event_date: PropTypes.string.isRequired,
  organizer: PropTypes.string.isRequired,
};
