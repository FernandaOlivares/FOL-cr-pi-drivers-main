/* eslint-disable react/prop-types */
import styles from '../Pagination/Pagination.module.css';

const Pagination = ({ driversPerPage, allDrivers, handlePagination, currentPage, setCurrentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allDrivers / driversPerPage); i++) {
        pageNumbers.push(i);
    }

    //const [currentPage, setCurrentPage] = useState(1);los paso como params desde Cards, porque se utilizan en Cards también

    const nextPage = () => {
        if (currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1); // Incrementa currentPage en 1
            handlePagination(currentPage + 1); // Llama a pagination con el nuevo valor de currentPage
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1); // Decrementa currentPage en 1
            handlePagination(currentPage - 1); // Llama a pagination con el nuevo valor de currentPage
        }
    };


    const getVisiblePages = () => {
        const totalPages = pageNumbers.length;
        const maxVisiblePages = 10;
        let startPage = currentPage - Math.floor(maxVisiblePages / 2);
        let endPage = currentPage + Math.floor(maxVisiblePages / 2);

        if (startPage < 1) {
            startPage = 1;
            endPage = maxVisiblePages;
        }

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = totalPages - maxVisiblePages + 1;
        }

        const visiblePages = pageNumbers.slice(startPage - 1, endPage);
        return visiblePages;
    };

    const visiblePages = getVisiblePages();

    return (
        <div className={styles.paginationContainer}>
            <nav>
            <ul className={styles.pagination}>
                    {currentPage !== 1 && (
                        <li className={styles.number}>
                            <button className={styles.overlayButton} onClick={prevPage}>{'<'}</button>
                        </li>
                    )}
                    {pageNumbers && visiblePages.map(number => (
                        <li className={styles.number} key={number} style={{ display: visiblePages.includes(number) ? 'inline-block' : 'none' }}>
                            <button className={currentPage === number ? `${styles.overlayButton} ${styles.currentPage}` : styles.overlayButton}  onClick={() => handlePagination(number)}>{number}</button>
                        </li>
                    ))}
                   {currentPage !== pageNumbers.length && (
                        <li className={styles.number}>
                            <button className={styles.overlayButton} onClick={nextPage}>{'>'}</button>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
