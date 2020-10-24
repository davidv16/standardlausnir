import React, { Component } from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/FooterTwo";

 class error404 extends Component {
    
    render() {
        return (
            <div className="active-dark">
                {/* Start Page Error  */}
                <div className="error-page-inner bg_color--4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <h1 className="title theme-gradient">404!</h1>
                                    <h3 className="sub-title">Síðan fannst ekki</h3>
                                    <span>Því miður fannst síðan ekki</span>
                                    <div className="error-button">
                                        <a className="rn-button-style--2 btn-solid" href="/">Aftur á forsíðu</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Error  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer /> 
            </div>
        )
    }
}
export default error404;
