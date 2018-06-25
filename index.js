const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("!");

bot.on('ready', () => {
    bot.user.setPresence({ game: {name: 'tirer sur des bouteilles', type: 1} });
    console.log("Pew Pew opérationnel");
});

bot.login(process.env.TOKEN);

bot.on("guildMemberAdd", member => {
    let role = member.guild.roles.find("name", "Tueur à la clé à molette 🔧");
    member.guild.channels.find("name", "nouveaux-arrivants").send(`HAUT LES MAINS PEAU DE LAPIN ${member.user.username} EST LA :gun:`)
    member.addRole(role)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "nouveaux-arrivants").send(`Oups, balle perdue dans la tête de ${member.user.username} Adieu :skull:`)
});
