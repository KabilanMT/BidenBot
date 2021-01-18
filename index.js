const auth = require('./auth.json');
const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', ()=> {
    console.log("Online");
});

client.on('message', message => {
    let person = message.guild.members.cache.get(auth.Terry);
    if(person){
        person.setNickname("BerryBiden");
    }
});
client.login(auth.token);