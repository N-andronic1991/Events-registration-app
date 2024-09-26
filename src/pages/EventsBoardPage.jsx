import EventsBoard from '../components/EventsBoard/EventsBoard';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Loader from '../components/Loader/Loader';
import PageTitle from '../components/pageTitle/PageTitle';
import Pagination from '../components/Pagination/Pagination';
import { requestEvents } from '../services/api';
import { useEffect, useState, useMemo } from 'react';
// import clsx from 'clsx';
// import css from '../components/App.module.css';
const EventsBoardPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationData, setPaginationData] = useState({
    page: 1,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });
  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true);
        const response = await requestEvents(currentPage);
        setEvents(response.data.data);
        setPaginationData({
          page: response.data.page,
          totalPages: response.data.totalPages,
          hasNextPage: response.data.hasNextPage,
          hasPreviousPage: response.data.hasPreviousPage,
        });
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, [currentPage]);

  return (
    <>
      <PageTitle text="Events" />
      {loading && <Loader />}
      {isError && <ErrorMessage />}
      {events && <EventsBoard events={events} />}
      <Pagination
        currentPage={paginationData.page}
        totalPages={paginationData.totalPages}
        hasNextPage={paginationData.hasNextPage}
        hasPreviousPage={paginationData.hasPreviousPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default EventsBoardPage;
