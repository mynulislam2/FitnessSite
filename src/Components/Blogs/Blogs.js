import React from 'react';
import Footer from '../Footer/Footer';
import Navigate from '../navigate/Navigate';
import AuthBlog from './AuthBlog';
import FireBlog from './FireBlog';
import Fireblog2 from './Fireblog2';

const Blogs = () => {
    return (
        <div>
                       <Navigate color="dark"></Navigate>
 
            <AuthBlog></AuthBlog>
            <FireBlog></FireBlog>
            <Fireblog2></Fireblog2>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;