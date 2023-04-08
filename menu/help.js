const { Telegraf } = require('telegraf')
const chalk = require("chalk")
const fs = require("fs")
exports.imageManipulation = (pref) => {
return `**[Image Manupulation l]**

${pref}wanted <Reply img>
${pref}utatoo <Reply img>
${pref}unsharpen <Reply img>
${pref}thanos <Reply img>
${pref}sniper <Reply img> 
${pref}sharpen <Reply img>
${pref}sepia <Reply img>
${pref}scary <Reply img>
${pref}rip <Reply img>
${pref}redple <Reply img>
${pref}rejected <Reply img>
${pref}posterize <Reply img>
${pref}ps4 <Reply img>
${pref}pixelize <Reply img>
${pref}missionpassed <Reply img>
${pref}moustache <Reply img>
${pref}lookwhatkarenhave <Reply img>
${pref}jail <Reply img>
${pref}invert <Reply img>
${pref}greyscale <Reply img>
${pref}glitch <Reply img>
${pref}gay <Reply img>
${pref}frame <Reply img>
${pref}fire <Reply img>
${pref}distort <Reply img>
${pref}dictator <Reply img>
${pref}deepfry <Reply img>
${pref}ddungeon <Reply img>
${pref}circle <Reply img>
${pref}challenger <Reply img>
${pref}burn <Reply img>
${pref}brazzers <Reply img>
${pref}beautiful <Reply img>

[-Alfarabotz-]
`
}
exports.tools = (pref) => {
return `**[Tools]**

${pref}tourl <Reply img>

[-Alfarabotz-]`
}
exports.other = (pref) => {
return `**[Other]**

${pref}cuaca <name place>

[-Alfarabotz-]`
}
exports.searching = (pref) => {
return `**[Searching]**

${pref}searchimage <query>

[-Alfarabotz-]`
}
exports.downloader = (pref) => {
return `**[Downloader]**

${pref}tiktok <url>
${pref}youtubemp3 <url>
${pref}youtubemp4 <url>
${pref}instagram <url>
${pref}mediafire <url>
${pref}facebook <url>
${pref}twitter <url>
${pref}spotify <url>

[-Alfarabotz-]`
}
exports.allmenu = (nama, pref) => {
  return `──「 **ALL MENU** 」──\nHai **${nama}!**\nOwner : Daffa

**[Downloader]**

${pref}tiktok <url>
${pref}youtubemp3 <url>
${pref}youtubemp4 <url>
${pref}instagram <url>
${pref}mediafire <url>
${pref}facebook <url>
${pref}twitter <url>
${pref}spotify <url>

**[Searching]**
${pref}searchimage <query>

**[Other]**
${pref}cuaca <name place>

**[Tools]**
${pref}tourl <Reply img>

**[Image Manipulation]**
${pref}wanted <Reply img>
${pref}utatoo <Reply img>
${pref}unsharpen <Reply img>
${pref}thanos <Reply img>
${pref}sniper <Reply img> 
${pref}sharpen <Reply img>
${pref}sepia <Reply img>
${pref}scary <Reply img>
${pref}rip <Reply img>
${pref}redple <Reply img>
${pref}rejected <Reply img>
${pref}posterize <Reply img>
${pref}ps4 <Reply img>
${pref}pixelize <Reply img>
${pref}missionpassed <Reply img>
${pref}moustache <Reply img>
${pref}lookwhatkarenhave <Reply img>
${pref}jail <Reply img>
${pref}invert <Reply img>
${pref}greyscale <Reply img>
${pref}glitch <Reply img>
${pref}gay <Reply img>
${pref}frame <Reply img>
${pref}fire <Reply img>
${pref}distort <Reply img>
${pref}dictator <Reply img>
${pref}deepfry <Reply img>
${pref}ddungeon <Reply img>
${pref}circle <Reply img>
${pref}challenger <Reply img>
${pref}burn <Reply img>
${pref}brazzers <Reply img>
${pref}beautiful <Reply img>

「 __Deff__ 」`
}

exports.donasi = (nama) => {
	return `
Hello ${nama}👋, Thanks for visiting this bot

• DANA
⤷ 6289531704997

• Three Credit
⤷ 6289531705001

Very Thanks for Your donation. 😁`
	}

exports.start = () => {
return `[Alfarabotz]
Bot ini siap membantu
Untuk mendownload video, Dll

Chat @Irfaan567 Jika ada kesalahan
`
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update!`), chalk.yellow(`${__filename}`))
	delete require.cache[file]
	require(file)
})
