const Discord = require('discord.js');

const bot = new Discord.Client();

var prefix = ("!");

bot.login(process.env.TOKEN);

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '!infos • Private Game', type: 0} });
    console.log("Taupe'Info ✔");
});

bot.on("guildMemberAdd", member => {
    let role = member.guild.roles.find("name", "Novice");
    member.addRole(role)
});

bot.on('message', message => {
    if(message.content[0] === prefix) {
        if(message.content === prefix + 'fortnite') {
            let but = message.guild.roles.find('name', '• Fortnite •')
            if(message.member.roles.find('name', '• Fortnite •')) {
                message.member.removeRole(but)
                message.reply("rôle ``• Fortnite •`` retiré.")
            }
            else {
                message.member.addRole(but)
                message.reply("rôle ``• Fortnite •`` ajouté.")
            }
        }
    }
})

bot.on('message', message => {
    if(message.content[0] === prefix) {
        if(message.content === prefix + 'csgo') {
            let but = message.guild.roles.find('name', '• CSGO •')
            if(message.member.roles.find('name', '• CSGO •')) {
                message.member.removeRole(but)
                message.reply("rôle ``• CSGO •`` retiré.")
            }
            else {
                message.member.addRole(but)
                message.reply("rôle ``• CSGO •`` ajouté.")
            }
        }
    }
})

bot.on('message', message => {

    if (message.content === prefix + "help"){
        var aide_embed = new Discord.RichEmbed()
        .setTitle("Taupe`Info • Help")
        .addField("!help", "Accès aux commandes de Taupe`Info.")
        .addField("!infos", "Informations relatives au Mumble, Serveur ...")
        .addField("!notif", "Vous permet d'être notifié ou non pour les annonces.")
        .setFooter('Taupe`Info • mc.elitygames.fr')
        .setColor('#F49301')
        message.channel.sendEmbed(aide_embed);
        if (message.guild != null){
            message.delete();
        }
    }

    if (message.content === prefix + "infos"){
        var infos_embed = new Discord.RichEmbed()
            .setTitle("Taupe`Info • Informations")
            .addField("Serveur ▸", "mc.elitygames.fr | Host 3")
            .addField("Mumble ▸", "IP » pvelity.mumble.gg | Port » 21365 | Mot De Passe » 08082018")
            .addField("Document DeathNote ▸", "https://lc.cx/deathnote")
            .setFooter('Taupe`Info • mc.elitygames.fr')
            .setColor('#F49301')
            message.channel.sendEmbed(infos_embed);
            if (message.guild != null){
                message.delete();
                }
    }

    let suggestions = message.guild.channels.find("name", "suggestions");
if (message.channel === suggestions) {
    message.react("✅").then(newMessage => {
        message.react("❌")      
    })
}

let game = message.guild.channels.find("name", "annonces-games");
if (message.channel === game) {
    message.react("✅").then(newMessage => {
        message.react("🤔")
        message.react("❌")
    })
}

let proplayer = message.guild.channels.find("name", "propositions-joueurs");
if (message.channel === proplayer) {
    message.react("✅").then(newMessage => {
        message.react("🤔")
        message.react("❌")      
    })
}

});

