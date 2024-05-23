import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import zalo from '../images/img/zalo.png'
function Contact() {
    return (
        <div className="Contact">
            <div className="phone">
                <a href="tel:0867639775" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faPhone} /> 
                    </a>
            </div>
            <div className="zalo">
                <a href="https://zalo.me/0867639775" target="_blank" rel="noopener noreferrer">
                    <img src={zalo} alt=""  />
                </a>
           
            </div>
        </div>
    )
}

export default Contact;
