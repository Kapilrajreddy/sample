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
            <div>
                <div class="container">
                    <div className="signup-button-container">
                    
                        <button className="signup-customer-button" onClick={this.customer}>Customer</button>
                        <button className="signup-franchice-button" onClick={this.franchice}>Franchice</button>

                    </div>
                    <div class="content">
                    {
                    customer?
                    <form action="#">
                        <div className="user-details">
                        <div className="input-box">
                            <span className="details">Full Name</span>
                            <input type="text" placeholder="Enter your name" required/>
                        </div>
                        <div class="input-box">
                            <span className="details">Phone Number</span>
                            <input type="text" placeholder="Enter your number" required/>
                        </div>
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="text" placeholder="Enter your email" required/>
                        </div>
                        
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="text" placeholder="Enter your password" required/>
                        </div>
                        <div className="input-box">
                            <span className="details">Aadhar Number</span>
                            <input type="text" placeholder="Enter your aadhar" required/>

                        </div>
                        <div className="input-box">
                            <span className="details">Aadhar</span>
                            <input type="file" required/>
                        </div>
                        <div className="input-box">
                            <span className="details">PAN Number</span>
                            <input type="text" placeholder="Enter your PAN" required/>
                            
                        </div>
                        <div className="input-box">
                            <span className="details">PAN</span>
                            <input type="file" required/>
                        </div>
                        <div>
                            <p>Address</p>
                            <input type="text" className="Address"></input>
                        </div>
                        </div>
                        <div className="gender-details">
                        <input type="radio" name="gender" id="dot-1"/>
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
                        <div className="button">
                        <input type="submit" value="Register"/>
                        </div>
                    </form>:<form action="#">
                        <div className="user-details">
                        <div className="input-box">
                            <span className="details">Full Name</span>
                            <input type="text" placeholder="Enter your name" required/>
                        </div>
                        <div class="input-box">
                            <span className="details">Phone Number</span>
                            <input type="text" placeholder="Enter your number" required/>
                        </div>
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="text" placeholder="Enter your email" required/>
                        </div>
                        
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="text" placeholder="Enter your password" required/>
                        </div>
                        <div className="input-box">
                            <span className="details">Aadhar Number</span>
                            <input type="text" placeholder="Enter your aadhar" required/>

                        </div>
                        <div className="input-box">
                            <span className="details">Aadhar</span>
                            <input type="file" required/>
                        </div>
                        <div className="input-box">
                            <span className="details">PAN Number</span>
                            <input type="text" placeholder="Enter your PAN" required/>
                            
                        </div>
                        <div className="input-box">
                            <span className="details">PAN</span>
                            <input type="file" required/>
                        </div>
                        <div>
                            <p>Address</p>
                            <input type="text" className="Address"></input>
                        </div>
                        </div>
                        <div className="gender-details">
                        <input type="radio" name="gender" id="dot-1"/>
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
                        <div className="button">
                        <input type="submit" value="Create"/>
                        
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