import React from 'react';
import {FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/standardlausnir'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/standardlausnir/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/company/standardlausnir/'},
]

const FooterTwo = () => {
    return (
        <div className="footer-style-2 ptb--30 bg_image bg_image--1" data-black-overlay="6">
            <div className="wrapper plr--50 plr_sm--20">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner">
                            <div className="logo text-center text-sm-left mb_sm--20">
                                <a href="/">
                                    <img src="/assets/images/logo/small-standardlausnir-full-logo.png" alt="Logo images"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner text-center">
                            <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a target="_blank" rel="noopener noreferrer" href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner text-center">
                            <p className="description"><a href="mailto:standardlausnir@standardlausnir.is"> standardlausnir@standardlausnir.is</a></p>
                        </div>
                    </div>
                </div>                   
            </div>
            <div className="container"><div className="row"></div></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <div className="inner text-center">
                            <p>© {(new Date().getFullYear())} Standard lausnir -  Allur réttur áskilinn.</p>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>     
        </div>
    )
}
export default FooterTwo;