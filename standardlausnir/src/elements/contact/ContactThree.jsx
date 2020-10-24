import React, { Component } from "react";
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

class ContactThree extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: {
                Name: '',
                Email: '',
                Subject: '',
                Message: ''
            }, 
            message: {
                showMessage: false
            }
        };
        this.hideComponent = this.hideComponent.bind(this);
    }
    
    hideComponent() {
        this.setState({ showMessage: !this.state.showMessage });
    }
    

    handleSubmit(e){
        e.preventDefault();
        axios({
          method: "POST", 
          url:"https://2wjekpzwxj.execute-api.eu-west-1.amazonaws.com/01/contact-form", 
          data:  this.state
        }).then((response) => {
            // alert("Takk fyrir skilaboðin, við munum hafa samband eins fljótt og auðið er."); 
            this.resetForm();
          
        })
        .catch((error) => {
            console.log(error);
        })
      }
    
      resetForm(){
        this.setState({Name: '', Email: '', Subject: '', Message: '', showMessage: false})
      }


    render(){
        const { showMessage } = this.state;
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">{this.props.contactTitle}</h2>
                                <p className="description">Ég er laus í verkefni. Hafðu samband í síma: <a href="tel:+3548460999">846-0999</a>, email: 
                                    <a href="mailto:standardlausnir@standardlausnir.is"> standardlausnir@standardlausnir.is</a>, eða fylltu út formið hér að neðan. </p>
                            </div>
                            <div className="form-wrapper">
                                <form  id="contact-form" 
                                    onSubmit={this.handleSubmit.bind(this)} 
                                    method="POST">
                                    <label htmlFor="name">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={this.state.Name}
                                            onChange={this.onNameChange.bind(this)}
                                            placeholder="Nafn *"
                                        />
                                    </label>

                                    <label htmlFor="email">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={this.state.Email}
                                            onChange={this.onEmailChange.bind(this)}
                                            placeholder="Email *"
                                        />
                                    </label>

                                    <label htmlFor="subject">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={this.state.Subject}
                                            onChange={this.onSubjectChange.bind(this)}
                                            placeholder="Viðfangsefni"
                                        />
                                    </label>
                                    <label htmlFor="message">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="message"
                                            value={this.state.Message}
                                            onChange={this.onMessageChange.bind(this)}
                                            placeholder="Skilaboð"
                                        />
                                    </label>
                                    {showMessage && <Alert variant="success" >Takk fyrir skilaboðin, við munum svara eins fljótt og auðið er! </Alert>}
                                    <button type="submit" onClick={() => this.hideComponent()} className="rn-button-style--2 btn-solid" value="submit" name="submit" id="mc-embedded-subscribe">Senda fyrirspurn</button>
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
}
    
export default ContactThree;