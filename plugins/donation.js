const Asena = require('../events');
const axios = require('axios')
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const con = require('../config');
const fs = require('fs');

  
  if (con.WORKTYPE == 'private') {
  
    Asena.addCommand({pattern: 'donation', fromMe: true}, (async (message, match) => {
      
          var image = await axios.get ('https://i.ibb.co/GvXzJSG/20210406-014153.jpg', {responseType: 'arraybuffer'})
       await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.jpg, caption: `*Hola, soy _DarkBox_*\n\n¡Me alegra saber que quieres donar ☺️!\n*DrkBox* es un proyecto nuevo que necesita apoyo\n*Para donaciones internacionales*\nPayPal: paypal.me/DrkBot\n*Para donaciones locales*\nNequi, Movii, DaviPlata: 3508770421\n\n\nDe antemano, *muchas gracias*. ❤️`})
      
        await new Promise(r => setTimeout(r, 1650));
  
        await message.sendMessage('Por cierto... Muy pronto los donadores tendrán beneficios dentro del bot... 😌\nPor ahora, los donadores tendrán acceso a que el bot sea añadido a un grupo, si *deseas y puedes apoyar* este proyecto, envíame una captura de pantalla de tu donación por Telegram, t.me/Dark1522\nCuando me escribas, dime cuál es tu número de teléfono con el que utilizas el bot y te tomaré en cuenta. 🤭');
  
        }));

     Asena.addCommand({pattern: 'share', fromMe: true}, (async (message, match) => {
      
          var image = await axios.get ('https://i.ibb.co/GvXzJSG/20210406-014153.jpg', {responseType: 'arraybuffer'})
       await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.jpg, caption: `*Hola, soy _DarkBox_*\n\n¡Te invito a que te unas a este BOT, con el cual podras descargar música, videos, fondos de pantalla, crear sticker y muchas cosas más y lo mejor todo esto sin salir de WhatSapp. 🤩\n\n*Numero del BOT*: Solo entra y envía el primer mensaje que sale para que te muestre el menu de opciones\nhttp://wa.me/573046793853?text=!alive`})
      
        await new Promise(r => setTimeout(r, 1650));
  
        }));
  }
  else if (con.WORKTYPE == 'public') {
  
    Asena.addCommand({pattern: 'donation', fromMe: false}, (async (message, match) => {
      
          var image = await axios.get ('https://i.ibb.co/GvXzJSG/20210406-014153.jpg', {responseType: 'arraybuffer'})
       await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.jpg, caption: `*Hola, soy _DarkBox_*\n\n¡Me alegra saber que quieres donar ☺️!\n*DrkBox* es un proyecto nuevo que necesita apoyo\n*Para donaciones internacionales*\nPayPal: paypal.me/DrkBot\n*Para donaciones locales*\nNequi, Movii, DaviPlata: 3508770421\n\n\nDe antemano, *muchas gracias*. ❤️`})
      
        await new Promise(r => setTimeout(r, 1650));
  
        await message.sendMessage('Por cierto... Muy pronto los donadores tendrán beneficios dentro del bot... 😌\nPor ahora, los donadores tendrán acceso a que el bot sea añadido a un grupo, si *deseas y puedes apoyar* este proyecto, envíame una captura de pantalla de tu donación por Telegram, t.me/Dark1522\nCuando me escribas, dime cuál es tu número de teléfono con el que utilizas el bot y te tomaré en cuenta. 🤭');
  
        }));

    Asena.addCommand({pattern: 'share', fromMe: false}, (async (message, match) => {
      
          var image = await axios.get ('https://i.ibb.co/GvXzJSG/20210406-014153.jpg', {responseType: 'arraybuffer'})
       await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.jpg, caption: `*Hola, soy _DarkBox_*\n\n¡Te invito a que te unas a este BOT, con el cual podras descargar música, videos, fondos de pantalla, crear sticker y muchas cosas más y lo mejor todo esto sin salir de WhatSapp. 🤩\n\n*Numero del BOT*: Solo entra y envía el primer mensaje que sale para que te muestre el menu de opciones\nhttp://wa.me/573046793853?text=!alive`})
      
        await new Promise(r => setTimeout(r, 1650));
  
        }));
  }
