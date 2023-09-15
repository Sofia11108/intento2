const express = require('express')
const path = require('path')
const nodemailer = require('nodemailer')

const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.post('/datos', async (req, res)=> {
    const {name, email, message} = req.body;

    contentHTML = `
    <h1> Información de usuario </h1>
    <ul>
        <li>Nombre de usuario: ${name} </li>
        <li>correo de usuario: ${email} </li>
        <li>Mensaje: ${message} </li>
    </ul>
    `
    console.log(contentHTML);


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bincuenta321@gmail.com',
            pass: 'llbucyrqaciqtmcv'
        }
    });

    let info = await transporter.sendMail({
        from: '"Test Nodemailer"',
        to: email,
        subject: 'correo de test',
        html: contentHTML
    });

    res.send('Correo enviado');


    // res.render('./public/success.html')
})



app.listen(10101, ()=> {
    console.log("servidor en el puerto 10101");
})