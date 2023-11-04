import React from 'react';
import Nav from '../components/Nav';
import Online from '../img/onlinecourse.png'
import Vc from '../img/virtualclass.png'
import ServiceCss from './css/service.module.css';
import { Link } from 'react-router-dom'


function Service() {
    return (
        <>
            <Nav />
            <div className={ServiceCss.containerSer}>
                <div className={ServiceCss.section1}>
                    <div className={ServiceCss.imgSec1}>
                        <img src={Vc} className={ServiceCss.img} />
                    </div>
                    <div className={ServiceCss.desc}>
                        <div className={ServiceCss.title}>ห้อง<span className={ServiceCss.high}>เรียน</span>ออนไลน์</div>
                        <div className={ServiceCss.des}>ระบบห้องเรียนที่สามารถใช้งานได้อย่างง่ายดาย
                            และสะดวก สามารถลงสื่อการเรียนการสอน
                            ไม่ต้องกังวลวาข้อมูลจะหาย ไม่หายหรอก<Link to="/" className={ServiceCss.link}>เรียนรู้เพิ่มเติม...</Link></div>
                        <Link to="/" className={ServiceCss.bt}>เริ่มเลย!!!</Link>

                    </div>
                </div>
                <div className={ServiceCss.section2}>
                    <div className={ServiceCss.imgSec1}>
                        <img src={Online} className={ServiceCss.img} />
                    </div>
                    <div className={ServiceCss.desc}>
                        <div className={ServiceCss.title}><span className={ServiceCss.high}>คอร์ส</span>ออนไลน์</div>
                        <div className={ServiceCss.des}>สร้างคอร์สที่สามารถให้ความรู้กับ
                            ผู้คนที่สนใจในการศึกษา มีเครื่องมือ
                            หลากหลายใช้งานง่าย<Link to="/" className={ServiceCss.link}>เรียนรู้เพิ่มเติม...</Link></div>
                        <Link to="/" className={ServiceCss.bt}>เริ่มเลย!!!</Link>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;
