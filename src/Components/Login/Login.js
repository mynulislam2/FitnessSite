import React, { useRef } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import SocialAuth from '../SocialAuth/SocialAuth';
import LoginToast from './LoginToast';

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
    auth
  );
  const passwordRef = useRef()
  const EmailRef = useRef()

  if (user) {
    navigate(from, { replace: true });
  }

  const SignIn = (event) => {
    event.preventDefault()
    const Email = EmailRef.current.value
    const password = passwordRef.current.value
    signInWithEmailAndPassword(Email, password)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              {sending && <LoginToast></LoginToast>}
              <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
              {error && <div>
                <p className='text-danger'>Error: {error.message}</p>
              </div>}
              <form onSubmit={SignIn}>
                <div className="form-floating mb-3">
                  <input type="email" ref={EmailRef} className="form-control" id="floatingInput" placeholder="name@example.com" required />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" ref={passwordRef} className="form-control" id="floatingPassword" placeholder="Password" required />
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="d-grid">
                  <input type="submit" className="btn btn-primary btn-login text-uppercase fw-bold" value="Sign In" />
                </div>
                <p className='btn' onClick={async () => {
                  const Email = EmailRef.current.value
                  await sendPasswordResetEmail(Email);
                }}>Forget Password?</p>
                <hr className="my-4" />
                <small className='d-flex justify-content-center mb-3 mt-0 '>New user?                 <Link to='/register' className='text-center text-primary text-decoration-none ms-2'> create new account</Link></small>

                <SocialAuth></SocialAuth>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;