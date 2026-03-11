import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import  TestimonialsSection  from '../components/TestimonialsSection';
import { CTASection } from '../components/CTASection';
import PartnerLogoSlider from '../components/PartnerLogoSlider';
import StudentPlacementSlider from '../components/StudentPlacementSlider';
import EventGallerySlider from '../components/EventGallery';
import MobileAIBanner from '../components/AIEnabledLearning';
import HiringPartnersSlider from '../components/PartnerLogoSlider';


const HomePage = () => {
    return (
        <Layout>
            

            <HeroSection />
            <MobileAIBanner />
            <HiringPartnersSlider />
            
            <StudentPlacementSlider />
            <FeaturesSection />
            <TestimonialsSection />
            <EventGallerySlider />
            <CTASection />
        </Layout>
    );
}

export default HomePage;
