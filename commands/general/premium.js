const fs = require("fs");
const Discord = require("discord.js")
const { Color } = require("../../config.js");

module.exports = {
  name: "premium",
  aliases: [""],
  enabled: false,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 2000,
  run: async (bot, message, args, dev) => {
    
const embed = new Discord.MessageEmbed()
 .setColor(Color)
 .setDescription(`
Security has a premium version which gives you more powerful features, you can get premium for only **$2.00**, click here: [Server](https://discord.gg/KBbsApGpVZ) , here is what you get from premium\n**AntiSpam**\nA new and powerful spam detect system stop anyone from trying to raid your server, the spam system will be able to kick or band a member and it will clear all the messages.\n**Unban all**\nHe can unban all people until they are banned form the server.\n**Setlang**\nYou can change the language of the bot to the languages ​​currently available in the bot.\n**Logs**\nWhen editing Anticommand in Log shows who changed it.`)

return message.lineReplyNoMention(embed);

    }
}
