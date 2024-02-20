/*import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { AllTeams } from '../../redux/selectors/index'
import { filterByTeam, getDrivers, getTeams } from '../../redux/actions/index';
*/
import styles from './Filters.module.css';

const FilterByTeam = ({setCurrentPage, setOrder}) => {
  /*const dispatch = useDispatch();
  const allTeams = AllTeams();

    useEffect(()=>{
        dispatch(getDrivers());
        dispatch(getTeams());
    },[dispatch]);

  function handleFilterByTeam(teamOption) {
    teamOption.preventDefault();
    dispatch(filterByTeam(teamOption.target.value));
    setCurrentPage(1);
    setOrder(`Filtered by team: ${teamOption.target.value}`);
  }

  <select onChange={(teamOption) => handleFilterByTeam(teamOption)} name='filterByTeam' id='filterByTeam' className={styles.filterBtn} defaultValue=''>
  {allTeams?.map((team)=>{
            return(
                <option key={team.id} value={team.name}>{team.name}</option>
            )
        })}
  */

return (
  <div className={styles.filterContainer}>
    <select onChange={(teamOption) => handleFilterByTeam(teamOption)} name='filterByTeam' id='filterByTeam' className={styles.filterBtn} defaultValue=''>
        <option value='' disabled id='filterByTeam'>FILTER BY : TEAM</option>
        
    </select>
  </div>
)};

export default FilterByTeam;