import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navcss from './css/nav.module.css';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className={Navcss.containerNav}>
                <a href="/">
                    <div className={Navcss.brand}>อ้าว<span className={Navcss.highlight}>จ</span>ารย์</div>
                </a>
                <div className={Navcss.menuToggle} onClick={handleMenuToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={`${Navcss.navLinks} ${isMenuOpen ? Navcss.showMenu : ''}`}>
                    <Link to='/' onClick={handleMenuToggle}>หน้าแรก</Link>
                    <Link to='/about' onClick={handleMenuToggle}>เกียวกับเรา</Link>
                    <Link to='/service' onClick={handleMenuToggle}>บริการ</Link>
                    <Link to='/blog' onClick={handleMenuToggle}>บทความ</Link>
                    <Link to='/contact' onClick={handleMenuToggle}>ติดต่อเรา</Link>
                   
                        <Link to="/" className={Navcss.btLog}>ล็อกอิน</Link>
                   
                        <Link to="/" className={Navcss.btReg}>ลงทะเบียน</Link>
                
                </nav>
                
            </div>
        </>
    );
}

export default Nav;
