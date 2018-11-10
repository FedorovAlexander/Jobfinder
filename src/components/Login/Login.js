import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import '../Login/Login.css';

const Login = () => {
  return (
    <div>
      <div className="login">
        <section className="login__form">
          <LoginForm />
        </section>
      </div>
    </div>
  )
}

export default Login;
