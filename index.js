const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("!");

bot.on('ready', () => {
    bot.user.setPresence({ game: {name: 'ses victimes agoniser..', type: 2} });
    console.log("SCP- ███ opérationnel");
});

bot.login(process.env.TOKEN);

bot.on("guildMemberAdd", member => {
    let role = member.guild.roles.find("name", "Class-D");
    member.guild.channels.find("name", "welcome").send(`:spy:Le SCP- ${member.user.username} vient d'être capturé par la Fondation.`)
    member.addRole(role)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "welcome").send(`:spy:Le SCP- ${member.user.username} vient d'être tué par la Fondation.`)
});
