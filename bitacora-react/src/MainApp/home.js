import React from 'react'
import '../App.css';

import MainTittle from '../Components/HomeMain/mainTittle'
import TextSection from '../Components/HomeMain/BasictextSection'
import FeaturedServices from '../Components/HomeMain/Featuredservices'
import Footer from '../Components/HomeMain/footer'




export default function Home (){
    return(
        <div>
            <div id='tittleWrapper'>
                <MainTittle />
            </div>
            <TextSection />
            <FeaturedServices />
            <TextSection />
            <FeaturedServices />
            <TextSection />
            <FeaturedServices />
            <TextSection />
            <Footer />
        </div>
    );
};


