import React, { useEffect } from 'react';
import { FooterFour, FooterThree, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import AccordionArea from './accordion-area';
import ServiceDetailsArea from './service-details-area';
import CtaTwo from '../common/cta/cta-2';



const ServiceDetails = ({service}) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={service?.title ? service?.title : 'Service Details'} />
      <ServiceDetailsArea/>
      <CtaTwo/>
      {/* <AccordionArea/> */}
      <FooterFour />
    </Wrapper>
  );
};

export default ServiceDetails;