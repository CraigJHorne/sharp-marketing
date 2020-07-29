import React from 'react';
import carousel1 from './carousel1.jpg';
import './index.css';
import * as ReactBootStrap from 'react-bootstrap';

const Carousel = () => {
	return (
		<Carousel>
  			<Carousel.Item>
    			<img src={carousel1}/>
    		<Carousel.Caption>
      			<h3>First slide label</h3>
      			<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    		</Carousel.Caption>
  			</Carousel.Item>
  		</Carousel>

	)
}

export default Carousel;