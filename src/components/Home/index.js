import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const styles = {
	slideImage: {
		width: '100%',
		height: '500px',
	},
}

const slideImages = [
	'http://e-cloudtechnologies.com/Images/Slider1.jpg',
	// 'https://www.eded.ca/wp-content/uploads/2017/09/webdesign-services.jpg',
	'http://modestowebdesigns.com/wp-content/uploads/2015/07/website-design-slider-background-stockton-1.jpg',
];

const properties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: false,
	arrows: true
}

class Home extends Component {

	render() {
		return (
			<div>
				<div>
					<div style={{height:'129px'}}>
						<h3 style={{ color: 'darkred', textAlign: 'center', paddingTop:'40px' }}> Welcome to Home Page </h3>
					</div>
					<Slide {...properties}>
						{
							slideImages.map((image, index) => <img key={index} style={styles.slideImage} src={image} />)
						}
					</Slide>
				</div>
				<NotificationContainer />
			</div>
		)
	}
}

export default Home