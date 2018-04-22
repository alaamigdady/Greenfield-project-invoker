import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
  <h1> this is my disease </h1> 
    <h4> List painent </h4>
    There are { props.painents.length } painents.
    { props.painents.map(painent => <ListItem painent={painent}/>)}
  </div>
)

export default List;