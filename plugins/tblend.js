/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('conventer');

if (Config.WORKTYPE == 'private') {
    
    Asena.addCommand({pattern: 'infotblend', fromMe: true}, (async (message, match) => {
		await message.sendMessage('*LISTA DE COMANDOS*\n\n➡️ !tblend dodge - Aplica un filtro de color rosa al video.\n➡️ !tblend multiply - Aplica un filtro de color verde al video.\n➡️ !tblend grainmerge - Aumenta los valores de contraste del video.\n➡️ !tblend and - Aplica efecto de rayo negro según la velocidad del video.\n➡️ !tblend or - Aplica un efecto de rayo blanco según la velocidad del video.\n➡️ !tblend burn - Aplica contraste verde al video.\n➡️ !tblend difference - Muestra las diferencias aplicando relieve verde al video.\n➡️ !tblend grainextract - Muestra las diferencias aplicando un relieve gris al video.\n➡️ !tblend divide - Demuestra las diferencias aplicando un relieve rosa al video.\n➡️ !tblend xor - Aplica tanto relieve verde como efecto relámpago al vídeo.\n➡️ !tblend hardmix - Mezcla los colores del video en un tono amarillo y rojo.\n➡️ !tblend negation - Convierte la dinámica del video en rosa.');
	}));

    Asena.addCommand({pattern: 'tblend ?(.*)', fromMe: true, desc: Lang.T_DESC}, (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.MP4TOAUDİO_NEEDREPLY, MessageType.text);

        if (message.repy_message && match[1] === '') return await message.client.sendMessage(message.jid, Lang.T_NOT, MessageType.text);

        if (match[1] === 'dodge') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=dodge')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'or') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=or')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'multiply') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=multiply')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'grainmerge') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=grainmerge')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'and') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=and')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'burn') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=burn')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'difference') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=difference')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'grainextract') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=grainextract')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'divide') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=divide')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'xor') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=xor')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'hardmix') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=hardmix')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'negation') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=negation')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

        }
        else {
            return await message.client.sendMessage(message.jid,Lang.T_FALSE, MessageType.text);
        }
    }));
}
else if (Config.WORKTYPE == 'public') {
    
    Asena.addCommand({pattern: 'infotblend', fromMe: false}, (async (message, match) => {
		await message.sendMessage('*LISTA DE COMANDOS*\n\n➡️ !tblend dodge - Aplica un filtro de color rosa al video.\n➡️ !tblend multiply - Aplica un filtro de color verde al video.\n➡️ !tblend grainmerge - Aumenta los valores de contraste del video.\n➡️ !tblend and - Aplica efecto de rayo negro según la velocidad del video.\n➡️ !tblend or - Aplica un efecto de rayo blanco según la velocidad del video.\n➡️ !tblend burn - Aplica contraste verde al video.\n➡️ !tblend difference - Muestra las diferencias aplicando relieve verde al video.\n➡️ !tblend grainextract - Muestra las diferencias aplicando un relieve gris al video.\n➡️ !tblend divide - Demuestra las diferencias aplicando un relieve rosa al video.\n➡️ !tblend xor - Aplica tanto relieve verde como efecto relámpago al vídeo.\n➡️ !tblend hardmix - Mezcla los colores del video en un tono amarillo y rojo.\n➡️ !tblend negation - Convierte la dinámica del video en rosa.');
	}));

    Asena.addCommand({pattern: 'tblend ?(.*)', fromMe: false, desc: Lang.T_DESC}, (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.MP4TOAUDİO_NEEDREPLY, MessageType.text);

        if (message.repy_message && match[1] === '') return await message.client.sendMessage(message.jid, Lang.T_NOT, MessageType.text);

        if (match[1] === 'dodge') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=dodge')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'or') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=or')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'multiply') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=multiply')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'grainmerge') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=grainmerge')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'and') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=and')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'burn') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=burn')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'difference') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=difference')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'grainextract') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=grainextract')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'divide') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=divide')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'xor') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=xor')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'hardmix') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=hardmix')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'negation') {

            var downloading = await message.client.sendMessage(message.jid,'```Editando...```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=negation')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Hecho por *DrkBot*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

        }
        else {
            return await message.client.sendMessage(message.jid,Lang.T_FALSE, MessageType.text);
        }
    }));
}
