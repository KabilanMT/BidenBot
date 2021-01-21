const auth = require('./auth.json');
const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', ()=> {
    console.log("Online");
});

client.on('message', message => {
    //Enter emoji in chat, copy link and you will find the emoji id in it
    if(message.member.id == auth.Terry){
        message.react("<:malarkey:800959627071586314>")
        message.react("🇲")
        message.react("🇦")
        message.react("🇱")
        message.react("🅰️")
        message.react("🇷")
        message.react("🇰")
        message.react("🇪")
        message.react("🇾")
    }
});

client.on("guildMemberUpdate", function(oldMember, newMember){
    if(oldMember.user.id == auth.Terry && newMember.nickname != "BerryBiden"){
        newMember.setNickname("BerryBiden");
    }
});
client.login(auth.token);