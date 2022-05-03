const Discord = require("discord.js")

const TOKEN = "OTcwMjA3ODM3ODE5MTI1ODEw.Ym4mdg.vZixpwifxp53mDFTtdq-kVlaNJU"

const client = new Discord.Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES'
    ]
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})



client.login(TOKEN)