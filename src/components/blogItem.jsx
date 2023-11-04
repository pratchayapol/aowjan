import React from 'react';
import blogCss from './css/blogitem.module.css';

function BlogItem() {
    return (
        <>

            <div className={blogCss.blogItem}>
                <div className={blogCss.card}>
                    <img src="https://img.freepik.com/free-vector/e-learning-icons-flat_1284-3950.jpg?w=2000" alt="" className={blogCss.titleImg} />
                    <div className="col2">
                    <div className={blogCss.title}>e-learning</div>
                    <div className={blogCss.des}>Lorem ipsum dolor sit amet cipsum dolor sit amet consectetur adipisicing elit. Sunt et rerum, error impedit consequatur nam ullam praesentium pariatur recusandae quas itaque vero, illum omnis nulla ipsam libero vitae reprehenderit repellendus!</div>
                    </div>
                    <div className={blogCss.useProfile}>
                        <img src="https://www.hartz.com/wp-content/uploads/2023/05/do-cats-only-meow-to-humans-1.jpg" alt="" className={blogCss.userImg} />
             <div className="nameDate"><div className={blogCss.nameUser}><span className={blogCss.high}>ธีรพัฒน์ ชลเทพ</span></div>
                        <div className={blogCss.postDate}>18/02/2544</div>
                    </div>
                        
                    </div>
                </div>
            </div>




        </>
    );
}

export default BlogItem;


/*<div>
                {datapost.map(post => {
                    return (
                        <div key={post.id}>
                            <div className={blogCss.blogItem}>
                                <div className={blogCss.card}>
                                    <img src={post.image_url} className={blogCss.titleImg} />
                                    <div className="col2">
                                        <div className={blogCss.title}>{post.titleo}</div>
                                        <div className={blogCss.des}>{post.desc}</div>
                                    </div>
                                    <div className={blogCss.useProfile}>
                                        <img src={post.image_person} className={blogCss.userImg} />
                                        <div className="nameDate"><div className={blogCss.nameUser}><span className={blogCss.high}>{post.name}</span></div>
                                            <div className={blogCss.postDate}>{post.date_post}</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div> */