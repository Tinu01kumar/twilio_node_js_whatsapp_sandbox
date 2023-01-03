# twilio_node_js_whatsapp_sandbox
npm install twilio

**Documentation**

The documentation for the Twilio API can be found here https://www.twilio.com/docs/sms/send-messages 

#NPM PACKAGES
1-->npm i twilio
2-->npm i dotenv





#sample code
// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({body: 'Hi there', from: '+15017122661', to: '+15558675310'})
      .then(message => console.log(message.sid));






#steps
During the process of signup you will get an 
account id
auth token 

1--> Login to twilio
2-->after go to send a whatsapp message option


![image](https://user-images.githubusercontent.com/77734579/210335067-8a6fac2e-2589-45cf-b884-2a3a1625a5b8.png)




3-->set up your testing sandbox by reaciving verified message you will get like this




![image](https://user-images.githubusercontent.com/77734579/210336055-442332b3-b0a4-453b-98eb-ab6dfa4f0f66.png)




4-->you have go for two way commumciation
after verification





![image](https://user-images.githubusercontent.com/77734579/210336221-e278cd9c-03c0-4458-a322-493a1673fd5f.png)


5-->we write code in node js for sending actual message
#output




![image](https://user-images.githubusercontent.com/77734579/210336735-32bf0a02-2572-46a3-ba53-c525681faf4d.png)


6-->




![image](https://user-images.githubusercontent.com/77734579/210336964-4734596e-bc92-4316-ac04-cae0bcefa844.png)

