let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*๐ญ๐ผ๐ด๐ฝ๐๐ฐ๐น๐ด๐ญ:* ${pesan}`
let teks = `*๐ฅโ ๏ธ ๐๐ง๐๐ค๐จ๐๐ง๐ ๐๐๐ก๐๐ฅ๐๐ โ ๏ธ๐ฅ*\n\nโ ${oi}\n\nโ *๐ฅ๐ด๐๐ธ๐๐๐ด๐๐ฐ๐๐ฅ:*\n`
for (let mem of participants) {
teks += `๐ฅท๐ผโฎ @${mem.id.split('@')[0]}\n`}
teks += `โ๐๐๐๐๐๐๐ข๐ง๐๐ฆ๐๐๐๐๐ฌ๐ฆ`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocaciรณn)$/i
handler.admin = true
handler.group = true
export default handler
