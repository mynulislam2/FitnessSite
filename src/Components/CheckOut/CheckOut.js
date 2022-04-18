import React from 'react';
import Navigate from '../navigate/Navigate';
import { Toast } from 'react-bootstrap';
import './checkout.css';
const CheckOut = () => {

    return (
        <div>
<Navigate color='dark'></Navigate>
<div class="container  mt-5 px-5">
    <div class="mb-4 text-center">
        <h2 className='payment_title'>Confirm order and pay</h2>
    </div>
    <div class="row justify-content-center">
        <div class="col-sm-6 col-md-6 ">
            <div class="card p-3">
                <h6 class="text-uppercase">Payment details</h6>
                <div class="inputbox mt-3"> <input type="text" name="name" class="form-control" required/> <span>Name on card</span> </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required/> <i class="fa fa-credit-card"></i> <span>Card Number</span> </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex flex-row">
                            <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required/> <span>Expiry</span> </div>
                            <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required/> <span>CVV</span> </div>
                        </div>
                    </div>
                </div>
                <div class="mt-4 mb-4">
                    <h6 class="text-uppercase">Billing Address</h6>
                    <div class="row mt-3">
                        <div class="col-md-6">
                            <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required/> <span>Street Address</span> </div>
                        </div>
                        <div class="col-md-6">
                            <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required/> <span>City</span> </div>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6">
                            <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required/> <span>State/Province</span> </div>
                        </div>
                        <div class="col-md-6">
                            <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required/> <span>Zip code</span> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 mb-4 d-flex justify-content-between"> <button  class="btn btn-success px-3 mx-auto">submit</button> </div>
        </div>

    </div>
</div>
        </div>
    );
};

export default CheckOut;