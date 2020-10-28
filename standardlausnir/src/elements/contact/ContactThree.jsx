import React, { Component } from "react"
import axios from 'axios'
import Alert from 'react-bootstrap/Alert'

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
            errors: {
                showSuccess: false,
                showError: false,
                Math: ''
            }
        }
        this.showSuccess = this.showSuccess.bind(this)
        this.showError = this.showError.bind(this)
    }
    
    showSuccess() {
        this.setState({ showSuccess: !this.state.showSuccess })
    }

    showError() {
      this.setState({ showError: !this.state.showError})
    }

    handleInput(event) {
        this.setState({
            [event.target.name]: event.target.value
          })  
    }
    

    handleSubmit(e){
        e.preventDefault()
        this.resetErrors()

        const { Math } = this.state
        console.log(Math)
        if( Math === '6') {
          this.showSuccess()
          axios({
            method: "POST", 
            url:"https://2wjekpzwxj.execute-api.eu-west-1.amazonaws.com/01/contact-form", 
            data:  this.state
          }).then((response) => {
              this.resetForm()

          })
          .catch((error) => {
              console.log(error)
          }) 
        } else {
          this.showError()
        }
           
      }
    
      resetForm() {
        this.setState({ Name: '', Email: '', Subject: '', Message: '', Math: '' })
        this.resetErrors()
      }

      resetErrors() {
        this.setState({ showSuccess: false, showError: false })
      }


    render(){
        const { showSuccess, showError } = this.state
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
                                    <label htmlFor="Name">
                                        <input
                                            type="text"
                                            name="Name"
                                            id="item01"
                                            value={this.state.Name}
                                            onChange={this.handleInput.bind(this)}
                                            placeholder="Nafn *"
                                            required={true}
                                        />
                                    </label>

                                    <label htmlFor="Email">
                                        <input
                                            type="text"
                                            name="Email"
                                            id="item02"
                                            value={this.state.Email}
                                            onChange={this.handleInput.bind(this)}
                                            placeholder="Email *"
                                            required={true}
                                        />
                                    </label>

                                    <label htmlFor="Subject">
                                        <input
                                            type="text"
                                            name="Subject"
                                            id="item03"
                                            value={this.state.Subject}
                                            onChange={this.handleInput.bind(this)}
                                            placeholder="Viðfangsefni"
                                        />
                                    </label>
                                    <label htmlFor="Message">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="Message"
                                            value={this.state.Message}
                                            onChange={this.handleInput.bind(this)}
                                            placeholder="Skilaboð"
                                        />
                                    </label>
                                    <label htmlFor="Math">
                                        <input
                                            type="number"
                                            name="Math"
                                            id="item05"
                                            value={this.state.Math}
                                            onChange={this.handleInput.bind(this)}
                                            placeholder="Hver er summan af 4 og 2? *"
                                            required={true}
                                        />
                                    </label>
                                    {showSuccess && <Alert variant="success" >Takk fyrir skilaboðin, við munum svara eins fljótt og auðið er! </Alert>}
                                    {showError && <Alert variant="danger" >Vinsamlegast reyndu aftur. </Alert>}

                                    <button type="submit" className="rn-button-style--2 btn-solid" value="submit" name="submit" id="mc-embedded-subscribe">Senda fyrirspurn</button>
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