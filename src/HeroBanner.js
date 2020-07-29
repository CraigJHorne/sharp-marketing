import React from 'react';
import './index.css';
import * as ReactBootStrap from 'react-bootstrap';
import heroimage from './HeroImage.jpg';
import smlogo from './smlogo.svg';

const HeroBanner = () => {
	return (
		<ReactBootStrap.Card className="bg-dark text-white" style = {{ marginTop : 60, }}>
  			<ReactBootStrap.Card.Img src={heroimage} alt="Card image" />
 			 <ReactBootStrap.Card.ImgOverlay className="card-img-overlay d-flex">
    			<ReactBootStrap.Card.Title className="align-self-center mx-auto">Card title</ReactBootStrap.Card.Title>
    			</ReactBootStrap.Card.ImgOverlay>
		</ReactBootStrap.Card>
	);
}

export default HeroBanner;