import React from 'react';
import Nav from '../components/Nav';
import Css from '../page/css/contact.module.css'; // Import your CSS module
import IMGContact from '../img/Contact.png';

function Contact() {
    return (
        <>
            <Nav />

            <div className={Css.container}>
                <div className={Css.section1}>
                    <div className={Css.contact}>
                        <div className={Css.title}>ติดต่อ<span className={Css.high}>เรา</span></div>
                        <div className={Css.box}>
                            <input type="text" className={Css.InputText} placeholder='ชื่อ-นามสกุล' />
                            <input type="text" className={Css.InputText} placeholder='อีเมล' />
                            <input type="text" className={Css.InputText} placeholder='เบอร์' />
                            <div>
                                <select className={Css.InputText}>
                                    <option value="">เลือกปัญหา</option>
                                    <option value="burst-tire" className={Css.item}>ยางแตก - รถยนต์ของฉันมีลมหลุด</option>
                                    <option value="no-water-flow" className={Css.item}>น้ำไม่ไหล - ฉันไม่สามารถเปิดน้ำได้</option>
                                    <option value="hungry" className={Css.item}>หิวข้าว - ฉันไม่ได้กินมื้อเช้า</option>
                                    <option value="out-of-money" className={Css.item}>เงินหมด - ฉันไม่มีเงินเลย</option>
                                </select>
                            </div>
                            <div>
                                <textarea className={Css.desc} placeholder="กรอกข้อความที่นี่"  cols="27" rows="9" ></textarea>
                            </div>

                            <button className={Css.bt}>ส่ง</button>
                        </div>
                    </div>
                    <img src={IMGContact} className={Css.img} alt="Contact" />
                </div>
                <div className={Css.section2}>
                    <div className={Css.set}>
                    <div className={Css.title}>ช่องทาง<span className={Css.high}>อื่นๆ</span></div>
                    </div>
                   
                    <ul className={Css.icon}>
                        <li className={Css.icon1}>
                            <img src="https://cdn-icons-png.flaticon.com/512/870/870175.png" alt="" className={Css.iconSup} />
                            <div className={Css.call}>ผู้<span className={Css.highlight}>ดูแล</span>ระบบ</div>
                            <div className={Css.descSup}>
                                <img src="https://cdn-icons-png.flaticon.com/512/8898/8898833.png" alt="" className={Css.small} />
                                <span className={Css.highlight}>Thiraphat.ch@rmuti.ac.th</span>
                            </div>
                            <div className={Css.descSup}>
                                <img src="https://cdn-icons-png.flaticon.com/512/10213/10213491.png" alt="" className={Css.small} />
                                <span className={Css.highlight}>0846539380</span>
                            </div>
                            <div className={Css.descSup}>
                                <img src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png" alt="" className={Css.small} />
                                <span className={Css.highlight}>จ - ศ / 09:00 - 19:00 น.</span>
                            </div>
                        </li>
                        <li className={Css.icon1}>
                            <img src="https://cdn-icons-png.flaticon.com/512/4233/4233818.png" alt="" className={Css.iconSup} />
                            <div className={Css.call}><span className={Css.highlight}>ไอที</span>ซัพพอร์ต</div>
                            <div className={Css.descSup}>
                                <img src="https://cdn-icons-png.flaticon.com/512/8898/8898833.png" alt="" className={Css.small} />
                                <span className={Css.highlight}>Thiraphat.ch@rmuti.ac.th</span>
                            </div>
                            <div className={Css.descSup}>
                                <img src="https://cdn-icons-png.flaticon.com/512/10213/10213491.png" alt="" className={Css.small} />
                                <span className={Css.highlight}>0846539380</span>
                            </div>
                            <div className={Css.descSup}>
                                <img src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png" alt="" className={Css.small} />
                                <span className={Css.highlight}>จ - ศ / 09:00 - 19:00 น.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Contact;
