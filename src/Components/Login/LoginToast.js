import React from 'react';
import { Toast } from 'react-bootstrap';

const LoginToast = () => {
    return (
        <div>
            <Toast className='mb-3'>
    <Toast.Body className="text-Success">✅ Email has been sent</Toast.Body>
  </Toast>
        </div>
    );
};

export default LoginToast;