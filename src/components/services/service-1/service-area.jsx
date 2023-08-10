import React from 'react';
import Image from 'next/image';

const ServiceDetailsArea = () => {
  return (
    <>
      <div className="service-details-area">
        <div className="container">
          <div className="row service-pt-pb">
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details">
                <h3 className="tp-title-sm service-details-space">How LGR can assist Recruitment Partners</h3>
                {/* <a href="#">Schedule a free expert session <i className="fal fa-arrow-right"></i></a> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                <p className="pb-15">Connect with over 100 colleges with our unique course finding engine to elevate your journey, experience rich commissions, and access a world of opportunity.</p>
                <p className="pb-10">Experience the advantage of our rich commission structure that rewards your efforts as you guide students towards their dreams. As a dedicated partner of LGR, you'll enjoy unparalleled benefits that extend beyond just monetary gains. We believe in fostering strong relationships and providing the necessary resources to help you excel in your role as an educational consultant.</p>
                {/* <p>A dedicated product design team can help you achieve your business goals. Whether you need to
                  craft an idea for a completely new product or elevate the quality of an existing solution, we’ll
                  help you to create a product that is laser targeted to your users’ needs and delivers business
                  results</p> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="sd-big-img">
                <Image
                  src="/assets/img/service/service-icon-10.1.jpg"
                  alt=""
                  width={1500}
                  height={800}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details">
                <h3 className="tp-title-sm service-details-space">Empowering Your Study Abroad Consulting Success with Trusted Partnerships</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                <p className="pb-15">At LGR Study Abroad, we stand as your unwavering partner, ensuring an admission process you can rely on, dedicated customer support, and the industry's most rewarding commissions. With access to a vast network of 100+ esteemed universities, we are your gateway to a world of educational opportunities, elevating your consultancy journey to new heights.</p>
                <p>At LGR Study Abroad, we're not just a consultancy, we're your partners in shaping academic futures and turning dreams into reality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;
