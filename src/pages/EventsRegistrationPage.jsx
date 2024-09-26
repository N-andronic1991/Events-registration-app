import { useParams } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
const EventsRegistrationPage = () => {
  const { eventId } = useParams();
  return <RegistrationForm />;
};

export default EventsRegistrationPage;
