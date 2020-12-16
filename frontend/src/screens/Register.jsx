import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userAction';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };
  return (
    <>
      {loading && <div>Loading...</div>}
      {userInfo && <div>Done...</div>}
      {error && <div>{error}</div>}
      <form onSubmit={submitHandler}>
        <label htmlFor='Name'>Name</label>
        <input
          type='text'
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='text'
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <button type='submit'>Register</button>
      </form>
    </>
  );
}

export default Register;
