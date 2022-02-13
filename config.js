/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6281229859085
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

// Other
global.owner = ['6281229859085','6281229859085','6281229859085','6281229859085']
global.packname = 'GuraBot by'
global.author = 'ArulGanz'
global.sessionName = 'kon'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '𝐍𝐢𝐡 𝐊𝐚𝐤, 𝐃𝐚𝐡 𝐉𝐚𝐝𝐢, 𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐅𝐨𝐥𝐥𝐨𝐰 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 @_𝐝𝐚𝐚𝐚_1‎',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '𝐒𝐞𝐝𝐚𝐧𝐠 𝐃𝐢 𝐏𝐫𝐨𝐬𝐞𝐬, 𝐇𝐚𝐫𝐚𝐩 𝐓𝐮𝐧𝐠𝐠𝐮....‎',
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
