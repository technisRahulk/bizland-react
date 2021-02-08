import React,{Component} from "react";
import axios from 'axios';

class Contact extends React.Component{

    state={
        name:'',
        email:'',
        subject:'',
        message:'',
        sent:false
    }

    //handleInputs
    handleName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handleEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    handleSubject=(e)=>{
        this.setState({
            subject:e.target.value
        })
    }
    handleMessage=(e)=>{
        this.setState({
            message:e.target.value
        })
    }

    //submit form
     formSubmit=(e)=>{
         e.preventDefault();

         let data={
            name:this.state.name,
            email:this.state.email,
            subject:this.state.subject,
            message:this.state.message
         }

         axios.post('/api/form',data)
         .then(res=>{
             this.setState({sent:true},this.resetForm())
         })
         .catch(()=>{
             console.log('Message not sent !!')
         })
     }

     //resetting initial values

     resetForm=()=>{
        this.setState({
            name:'',
            email:'',
            subject:'',
            message:'',
        })
        setTimeout(()=>{
            this.setState({sent:false})
        },3000)
     }
    render(){
        return(
            <div >
                <section id="contact" className="contact">
                    <div className="container" data-aos="fade-up">

                    <div className="section-title">
                    <h2>Contact</h2>
                    <h3><span>Contact Us</span></h3>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-6">
                        <div className="info-box mb-4">
                        <i className="bx bx-map"></i>
                        <h3>Our Address</h3>
                        <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="info-box  mb-4">
                        <i className="bx bx-envelope"></i>
                        <h3>Email Us</h3>
                        <p>contact@example.com</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="info-box  mb-4">
                        <i className="bx bx-phone-call"></i>
                        <h3>Call Us</h3>
                        <p>+1 5589 55488 55</p>
                        </div>
                    </div>

                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="100">

                    <div className="col-lg-6 ">
                        <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28984.810698482564!2d92.77576617050825!3d24.757714399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e49dcb63bae9b%3A0x81efa836714a289b!2sNational%20Institute%20Of%20Technology%2C%20Silchar%2C%20Assam!5e0!3m2!1sen!2sin!4v1612280290820!5m2!1sen!2sin" frameBorder="0" style={{border:0, width: "100%", height: "384px"}} allowFullScreen></iframe>
                    </div>

                    <div className="col-lg-6">
                        <form role="form" className="php-email-form" onSubmit={this.formSubmit}>
                        <div className="form-row">
                            <div className="col form-group">
                            <input type="text" name="name"
                             className="form-control" id="name"
                             placeholder="Your Name" data-rule="minlen:4"
                             data-msg="Please enter at least 4 chars"
                             value={this.state.name}
                             onChange={this.handleName} />
                            <div className="validate"></div>
                            </div>
                            <div className="col form-group">
                            <input type="email" className="form-control" name="email"
                             id="email" placeholder="Your Email"
                             data-rule="email" data-msg="Please enter a valid email"
                             value={this.state.email}
                             onChange={this.handleEmail} />
                            <div className="validate"></div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control"
                             name="subject" id="subject" placeholder="Subject"
                             data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject"
                             value={this.state.subject}
                             onChange={this.handleSubject} />
                            <div className="validate"></div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" name="message"
                            rows="5" data-rule="required" data-msg="Please write something for us"
                            placeholder="Message"
                            value={this.state.message}
                            onChange={this.handleMessage}></textarea>
                            <div className="validate"></div>
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className={this.state.sent?'sent-message sent-success':'sent-message'}>Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>

                    </div>

                </div>
                </section>
            </div>
        );
    }
}

export default Contact