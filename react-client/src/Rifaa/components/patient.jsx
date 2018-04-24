import React from 'react';

const Patient = (props) => (
  <div>
    { props.patient.number }
    { props.patient.firstName }
    { props.patient.lastName }
    { props.patient.gender }
    { props.patient.age }
    { props.patient.phone }
    { props.patient.conditions }
    { props.patient.past_Diseases }
    { props.patient.currentlly_Medications }
    { props.patient.genetic_Diseases }
    { props.patient.allergies }
    { props.patient.description }
  </div>
)

export default Patient;