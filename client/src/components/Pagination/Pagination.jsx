/* eslint-disable react/prop-types */
import React from "react";

import { useState } from "react";

import styles from '../Pagination/Pagination.module.css'

export default function Pagination({driversPerPage, allDrivers, pagination}){
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(allDrivers/driversPerPage); i++) {
        pageNumbers.push(i)
    }

    const [currentPage, setCurrentPage] = useState(1);

    const nextPage = () => {
        if (currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
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

        return pageNumbers.slice(startPage - 1, endPage);
    };

    const visiblePages = getVisiblePages();

    return (
        <div className = {styles.container}>
        <nav>
            <ul className={styles.paginado}>
                <li className={styles.number}>
                    <button className={styles.overlayButton} onClick={prevPage}>{"<<"}</button>
                </li>
                {pageNumbers && 
                visiblePages.map(number => (
                    <li className={styles.number} key={number} style={{display: visiblePages.includes(number) ? 'inline-block' : 'none'}}>
                        <button className={styles.overlayButton} onClick={() => {
                            setCurrentPage(number);
                            pagination(number);
                        }}>{number}</button>
                    </li>
                ))}
                <li className={styles.number}>
                    <button className={styles.overlayButton} onClick={nextPage}>{">>"}</button>
                </li>
            </ul>
        </nav>
        </div>
    );
}
