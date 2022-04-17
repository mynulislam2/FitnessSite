import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import SocialAuth from '../SocialAuth/SocialAuth';
const Registraion = () => {
  let navigate = useNavigate();
  let location = useLocation();
const [Agree, setAgree] = useState(false);
  let from = location.state?.from?.pathname || "/";
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const passwordRef = useRef()
  const EmailRef = useRef()
  const FirstNameRef = useRef()
  const LastNameRef = useRef()
  const checkRef = useRef()
let checked;
  const CheckBox=(event)=>{
    checked =event.target.checked
}
if (user) {
  navigate(from, { replace: true });

}
  const SignUp = (event) => {
    event.preventDefault()
    const LastName = LastNameRef.current.value
    const FirstName = FirstNameRef.current.value
    const Email = EmailRef.current.value
    const password = passwordRef.current.value
if (checked) {
  createUserWithEmailAndPassword(Email, password)
}


  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3">
            <h5 className="card-title text-center fw-light fs-5">Sign up</h5>
            <div className="card-body p-4 p-sm-5">
              <form onSubmit={SignUp}>
                <div className="form-floating mb-3">
                  <input type="text" ref={FirstNameRef} className="form-control" id="floatingInput" placeholder="mynul" required/>
                  <label for="floatingInput">First Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" ref={LastNameRef} className="form-control" id="floatingInput" placeholder="islam" required/>
                  <label for="floatingInput">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" ref={EmailRef} className="form-control" id="floatingInput" placeholder="name@example.com" required/>
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" ref={passwordRef} className="form-control" id="floatingPassword" placeholder="Password" required/>
                  <label for="floatingPassword">Password</label>
                </div>
                
                <div className="form-check mb-3">
                  <input onChange={CheckBox} className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                  <label className="form-check-label" for="rememberPasswordCheck">
                    agree with <a className="text-decoration-none" href="#">terms and conditions</a>
                  </label>
                </div>
                <div className="d-grid">
                  <input type="submit" className="btn btn-primary btn-login text-uppercase fw-bold" value="Sign
                  up"/>
                </div>
                <hr className="my-4" />
                <SocialAuth></SocialAuth>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Registraion;