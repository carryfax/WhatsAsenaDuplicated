const Asena = require("../events");
const {MessageType} = require("@adiwajshing/baileys");
const got = require("got");
const con = require('../config');

if (con.WORKTYPE == 'public') {
    
    Asena.addCommand({pattern: "covid ?(.*)", fromMe: false}, (async (message, match) => {
    if (match[1] === "") {
        try{
            //const resp = await fetch("https://coronavirus-19-api.herokuapp.com/all").then(r => r.json());
            const respo = await got("https://coronavirus-19-api.herokuapp.com/all").then(async ok => {
                const resp = JSON.parse(ok.body);
                await message.reply(`🌍 *Resultados mundiales:*\n🌐 *Casos en total:* ${resp.cases}\n☠️ *Muertes en total:* ${resp.deaths}\n⚕️ *Recuperados en total:* ${resp.recovered}`);

            });

        } catch (err) {
            await message.reply(`Error :\n${err.message}`, MessageType.text)
        }

    }
        else if (match[1] === "co" || match[1] === "Co" || match[1] === "CO" || match[1].includes('colombia') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Colombia").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇨🇴 *Datos de Colombia:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "es" || match[1] === "Es" || match[1] === "ES" || match[1].includes('españa') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Spain").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇪🇸 *Datos de España:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);
            });
        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }        
    }
        else if (match[1] === "usa" || match[1] === "Usa" || match[1] === "USA" || match[1].includes('america') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/USA").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇺🇲 *Datas for USA:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "arg" || match[1] === "Arg" || match[1] === "ARG" || match[1].includes('argentina') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Argentina").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇦🇷 *Datos de Argentina:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "br" || match[1] === "Br" || match[1] === "BR" || match[1].includes('brasil') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Brazil").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇧🇷 *Dados do brasil:*\n😷 *Casos no total:* ${resp.cases}\n🏥 *Casos Diários:* ${resp.todayCases}\n⚰️ *Total de mortes:* ${resp.deaths}\n☠️ *Mortes diárias:* ${resp.todayDeaths}\n💊 *Totalmente recuperado:* ${resp.recovered}\n😷 *Casos ativos:* ${resp.active}\n🆘 *Casos Críticos:* ${resp.critical}\n🧪 *Testes totais:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "cl" || match[1] === "Cl" || match[1] === "CL" || match[1].includes('chile') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Chile").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇨🇱 *Datos de Chile:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "bo" || match[1] === "BO" || match[1] === "Bo" || match[1].includes('bolivia') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Bolivia").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇧🇴 *Datos de Bolivia:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);
            });
        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "cr" || match[1] === "Cr" || match[1] === "CR" || match[1].includes('costa rica') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Costa%20Rica").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇨🇷 *Datos de Costa Rica:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "ec" || match[1] === "Ec" || match[1] === "EC" || match[1].includes('ecuador') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Ecuador").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇪🇨 *Datos de Ecuador:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "sv" || match[1] === "Sv" || match[1] === "SV" || match[1].includes('salvador') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/El%20Salvador").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇸🇻 *Datos de El Salvador:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "gt" || match[1] === "Gt" || match[1] === "GT" || match[1].includes('guatemala') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Guatemala").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇬🇹 *Datos de Guatemala:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "hn" || match[1] === "Hn" || match[1] === "HN" || match[1].includes('honduras') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Honduras").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇭🇳 *Datos de Honduras:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "mx" || match[1] === "Mx" || match[1] === "MX" || match[1].includes('mexico') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Mexico").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇲🇽 *Datos de México:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "ni" || match[1] === "Ni" || match[1] === "NI" || match[1].includes('nicaragua') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Nicaragua").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇳🇮 *Datos de Nicaragua:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "pa" || match[1] === "Pa" || match[1] === "PA" || match[1].includes('panama') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Panama").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇵🇦 *Datos de Panamá:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "cu" || match[1] === "Cu" || match[1] === "CU" || match[1].includes('cuba') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Cuba").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇨🇺 *Datos de Cuba:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "py" || match[1] === "Py" || match[1] === "PY" || match[1].includes('paraguay') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Paraguay").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇵🇾 *Datos de Paraguay:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "pe" || match[1] === "Pe" || match[1] === "PE" || match[1].includes('peru') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Peru").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇵🇪 *Datos de Perú:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "do" || match[1] === "Do" || match[1] === "DO" || match[1].includes('republica dominicana') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Dominican%20Republic").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇩🇴 *Datos de República Dominicana:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "uy" || match[1] === "Uy" || match[1] === "UY" || match[1].includes('uruguay') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Uruguay").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇺🇾 *Datos de Uruguay:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "ve" || match[1] === "VE" || match[1] === "Ve" || match[1].includes('venezuela') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Venezuela").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇻🇪 *Datos de Venezuela:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }  
}));

Asena.addCommand({pattern: "infocovid", fromMe: false}, (async (message,match) => {
     
    await message.sendMessage("_Datos actualizados de coronavirus._\n💻Uso: *!covid*\nℹ️Descripción: Datos de Covid19 en el mundo\n\n💻Uso: *!covid arg*\n🇦🇷\nℹ️Descripción: Datos de Covid19 en Argentina\n\n💻Uso: *!covid bo*\n🇧🇴\nℹ️Descripción: Datos de Covid19 en Bolivia\n\n💻Uso: *!covid usa*\n🇺🇸\nℹ️Descripción: Datos de Covid19 en Estados Unidos\n\n💻Uso: *!covid br*\n🇧🇷\nℹ️Descripción: Datos de Covid19 en Brasil\n\n💻Uso: *!covid cl*\n🇨🇱\nℹ️Descripción: Datos de Covid19 en Chile\n\n💻Uso: *!covid co*\n🇨🇴\nℹ️Descripción: Datos de Covid19 en Colombia\n\n💻Uso: *!covid cr*\n🇨🇷\nℹ️Descripción: Datos de Covid19 en Costa Rica\n\n💻Uso: *!covid cu*\n🇨🇺\nℹ️Descripción: Datos de Covid19 en Cuba\n\n💻Uso: *!covid ec*\n🇪🇨\nℹ️Descripción: Datos de Covid19 en Ecuador\n\n💻Uso: *!covid sv*\n🇸🇻\nℹ️Descripción: Datos de Covid19 en El Salvador\n\n💻Uso: *!covid gt*\n🇬🇹\nℹ️Descripción: Datos de Covid19 en Guatemala\n\n💻Uso: *!covid hn*\n🇭🇳\nℹ️Descripción: Datos de Covid19 en Honduras\n\n💻Uso: *!covid mx*\n🇲🇽\nℹ️Descripción: Datos de Covid19 en México\n\n💻Uso: *!covid ni*\n🇳🇮\nℹ️Descripción: Datos de Covid19 en Nicaragua\n\n💻Uso: *!covid pa*\n🇵🇦\nℹ️Descripción: Datos de Covid19 en Panamá\n\n💻Uso: *!covid py*\n🇵🇾\nℹ️Descripción: Datos de Covid19 en Paraguay\n\n💻Uso: *!covid pe*\n🇵🇪\nℹ️Descripción: Datos de Covid19 en Perú\n\n💻Uso: *!covid do*\n🇩🇴\nℹ️Descripción: Datos de Covid19 en República Dominicana\n\n💻Uso: *!covid uy*\n🇺🇾\nℹ️Descripción: Datos de Covid19 en Uruguay\n\n💻Uso: *!covid ve*\n🇻🇪\nℹ️Descripción: Datos de Covid19 en Venezuela\n\n💻Uso: *!covid es*\n🇪🇸\nℹ️Descripción: Datos de Covid19 en España");
    
    }));
}

else if (con.WORKTYPE == 'private') {
    Asena.addCommand({pattern: "covid ?(.*)", fromMe: false}, (async (message, match) => {
    if (match[1] === "") {
        try{
            //const resp = await fetch("https://coronavirus-19-api.herokuapp.com/all").then(r => r.json());
            const respo = await got("https://coronavirus-19-api.herokuapp.com/all").then(async ok => {
                const resp = JSON.parse(ok.body);
                await message.reply(`🌍 *Resultados mundiales:*\n🌐 *Casos en total:* ${resp.cases}\n☠️ *Muertes en total:* ${resp.deaths}\n⚕️ *Recuperados en total:* ${resp.recovered}`);

            });

        } catch (err) {
            await message.reply(`Error :\n${err.message}`, MessageType.text)
        }

    }
        else if (match[1] === "co" || match[1] === "Co" || match[1] === "CO" || match[1].includes('colombia') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Colombia").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇨🇴 *Datos de Colombia:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "es" || match[1] === "Es" || match[1] === "ES" || match[1].includes('españa') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Spain").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇪🇸 *Datos de España:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);
            });
        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }        
    }
        else if (match[1] === "usa" || match[1] === "Usa" || match[1] === "USA" || match[1].includes('america') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/USA").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇺🇲 *Datas for USA:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "arg" || match[1] === "Arg" || match[1] === "ARG" || match[1].includes('argentina') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Argentina").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇦🇷 *Datos de Argentina:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "br" || match[1] === "Br" || match[1] === "BR" || match[1].includes('brasil') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Brazil").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇧🇷 *Dados do brasil:*\n😷 *Casos no total:* ${resp.cases}\n🏥 *Casos Diários:* ${resp.todayCases}\n⚰️ *Total de mortes:* ${resp.deaths}\n☠️ *Mortes diárias:* ${resp.todayDeaths}\n💊 *Totalmente recuperado:* ${resp.recovered}\n😷 *Casos ativos:* ${resp.active}\n🆘 *Casos Críticos:* ${resp.critical}\n🧪 *Testes totais:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "cl" || match[1] === "Cl" || match[1] === "CL" || match[1].includes('chile') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Chile").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇨🇱 *Datos de Chile:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "bo" || match[1] === "BO" || match[1] === "Bo" || match[1].includes('bolivia') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Bolivia").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇧🇴 *Datos de Bolivia:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);
            });
        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "cr" || match[1] === "Cr" || match[1] === "CR" || match[1].includes('costa rica') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Costa%20Rica").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇨🇷 *Datos de Costa Rica:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "ec" || match[1] === "Ec" || match[1] === "EC" || match[1].includes('ecuador') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Ecuador").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇪🇨 *Datos de Ecuador:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "sv" || match[1] === "Sv" || match[1] === "SV" || match[1].includes('salvador') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/El%20Salvador").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇸🇻 *Datos de El Salvador:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "gt" || match[1] === "Gt" || match[1] === "GT" || match[1].includes('guatemala') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Guatemala").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇬🇹 *Datos de Guatemala:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "hn" || match[1] === "Hn" || match[1] === "HN" || match[1].includes('honduras') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Honduras").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇭🇳 *Datos de Honduras:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "mx" || match[1] === "Mx" || match[1] === "MX" || match[1].includes('mexico') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Mexico").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇲🇽 *Datos de México:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "ni" || match[1] === "Ni" || match[1] === "NI" || match[1].includes('nicaragua') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Nicaragua").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇳🇮 *Datos de Nicaragua:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "pa" || match[1] === "Pa" || match[1] === "PA" || match[1].includes('panama') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Panama").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇵🇦 *Datos de Panamá:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "cu" || match[1] === "Cu" || match[1] === "CU" || match[1].includes('cuba') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Cuba").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇨🇺 *Datos de Cuba:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "py" || match[1] === "Py" || match[1] === "PY" || match[1].includes('paraguay') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Paraguay").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇵🇾 *Datos de Paraguay:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "pe" || match[1] === "Pe" || match[1] === "PE" || match[1].includes('peru') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Peru").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇵🇪 *Datos de Perú:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "do" || match[1] === "Do" || match[1] === "DO" || match[1].includes('republica dominicana') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Dominican%20Republic").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇩🇴 *Datos de República Dominicana:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "uy" || match[1] === "Uy" || match[1] === "UY" || match[1].includes('uruguay') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Uruguay").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇺🇾 *Datos de Uruguay:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
        else if (match[1] === "ve" || match[1] === "VE" || match[1] === "Ve" || match[1].includes('venezuela') ) {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Venezuela").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇻🇪 *Datos de Venezuela:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }  
}));

Asena.addCommand({pattern: "infocovid", fromMe: false}, (async (message,match) => {
     
    await message.sendMessage("_Datos actualizados de coronavirus._\n💻Uso: *!covid*\nℹ️Descripción: Datos de Covid19 en el mundo\n\n💻Uso: *!covid arg*\n🇦🇷\nℹ️Descripción: Datos de Covid19 en Argentina\n\n💻Uso: *!covid bo*\n🇧🇴\nℹ️Descripción: Datos de Covid19 en Bolivia\n\n💻Uso: *!covid usa*\n🇺🇸\nℹ️Descripción: Datos de Covid19 en Estados Unidos\n\n💻Uso: *!covid br*\n🇧🇷\nℹ️Descripción: Datos de Covid19 en Brasil\n\n💻Uso: *!covid cl*\n🇨🇱\nℹ️Descripción: Datos de Covid19 en Chile\n\n💻Uso: *!covid co*\n🇨🇴\nℹ️Descripción: Datos de Covid19 en Colombia\n\n💻Uso: *!covid cr*\n🇨🇷\nℹ️Descripción: Datos de Covid19 en Costa Rica\n\n💻Uso: *!covid cu*\n🇨🇺\nℹ️Descripción: Datos de Covid19 en Cuba\n\n💻Uso: *!covid ec*\n🇪🇨\nℹ️Descripción: Datos de Covid19 en Ecuador\n\n💻Uso: *!covid sv*\n🇸🇻\nℹ️Descripción: Datos de Covid19 en El Salvador\n\n💻Uso: *!covid gt*\n🇬🇹\nℹ️Descripción: Datos de Covid19 en Guatemala\n\n💻Uso: *!covid hn*\n🇭🇳\nℹ️Descripción: Datos de Covid19 en Honduras\n\n💻Uso: *!covid mx*\n🇲🇽\nℹ️Descripción: Datos de Covid19 en México\n\n💻Uso: *!covid ni*\n🇳🇮\nℹ️Descripción: Datos de Covid19 en Nicaragua\n\n💻Uso: *!covid pa*\n🇵🇦\nℹ️Descripción: Datos de Covid19 en Panamá\n\n💻Uso: *!covid py*\n🇵🇾\nℹ️Descripción: Datos de Covid19 en Paraguay\n\n💻Uso: *!covid pe*\n🇵🇪\nℹ️Descripción: Datos de Covid19 en Perú\n\n💻Uso: *!covid do*\n🇩🇴\nℹ️Descripción: Datos de Covid19 en República Dominicana\n\n💻Uso: *!covid uy*\n🇺🇾\nℹ️Descripción: Datos de Covid19 en Uruguay\n\n💻Uso: *!covid ve*\n🇻🇪\nℹ️Descripción: Datos de Covid19 en Venezuela\n\n💻Uso: *!covid es*\n🇪🇸\nℹ️Descripción: Datos de Covid19 en España");
    
    }));
}
