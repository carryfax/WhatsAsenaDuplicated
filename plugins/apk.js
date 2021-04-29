/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - DarkBox1522
*/

const Asena = require('../events');
const axios = require('axios');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const fs = require('fs');


if (Config.WORKTYPE == 'private') {

   Asena.addCommand({pattern: 'apkmod', fromMe: true}, (async (message, match) => {
      await message.sendMessage('☣️ *APLICACIONES FULL* ☣️\nTodas las aplicaciones que encontraras aca estan full, con todo desbloqueado\n\n↘️ Nova Launcher:\n    !nova\n↘️ CM Launcher:\n    !cml\n↘️ Apex Launcher:\n    !apex\n\n↘️ Kinemaster:\n    !kinemaster\n↘️ PicsArt Gold:\n    !picsart\n↘️ Canva Pro:\n    !canva\n↘️ Ligthrom:\n    !lightr\n↘️ Photoshop Express:\n    !pshop\n↘️ Snapseed:\n    !snaps\n↘️ Retouch:\n    !retouch\n\n↘️ Vanced Manager:\n    !vanced\n↘️ Crunchyroll:\n    !crunchy\n↘️ Freezer Mod:\n    !freez\n↘️ Deezer Premium:\n    !deezer\n↘️ RadioBox:\n    !rbox\n↘️ Mx Player Pro:\n    !mxpro\n↘️ Power AMP:\n    !amp\n↘️ JetAudio:\n    !jetau\n\n↘️ ExpressVpn:\n    !xpress\n↘️ Hospot Shield:\n    !hshield\n↘️ TurboVpn:\n    !avguard\n\n↘️ File Manager:\n    !flmanager\n↘️ CallRecorder:\n    !callr\n↘️ FingScanner:\n    !fing\n↘️ Shazam Encore:\n    !shazam\n↘️ QR Scanner Pro:\n    !qrcode\n↘️ Screen Recorder:\n    !srecorder\n↘️ TikTok Mod:\n    !tiktok\n↘️ Photomath:\n    !pmath\n↘️ WhatsApp Plus:\n    !waplus\n');
   }));

   Asena.addCommand({pattern: 'fatp', fromMe: true}, (async (message, match) => {        
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/apk/FATP.mp3"),
            MessageType.audio, 
            {mimetype: Mimetype.mp4Audio}
        )
   }));
}

else if (Config.WORKTYPE == 'public') {

   Asena.addCommand({pattern: 'apkmod', fromMe: false}, (async (message, match) => {
      await message.sendMessage('☣️ *APLICACIONES FULL* ☣️\nTodas las aplicaciones que encontraras aca estan full, con todo desbloqueado\n\n↘️ Nova Launcher:\n    !nova\n↘️ CM Launcher:\n    !cml\n↘️ Apex Launcher:\n    !apex\n\n↘️ Kinemaster:\n    !kinemaster\n↘️ PicsArt Gold:\n    !picsart\n↘️ Canva Pro:\n    !canva\n↘️ Ligthrom:\n    !lightr\n↘️ Photoshop Express:\n    !pshop\n↘️ Snapseed:\n    !snaps\n↘️ Retouch:\n    !retouch\n\n↘️ Vanced Manager:\n    !vanced\n↘️ Crunchyroll:\n    !crunchy\n↘️ Freezer Mod:\n    !freez\n↘️ Deezer Premium:\n    !deezer\n↘️ RadioBox:\n    !rbox\n↘️ Mx Player Pro:\n    !mxpro\n↘️ Power AMP:\n    !amp\n↘️ JetAudio:\n    !jetau\n\n↘️ ExpressVpn:\n    !xpress\n↘️ Hospot Shield:\n    !hshield\n↘️ TurboVpn:\n    !avguard\n\n↘️ File Manager:\n    !flmanager\n↘️ CallRecorder:\n    !callr\n↘️ FingScanner:\n    !fing\n↘️ Shazam Encore:\n    !shazam\n↘️ QR Scanner Pro:\n    !qrcode\n↘️ Screen Recorder:\n    !srecorder\n↘️ TikTok Mod:\n    !tiktok\n↘️ Photomath:\n    !pmath\n↘️ WhatsApp Plus:\n    !waplus\n');
   }));
    
   Asena.addCommand({pattern: 'fatp', fromMe: false}, (async (message, match) => {        
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/apk/FATP.mp3"),
            MessageType.audio, 
            {mimetype: Mimetype.mp4Audio}
        )
   }));

   Asena.addCommand({pattern: 'nova', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *NOVA LAUNCHER* 💎\nLanzador con el cual podras personalizar la apariencia de tu dispositivo android.\n⚠️ Versión Premium, todo desbloqueado.\n📌 bit.ly/drknova');
   }));

   Asena.addCommand({pattern: 'cml', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *CM LAUNCHER* 💎\nLanzador con el cual podras personalizar la apariencia de tu dispositivo android.\n😞 No disponible en este momento.');
   }));

   Asena.addCommand({pattern: 'apex', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *APEX LAUNCHER* 💎\nLanzador con el cual podras personalizar la apariencia de tu dispositivo android.\n📌 bit.ly/drkapex');
   }));

   Asena.addCommand({pattern: 'kinemaster', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *KINEMASTER MOD* 💎\nPotente editor de vídeo para usar con smartphones y tablets.\n⚠️ Tienda desbloqueada.\n😞 No disponible en este momento.');
   }));

   Asena.addCommand({pattern: 'picsart', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *PICSART GOLD* 💎\nPicsArt es un editor de fotografía, collages, dibujo y red social.​\n⚠️ Funciones Premium desbloqueadas.\n📌 bit.ly/drkpicsart');
   }));

   Asena.addCommand({pattern: 'canva', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *CANVA PRO* 💎\nCrea diseños increíbles.\nCon las herramientas de diseño y las plantillas prediseñadas de Canva, es súper fácil crear, imprimir y compartir.\n⚠️ Tienda desbloqueada.\n📌 bit.ly/canvapro');
   }));

   Asena.addCommand({pattern: 'lightr', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *LIGTHROM* 💎\nAplicación de cámara y editor de fotos potente que potencia su fotografía y le ayuda a capturar y editar imágenes impresionantes.\n📌 bit.ly/drklightr');
   }));

   Asena.addCommand({pattern: 'pshop', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOSHOP EXPRESS* 💎\nAplicación móvil gratuita para realizar ediciones rápidas y potentes fácilmente en fotografías, así como para crear collages.\n📌 bit.ly/drkphotoshop');
   }));

   Asena.addCommand({pattern: 'snaps', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *SNAPSEED* 💎\nAplicación para editar fotografías que permite a los usuarios realzar fotos y aplicar filtros digitales.\n📌 bit.ly/drksnaps');
   }));

   Asena.addCommand({pattern: 'retouch', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *RETOUCH* 💎\nPremiado editor de imágenes que te permite eliminar contenidos no deseados u objetos de cualquier foto.\n📌 bit.ly/drkretouch');
   }));

   Asena.addCommand({pattern: 'vanced', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *VANCED MANAGER* 💎\nInstala MOD de YouTube Premium y YouTube Music.\n📌 bit.ly/drkytubev');
   }));

   Asena.addCommand({pattern: 'crunchy', fromMe: false}, (async (message, match) => {

        var chyroll = await axios.get('https://gitlab.com/DrkBotPublic/botarchives/-/raw/master/Sin_t%C3%ADtulo_2_540p.mp4', { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(chyroll.data), MessageType.video, {mimetype: Mimetype.mp4})
        await message.sendMessage('🔰 *CRUNCHYROLL(vrv)* 🔰\n💳 *BIN:* 55703976xxx62xxx\n📫 *Codigo Postal:* 10080, 10090\n *Ip:* USA 🇺🇸');
   }));

   Asena.addCommand({pattern: 'freez', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *FREEZER MOD* 💎\nApp para descargar musica desde Spotify y Deezer\n📌 bit.ly/drkfreezer');
   }));

   Asena.addCommand({pattern: 'deezer', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *DEEZER MOD* 💎\nAplicación para Android de música en streaming.\n⚠️ Versión Premium, descarga tu música.\n📌 bit.ly/drkdeezer');
   }));

   Asena.addCommand({pattern: 'rbox', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *RADIO BOX* 💎\nAplicación para escuchar toda la radio de forma online.\n⚠️ Versión sin anuncios.\n📌 bit.ly/drkradiobox');
   }));

   Asena.addCommand({pattern: 'mxpro', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *MX PLAYER PRO* 💎\nReproductor de Video.\n⚠️ Versión Premium.\n📌 bit.ly/drkmxplayer');
   }));

   Asena.addCommand({pattern: 'amp', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *POWERAMP* 💎\nReproductor de música con muchas opciones.\n⚠️ Version Premium.\n📌 bit.ly/drkampplayer');
   }));

   Asena.addCommand({pattern: 'jetau', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *JetAudio* 💎\nReproductor de música con muchas opciones.\n⚠️ Version Premium.\n📌 bit.ly/drkjetau');
   }));

   Asena.addCommand({pattern: 'xpress', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *EXPRESS VPN* 💎\nAplicación para cambiar de ubicación en Internet con muchos servidores para conectarse.\n⚠️ Pruebas Ilimitadas desbloqueadas y nueva interfas.\n📌 bit.ly/drkXpress');
   }));

   Asena.addCommand({pattern: 'hshield', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *HOSPOT SHIELD VPN* 💎\nAplicación para cambiar de ubicación en Internet con muchos servidores para conectarse.\n⚠️ Todos los servidores desbloqueados.\n📌 bit.ly/drkHShield');
   }));

   Asena.addCommand({pattern: 'avguard', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *TURBO VPN* 💎\nAplicación para cambiar de ubicación en Internet.\n📌 bit.ly/drkguard');
   }));

   Asena.addCommand({pattern: 'flmanager', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *FILE MANAGER* 💎\nExplorador de archivos para Android.\n📌 bit.ly/drkesfile');
   }));

   Asena.addCommand({pattern: 'callr', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *CALL RECORDER* 💎\nAplicación para grabar todas tus llamadas telefónicas.\n Version Premium.\n📌 bit.ly/drkcallr');
   }));

   Asena.addCommand({pattern: 'fing', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *FING SCANNER* 💎\nEscanea tu red y averigua quienes estan conectados.\n Version Premium sin anuncios.\n📌 bit.ly/drkfing');
   }));

   Asena.addCommand({pattern: 'shazam', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *SHAZAM ENCORE* 💎\nIdentifica cualquier canción en segundos.\n⚠️ Version Premium sin anuncios.\n📌 bit.ly/drkshaz');
   }));

   Asena.addCommand({pattern: 'qrcode', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *QR CODE SCANER* 💎\nCrea códigos QR\n⚠️ Version Premium sin anuncios.\n📌 bit.ly/drkqrscanner');
   }));

   Asena.addCommand({pattern: 'srecorder', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *SCREEN RECORDER* 💎\nGrabador de pantalla liviano sin anuncios.\n📌 bit.ly/drkgrabr');
   }));

   Asena.addCommand({pattern: 'tiktok', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *TIKTOK MOD* 💎\nMira miles de videos populares.\n⚠️ Con esta versión podrás descargar los vídeos sin marca de agua.\n📌 bit.ly/drktiktok');
   }));

   Asena.addCommand({pattern: 'pmath', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOMATH* 💎\nResuelve cualquier problema matematico en cuestión de segundos.\n⚠️ Versión sin anuncios.\n📌 bit.ly/drkphotomath');
   }));

   Asena.addCommand({pattern: 'waplus', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *WHATSAPP PLUS* 💎\nMOD de WhatsApp con el cual podrás no solo descargar estados si no mantener tu privacidad y muchas funciones mas.\n📌 bit.ly/drkWaPlus');
   }));
}
