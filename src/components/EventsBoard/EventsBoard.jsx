import PropTypes from 'prop-types';
import EventCard from '../EventCard/EventCard';
import css from './EventsBoard.module.css';
const EventsBoard = ({ events }) => {
  return (
    <ul className={css.eventsList}>
      {Array.isArray(events) && events.length === 0 && (
        <li>
          <b>We do not have any planed events yet. </b>
        </li>
      )}
      {Array.isArray(events) &&
        events.map(event => {
          return (
            <li key={event._id} className={css.item}>
              <EventCard {...event} />
            </li>
          );
        })}
    </ul>
  );
};
export default EventsBoard;

EventsBoard.proptypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      event_date: PropTypes.string.isRequired,
      organizer: PropTypes.string.isRequired,
    })
  ),
};
