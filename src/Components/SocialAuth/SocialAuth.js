import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
const SocialAuth = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    if (user || user1) {
        navigate(from, { replace: true });
    } const GoogleHandler = () => {
        signInWithGoogle()

    }
    const FacebookHandler = () => {
        signInWithFacebook()
    }
    return (
        <div>
            <div className="d-grid mb-2">
                <button onClick={GoogleHandler} className="btn btn-danger btn-login text-uppercase fw-bold" type="submit">
                    <GoogleIcon></GoogleIcon> Sign in with Google
                </button>
            </div>
            <div className="d-grid">
                <button onClick={FacebookHandler} className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">
                    <FacebookIcon></FacebookIcon>Sign in with Facebook
                </button>
            </div>
        </div>
    );
};

export default SocialAuth;