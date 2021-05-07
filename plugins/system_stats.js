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
    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/drklogo.mp4"), 
            MessageType.video, 
            { mimetype: Mimetype.mp4, caption: '┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☢️ *𝐃𝐫𝐤𝐁𝐨𝐭𝐋𝐢𝐭𝐞* ☢️ 〙\n┗━━━━━━━━━━━━━━━━━━━\n┠⊷️ *Version:*\n┃ ```'+Config.VERSION+'```_\n┠⊷️ *Canal de Telegram:*\n┃ http://bit.ly/TLgramDrkBot\n┠⊷️ *Grupo de Soporte:*\n┃ http://bit.ly/SupportDrkBot\n┠⊷️ *Creador:*\n┃ http://bit.ly/OwnerDrkBot\n┗━━━━━━━━━━━━━━━━━━━\n!menu para mostrar comandos del BOT'}
        )
    }));
    
    Asena.addCommand({pattern: 'menu', fromMe: true}, (async (message, match) => {
        await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 *COMANDOS* 〙\n┗━━━━━━━━━━━━━━━━━━━\n┠⊷️ 🛑 !alive\n  Verifica si funciona el bot.\n\n┠⊷️ ➡️ !apkmod\n  Menú de aplicaciones premium.\n\n┠⊷️ ➡️ !deepai\n  Una potente Inteligencia Artificial con varias funciones.\n\n┠⊷️ ➡️ !infocovid\n  Obtén información acerca de la situación del Covid19 de varios países.\n\n┠⊷️ ➡️ !infohentai\n  Menu de comandos *HOT*.\n\n┠⊷️ ➡️ !infotblend\n  Herramienta de mezcla para edición de videos.\n\n┠⊷️ ➡️ !infottp\n  Menú de opciones de edición de texto.\n\n┠⊷️ ➡️ !removebg\n  Elimina el fondo de una fotografía que envíes.\n\n┠⊷️ ➡️ !song (nombre de la canción)\n  Descarga cualquier canción, si el resultado no es el que estás buscando, intenta escribiendo el nombre del autor de la canción.\n\n┠⊷️ ➡️ !mp4audio\n  Convierte un video en un audio.\n\n┠⊷️ ➡️ !imagesticker\n  Convierte un sticker en una foto.\n\n┠⊷️ ➡️ !trt\n  Traduce el texto el mensaje al idioma que quieras, debes responder al mensaje que quieras traducir (Ej.: !trt es en).\n\n┠⊷️ ➡️ !tts\n  Convierte el texto en un audio con la voz del Traductor de Google (Ej.: !tts hola).\n\n┠⊷️ ➡️ !yt\n  Busca videos en YouTube (enlace).\n\n┠⊷️ ➡️ !video\n  Descarga videos de YouTube debes colocar el enlace obtenido con el comando de arriba.\n\n┠⊷️ ➡️ !dtiktok\n  Descarga videos de TikTok de forma fácil y rapida.\n\n┠⊷️ ➡️ !wiki\n  Busca algo en Wikipedia.\n\n┠⊷️ ➡️ !img\n  Busca alguna imagen desde Google Pictures (Ej.: !img Bugatti).\n\n┠⊷️ ➡️ !ss\n  Toma captura de pantalla de el enlace que envíes (esto evitará que tengas que entrar a la página para ver su contenido).\n\n┠⊷️ ➡️ !animesay (Texto)\n  Escribe el texto dentro de la pancarta sostenida por una chica anime.\n\n┠⊷️ ➡️ !changesay (Texto)\n  Escribe el texto en un póster de Change My Mind.\n\n┠⊷️ ➡️ !trumpsay (Texto)\n  Escribe el texto en un Tweet de Donald Trump.\n\n┠⊷️ ➡️ !sticker (Responde una foto)\n  Crea un sticker de la foto dada, preferiblemente de una foto cuadrada.\n\n┠⊷️ ➡️ !unvoice\n  Convierte un audio en una nota de voz.\n\n┠⊷️ ➡️ !wallpaper\n  Envía fondos de pantalla de alta resolución, hay muchos.\n\n┠⊷️ ➡️ !weather (Ciudad)\n  Envía el clima de la ciudad dada.\n\n┠⊷️ ➡️ !gif (Respondiendo a un video)\n  Convierte un video en gif, tiene que ser un video corto.\n\n┠⊷️ ➡️ !short (enlace)\n  Acorta cualquier enlace.\n\n┠⊷️ ➡️ !lyrics (nombre de la canción)\n  Obtén la letra y los datos de la canción solicitada.\n┗━━━━━━━━━━━━━━━━━━━\n\n┏━━━━━━━━━━━━━━━━━━━\n  *𝐃𝐫𝐤𝐁𝐨𝐭𝐋𝐢𝐭𝐞* tu BOT amigo 😉\n┗━━━━━━━━━━━━━━━━━━━\n');
    }));
    
    Asena.addCommand({pattern: 'upgradelite', fromMe: false}, (async (message, match) => {
        await message.sendMessage('┏━━━━━━━━━━\n┃〘 ☢️ *𝐃𝐫𝐤𝐁𝐨𝐭𝐋𝐢𝐭𝐞* ☢️ 〙\n┣━━━━━━━━━━\n┠ NUEVA ACTUALIZACIÓN\n┠⊷️ *Version:*  ```'+Config.VERSION+'```\n┗━━━━━━━━━━━━');
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
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/drklogo.mp4"), 
            MessageType.video, 
            { mimetype: Mimetype.mp4, caption: '┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☢️ *𝐃𝐫𝐤𝐁𝐨𝐭𝐋𝐢𝐭𝐞* ☢️ 〙\n┗━━━━━━━━━━━━━━━━━━━\n┠⊷️ *Version:*\n┃ ```'+Config.VERSION+'```_\n┠⊷️ *Canal de Telegram:*\n┃ http://bit.ly/TLgramDrkBot\n┠⊷️ *Grupo de Soporte:*\n┃ http://bit.ly/SupportDrkBot\n┠⊷️ *Creador:*\n┃ http://bit.ly/OwnerDrkBot\n┗━━━━━━━━━━━━━━━━━━━\n!menu para mostrar comandos del BOT'}
        )
    }));
    
    Asena.addCommand({pattern: 'menu', fromMe: false}, (async (message, match) => {
        await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 *COMANDOS* 〙\n┗━━━━━━━━━━━━━━━━━━━\n┠⊷️ 🛑 !alive\n  Verifica si funciona el bot.\n\n┠⊷️ ➡️ !apkmod\n  Menú de aplicaciones premium.\n\n┠⊷️ ➡️ !deepai\n  Una potente Inteligencia Artificial con varias funciones.\n\n┠⊷️ ➡️ !infocovid\n  Obtén información acerca de la situación del Covid19 de varios países.\n\n┠⊷️ ➡️ !infohentai\n  Menu de comandos *HOT*.\n\n┠⊷️ ➡️ !infotblend\n  Herramienta de mezcla para edición de videos.\n\n┠⊷️ ➡️ !infottp\n  Menú de opciones de edición de texto.\n\n┠⊷️ ➡️ !removebg\n  Elimina el fondo de una fotografía que envíes.\n\n┠⊷️ ➡️ !song (nombre de la canción)\n  Descarga cualquier canción, si el resultado no es el que estás buscando, intenta escribiendo el nombre del autor de la canción.\n\n┠⊷️ ➡️ !mp4audio\n  Convierte un video en un audio.\n\n┠⊷️ ➡️ !imagesticker\n  Convierte un sticker en una foto.\n\n┠⊷️ ➡️ !trt\n  Traduce el texto el mensaje al idioma que quieras, debes responder al mensaje que quieras traducir (Ej.: !trt es en).\n\n┠⊷️ ➡️ !tts\n  Convierte el texto en un audio con la voz del Traductor de Google (Ej.: !tts hola).\n\n┠⊷️ ➡️ !yt\n  Busca videos en YouTube (enlace).\n\n┠⊷️ ➡️ !video\n  Descarga videos de YouTube debes colocar el enlace obtenido con el comando de arriba.\n\n┠⊷️ ➡️ !dtiktok\n  Descarga videos de TikTok de forma fácil y rapida.\n\n┠⊷️ ➡️ !wiki\n  Busca algo en Wikipedia.\n\n┠⊷️ ➡️ !img\n  Busca alguna imagen desde Google Pictures (Ej.: !img Bugatti).\n\n┠⊷️ ➡️ !ss\n  Toma captura de pantalla de el enlace que envíes (esto evitará que tengas que entrar a la página para ver su contenido).\n\n┠⊷️ ➡️ !animesay (Texto)\n  Escribe el texto dentro de la pancarta sostenida por una chica anime.\n\n┠⊷️ ➡️ !changesay (Texto)\n  Escribe el texto en un póster de Change My Mind.\n\n┠⊷️ ➡️ !trumpsay (Texto)\n  Escribe el texto en un Tweet de Donald Trump.\n\n┠⊷️ ➡️ !sticker (Responde una foto)\n  Crea un sticker de la foto dada, preferiblemente de una foto cuadrada.\n\n┠⊷️ ➡️ !unvoice\n  Convierte un audio en una nota de voz.\n\n┠⊷️ ➡️ !wallpaper\n  Envía fondos de pantalla de alta resolución, hay muchos.\n\n┠⊷️ ➡️ !weather (Ciudad)\n  Envía el clima de la ciudad dada.\n\n┠⊷️ ➡️ !gif (Respondiendo a un video)\n  Convierte un video en gif, tiene que ser un video corto.\n\n┠⊷️ ➡️ !short (enlace)\n  Acorta cualquier enlace.\n\n┠⊷️ ➡️ !lyrics (nombre de la canción)\n  Obtén la letra y los datos de la canción solicitada.\n┗━━━━━━━━━━━━━━━━━━━\n\n┏━━━━━━━━━━━━━━━━━━━\n  *𝐃𝐫𝐤𝐁𝐨𝐭𝐋𝐢𝐭𝐞* tu BOT amigo 😉\n┗━━━━━━━━━━━━━━━━━━━\n');
    }));
}
