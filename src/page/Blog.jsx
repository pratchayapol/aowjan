import React, { useState } from 'react';
import Nav from '../components/Nav';
import BlogCss from './css/blog.module.css';
import BlogItem from '../components/blogItem'; 
import ImageSlider from '../components/ImageSlider'


function Blog() {
    return (
        <>
            <Nav />
            <div className={BlogCss.containerBlog}>
                <div className={BlogCss.section1}>
                    <div className={BlogCss.toptitle}>ข่าวสาร<span className={BlogCss.high}>และ</span>บล็อก</div>
                   <ImageSlider/>
                </div>
                <div className={BlogCss.section2}>
                <div className={BlogCss.topic}>ข้อมูลข่าวสาร</div>
                    <div className={BlogCss.row2}>
                    <input type="text" className={BlogCss.search} placeholder='ค้นหา' name="" id="" />
                    </div>
                    <div className={BlogCss.Blog}>
                        <BlogItem /> 
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;
