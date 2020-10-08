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

		<div className="main__banner">
            <div className="mainbanner__wrapper">
              	<img
              	className="mainbanner__image"
              	src="/images/mainbanner.png"
              	alt="banner"
              	/>
            </div>
        </div>

        <span id= "aboutus"><br/></span>

        <div className="about__us">
            <div className="aboutus__wrapper">
            	<img
              	className="mainbanner__image"
              	src="/images/aboutusbanner.png"
              	alt="banner"
              	/>
            </div>
            <div className="aboutus__text">
            <h5>ABOUT US</h5>
            <h1>WHO ARE WE?</h1>
            <h6>Everything we do is to meet your goals
            	<br/><br/>
            	We are a team of world beating digital marketers, creating target driven campaigns on Paid Search and Paid Social.
            	<br/><br/>
            	We know how to get the most from your budget.
            	<br/><br/>
            	If you want a great experience and proven results contact us now. Our dedicated creative and strategic thinkers are waiting to hear from you.

            </h6>
            </div>

        </div>

        <div className="our__services" id= "ourservices">
           <div className="ourservices__item">
           	<FindInPageIcon style={{ fontSize: 200  }}/>
           	 <h1>PAID SEARCH</h1>
           	  <h5>We are a google partner and have great paid search practises. Google, Bing, Amazon and Baidu we can help you out on all these platforms.</h5>
           </div>
           <div className="ourservices__item">
           	<SupervisedUserCircleIcon style={{ fontSize: 200  }}/>
           	 <h1>PAID SOCIAL</h1>
           	  <h5>We are a partner with facebook and our accounts grow faster than the competition.</h5>
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