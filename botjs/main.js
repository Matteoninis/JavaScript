const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const LoadCommands = require("./Loaders/LoadCommands")
const config = require("./config")

bot.commands = new Discord.Collection()

bot.login(config.token)
LoadCommands(bot)

bot.on("messageCreate", async message => {

    if(message.content === "!ping") return bot.commands.get("ping").run(bot, message)

})


bot.on("ready", async () => {

    console.log(`${bot.user.tag} est bien en ligne ! `)
})

  