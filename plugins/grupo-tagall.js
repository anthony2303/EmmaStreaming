let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `📄 *MENSAJE:* ${pesan}`
let teks = `╭━〔 *🌱DESPIERTEN PLANTITAS 🌱* 〕━⬣\n${oi}\n\n`
for (let mem of participants) {
teks += `┃💥⊹ @${mem.id.split('@')[0]}\n`}
teks += `┃
╰━━━━━[ *𓃠* 𝙀𝙢𝙞𝙡𝙞𝙖𝙣𝙤 𝙎𝙏-𝘽𝙤𝙩 ]━━━━━⬣`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|niñas|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
