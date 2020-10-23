import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>Standard lausnir</title>
                    <meta name="description" content="Standardlausnir - Persónuleg og áreiðanleg tölvuþjónusta." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
