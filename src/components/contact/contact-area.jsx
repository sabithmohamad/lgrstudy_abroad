import React from 'react';
import ContactForm from '../forms/contact-form';

const ContactArea = () => {
  return (
    <>
      <div className="tp-contact-area pt-135 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 ">
              <div className="tp-contct-wrapper contact-space-40">
                <div className="tp-contact-thumb mb-60">
                  <img src="/assets/img/contact/contact-1.jpg" alt="" />
                </div>
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">Mail Address</h4>
                  <span><a href="mailto:(studyabroad@lgronline.co.uk)">studyabroad@lgronline.co.uk</a></span>
                  {/* <span><a href="mailto:(infoweb@gmail.com)">(infoweb@gmail.com)</a></span> */}
                </div>
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">Phone Number</h4>
                  <span><a href="tel:(+44 7361 168964)">UK: +44 7361 168964</a></span>
                  <span><a href="tel:+91 87140 82265">INDIA: +91 87140 82265</a></span>
                  {/* <span><a href="tel:(+1255-568-6523)">(+1255 - 568 - 6523)</a></span> */}
                </div>
                <div className="tp-contact-info">
                  <h4 className="contact-title">Address line</h4>
                  <span><a href="https://www.google.com/maps" target="blank">UK: 98 Sparrowhawk Way, Huntingdon, Cambridgeshire, England, PE29 1XY</a></span><br />
                  <span><a href="https://www.google.com/maps" target="blank">INDIA: Queens Community Centre
                  Paduvapuram P.O
                  Edakkunnu
                   Kerala , India</a></span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tpcontact">
                <h4 className="tp-contact-big-title">Let’s Talk...</h4>
                <div className="tpcontact__form tpcontact__form-3">
                  {/* ContactForm start */}
                  <ContactForm />
                  {/* ContactForm end */}
                </div>
                <p className="ajax-response"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;