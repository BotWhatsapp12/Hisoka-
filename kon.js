
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const hx = require('hxz-api')
const xfar = require('xfarr-api')
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const content = JSON.stringify(m.message)
const from = m.key.remoteJid
const type = Object.keys(m.message)[0]
const ofrply = fs.readFileSync('./lib/hisoka.jpg')
let cmdmedia = JSON.parse(fs.readFileSync('./src/cmdmedia.json'))

module.exports = kon = async (kon, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = kon.user.id ? kon.user.id.split(":")[0]+"@s.whatsapp.net" : kon.user.id
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isUrl = (uri) => {
	    return uri.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
	}
        // Group
        const groupMetadata = m.isGroup ? await kon.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isGroupOwner = m.isGroup ? groupOwner.includes(m.sender) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

        // Bot Status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })

        // Public & Self
        if (!kon.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
        kon.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }

        // Respon Cmd with media
const sendFileFromUrl = async (from, url, caption, msg, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return chika.sendMessage(from, { video: await convertGif(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: msg})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime.split("/")[0] === "image"){
                return kon.sendMessage(from, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            } else if(mime.split("/")[0] === "video"){
                return kon.sendMessage(from, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            } else if(mime.split("/")[0] === "audio"){
                return kon.sendMessage(from, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
            } else {l
                return kon.sendMessage(from, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: m })
            }
        }
const sendButton5 = async (id, text1, desc1, yo) => {
var buatpesan = await generateWAMessageFromContent(from, {
    "templateMessage": {
      "hydratedTemplate": {
        ...yo.message,
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": [
          {
            "urlButton": {
              "displayText": "Github",
              "url": "https://github.com/BotWhatsapp12"
            }
          },
          {
            "urlButton": {
              "displayText": "Instagram",
              "url": "https://instagram.com/_daaa_1"
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Bot Status",
              "id": `ping`
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Script",
              "id": `sc`,
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Owner",
              "id": `owner`
            }
          }
        ]
      }
    }
  }, {})
kon.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}
        var menubutlist = [
  {buttonId: `sc`, buttonText: {displayText: 'Script'}, type: 1},
  {buttonId: `ping`, buttonText: {displayText: 'Bot Status'}, type: 1},
    {buttonId: `owner`, buttonText: {displayText: 'Creator Bot'}, type: 1}
]

        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in cmdmedia)) {
        let hash = cmdmedia[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: kon.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, kon.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        kon.ev.emit('messages.upsert', msg)
        }
        switch(command) {
        	case 'igdl': case 'instagram': case 'ig':{
        	if (!text) throw 'Masukkan Query Link!'
			let buttons = [
                    {buttonId: `ig1 ig1 ${text}`, buttonText: {displayText: 'Hasil Pencarian'}, type: 1},
                ]
                let buttonMessage = {
                    text: `Hasil Download Dari ${text}`,
                    footer: 'Downloader Instagram GuraBotz',
                    buttons: buttons,
                    headerType: 2
                }
           kon.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
         case 'ig1':{
			    m.reply(mess.wait)
			    xfar.Instagram(args[1]).then( data => {
			     var teks = `*Instagram Downloader*\n\n*≻ Title :* ${data.title}\n*≻ Jumlah Media :* ${data.medias.length}\n*≻ Url Source :* ${data.url}\n\n_wait a minute sending media..._`
			     m.reply(teks)
			     for (let i of data.medias) {
				  if (i.extension === "mp4") {
				   kon.sendMessage(m.chat, { video: { url: i.url }})
				  } else if (i.extension === "jpg") {
				   kon.sendMessage(m.chat, { image: { url: i.url }})
			      }
			     }
			    }).catch(() => m.reply('Eror Awokawok'))
			}
			    break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await kon.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    kon.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, {quoted:m})
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	case 'sc': {
		let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'Back to Menu'}, type: 1},
                ]
                let buttonMessage = {
                    text: `*Gak Ada Bang*`,
                    footer: 'Downloader Instagram GuraBotz',
                    buttons: buttons,
                    headerType: 2
                }
           kon.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
	case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                var { TiktokDownloader } = require('./lib/tiktokdl')
res = await TiktokDownloader(`${text}`).catch(e => {
m.reply('error')
})
console.log(res)
                let anu = await fetchJson('https://zenzapi.xyz/downloader/tiktok?url=${text}&apikey=87d718524e2a')
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: 'With Watermark'}, type: 1},
                    {buttonId: `tiktokaudio1 tiktokaudio1 ${text}`, buttonText: {displayText: 'Music'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: res.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Downloader TikTok GuraBotz',
                    buttons: buttons,
                    headerType: 5
                }
                kon.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                var { TiktokDownloader } = require('./lib/tiktokdl')
res = await TiktokDownloader(`${text}`).catch(e => {
m.reply('error')
})
console.log(res)
                let anu = await fetchJson('https://zenzapi.xyz/downloader/tiktok?url=${text}&apikey=87d718524e2a')
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: 'No Watermark'}, type: 1},
                    {buttonId: `tiktokaudio1 tiktokaudio1 ${text}`, buttonText: {displayText: 'Music'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: res.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Downloader TikTok GuraBotz',
                    buttons: buttons,
                    headerType: 5
                }
                kon.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
    case 'tiktokaudio1':{
     if (!text) throw 'Masukkan Query Link!'
			    hx.ttdownloader(args[1]).then( data => {
			      kon.sendMessage(m.chat, { audio: { url: data.nowm }, mimetype: 'audio/mp4' }, { quoted: m })
				}).catch(() => reply('Hmm Erorr Awoakwoakwok'))
				}
		        break
    case'twitter':{
            if (!text) throw 'Linknya?'
            m.reply('Sedang Di Proses, Jika Video Lama, Mungkin Eror Atau User Private')
            var res = await hx.twitter(`${text}`)
            ren = `${res.HD}`
            let buttons = [
                    {buttonId: `owner`, buttonText: {displayText: 'Owner'}, type: 1},
                    {buttonId: `menu`, buttonText: {displayText: 'Back To Menu'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: res.HD },
                    caption: mess.success,
                    footer: 'Downloader Twitter GuraBotz',
                    buttons: buttons,
                    headerType: 5
                }
                kon.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw`Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await kon.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await kon.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
	case 'toimage': case 'toimg': {
                if (!quoted) m.reply('Reply Sticker')
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await kon.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    kon.sendMessage(m.chat, { image: buffer, caption : mess.success}, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😀+😁`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await kon.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) m.reply('Reply Sticker Gif')
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await kon.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await kon.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: mess.success} }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'togif': {
                if (!quoted) m.reply('Reply Image')
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await kon.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await kon.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
              case 'ping': case 'botstatus': case 'statusbot': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

🗂Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} BroadCast`
                let getGroups = await kon.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Github Owner',
                                    url: 'https://github.com/BotWhatsapp12'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Instagram Owner',
                                    url: 'https://instagram.com/_daaa_1'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      fatihgans = fs.readFileSync('./lib/bc.jpg')
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      kon.send5ButImg(i, txt, kon.user.name, fatihgans, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} BroadCast`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Github Owner',
                                    url: 'https://github.com/BotWhatsapp12'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Instagram Owner',
                                    url: 'https://instagram.com/_daaa_1'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      fatihgans = fs.readFileSync('./lib/bc.jpg')
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      kon.send5ButImg(yoi, txt, kon.user.name, fatihgans, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'wikipedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                cap =`🐣Title : ${result.title}`
                let message = await prepareWAMessageMedia({ image: { url: result.image } }, { upload: kon.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: cap,
                            hydratedFooterText: `GuraBotz by ArulGanz`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'URL Hasil',
                                    url: `${result.source}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Media URL',
                                    url: `${result.image}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `owner`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Command Bot',
                                    id: `menu`
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Next',
                                    id: `wikipedia ${text}`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                kon.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case 'owner': case 'creator': {
                let vcard1 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ 'N:Sy;Bot;;;\n'
+ 'FN:GuraBotz\n'
+ 'item1.TEL;waid=6281229859085:6281229859085\n'
+ 'item1.X-ABLabel:ArulGanz\n'
+ 'item2.TEL;waid=62815788590760:62815788590760\n'
+ 'item2.X-ABLabel:GuraBotz\n'
+ 'item3.EMAIL;type=INTERNET:arulganz119@gmail.com\n'
+ 'item3.X-ABLabel:Email\n'
+ 'item4.URL:https://instagram.com/_daaa_1\n'
+ 'item4.X-ABLabel:instagram\n'
+ 'item5.ADR:;;Singapura🇸🇬;;;;\n'
+ 'item5.X-ABADR:ac\n'
+ 'item5.X-ABLabel:🌍 Region\n'
+ 'item6.X-ABLabel:Developer GuraBotz\n'
+ 'END:VCARD'
		let vcard2 ='BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ 'N:Sy;Bot;;;\n'
+ 'FN:GuraBotz\n'
+ 'item1.TEL;waid=6285869134434:6285869134434\n'
+ 'item1.X-ABLabel:ArulGanz\n'
+ 'item2.TEL;waid=62858691344341:62858691344341\n'
+ 'item2.X-ABLabel:GuraBotz\n'
+ 'item3.EMAIL;type=INTERNET:arulganz119@gmail.com\n'
+ 'item3.X-ABLabel:Email\n'
+ 'item4.URL:https://instagram.com/_daaa_1\n'
+ 'item4.X-ABLabel:instagram\n'
+ 'item5.ADR:;;Singapura🇸🇬;;;;\n'
+ 'item5.X-ABADR:ac\n'
+ 'item5.X-ABLabel:🌍 Region\n'
+ 'item6.X-ABLabel:Developer GuraBotz\n'
+ 'END:VCARD'
                kon.sendMessage(m.chat, { contacts: { displayName: 'OwnerBotz.', contacts: [{ vcard: vcard1 }, { vcard: vcard2 }] } }, { quoted: m })
            }
            break
            case 'joox':{
if(!text)return reply(`Judul lagu nya mana?`)
m.reply(mess.wait)
jx = await fetchJson(`https://api.vhtear.com/music?query=${text}&apikey=NOT-PREMIUM`)
thumb = await getBuffer(jx.result.linkImg)
jxx = `🌹 *JOOX DOWNLOADER*

🔖 *Size* : ${jx.result.filesize}
🔖 *Judul* : ${jx.result.judul}
🔖 *Url* : ${jx.result.linkMp3}
🔖 *Album* : ${jx.result.album}

_Tunggu Sebentar Bot Sedang Mengirimkan Audio_
`
kon.sendImage(m.chat, thumb, jxx)
kon.sendMessage(m.chat, { audio: { url: jx.result.linkMp3 }, mimetype: 'audio/mp4', fileName: `${jx.result.judul}.mp3` }, { quoted: m })
}
break          
            case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                m.reply(mess.wait)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    caption =`
🐣 Title : ${anu.title}
🗂 Ext : Search
🎶 ID : ${anu.videoId}
⏳ Duration : ${anu.timestamp}
📷 Viewers : ${anu.views}
🗓 Upload At : ${anu.ago}
🚹 Author : ${anu.author.name}
🎬 Channel : ${anu.author.url}
📃 Description : ${anu.description}`
            let message = await prepareWAMessageMedia({ image: { url: anu.thumbnail } }, { upload: kon.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: caption,
                            hydratedFooterText: `GuraBotz by ArulGanz`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Tautan Video',
                                    url: `${anu.url}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Instagram Owner',
                                    url: 'https://instagram.com/_daaa_1'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Music 128kbps',
                                    id: `ytmp32 ${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Video 360p',
                                    id: `ytmp42 ${anu.url}`
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Command Bot',
                                    id: 'menu'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                kon.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                m.reply(mess.wait)
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(isUrl(text)[0])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '128kbps'                
                let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return m.reply('File Melebihi Batas'+util.format(media))
                kon.sendImage(m.chat, thumbnail, `🐣 Title : ${title}\n📤 File Size : ${media[0].formattedSize}\n🖇 Url : ${url}\n🎶 Ext : MP3\n🗃 Resolusi : ${args[1] || '128kbps'}\n *Mohon Tunggu Sebentar Media Sedang Dikirim*`, m)
                kon.sendMessage(m.chat, { audio: { url: media[0].url }, mimetype: 'audio/mp4', fileName: `${title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                m.reply(mess.wait)
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(isUrl(text)[0])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '360p'                
                let media = medias.filter(v => v.videoAvailable == true && v.audioAvailable == false && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return m.reply('File Melebihi Batas'+util.format(media))
                kon.sendMessage(m.chat, { video: { url: media[0].url }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: `🐣 Title : ${title}\n📤 File Size : ${media[0].formattedSize}\n🖇 Url : ${url}\n Ext : MP4\n🗃 Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'ytmp32':{
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27`
                m.reply(mess.wait)
                ini = await fetchJson(`https://api.dapuhy.xyz/api/socialmedia/ytmp3?url=${text}&apikey=wC7ZLKWUPR`)
                thumb = await getBuffer(ini.result.thumb)
                kon.sendImage(m.chat, thumb, `🐣 Title : ${ini.result.title}\n📤 File Size : ${ini.result.size}\n🖇 Url : ${ini.result.url}\n🎶 Ext : MP3\n\n *Mohon Tunggu Sebentar Media Sedang Dikirim*`, m)
                kon.sendMessage(m.chat, { audio: { url: ini.result.url }, mimetype: 'audio/mp4', fileName: `${ini.result.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp42':{
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27`
                m.reply(mess.wait)
                ini = await fetchJson(`https://api.dapuhy.xyz/api/socialmedia/ytmp4?url=${text}&apikey=wC7ZLKWUPR`)
                kon.sendMessage(m.chat, { video: { url: ini.result.url}, fileName: `${ini.result.title}.mp4`, mimetype: 'video/mp4', caption: `🐣 Title : ${ini.result.title}\n📤 File Size : ${ini.result.size}\n🖇 Url : ${ini.result.url}\n Ext : MP4\n🗃 Resolusi : ${ini.result.quality}` }, { quoted: m })
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                kon.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                kon.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            kon.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
            case 'list': case 'menu': case 'help': case '?': {
                anu = `
┏━➤ 「 *Menu GuraBotz*」
┃┃✯ ❒き⃟🐣 *${prefix}removebg (reply gambar)*
┃┃✯ ❒き⃟🐣 *${prefix}tomp4 (reply sticker gif)*
┃┃✯ ❒き⃟🐣 *${prefix}togif (reply sticker gif)*
┃┃✯ ❒き⃟🐣 *${prefix}toimg (reply sticker)*
┃┃✯ ❒き⃟🐣 *${prefix}sticker (reply gambar)*
┃┃✯ ❒き⃟🐣 *${prefix}emojimix (masukan emoji)*
┃┃✯ ❒き⃟🐣 *${prefix}ping*
┃┃✯ ❒き⃟🐣 *${prefix}owner*
┃┃✯ ❒き⃟🐣 *${prefix}del (reply pesan bot)*
┃┃
┃┏━「 *Menu Download*」
┃┃✯ ❒き⃟🐣 *${prefix}play (judul lagu)* 
┃┃✯ ❒き⃟🐣 *${prefix}ytmp3 (link youtube)* 
┃┃✯ ❒き⃟🐣 *${prefix}ytmp4 (link youtube)*
┃┃✯ ❒き⃟🐣 *${prefix}tiktoknowm (link tiktok)*
┃┃✯ ❒き⃟🐣 *${prefix}tiktokwm (link tiktok)*
┃┃✯ ❒き⃟🐣 *${prefix}twitter (link twitter)*
┃┃✯ ❒き⃟🐣 *${prefix}instagram (link instagram)*
┃┃
┃┏━「 *Menu Owner*」
┃┃✯ ❒き⃟🐣 *${prefix}bcgc* 
┃┃✯ ❒き⃟🐣 *${prefix}bcall* 
┃┃
┃┏━「 *Menu Group*」
┃┃✯ ❒き⃟🐣 *${prefix}tagall* 
┃┃✯ ❒き⃟🐣 *${prefix}hidetag* 
┃┃
┃┏━「 *Menu Search*」
┃┃✯ ❒き⃟🐣 *${prefix}wikipedia* 
┃┃
┃𝑵𝒐𝒕𝒆 : 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎!!, 
┃𝑱𝒊𝒌𝒂 𝑭𝒊𝒕𝒖𝒓 𝑻𝒊𝒅𝒂𝒌 𝑾𝒐𝒓𝒌 𝑳𝒂𝒑𝒐𝒓𝒌𝒂𝒏 𝑲𝒆 𝑶𝒘𝒏𝒆𝒓, 
┃𝑲𝒆𝒕𝒊𝒌 .𝒐𝒘𝒏𝒆𝒓 𝑼𝒏𝒕𝒖𝒌 𝑵𝒐𝒎𝒐𝒓 𝑶𝒘𝒏𝒆𝒓.
┗━━━━━━━`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/hisoka.jpg') }, { upload: kon.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedFooterText: `GuraBotz by ArulGanz`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Instagram',
                                    url: 'https://instagram.com/_daaa_1'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Github Owner',
                                    url: 'https://github.com/BotWhatsapp12'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                kon.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        m = String(err)
                        await m.reply(m)
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
		    if (!(budy.toLowerCase() in msgs)) return
		    kon.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
