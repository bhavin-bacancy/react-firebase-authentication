import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Notification extends React.Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'error':
          NotificationManager.error('Error message', 'Title here');
          break;
      }
    };
  };
 
  render() {
    return (
      <div>
        <button className='btn btn-success'
          onClick={this.createNotification('success')}>Success
        </button>
				<br />
        <button className='btn btn-danger'
          onClick={this.createNotification('error')}>Error
        </button>
        <NotificationContainer/>
      </div>
    );
  }
}
 
export default Notification;