const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("!");

bot.on('ready', () => {
    bot.user.setPresence({ game: {name: 'interviewer un Kiwi', type: 2} });
    console.log("Carte Kiwi opérationnelle");
});

bot.login(process.env.TOKEN);

bot.on("guildMemberAdd", member => {
    let role = member.guild.roles.find("bienvenue", "MiniKiwi");
    member.guild.channels.find("name", "welcome").send(`Heeey ! Bienvenue à ${member.user.username} sur le Discord du Kiwi

    Le canal #reglement est ton ami ! Amuse-toi bien ici :wink: ! `)
    member.addRole(role)
});
