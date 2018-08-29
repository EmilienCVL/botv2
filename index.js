const Discord = require('discord.js');

const bot = new Discord.Client();

var prefix = ("!");

bot.login(process.env.TOKEN);

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'être dev par Draxiio c:', type: 0} });
    console.log("NayizBot ✔");
});

bot.on("guildMemberAdd", member => {
    let role = member.guild.roles.find("name", "Novice");
    member.guild.channels.find("name", "join-leave-discord").send(`Salut mon chou ! 😀 Bienvenue dans la NayizFamm ${member.user.username}`)
    member.addRole(role)
});

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "join-leave-discord").send(`${member.user.username} à quitté le discord.`)
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
    if(message.content[0] === prefix) {
        if(message.content === prefix + 'pubg') {
            let but = message.guild.roles.find('name', '• PUBG •')
            if(message.member.roles.find('name', '• PUBG •')) {
                message.member.removeRole(but)
                message.reply("rôle ``• PUBG •`` retiré.")
            }
            else {
                message.member.addRole(but)
                message.reply("rôle ``• PUBG •`` ajouté.")
            }
        }
    }
})

bot.on('message', message => {
    if(message.content[0] === prefix) {
        if(message.content === prefix + 'realm_royal') {
            let but = message.guild.roles.find('name', '• Realm Royal •')
            if(message.member.roles.find('name', '• Realm Royal •')) {
                message.member.removeRole(but)
                message.reply("rôle ``• Realm Royal •`` retiré.")
            }
            else {
                message.member.addRole(but)
                message.reply("rôle ``• Realm Royal •`` ajouté.")
            }
        }
    }
})

bot.on('message', message => {

    if (message.content === prefix + "help"){
        var aide_embed = new Discord.RichEmbed()
        .setTitle("Nayiz Bot • Help")
        .addField("!help", "Accès aux commandes du Nayizz Bot.")
        .addField("!roles", "Accès aux différents rôles.")
        .addField("!infos", "Informations relatives à Nayizz.")
        .setFooter('• Nayiz Bot •')
        .setColor('#e7712c')
        message.channel.sendEmbed(aide_embed);
        if (message.guild != null){
            message.delete();
        }
    }
    
    if (message.content === prefix + "roles"){
        var roles_embed = new Discord.RichEmbed()
        .setTitle("Nayiz Bot • Rôles")
        .addField("Fortnite ▸", "!fortnite")
        .addField("CSGO ▸", "!csgo")
        .addField("PUBG ▸", "!pubg")
        .addField("Realm Royal ▸", "!realm_royal")
        .setFooter('• Nayiz Bot •')
        .setColor('#e7712c')
        message.channel.sendEmbed(roles_embed);
        if (message.guild != null){
            message.delete();
        }
    }     

    if (message.content === prefix + "infos"){
        var infos_embed = new Discord.RichEmbed()
            .setTitle("Nayiz Bot • Informations")
            .addField("Youtube ▸", "https://www.youtube.com/channel/UC_dfwlxCM7JMU9twB1qz4Hw")
            .addField("Twitter ▸", "https://twitter.com/Naiiz_L")
            .setFooter('• Nayiz Bot •')
            .setColor('#e7712c')
            message.channel.sendEmbed(infos_embed);
            if (message.guild != null){
                message.delete();
                }
    }

    //let suggestions = message.guild.channels.find("name", "suggestions");
//if (message.channel === suggestions) {
    //message.react("✅").then(newMessage => {
        //message.react("❌")      
    //})
//}

//let game = message.guild.channels.find("name", "annonces-games");
//if (message.channel === game) {
    //message.react("✅").then(newMessage => {
        //message.react("🤔")
        //message.react("❌")
    //})
//}

//let proplayer = message.guild.channels.find("name", "propositions-joueurs");
//if (message.channel === proplayer) {
    //message.react("✅").then(newMessage => {
        //message.react("🤔")
        //message.react("❌")      
    //})
//}

});

