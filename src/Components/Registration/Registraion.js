import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Navigate from '../navigate/Navigate';
import SocialAuth from '../SocialAuth/SocialAuth';
const Registraion = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, error1] = useUpdateProfile(auth);
  const [name, setName] = useState('');
  const passwordRef = useRef()
  const EmailRef = useRef()
  const FirstNameRef = useRef()
  const LastNameRef = useRef()

  let checked;
  const CheckBox = (event) => {
    checked = event.target.checked
  }

  if (user) {
    navigate(from, { replace: true });

  }
  if (updating) {
    return <p>Updating...</p>;
  }


  // sign up function
  const SignUp = async (event) => {
    event.preventDefault()
    const LastName = LastNameRef.current.value
    const FirstName = FirstNameRef.current.value
    setName(FirstName)
    const Email = EmailRef.current.value
    const password = passwordRef.current.value
    if (!checked) {
return 
      }
      await createUserWithEmailAndPassword(Email, password)
      await updateProfile({ displayName:name})

    
  }
     console.log(user);

  return (
    <div>   
       <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3">
            <h5 className="card-title text-center fw-light fs-5">Sign up</h5>
            {error && <div>
              <p className='text-danger'>Error: {error.message}</p>
            </div>}
            <div className="card-body p-4 p-sm-5">
              <form onSubmit={SignUp}>
                <div className="form-floating mb-3">
                  <input type="text" ref={FirstNameRef} className="form-control" id="floatingInput" placeholder="mynul" required />
                  <label for="floatingInput">First Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" ref={LastNameRef} className="form-control" id="floatingInput" placeholder="islam" required />
                  <label for="floatingInput">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" ref={EmailRef} className="form-control" id="floatingInput" placeholder="name@example.com" required />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" ref={passwordRef} className="form-control" id="floatingPassword" placeholder="Password" required />
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
                <small className='d-flex justify-content-center mb-3 mt-0 '>Already Login?                 <Link to='/login' className='text-center text-primary text-decoration-none ms-2'> Log in</Link></small>
                <SocialAuth></SocialAuth>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div></div>


  );
};

export default Registraion;