/* eslint-disable no-unused-vars */
import React from 'react';
import Form from '../../components/Form/Form.jsx';
import Header from '../../components/Header/Header.jsx';
import './Create.module.css';

const CreateNewDriver = () => {
  return (
    <div>
      <div>
        <Header pageTitle=' | Create a New F1-Legend | '/>
      </div>
      <div>
        <Form/>
      </div>
    </div>
  );
};

export default CreateNewDriver;
