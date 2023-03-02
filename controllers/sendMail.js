const nodemailer = require('nodemailer')
const {google} = require('googleapis')// Desestructuro google
const OAuth2 = google.auth.OAuth2 //Es una credencial de cliente
const {GOOGLE_ID, GOOGLE_REFRESH,GOOGLE_SECRET,GOOGLE_URL,GOOGLE_USER} = process.env //Desestrucuto variable de entorno


const sendMail = async(mail,code) => {// Para configurar una credencial de google
    const cliente = new OAuth2( //Variable de entorno
        GOOGLE_ID, 
        GOOGLE_SECRET,
        GOOGLE_URL//Lugar donde se va a crear ( URL)
    )
    cliente.setCredentials({ //Configurar el refresh
        refresh_token: GOOGLE_REFRESH // Seteamos manualmente
    })
    const accessToken = cliente.getAccessToken() //Configurar y crear el token Access(Codigo de acceso)

    const transport = nodemailer.createTransport({//Metodo q crea un transporte ,1ºServicio de mensajeria
        service : 'gmail', //Tipo de servicio para enviar
        auth: {
            user: GOOGLE_USER,
            type: 'OAuth2', 
            clientId: GOOGLE_ID, 
            clientSecret: GOOGLE_SECRET,
            refreshToken: GOOGLE_REFRESH,
            accessToken: accessToken
        },
        tls: { //Transport layer security
            rejectUnauthorized: false //Para q el antivirus no rechace la autorizacion 
        }
    }) 

    const mailOptions = { //Configuro las opciones de mail
        from: GOOGLE_USER,// Desde donde
        to: mail, //Hacia donde 
        subject: 'Verify MyTinerary account',
        html: `
            <div>
                <h1> Welcome ${mail} </h1>
                <a href='http://localhost:4000/auth/verify/${code}'>Click to verify!</a>
            </div>
        ` //Código HTML, para renderizar en el body del mail
        //Enviar un link hacia una dirección que verifique la clave unica de verificación (Es un endpoint) 
    }

    await transport.sendMail(mailOptions,(error, response)=>{ //Ejecutar el envío
        if(error){
            console.log(error)
        }else {
            console.log('check mail')
        }
    })  

}

module.exports = sendMail