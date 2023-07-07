import {Component} from 'react'

import './index.css'

class Popup extends Component{
    render(){
        return(
            <div className="popup">
              <div className="popup-content">
                <h3>Register</h3>
                <p>Choose an option:</p>
                <div className="button-container">
                  <button onClick={this.closePopup}>Franchice</button>
                  <button onClick={this.closePopup}>Customer</button>
                </div>
            </div>
    </div>
        )
    }
    
}
export default Popup