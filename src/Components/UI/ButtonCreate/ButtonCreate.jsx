import React from 'react';
import './ButtonCreate.css';

export const ButtonCreate = ({name, method}) => {
  return (
    <button className="buttonCreate" onClick={method}>Create {name}</button>
  )
}
