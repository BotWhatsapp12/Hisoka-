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
    success: 'done, dont forget to follow instagram https://instagram.com/_daaa_1',
    admin: 'special features admin group',
    botAdmin: 'bot must be admin',
    owner: 'special owner bot features',
    group: 'features can only be used in groups',
    private: 'feature can only be used in private chat',
    bot: 'special features of bot number users',
    wait: 'in process please wait a few minutes....‎',
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
