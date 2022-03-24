---
title: "Telegram bot"
date: "2022-03-20"
summary: "Guía para conectar tu applicación web con la api de Telegram para recibir notificaciones de forma automática en tu smartphone a través de un bot."
image: "/images/telegramBotBanner.jpg"
subject: "telegram"
writtenBy: "Pablo Ramos"
minRead: "5"
tag: "telegram api"
---

Haciendo un e-commerce me encontré con el asunto de cómo notificar al vendedor que realizó una venta, teniendo en cuenta que la idea de la app es que sea de costo cero. La aplicación en cuestión se encuentra deployada [aquí](https://ecommerce-pablo.vercel.app/) y cuenta con un carrito de compras y un checkout.
Al confirmar la venta, la misma se adjunta en una base de datos en GoogleSheet, pero no tenía manera de notificar al vendedor para que pueda preparar los productos para su envío/retiro.


Investigando me encontré con la api de Telegram y la posibilidad de comunicarme a través de los bots.
Con esta opción podemos enviar un mensaje a nuestra cuenta de Telegram a través de un bot el cual además de notificarnos que se realizó una venta, nos llegará la lista de productos junto con los datos del cliente.


Este post tiene como objetivo ser una guía para lograr conectar nuestra app con un bot de Telegram.
Manos a la obra!


Aclaración: en esta guía se presume conocido lo básico de javascript y React como asincronismo y manejo de estados.


Este tutorial lo dividí en 2 partes:


Parte 1: Con Telegram
Parte 2: Con nuestra app


## Parte 1: Del lado de Telegram
En esta instancia necesitamos dos datos para poder comunicarnos con nuestra app: el token del bot que nos mandará las notificaciones y el id de nuestra cuenta de Telegram.


### Obtención del token ###

Ingresamos al buscador de Telegram y buscamos "BotFather" y entramos al bot con dicho nombre. 
![BotFather Telegram.](/images/botFather.jpg "BotFather")
Una vez dentro tendremos que crear nuestro bot, para eso le enviamos el mensaje "/newbot", nos preguntará el nombre de nuestro bot (le podemos poner cualquier nombre, en este ejemplo es "Gecomm" que es el nombre de la tienda), este será con el cual nos aparecerá en el chat.
Luego nos pedirá que ingresemos el username de nuesto bot que debe terminar necesariamente con la palabra "bot", en este caso le ponemos "GecommBot".


Luego BotFather nos manda el token de nuestro bot el cual será del tipo: <span>123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11</span> y nos dice que mantengamos nuestro token seguro de lo contrario cualquier persona nos puede controlar nuestro bot, por lo que lo guardaremos en nuestro proyecto en una variable de entorno.
![BotFather token Telegram.](/images/botFatherToken.jpg "BotFather token")


Con esto ya tenemos creado nuestro bot.

### Obtención de nuestro ID
Volvemos al buscador de Telegram y esta vez buscamos el bot "Telegram Bot Raw", ingresamos y lo iniciamos mandándole el mensaje "/start" (todos los bots de Telegram se inician con este comando). Éste nos va a mandar un mensaje con un json del cual vamos a obtener el valor del "id" dentro de "chat". También lo guardaremos dentro de una variable de entorno.
![Telegram Bot Raw.](/images/botRaw.jpg "Telegram Bot Raw")


Listo, del lado de Telegram, ya tenemos los datos necesarios para poder conectar nuestra app al bot.

## Parte 2: Del lado de nuestra app
Simplemente tenemos que hacer un request a la api de Telegram de la siguiente forma: 
```
https://api.telegram.org/bot<token>/METHOD_NAME
```
Siguiendo nuestro ejemplo, quedaría algo así: 
```
https://api.telegram.org/bot123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11/sendMessage?chat_id=1234567890&text=HolaMundo
```
Si copiamos esta dirección y la pegamos en nuestro navegador podemos observar que nuestro bot nos está saludando.
Con <span>text=HolaMundo</span> estamos mandando un texto estático, para enviar un texto de forma dinámica simplemente guardamos nuestro string dentro de una variable y la reemplazamos en el request, pero antes debemos transformar nuestro string a un formato que nuestro navegador pueda entender y esto lo hacemos con el método <span>encodeURIComponent</span>. Agregando además el token y el id a variables de entorno. Finalmente, nos quedaría:
```
https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${encodeURIComponent(text)}
```

Ahora solo nos queda realizar el request mediante una función, en este caso vamos a crear una función sendOrder la cual hará el request a la api. En este caso, vamos a utilizar la librería Axios para realizar la llamada a la api.

```
async function sendOrder() {
  const url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${encodeURIComponent(text)}`
  axios.post(url).catch(error => console.log(error))
}
```

Como último paso, creamos un estado para guardar el mensaje que queremos enviar, el cual lo ingresaremos mediante un input dentro de un form y asociamos nuestra función al submit del form. Por lo que nos quedaría finalmente el siguiente código:


```
import React, { useState } from "react"
import axios from "axios"

const IndexRoute = ()=>{
  const [text, setText] = useState("")

  async function sendOrder(event) {
    event.preventDefault()
    const url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${encodeURIComponent(text)}`
    axios.post(url).catch(error => console.log(error))
}

  return (
    <form onSubmit={sendOrder}>
      <input placeholder="Mensaje..." onChange={(e)=>setText(e.target.value)}/>
      <button type="submit">Enviar a Telegram</button>
    </form>
  )
}

export default IndexRoute

```

Con esto, cada vez que apretemos el button nuestro bot nos enviará el texto que ingresamos dentro del input.
![Form.](/images/botConnected.jpg "Form")
![Telegram bot success.](/images/botSuccess.jpg "Telegram bot success")

Y listo, con esto podemos conectar nuestra web app a un bot de Telegram y recibir notificaciones en nuestro teléfono.