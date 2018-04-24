import React from 'react';
import Patient from './patient.jsx';

const PatientList = (props) => (
  <div>
  <h1> this is my disease </h1> 
    <h4>patients List</h4>
    There are { props.patients.length } patients.
    { props.patients.map(patient => <Patient patient={patient}/>)}
  </div>
)

export default PatientList;