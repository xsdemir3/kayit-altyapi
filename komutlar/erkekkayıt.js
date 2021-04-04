const discord = require('discord.js')
const db = require('quick.db')
const tag = ""//buraya sunucunuzun tagını koyun kayıt ettiğiniz kişiye otomatik olarak tag verilir

exports.run = async(client, message, args) => {

let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let erkekrol = db.fetch(`erkekrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)
let kayıtsayı = db.fetch(`kayıtsayı_${message.author.id}`)
  
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`**<:online_:818050135492788224> Bu Komudu Kullanabilmen İçin <@&${kayıtçı}> Adlı Role Sahip olman Lazım**`)
if(message.channel.id !== kanal) return message.channel.send(`**<:online_:818050135492788224> Bu Komudu Sadece <#${kanal}> Adlı Kanalda Kullanabilirsin**`)
if (!erkekrol) return message.channel.send(`**<:online_:818050135492788224> Sunucuda Erkek Rolü Ayarlanmadığı İçin Komut Kullanılamaz**`)

let member = message.mentions.members.first();
if (!member) return message.channel.send(`**<:online_:818050135492788224> Erkek Olarak Kayıt Edeceğin Kullanıcıyı Belirtmelisin**`)
let isim = args[1]
if (!isim) return message.channel.send(`**<:online_:818050135492788224> ismini Belirtmelisin**`)
let yaş = args[2]
if (!yaş) return message.channel.send(`**<:online_:818050135492788224> Yaşını Belirtmelisin**`)
member.setNickname(`${tag} ${isim} | ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(erkekrol)

const darkcode = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`**${client.user.username} - Erkek**`)
.setColor('GREEN')
.setDescription(`**<:online_:818050135492788224> Erkek Olarak Kayıt Edilen Kullanıcı: ${member} \n<:online_:818050135492788224> Erkek Olarak Kayıt Eden Yetkili: <@!${message.author.id}>**`)
.addField(`**<:online_:818050135492788224> Kullanıcının İsmi;**`, `**<:online_:818050135492788224> ${isim}**`, true)
.addField(`**<:online_:818050135492788224> Kullanıcının Yaşı;**`, `**<:online_:818050135492788224> ${yaş}**`, true)
.setThumbnail(member.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(darkcode)
db.add(`kayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['e'],
  permlevel: 0
}
exports.help = {
  name: 'e',
  description: 'erkek olarak kayıt eder',
  usage: 'erkek @kullanıcı isim yaş'
}