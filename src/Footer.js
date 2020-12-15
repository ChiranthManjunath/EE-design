import React from "react";
import "./Footer.css";
import {ReactComponent as Logo } from "./assets/Logo.svg";
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer() {
    return (
        <div className="main-footer">
           <div className="container">
               <div className="row footer_motto">
                    <h1>Your One Stop Shop For All Your Needs.</h1>
               </div>
               <div className="row footer_cc">
                   <CopyrightIcon />       
                   <span style={{paddingLeft: "15px"}}>E-Commerce, Inc. 2020</span> 
               </div>
               <div className="row footer_logo">
                    <Logo />    //shows the logo
               </div>

           </div>
        </div>
    )
}

export default Footer;
