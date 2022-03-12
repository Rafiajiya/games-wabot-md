let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085725012403]
│ • Telkomsel [081215320837]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/
│ • Gopay [08]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
