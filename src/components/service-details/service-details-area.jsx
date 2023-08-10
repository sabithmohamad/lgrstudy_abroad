import React from 'react';

const ServiceDetailsArea = () => {
  return (
    <>
      <div className="service-details-area">
        <div className="container">
          <div className="row service-pt-pb">
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details">
                <h3 className="tp-title-sm service-details-space">Expand Your Reach: Connecting Universities with Global Talent</h3>
                {/* <a href="#">Schedule a free expert session <i className="fal fa-arrow-right"></i></a> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                <p className="pb-15">Embark on a journey of enhanced global outreach and engagement with LGR. Leverage our years of expertise and an expansive network of 1000+ recruitment partners to propel your university's presence to unprecedented heights.</p>
                <p className="pb-10"> By partnering with LGR, your institution gains the advantage of receiving meticulously vetted applications from high-quality students, backed by our reputation for excellence. Additionally, access the largest college fairs and immersive webinars, enriching your university's exposure and connections. Collaborate with over 1000+ recruitment partners to foster a worldwide community, ensuring your university's continued growth and prominence on the global education stage.</p>
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
                <img src="/assets/img/service/service-icon-10.1.jpg" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details">
                <h3 className="tp-title-sm service-details-space">Global Excellence: Connecting Universities with Premier Talent Worldwide</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                <p className="pb-15">In the ever-evolving landscape of education, LGR takes the lead in connecting universities with top-tier talent from across the globe. Our innovative approach streamlines the process for institutions seeking the best students, saving valuable time by connecting them exclusively with high-quality, pre-vetted applicants.</p>
                <p>With "Biggest College Fairs and Webinars," LGR offers a dynamic platform for universities to extend their global presence. Engage with prospective students through highly acclaimed events, fostering a worldwide reputation and expanding reach through extensive promotional channels.

Navigating the vast terrain of international recruitment, LGR's "1000+ Recruitment Partner Network" stands as a testament to our dedication. Drawing from years of experience, we've cultivated a robust network of over 1000+ active recruitment partners. This expansive community collaborates diligently to deliver a diverse and talented student pool to your institution, ensuring excellence and enriching the academic journey for both students and universities alike..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;