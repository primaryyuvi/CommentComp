const admin = require('./firebase');



async function sendFcmNotification(to, notificationBody) {
    const message = {
      token: to,
      notification: {
        title: notificationBody.title,
        body: notificationBody.body
      }
    };
  
    try {
      const response = await admin.messaging().send(message)
      console.log('Successfully sent message:', response);
      console.log(message);
      return response;
    } catch (error) {
      console.log('Error sending message:', error);
      console.log(message);
      throw error;
    }
  }
  
  

  module.exports = {
    sendFcmNotification,
  };