import React from 'react'
import '../App.css';

import MainTittle from '../Components/mainTittle'
import TextSection from '../Components/BasictextSection'
import FeaturedServices from '../Components/Featuredservices'
import Footer from '../Components/footer'



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


