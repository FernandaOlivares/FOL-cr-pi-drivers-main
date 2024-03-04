/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

import styles from './Filters.module.css';


const FilterDriversByTeam = ({ handleFilterByTeam, selectedByTeamValue, allTeams }) => {
  return (
    <div className={styles.filterContainer}>
      <select
        value={selectedByTeamValue}
        onChange={handleFilterByTeam}
        name='filterByTeam'
        id='filterByTeam'
        className={styles.filterBtn}
      >
        <option value='' disabled id='filterByTeam'>Team</option>
        {allTeams?.map((team) => {
          return (
            <option key={team.id} value={team.name}>{team.name}</option>
          );
        })}
      </select>
    </div>
  );
};

FilterDriversByTeam.propTypes = {
  handleFilterByTeam: PropTypes.func.isRequired,
  allTeams: PropTypes.array.isRequired, // Cambiado de func a array
};

export default FilterDriversByTeam;
