import PropTypes from 'prop-types';

import styles from './Filters.module.css';


const FilterDriversByTeam = ({ handleFilterByTeam, allTeams }) => {
  return (
    <div className={styles.filterContainer}>
      <select
        onChange={(teamOption) => handleFilterByTeam(teamOption)}
        name='filterByTeam'
        id='filterByTeam'
        className={styles.filterBtn}
        defaultValue=''
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
