import React, { useEffect, useState } from "react";
import "./contact.css"

const Contact = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });



  // //we arestoring data in state
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({  [e.target.name]: [e.target.value] });
  };

  // //send the data to backend
  const contactForm =  (e) => {
    e.preventDefault();

   setUserData("");
  };
  return (
    <>
      <div className="container-fluid contact ">
        <div className="row">
          <div className="col-lg-10  offset-lg-1 d-flex justify-content-between mt-5">
            {/* phone number */}
            <div className="d-flex justify-content-start box1">
              <i class="zmdi zmdi-phone-in-talk  icon"></i>
              <div>
                <h3>phone</h3>
                <p>9340131116</p>
              </div>
            </div>

            {/* email number */}
            <div className="d-flex justify-content-start box1 ">
              <i class="zmdi zmdi-email icon"></i>
              <div>
                <h3>Email</h3>
                <p>umeshpatel@2001</p>
              </div>
            </div>

            {/* address number */}
            <div className="d-flex justify-content-start box1 ">
              <i class="zmdi zmdi-city icon"></i>
              <div>
                <h3>Address</h3>
                <p>Indore</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact  us form page */}
      <div className="contact-form ">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 ">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">Get In Touch</div>
                <form id="contact_form">
                  <div className="contact_form_name  d-flex justify-content-between align-item-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      onChange={handleInputs}
                      name="username"
                      placeholder="your name"
                      required="true"
                    />

                    <input
                      type="email"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      onChange={handleInputs}
                      name="email"
                      value={userData.email}
                      placeholder="your email"
                      required="true"
                    />

                    <input
                      type="number"
                      id="contact_form_phone"
                      className="contact_form_phone input_field"
                      onChange={handleInputs}
                      name="phone"
                      value={userData.phone}
                      placeholder="your phone number"
                      required="true"
                    />
                  </div>

                  <div className="contact_form_text mt-5">
                    <textarea
                      className="text_feild"
                      onChange={handleInputs}
                      name="message"
                      value={userData.message}
                      placeholder="massege"
                      cols="127"
                      rows="9"
                    ></textarea>
                  </div>

                  <div className="contact_form_button ">
                    <button
                      className="btn btn-primary "
                      type="submit"
                      onChange={contactForm}
                    >
                      send massege
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
