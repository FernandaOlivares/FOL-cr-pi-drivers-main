import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTeams } from '../../redux/actions/index.jsx';
import Form from '../../components/Form/Form.jsx';
import './Create.module.css';

const CreateNewDriver = () => {


  return (
    <div>
      <Form />
    </div>
  );
};

export default CreateNewDriver;
