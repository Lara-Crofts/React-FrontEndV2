import React from 'react';
import "../styles/Footer.css"

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
        {/* <!-- newsletter  --> */}
        <div className="footer_col0">
            <h4>Newsletter</h4>
             <form action="#">
                <input type="text" placeholder="Your Name" className="inputName"/>
                <input type="email" placeholder="Enter Email" className="inputEmail"/>
                <input type="submit" placeholder="Submit" className="inputSubmit"/>
             </form>
         </div>
    
    <div className="footer_container">
        <div className="row">
    
            {/* <!-- 1st columns  --> */}
    
            <div className="footer_col">
                <h4>About Our Company</h4>
                <p>Wovenstrings is a woman-owned business committed to creating eco-friendly sweaters<br/> 
                 while promoting positive social change. This staple sweater features in a chunky knit <br/>
                 fabrication with timeless cable detailing throughout for an added special touch.
     
                </p>
             </div>
    
    
            {/* <!-- 2nd column  --> */}
            <div className="footer_col">
                <h4>Need Assistance?</h4>
                <ul className="list_footer">
                    <li><a href="/">Search</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Size Guide</a></li>
                    <li><a href="/">Policies & FAQ</a></li>
    
                </ul>
             </div>
    
             {/* <!-- 3rd  column --> */}
    
             <div className="footer_col">
                <h4>Your Order</h4>
                <ul className="list_footer">
                    <li><a href="/">Track Your Order</a></li>
                    <li><a href="/">Shipping + Delivery</a></li>
                    <li><a href="/">Returns + Exchanges</a></li>
                    <li><a href="/">Start A Return</a></li>
    
                </ul>
             </div>
    
             {/* <!-- 4th column  --> */}
    
             <div className="footer_col">
                <h4>About</h4>
                <ul className="list_footer">
                    <li><a href="/">Our Impact</a></li>
                    <li><a href="/">Affiliates</a></li>
                    <li><a href="/">Social Blog</a></li>    
                </ul>
             </div>
        </div>
             <hr />
             <div className="row">
                <div className="liscense">
                    <p>&#169; 2023 Design. All Rights Reserved.</p>
                </div>
    
                <div className="socialIcons">
    
                    <a href="/"><FaInstagram  /></a>
                    <a href="/"><FaFacebook /></a>
                    <a href="/"><FaXTwitter /></a>
                    <a href="/"><FaYoutube /></a>

                    {/* <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-youtube"></ion-icon></a> */}
                </div>
             </div>
        </div>
    </footer>
            );
        };