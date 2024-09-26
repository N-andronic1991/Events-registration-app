import clsx from 'clsx';
import css from './Pagination.module.css';
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  hasNextPage,
  hasPreviousPage,
}) => {
  const numbers = [...Array(totalPages).keys()].map(n => n + 1); // Create page numbers array

  const prevPage = () => {
    if (hasPreviousPage) {
      onPageChange(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (hasNextPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav>
      <ul className={css.pagination}>
        <li
          className={clsx(css.pageItem, { [css.disabled]: !hasPreviousPage })}
        >
          <a onClick={prevPage} href="#" className={css.pageLink}>
            Prev
          </a>
        </li>
        {numbers.map(n => (
          <li
            key={n}
            className={clsx(css.pageItem, { [css.active]: currentPage === n })}
          >
            <a
              onClick={() => onPageChange(n)}
              href="#"
              className={css.pageLink}
            >
              {n}
            </a>
          </li>
        ))}
        <li className={clsx(css.pageItem, { [css.disabled]: !hasNextPage })}>
          <a onClick={nextPage} href="#" className={css.pageLink}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
