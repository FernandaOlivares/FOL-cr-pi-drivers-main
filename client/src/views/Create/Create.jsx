/* eslint-disable no-unused-vars */
import React from 'react';
import Form from '../../components/Form/Form.jsx';
import Header from '../../components/Header/Header.jsx';
import styles from './Create.module.css'; 

const CreateNewDriver = () => {
  return (
    <div>
      <div className={styles.headerContainer}>
        <Header pageTitle=' | Create a New F1-Legend | '/>
      </div>
      <div className={styles.formContainer}>
        <Form/>
      </div>
    </div>
  );
};

export default CreateNewDriver;
