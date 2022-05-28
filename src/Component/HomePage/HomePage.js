import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import CarServices from '../CarServices/CarServices';
import Rantal from './../Rantal/Rantal';
import CardSection from './../CardSection/CardSection';
import FooterSection from './../FooterSection/FooterSection';

const HomePage = () => {
    return (
        <div>
           
            <BannerSection></BannerSection>
            <Rantal></Rantal>
            <CarServices></CarServices>
            <CardSection></CardSection>
            
        </div>
    );
};

export default HomePage;