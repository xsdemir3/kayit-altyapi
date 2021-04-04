const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın**`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`**<:dnd_:818050135463559188> ${client.user.username} - Kız Rol Sıfırla**`)
.setColor('GREEN')
.setDescription(`**<:dnd_:818050135463559188> Sunucu İçin Ayarladığınız Kız Rolü Başarıyla Sıfırlandı**`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı`)
message.channel.send(sıfırlandı)
db.delete(`kızrol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Kız Rol Ayarla `)
.setColor('RED')
.setDescription(`**<:dnd_:818050135463559188> Ayarlayacağınız Kız Rolünü Belirtiniz**`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı`)
message.channel.send(ayarlanmadı)
}
db.set(`kızrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`**<:dnd_:818050135463559188> ${client.user.username} - kız Rol Ayarlandı**`)
.setColor('RED')
.setDescription(`**<:dnd_:818050135463559188> Kız Rolü Başarıyla ${rol} Olarak Ayarlandı**`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kızrol', 'krol', 'k-rol'],
  permlevel: 0
}
exports.help = {
  name: 'kız-rol-ayarla',
  description: 'kız rolünü ayarlar',
  usage: 'kız-rol @rol'
}