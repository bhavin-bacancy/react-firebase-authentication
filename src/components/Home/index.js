import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';

const styles = {
	slideImage: {
		width: '100%',
		height: '610px',
	},
}

const slideImages = [
	'http://e-cloudtechnologies.com/Images/Slider1.jpg',
	'https://www.eded.ca/wp-content/uploads/2017/09/webdesign-services.jpg',
	'http://www.duproduction.com.au/wp-content/uploads/2013/11/slider-06.jpg',
	'https://emmsalabsdigital.com.ng/wp-content/uploads/2017/06/slider11-1.png',
	'http://modestowebdesigns.com/wp-content/uploads/2015/07/website-design-slider-background-stockton-1.jpg'
];

const properties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	arrows: true
}

class Home extends Component {
	render() {
		return (
			<div>
				<div>
					<Slide {...properties}>
						{
							slideImages.map((image, index) => <img key={index} style={styles.slideImage} src={image} />)
						}
					</Slide>
				</div>
			</div>
		)
	}
}

export default Home