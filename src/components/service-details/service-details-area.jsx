import React from 'react';
import Image from 'next/image'; // Import the Image component from next/image

const ServiceDetailsArea = () => {
  return (
    <>
      <div className="service-details-area">
        <div className="container">
          <div className="row service-pt-pb">
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details">
                <h3 className="tp-title-sm service-details-space">Expand Your Reach: Connecting Universities with Global Talent</h3>
                {/* <a href="#">Schedule a free expert session &gt;<i className="fal fa-arrow-right"></i></a> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                <p className="pb-15">Embark on a journey of enhanced global outreach and engagement with LGR. Leverage our years of expertise and an expansive network of 1000+ recruitment partners to propel your university&apos;s presence to unprecedented heights.</p>
                <p className="pb-10">By partnering with LGR, your institution gains the advantage of receiving meticulously vetted applications from high-quality students, backed by our reputation for excellence. Additionally, access the largest college fairs and immersive webinars, enriching your university&apos;s exposure and connections. Collaborate with over 1000+ recruitment partners to foster a worldwide community, ensuring your university&apos;s continued growth and prominence on the global education stage.</p>
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
                <h3 className="tp-title-sm service-details-space">Global Excellence: Connecting Universities with Premier Talent Worldwide</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                <p className="pb-15">In the ever-evolving landscape of education, LGR takes the lead in connecting universities with top-tier talent from across the globe. Our innovative approach streamlines the process for institutions seeking the best students, saving valuable time by connecting them exclusively with high-quality, pre-vetted applicants.</p>
                <p>With Biggest College Fairs and Webinars, LGR offers a dynamic platform for universities to extend their global presence. Engage with prospective students through highly acclaimed events, fostering a worldwide reputation and expanding reach through extensive promotional channels.</p>
                <p>Navigating the vast terrain of international recruitment, LGR&apos;s &quot;1000+ Recruitment Partner Network&quot; stands as a testament to our dedication. Drawing from years of experience, we&apos;ve cultivated a robust network of over 1000+ active recruitment partners. This expansive community collaborates diligently to deliver a diverse and talented student pool to your institution, ensuring excellence and enriching the academic journey for both students and universities alike.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;
