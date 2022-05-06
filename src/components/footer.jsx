import "../App.css"
import { FaFacebook,FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return(
        <div className = "footer">
            <div className="f_u">
            <div className = "first">
                <p className="head">ABOUT US</p>
                <div className = "inner">
                <div className="left">
                    <p>Contact Us</p>
                    <p>Frequently Asked Questions</p>
                    <p>Shipping & Returns</p>
                    <p>Pre-Owned Guide</p>
                </div>
                <div className="right">
                    <p>Sell On Bluefly</p>
                    <p>Privacy POlicy</p>
                    <p>Terms & Conditions</p>
                </div>
                </div>
            </div>
            <div className = "second">
                <p className="head">SIGN UP AND SAVE</p>
                <p>Subscribe to get exclusive offers on designer brands</p>
                <input className="inp" type="text" placeholder="Enter your email"/>
                <br></br>
                <button  className="btn" type="submit">Subscribe</button>
                <div className="icons">
                   <FaInstagram />
                   <br></br>
                  <FaFacebook />
                </div>
            </div>
            <div className = "third">
               
            </div>
            </div>
            
            <div className = "f_l">
            <center>
            <img  className="logo1" src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/Untitled_2_.png_5_x104@2x.png?v=1620852820" alt="i" />
                 <p>© 2022 Bluefly 1998-2020 BLUEFLY.COM OR ITS AFFILIATES ALL RIGHTS RESERVED.</p>
            </center>
                
            </div>
        </div>
    )
}
