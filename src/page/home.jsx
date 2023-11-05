import React from 'react'
import Nav from '../components/Nav'
import homecss from './css/home.module.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <Nav></Nav>
            <div className={homecss.containerHome}>
            
                <div className={homecss.col1}>
                    <div className={homecss.toptitle}>เริ่มต้น <br /><span className={homecss.high}>คลาสเรียน</span>ที่นี่
                    </div>
                    <div className={homecss.decs}>อ้าวจารย์ เป็นแพลตฟอร์มที่ช่วยให้การเรียนการสอนนั้นง่ายขึ้น โดยคุณสามารถสร้างห้องเรียนออนไลน์ หรือห้องเรียนสำหรับ คลอสออนไลน์ก็ได้ “ไม่ว่าจะอยู่ไกลแค่ไหนก็เรียนได้
                    </div>
                   <div className={homecss.containerBt}>
                        <div>
                            <Link to="/" className={homecss.btLogCo1}>เริ่มกันเลย!!!</Link>
                        </div>
                   </div>
                </div>
                <div className={homecss.col2}>
                    <img src="https://bulinks.bu.ac.th/wp-content/uploads/2021/01/s-004.png" alt="รูปภาพ" />
                </div>
            </div>

            <div className={homecss.bg1}></div>
            <div className={homecss.bg2}></div>
        </>
    )
}

export default Home
