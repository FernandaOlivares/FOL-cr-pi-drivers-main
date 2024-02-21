/* eslint-disable react/prop-types */ // Desactiva la verificación de los tipos de propiedades para este componente
import { useState } from "react";
import styles from '../Pagination/Pagination.module.css'

export default function Pagination({ driversPerPage, allDrivers, pagination }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allDrivers / driversPerPage); i++) {//redondeo hacia arriba. Es para saber cuantas páginas necesito en el paginado
        pageNumbers.push(i);
    }
    
    const [currentPage, setCurrentPage] = useState(1);

    const nextPage = () => {
        if (currentPage < pageNumbers.length) {
            pagination(currentPage + 1); // Utiliza la función pagination en lugar de setCurrentPage
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            pagination(currentPage - 1); // Utiliza la función pagination en lugar de setCurrentPage
        }
    };


    const getVisiblePages = () => {
        const totalPages = pageNumbers.length;
        const maxVisiblePages = 7;
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

        const visiblePages = pageNumbers.slice(startPage - 1, endPage); // Definir visiblePages aquí
        return visiblePages;
    };

    const visiblePages = getVisiblePages(); // Llamar a getVisiblePages para definir visiblePages

    // Renderiza el componente de paginación
    return (
        <div className={styles.container}>
            <nav>
                <ul className={styles.paginado}>
                    {/* Botón para ir a la página anterior */}
                    <li className={styles.number}>
                        <button className={styles.overlayButton} onClick={prevPage}>{"<<"}</button>
                    </li>

                    {/* Mapea los números de página y renderiza botones */}
                    {pageNumbers && visiblePages.map(number => (
                        <li className={styles.number} key={number} style={{ display: visiblePages.includes(number) ? 'inline-block' : 'none' }}>
                            <button className={styles.overlayButton} onClick={() => {
                                setCurrentPage(number);
                                pagination(number);
                            }}>{number}</button>
                        </li>
                    ))}

                    {/* Botón para ir a la página siguiente */}
                    <li className={styles.number}>
                        <button className={styles.overlayButton} onClick={nextPage}>{">>"}</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
