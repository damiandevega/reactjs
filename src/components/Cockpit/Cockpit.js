import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
  let btnClasses = [classes.Button];

  if (props.showPersons) {
    btnClasses.push(classes.Red);
  }

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClasses.join(' ')}
          onClick={props.clicked}
        >
          Toggle Persons
        </button>
    </div>
  )
};

export default cockpit;