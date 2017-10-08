import React from 'react';
import { connect } from 'react-redux';

import { User } from './User';
import { fetchUserAction } from '../actions';


export function Users(props) {
  return (
    <div>
      <ul>
        {props.users.map(login =>
          <li key={login.id}>
            {login}
            <button type="button" onClick={()=>props.loadUser(login)}>Load User</button>
          </li>
        )}
      </ul>
      {props.loading && <p>Please wait...</p>}
      {props.current && <User {...props.current}/>}
    </div>
  );
}

function mapState(state) {
  return state;
}

function mapDispatch(dispatch) {
  return {
    loadUser: (login) => dispatch(fetchUserAction(login))
  }
}

export default connect(mapState, mapDispatch)(Users)
