require('dotenv').config();
const account=process.env.ACCOUNT
const authtoken=process.env.authtoken
const Whatsapp_1=process.env.Whatsapp_1
const Whatsapp_2=process.env.Whatsapp_2

var twilio=require('twilio')(account , authtoken)




//Text message

twilio.messages.create({
    from:Whatsapp_1,
    to:Whatsapp_2,
    body:"text message -->HELLO WORLD"
})
.then(()=>console.log("Text sent"))
.catch((e)=>console.log(e))


//image message

twilio.messages.create({
    from:Whatsapp_1,
    to:Whatsapp_2,
     body:"IMAGE SENT",
    mediaUrl:'https://media.istockphoto.com/id/1190475811/photo/rush-in-the-city.jpg?s=612x612&w=0&k=20&c=PKpWSnamJ8tjwCcRE1xFnc8n14Pv0u3ahDzNFuGIPa4=',
    
})
.then(()=>console.log("Image sent"))
.catch((e)=>console.log(e))


//video message

twilio.messages.create({
    from:Whatsapp_1,
    to:Whatsapp_2,
   body:`https://youtu.be/oRZ0cfZ9SeU`
   
})
.then(()=>console.log("Video sent"))
.catch((e)=>console.log(e))



//document message
twilio.messages.create({
    from:Whatsapp_1,
    to:Whatsapp_2,
   body:'https://docs.google.com/document/d/1wNRAM4ZdPrNxEB5D_3HZPKJjs0QQbGAvD9ftx4uQGyA/edit?usp=share_link'
   
})
.then(()=>console.log("Document sent"))
.catch((e)=>console.log(e))

