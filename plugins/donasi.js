let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [081322577123]
│ •  [081322577123]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
