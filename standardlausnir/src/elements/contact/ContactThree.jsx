import React, { Component } from "react";

class ContactThree extends Component{
    constructor(props){
        super(props);
        this.state = {
            Name: '',
            Email: '',
            Subject: '',
            Message: '',
        };
    }
    onNameChange(e) {
        this.setState({Name: e.target.value})
    }

    onEmailChange(e) {
        this.setState({Email: e.target.value})
    }

    onSubjectChange(e) {
        this.setState({Subject: e.target.value})
    }

    onMessageChange(e) {
        this.setState({Message: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">{this.props.contactTitle}</h2>
                                <p className="description">Ég er laus í verkefni. Hafðu samband í síma: <a href="tel:+3548460999">846-0999</a> eða í email:
                                    <a href="mailto:standardlausnir@standardlausnir.is"> standardlausnir@standardlausnir.is</a> </p>
                            </div>
                            <div className="form-wrapper">
                                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                                    <label htmlFor="name">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={this.state.Name}
                                            onChange={(e)=>{this.setState({Name: e.target.value});}}
                                            placeholder="Nafn *"
                                        />
                                    </label>

                                    <label htmlFor="email">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={this.state.Email}
                                            onChange={(e)=>{this.setState({Email: e.target.value});}}
                                            placeholder="Email *"
                                        />
                                    </label>

                                    <label htmlFor="subject">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={this.state.Subject}
                                            onChange={(e)=>{this.setState({Subject: e.target.value});}}
                                            placeholder="Viðfangsefni"
                                        />
                                    </label>
                                    <label htmlFor="message">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="message"
                                            value={this.state.Message}
                                            onChange={(e)=>{this.setState({Message: e.target.value});}}
                                            placeholder="Skilaboð"
                                        />
                                    </label>
                                    <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Senda fyrirspurn</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src={`${this.props.contactImages}`} alt="trydo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactThree;