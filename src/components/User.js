import React from 'react';

import './user.css'

export function User(props) {
  return (
    <div className="user">
      <img src={props.avatar_url}/>
      <div>
        <h2>{props.name}</h2>
        <p>{props.company}</p>
      </div>
    </div>
  );
}
