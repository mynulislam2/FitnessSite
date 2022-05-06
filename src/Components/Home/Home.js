import React from 'react';
import leftSideFancy from '../../images/banner/floating_image_03_01.png';
import rightSideFancy from '../../images/banner/floating_image_03_02.png';
import wave from '../../images/banner/white_bottom_wave_02.png';
import BecomeStroger from '../BecomeStronger/BecomeStroger';
import Contact from '../contact/Contact';
import Footer from '../Footer/Footer';
import Navigate from '../navigate/Navigate';
import Services from '../Services/Services';
import './Home.css';
const Home = () => {
    return (
        <>        <div className='Home_container'>
            <Navigate></Navigate>
            <div className='Hometitle'>
                <p className='title1'>Skill</p>
                <p className='title1' style={{ color: "#f41e1e" }}>DISCIPLINE</p>
                <h6 className='title2'>Be Stronger</h6>
            </div>
            <div className='wave'>
                <img src={wave} alt="" />
            </div>
            <div className='leftSideFancy'>
                <img src={leftSideFancy} alt="" />
            </div>
            <div className='rightSideFancy'>
                <img src={rightSideFancy} alt="" />
            </div>
        </div>
        <Services></Services>
        <BecomeStroger></BecomeStroger>
<Contact></Contact>
        <Footer></Footer>
  </>

    );
};

export default Home;