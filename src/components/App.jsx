import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import css from './App.module.css';
import Loader from './Loader/Loader';
import Navigation from './Navigation/Navigation';
import Container from './Container/Container';

const EventsBoardPage = lazy(() => import('../pages/EventsBoardPage'));

const HomePage = lazy(() => import('../pages/HomePage'));
const EventsRegistrationPage = lazy(() =>
  import('../pages/EventsRegistrationPage')
);
const EventsParticipantsPage = lazy(() =>
  import('../pages/EventsParticipantsPage')
);
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const App = () => {
  return (
    <Container>
      <header className={css.header}>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsBoardPage />} />
            <Route
              path="/register/:eventId"
              element={<EventsRegistrationPage />}
            />
            <Route
              path="/participants/:eventId"
              element={<EventsParticipantsPage />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </Container>
  );
};

export default App;
