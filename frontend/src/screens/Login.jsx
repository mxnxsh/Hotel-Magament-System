import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../actions/userAction';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userLogin = useSelector(state => state.userLogin);
  const { loading, userInfo, error } = userLogin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo) {
      props.history.push('/');
    }
    return () => {
      // cleanup
    };
  }, [userInfo]);
  const submitHandler = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <>
      {loading && <div>Loading....</div>}
      {error && <div>{error}</div>}
      <form onSubmit={submitHandler}>
        <label htmlFor='Email'>Email</label>
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
        <button type='submit'>Login</button>
      </form>
    </>
  );
}

export default Login;
