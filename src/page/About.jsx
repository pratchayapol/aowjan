import React from "react";
import Nav from "../components/Nav";
import Man from "../img/programmer.png";
import iconF from "../img/facebook.png";
import iconI from "../img/instagram.png";
import iconE from "../img/gmail.png";
import Teamspirit from "../img/team-spirit.png";
import AboutCss from "./css/about.module.css";

function About() {
  return (
    <>
      <Nav></Nav>
      <div className={AboutCss.containerAbout}>
        <div className={AboutCss.gridCol1Row3About}>
          <img
            src="https://www.jansevakendra.in/assets/img/its/abt1.jpg"
            className={AboutCss.imgSec1About}
          />
        </div>

        <div className={AboutCss.col2Sec1About}>
          <div className={AboutCss.titleSec1About}>
            เกี่ยว<spen className={AboutCss.high}>กับ</spen>เรา
          </div>
          <div className={AboutCss.desdSec1About}>
            เว็บไซต์นี้เป็นส่วนหนึ่งของโครงการที่จัดทำโดยมหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน
            วิทยาเขตขอนแก่น
            เป็นโครงการที่มีวัตถุประสงค์ในการสร้างพื้นที่ออนไลน์ที่เป็นประโยชน์สำหรับนักศึกษา
            นักวิจัย
            และผู้ที่สนใจทั่วไปในวงการการศึกษาและวิชาการที่เกี่ยวข้องกับมหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน
            วิทยาเขตขอนแก่น
          </div>
        </div>

        <div className={AboutCss.gridFlexCol1Row2Sec2About}>
          <div className={AboutCss.gridTitleSec2About}>
            <span className={AboutCss.high}>ทีม</span>งานผู้พัฒนา
          </div>
          <div className={AboutCss.flexBoxSec2About}>
            <div className={AboutCss.imgSec2About}>
              <img src={Man} alt="" className={AboutCss.persionSec2About} />
            </div>
            <div className={AboutCss.nameSec2About}>
              Thiraphat Chonlathep
              <br />
              <span className={AboutCss.high}>Frontend developer</span>
            </div>
            <div className={AboutCss.iconContactSec2About}>
              <ul className={AboutCss.iconContactAbout}>
                <li className={AboutCss.delLine}>
                  <a
                    href=""
                    onClick={() => copyToClipboard("thiraphat.ch@rmuti.ac.th")}
                  >
                    <img
                      src={iconE}
                      alt=""
                      className={AboutCss.iconSec2About}
                    />{" "}
                    Thiraphat.ch@rmuti.ac.th
                  </a>
                </li>
                <li className={AboutCss.delLine}>
                  <a
                    href="https://www.facebook.com/SirFamily2418"
                    target="_blank"
                  >
                    <img
                      src={iconF}
                      alt=""
                      className={AboutCss.iconSec2About}
                    />{" "}
                    Thiraphat Chonlathep
                  </a>
                </li>
                <li className={AboutCss.delLine}>
                  <a
                    href="https://www.instagram.com/sir_family18/"
                    target="_blank"
                  >
                    <img
                      src={iconI}
                      alt=""
                      className={AboutCss.iconSec2About}
                    />{" "}
                    SirFamily18
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={AboutCss.gridCol2Sec3About}>
          <div className={AboutCss.desTargetCol1Sec3About}>
            <div className={AboutCss.titleTargetSec3About}>
              เป้าหมายของ<span className={AboutCss.high}>เรา</span>
            </div>
            <div className={AboutCss.desSec3About}>
              <ul>
                <li>เราจะสร้างห้องเรียนไร้พรมแดน</li>
                <li>เป็นแหล่งความรู้ให้ทุกๆคน</li>
                <li>งานต่อการใช้งานไม่ซับซ้อน</li>
                <li>มีเครื่องมือพร้อมสอน</li>
              </ul>
            </div>
          </div>
          <div className={AboutCss.imgCol2Sec3About}>
            <img src={Teamspirit} alt="" />
          </div>
        </div>
      </div>
    </>
  );

  function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert("ที่อยู่อีเมลถูกคัดลอก: " + text);
  }
}

export default About;
