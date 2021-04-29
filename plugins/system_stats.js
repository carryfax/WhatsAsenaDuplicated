/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - DarkBox1522
*/

const Asena = require('../events');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const fs = require('fs');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        if (Config.ALIVEMSG == 'default'){            
            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("media/gif/drklogo.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.mpeg, caption: '☢️ *DrkBot está al 100%* ☢️\n\n*Version:* ```'+Config.VERSION+'```\n*Canal de Telegram:* https://t.me/Dark1522\n*Grupo de Soporte:* https://chat.whatsapp.com/IeRNuoNY1IQJS8JE02duW8\n*Creador:* https://wa.me/573508770421?text=Hola%20DarkBox\n\n*COMANDOS DRKBOT* ✅\n🛑 !alive – Verifica si funciona el bot.\n➡️ !apkmod - Menú de aplicaciones premium.\n➡️ !deepai - Una potente Inteligencia Artificial con varias funciones.\n➡️ !infocovid – Obtén información acerca de la situación del Covid19 de varios países.\n➡️ !infohentai - Menu de comandos *HOT*.\n➡️ !infotblend - Herramienta de mezcla para edición de videos.\n➡️ !infottp - Menú de opciones de edición de texto.\n➡️ !removebg – Elimina el fondo de una fotografía que envíes.\n➡️ !song (nombre de la canción) – Descarga cualquier canción, si el resultado no es el que estás buscando, intenta escribiendo el nombre del autor de la canción.\n ➡️ !mp4audio – Convierte un video en un audio.\n➡️ !imagesticker – Convierte un sticker en una foto.\n➡️ !trt – Traduce el texto el mensaje al idioma que quieras, debes responder al mensaje que quieras traducir (Ej.: !trt es en).\n➡️ !tts – Convierte el texto en un audio con la voz del Traductor de Google (Ej.: !tts hola).\n➡️ !yt – Busca videos en YouTube (enlace).\n➡️ !video – Descarga videos de YouTube debes colocar el enlace obtenido con el comando de arriba.\n➡️ !dtiktok - Descarga videos de TikTok de forma fácil y rapida.\n➡️ !wiki – Busca algo en Wikipedia.\n➡️ !img – Busca alguna imagen desde Google Pictures (Ej.: !img Bugatti).\n➡️ !ss – Toma captura de pantalla de el enlace que envíes (esto evitará que tengas que entrar a la página para ver su contenido).\n➡️ !animesay (Texto) – Escribe el texto dentro de la pancarta sostenida por una chica anime.\n➡️ !changesay (Texto) – Escribe el texto en un póster de Change My Mind.\n➡️ !trumpsay (Texto) – Escribe el texto en un Tweet de Donald Trump.\n➡️ !sticker (Responde una foto) – Crea un sticker de la foto dada, preferiblemente de una foto cuadrada.\n➡️ !unvoice – Convierte un audio en una nota de voz.\n➡️ !wallpaper – Envía fondos de pantalla de alta resolución, hay muchos.\n➡️ !weather (Ciudad) – Envía el clima de la ciudad dada.\n➡️ !gif (Respondiendo a un video) – Convierte un video en gif, tiene que ser un video corto.\n➡️ !tblend – Este comando trae varias funciones respecto a la edición de videos.\n➡️ !short (enlace) – Acorta cualquier enlace.\n➡️ !lyrics (nombre de la canción) – Obtén la letra y los datos de la canción solicitada.\n\nEspero que sea de su agrado, ten en cuenta que es un proyecto que aún está en desarrollo y puede contener fallas 🚧' }
            )
        }
        else if (Config.ALIVEMSG == 'DRK'){
            await message.client.sendMessage(
                message.jid,
                fs.readFileSync("media/gif/drklogo.mp4"),
                MessageType.image,
                { minetype: Minetype.jpg, caption: "===☢️ *DrkBot* ☢️===\n\n*Version:* 1.0\n*Creador:* 💲 *DarkBox* 💲 wa.me/573508770421" }
            )
        }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {
        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {
    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        if (Config.ALIVEMSG == 'default'){            
            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("media/gif/drklogo.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.mpeg, caption: '☢️ *DrkBot está al 100%* ☢️\n\n*Version:* ```'+Config.VERSION+'```\n*Canal de Telegram:* https://t.me/Dark1522\n*Grupo de Soporte:* https://chat.whatsapp.com/IeRNuoNY1IQJS8JE02duW8\n*Creador:* https://wa.me/573508770421?text=Hola%20DarkBox\n\n*COMANDOS DRKBOT* ✅\n🛑 !alive – Verifica si funciona el bot.\n➡️ !apkmod - Menú de aplicaciones premium.\n➡️ !deepai - Una potente Inteligencia Artificial con varias funciones.\n➡️ !infocovid – Obtén información acerca de la situación del Covid19 de varios países.\n➡️ !infohentai - Menu de comandos *HOT*.\n➡️ !infotblend - Herramienta de mezcla para edición de videos.\n➡️ !infottp - Menú de opciones de edición de texto.\n➡️ !removebg – Elimina el fondo de una fotografía que envíes.\n➡️ !song (nombre de la canción) – Descarga cualquier canción, si el resultado no es el que estás buscando, intenta escribiendo el nombre del autor de la canción.\n ➡️ !mp4audio – Convierte un video en un audio.\n➡️ !imagesticker – Convierte un sticker en una foto.\n➡️ !trt – Traduce el texto el mensaje al idioma que quieras, debes responder al mensaje que quieras traducir (Ej.: !trt es en).\n➡️ !tts – Convierte el texto en un audio con la voz del Traductor de Google (Ej.: !tts hola).\n➡️ !yt – Busca videos en YouTube (enlace).\n➡️ !video – Descarga videos de YouTube debes colocar el enlace obtenido con el comando de arriba.\n➡️ !dtiktok - Descarga videos de TikTok de forma fácil y rapida.\n➡️ !wiki – Busca algo en Wikipedia.\n➡️ !img – Busca alguna imagen desde Google Pictures (Ej.: !img Bugatti).\n➡️ !ss – Toma captura de pantalla de el enlace que envíes (esto evitará que tengas que entrar a la página para ver su contenido).\n➡️ !animesay (Texto) – Escribe el texto dentro de la pancarta sostenida por una chica anime.\n➡️ !changesay (Texto) – Escribe el texto en un póster de Change My Mind.\n➡️ !trumpsay (Texto) – Escribe el texto en un Tweet de Donald Trump.\n➡️ !sticker (Responde una foto) – Crea un sticker de la foto dada, preferiblemente de una foto cuadrada.\n➡️ !unvoice – Convierte un audio en una nota de voz.\n➡️ !wallpaper – Envía fondos de pantalla de alta resolución, hay muchos.\n➡️ !weather (Ciudad) – Envía el clima de la ciudad dada.\n➡️ !gif (Respondiendo a un video) – Convierte un video en gif, tiene que ser un video corto.\n➡️ !tblend – Este comando trae varias funciones respecto a la edición de videos.\n➡️ !short (enlace) – Acorta cualquier enlace.\n➡️ !lyrics (nombre de la canción) – Obtén la letra y los datos de la canción solicitada.\n\nEspero que sea de su agrado, ten en cuenta que es un proyecto que aún está en desarrollo y puede contener fallas 🚧' }
            )
        }
        else if (Config.ALIVEMSG == 'DRK'){
            await message.client.sendMessage(
                message.jid,
                fs.readFileSync("media/gif/drklogo.mp4"),
                MessageType.image,
                { minetype: Minetype.jpg, caption: "===☢️ *DrkBot* ☢️===\n\n*Version:* 1.0\n*Creador:* 💲 *DarkBox* 💲 wa.me/573508770421" }
            )
        }
    }));
}
