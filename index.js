const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("!");

bot.on('ready', () => {
    bot.user.setPresence({ game: {name: 'interviewer un Kiwi', type: 1} });
    console.log("Carte Kiwi opérationnelle");
});

bot.login(process.env.TOKEN);

bot.on("guildMemberAdd", member => {
    let role = member.guild.roles.find("name", "MiniKiwi");
});
