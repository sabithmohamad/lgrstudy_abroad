import Link from 'next/link';
import React from 'react';

function FeatureItem({ title, subtitle, color }) {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6">
      <div className='acfeature mb-50'>
        <div className={`ac-circle ${color ? `ac-cirle-color-${color}` : ''}`}></div>
        <div className="acfeature__item">
          <h3 className="ac-feature-sm-title">
            <Link href="/about-me">
              <a>{title}</a>
            </Link>
          </h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

const contents = {
  title: 'Empowering Dreams, Enriching Futures',
  sm_desc_1: "At LGR Study Abroad, we believe in empowering dreams and enriching futures. Our mission is to guide students on their journey to higher education abroad, ensuring they have the tools and support to achieve their academic and personal goals.",
  sm_desc_2: "Our passion at LGR Study Abroad is to foster global goals. We are committed to provide students with the opportunity, assistance, and resources they require to pursue educational possibilities in other countries. Our dedication to excellence motivates us to assist students in reaching their full potential on the world arena."}
const { title, sm_desc_1, sm_desc_2 } = contents;

const FeatureArea = () => {
  return (
    <>
      <div className="ac-feature-area">
        <div className="container">
          <div className="row ac-feature-space">
            <div className="col-xl-6 col-lg-6">
              <div className="ac-feature-left">
                <h3 className="ac-feature-title">{title}</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="ac-feature-right">
                <p className="pb-25">{sm_desc_1}</p>
                <p>{sm_desc_2}</p>
              </div>
            </div>
          </div>
          <div className="ac-feature-border-top">
            <div className="row">
              <FeatureItem title={'Inception and Vision'}
                subtitle={'Founded with a passion for guiding aspiring students towards their international education dreams.'} />
              <FeatureItem title={'Personal Experience'} color={'2'}
                subtitle={'The journey of LGR Study Abroad began with a personal experience that ignited a spark of inspiration.'} />
              <FeatureItem title={'Commitment to Students'} color={'3'}
                subtitle={'At LGR Study Abroad, our commitment to students goes beyond mere service. '} />
              <FeatureItem title={'Global Impact'} color={'4'}
                subtitle={'Over the years, LGR Study Abroad has left an indelible mark on the lives of countless students.'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;