import React from 'react';

const ProjectInfoArea = ({item}) => {
  return (
    <>
    <div className="cd-project-info-area pb-100" style={{ paddingBottom: '30px' }}>
      <div className="container">
        <div className="cd-project-wrapper">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div className="cd-project-info-box">
                {/* <h4 className="cd-case-title">{item?.title}</h4> */}
               <h3><b>Get complete help- from start to finish</b> </h3> <p> 
Starting from test preparation to finding the right universities and applying for a visa- LGR will support you every step of the way!</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <div className="cd-banner-img">
              <img src="/assets/img/case/s1.jpg" alt="" />
            </div>   
            </div>
          </div>
        </div>
      </div>
</div>
    {/* Second set */}
    <div className="cd-project-info-area pb-100" style={{ paddingBottom: '30px' }}> 
    <div className="container">
    <div className="cd-project-wrapper">
    <div className="row">
    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <div className="cd-banner-img" style={{ paddingBottom: '30px' }}>
              <img src="/assets/img/case/s2.jpg" alt="" />
            </div>   
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div className="cd-project-info-box">
                {/* <h4 className="cd-case-title">{item?.title}</h4> */}
               <h3><b>Enjoy a fast and smooth application process</b> </h3> <p> 
               No more slow progress- with Geebee, you get automated tools for communication and faster turnaround times. Plus, get access to application tracking so you’re always in the loop!</p>
              </div>
            </div>
      </div>
      </div>
    </div>

    </div>

    {/* Third set */}
    <div className="cd-project-info-area pb-100" style={{ PaddingBottom: '40px' }}>
      <div className="container">
        <div className="cd-project-wrapper">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div className="cd-project-info-box">
                {/* <h4 className="cd-case-title">{item?.title}</h4> */}
               <h3><b>Access a network of 100+ Universities</b> </h3> <p> 
               No matter what your dream destination and course is- you can reach it with LGR! Get to choose from thousands of courses at hundreds of universities across 10+ countries.</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <div className="cd-banner-img">
              <img src="/assets/img/case/s3.jpg" alt="" />
            </div>   
            </div>
          </div>
        </div>
      </div>
</div>

    </>
  );
};

export default ProjectInfoArea;