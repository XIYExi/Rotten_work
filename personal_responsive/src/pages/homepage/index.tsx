import React from 'react';
import IndexPage from '@/pages/homepage/home';
import AboutPage from '@/pages/homepage/about';
import ServicePage from '@/pages/homepage/service';
import FeaturesPage from '@/pages/homepage/features';
import PortfolioPage from '@/pages/homepage/portfolio';
import MembersPage from '@/pages/homepage/members';
import TestimonialsPage from '@/pages/homepage/testimonials';
import SupportPage from '@/pages/homepage/support';
import MyblogPage from '@/pages/homepage/myblog';
import ContactPage from '@/pages/homepage/contact';

export default function HomePageIndex(props:any){

  return (
    <React.Fragment>

      {/*home*/}
      <IndexPage />
      {/*about*/}
      <AboutPage />
      {/*service*/}
      <ServicePage />
      {/*features*/}
      <FeaturesPage />
      {/*portfolio*/}
      <PortfolioPage />
      {/*members*/}
      <MembersPage />
      {/*Testimonials*/}
      <TestimonialsPage />
      {/*support*/}
      <SupportPage />
      {/*myblog*/}
      <MyblogPage />
      {/*contact*/}
      <ContactPage />

    </React.Fragment>
  );
}
