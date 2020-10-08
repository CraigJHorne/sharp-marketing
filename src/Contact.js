import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { HashLink as HashLink } from 'react-router-hash-link';


function Header() {

		const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };


	return (

		<div>

		<div className="header">

			<div className="header__wrap">

				<div className="header_left">
						<Link to="/">
							<img
							className="header__logo" 
							src="/images/sharpmarketinglogo.png"
							alt="logo"
							/>
						</Link>
				</div>
				<div className="header__right">
				<HashLink  to="/#aboutus">
					<div>
						<span>ABOUT US</span>
					</div>
				</HashLink>
				<HashLink  to="/#ourservices">
					<div>
						<span>OUR SERVICES</span>
					</div>
				</HashLink>
				<Link  to="/contact">
					<div>
						<span>CONTACT</span>
					</div>
				</Link>
				</div>
		</div>
		</div>

		<div className="contact__banner">
            <div className="contactbanner__wrapper">
              	<img
              	className="contactbanner__image"
              	src="/images/contactbanner.png"
              	alt="banner"
              	/>
            </div>
        </div>

        <div className="contact">
        	<h1> CONTACT US </h1>
        	<div className="contact__form">
        	 <form>
        	 	<div className="form__left">
  				<label className="formleft__item">
    				<input type="text" name="name" placeholder="First and Surname"/>
 				 </label>
 				 <label className="formleft__item">
    				<input type="text" name="name" placeholder="Company Name"/>
 				 </label>
 				  <label className="formleft__item">
    				<input type="email" name="name" placeholder="Email-Address"/>
 				 </label>
 				 </div>
 				 <div className="form__right">
 				 <textarea className="formright__item">
  				Your message
				</textarea>
				</div><br/>
 				 <input type="submit" value="Send Message" />
			</form>
			</div>
        </div>

        <div className="footer">
           <div className="footer__item">
           	<HashLink  to="/#aboutus">
					<div>
						<span>ABOUT US</span>
					</div>
				</HashLink>
				<HashLink  to="/#ourservices">
					<div>
						<span>OUR SERVICES</span>
					</div>
				</HashLink>
				<Link  to="/contact">
					<div>
						<span>CONTACT</span>
					</div>
				</Link>
			</div>

			<div className="footer__item">
				<div>
					<Link to="/">
							<img
							className="footer__logo" 
							src="/images/sharpmarketinglogo.png"
							alt="logo"
							/>
					</Link>
					<div>
						<h6>Sharp Marketing &#169; All rights reserved</h6>
					</div>
				</div>

        </div>

        </div>

       

         </div>
	)
}

export default Header