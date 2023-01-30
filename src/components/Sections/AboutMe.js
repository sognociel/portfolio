import React from "react";

// info icon
import { SlLocationPin } from "react-icons/sl";
import { BsCalendarCheck } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GiTigerHead } from "react-icons/gi";

const Aboutme = () => {
  return (
    <div id="aboutMe">
      <div className="fixed-border"></div>
      <h2>ABOUT ME</h2>
      <div className="aboutMe_container">
        <div className="name">
          <BsPerson className="person_icon" />
          <div className="aboutMe_content">
            <div className="aboutMe__label">이름</div>
            <div className="aboutMe__text">박보미</div>
          </div>
        </div>

        <div className="birth">
          <BsCalendarCheck className="birth_icon" />
          <div className="aboutMe_content">
            <div className="aboutMe__label">생년월일</div>
            <div className="aboutMe__text">94. 04. 17</div>
          </div>
        </div>

        <div className="address">
          <SlLocationPin className="address_icon" />
          <div className="aboutMe_content">
            <div className="aboutMe__label">주소지</div>
            <div className="aboutMe__text">서울특별시 성북구</div>
          </div>
        </div>

        <div className="email">
          <AiOutlineMail className="email_icon" />
          <div className="aboutMe_content">
            <div className="aboutMe__label">이메일</div>
            <div className="aboutMe__text">sognociel@gmail.com</div>
          </div>
        </div>

        <div className="school">
          <GiTigerHead className="school_icon" />
          <div className="aboutMe_content">
            <div className="aboutMe__label">학력</div>
            <div className="aboutMe__text">
              고려대학교
              <br />
              경영정보학과·일어일문학과
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
