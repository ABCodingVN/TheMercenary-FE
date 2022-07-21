import React, { useState, useEffect } from "react";
import "./Otp.css";
import imgTiki from "../../../../../src/Image/Tiki.jpg";
import { AiFillCloseCircle } from "react-icons/ai";
import { Route, useHistory } from 'react-router-dom';
import { OtpAPI } from '../../../../api/login';
const OTPBox = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  
  const history = useHistory()

  const regform = () => {
    history.push('/dangky');
};



  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <>      <div className="wrap">
        <AiFillCloseCircle className="icon__close" />
        <div className="container">
          <div className="row">
            <div className="col-left-header-otp">
              <h2>Nhập mã OTP</h2>
              <div>Vui lòng nhập mã được gửi tới sđt </div>
              <div className="otp-code">
                {otp.map((data, index) => {
                  return (
                    <input
                      className="otp-field"
                      type="text"
                      name="otp"
                      maxLength="1"
                      key={index}
                      value={data}
                      onChange={(e) => handleChange(e.target, index)}
                      onFocus={(e) => e.target.select()}
                    />
                  );
                })}
              </div>
              <button
                className="btn btn-danger"
                onClick={regform}
              >
                Xác minh
              </button>
              <span className="resend_otp">
                  không nhận đc mã ?&nbsp;
                  <a href="!#" className="text-blue-600">
                    Resend OTP
                  </a>
                </span>
            </div>
          </div>
          <div className="col bg-info">
            <img src={imgTiki} className="tiki__img" alt=""></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTPBox;