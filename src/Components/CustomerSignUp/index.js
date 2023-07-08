import {Component} from 'react'
import './index.css'
class Customer extends Component{
     state = {customer:true}
     customer=()=>{
        this.setState({customer:true})
     }
     franchice=()=>{
        this.setState({customer:false})
     }
     
    render(){
        const {customer} = this.state

        return(
            <div className="signup-body">
                <div class="Signup-container">
                    <div className="signup-button-container">
                    
                        <button className={`signup-customer-button ${customer?"signup-activ-button":''}`}   onClick={this.customer}>Customer</button>
                        <button className={`signup-franchice-button ${customer?'':"signup-activ-button"}`}  onClick={this.franchice}>Franchice</button>

                    </div>
                    <div class="content">
                    {
                    customer?
                    <form action="#" className="customer-signup-form">
                        <div className="user-details">
                            <div className="signup-input-box">
                                <span className="details">Full Name</span>
                                <input className="signup-input" type="text" placeholder="Enter your name" required/>
                            </div>
                            <div class="signup-input-box">
                                <span className="details">Phone Number</span>
                                <input className="signup-input" type="text" placeholder="Enter your number" required/>
                            </div>
                            <div className="signup-input-box">
                                <span className="details">Email</span>
                                <input className="signup-input" type="text" placeholder="Enter your email" required/>
                            </div>
                            
                            <div className="signup-input-box">
                                <span className="details">Password</span>
                                <input className="signup-input" type="text" placeholder="Enter your password" required/>
                            </div>
                            <div className="signup-input-box">
                                <span className="details">Aadhar Number</span>
                                <input className="signup-input" type="text" placeholder="Enter your aadhar" required/>

                            </div>
                            <div className="signup-input-box">
                                <span className="details">Aadhar</span>
                                <input className="signup-input signup-file" type="file" required/>
                            </div>
                            <div className="signup-input-box">
                                <span className="details">PAN Number</span>
                                <input className="signup-input" type="text" placeholder="Enter your PAN" required/>
                                
                            </div>
                            <div className="signup-input-box">
                                <span className="details">PAN</span>
                                <input className="signup-input signup-file" type="file" required/>
                            </div>
                    
                        
                            <div className="gender-details">
                                <input  type="radio" name="gender" id="dot-1"/>
                                <input type="radio" name="gender" id="dot-2"/>
                                <input type="radio" name="gender" id="dot-3"/>
                                <span className="gender-title">Gender</span>
                                <div className="category">
                                    <label for="dot-1">
                                        <span className="dot one"></span>
                                        <span className="gender">Male</span>
                                    </label>
                                    <label for="dot-2">
                                        <span className="dot two"></span>
                                        <span className="gender">Female</span>
                                    </label>
                                    <label for="dot-3">
                                        <span className="dot three"></span>
                                        <span className="gender">Prefer not to say</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="customer-register-button-container">
                            <input type="submit" className="customer-register-button" value="Register"/>
                        </div>
                    </form>:<form action="#" className="customer-signup-form">
                        <div className="user-details">
                        <div className="signup-input-box">
                            <span className="details">Full Name</span>
                            <input className="signup-input" type="text" placeholder="Enter your name" required/>
                        </div>
                        <div class="signup-input-box">
                            <span className="details">Phone Number</span>
                            <input className="signup-input" type="text" placeholder="Enter your number" required/>
                        </div>
                        <div className="signup-input-box">
                            <span className="details">Email</span>
                            <input className="signup-input" type="text" placeholder="Enter your email" required/>
                        </div>
                        
                        <div className="signup-input-box">
                            <span className="details">Password</span>
                            <input className="signup-input" type="text" placeholder="Enter your password" required/>
                        </div>
                        <div className="signup-input-box">
                            <span className="details">Aadhar Number</span>
                            <input className="signup-input" type="text" placeholder="Enter your aadhar" required/>

                        </div>
                        <div className="signup-input-box">
                            <span className="details">Aadhar</span>
                            <input className="signup-input signup-file" type="file" required/>
                        </div>
                        <div className="signup-input-box">
                            <span className="details">PAN Number</span>
                            <input className="signup-input" type="text" placeholder="Enter your PAN" required/>
                            
                        </div>
                        <div className="signup-input-box">
                            <span className="details">PAN</span>
                            <input className="signup-input signup-file" type="file" required/>
                        </div>
                        </div>
                        <div className="gender-details">
                        <input  type="radio" name="gender" id="dot-1"/>
                        <input type="radio" name="gender" id="dot-2"/>
                        <input type="radio" name="gender" id="dot-3"/>
                        <span className="gender-title">Gender</span>
                        <div className="category">
                            <label for="dot-1">
                            <span className="dot one"></span>
                            <span className="gender">Male</span>
                        </label>
                        <label for="dot-2">
                            <span className="dot two"></span>
                            <span className="gender">Female</span>
                        </label>
                        <label for="dot-3">
                            <span className="dot three"></span>
                            <span className="gender">Prefer not to say</span>
                            </label>
                        </div>
                        </div>
                        <div className="customer-register-button-container">
                            <input type="submit" className="customer-register-button" value="Create"/>
                        </div>
                    </form>
                }  
                    </div>
                </div>
            </div>
        )
    }
}
export default Customer