const Discord = require('discord.js');
const token = require('./general/token.json');
const config = require('./general/config.json');
const reasons = require('./general/reasons.json');

const client = new Discord.Client();
const prefix = config.prefix;

const num = (input = Number) => {
  if (!isNaN(input) && input > 0 && input < reasons[100].length) return parseInt(input);
  else return Math.floor(Math.random() * reasons[100].length);
};

client.once('ready', () => {
  client.user.setActivity('!send');
  setInterval(() => {
    const i = num();
    embed = new Discord.MessageEmbed()
      .setTitle(`Reason #${i + 1} on why I love you!!!!!!!!!!!!!`)
      .setColor('#014f41')
      .setAuthor('Thomas', 'https://cdn.discordapp.com/avatars/473110112844644372/26ab29e81d29d6a4c34053688e938559.png?size=256')
      .setDescription(`I love you because, ${reasons[100][i]}`);
    const target = client.users.cache.get('576154421579481090');
    target.send(embed);
    const cactus = client.users.cache.get('473110112844644372');
    cactus.send(embed);
  }, 3600000)
  console.log(`Logged in as ${client.user.tag}`)
});

client.on('message', msg => {

  if (!msg.content.toLowerCase().startsWith(prefix) || msg.author.bot || msg.channel.type != 'text' || msg.author.id == '576154421579481090') return;
  const args = msg.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (command == 'send') {
    if (args[0] == 'all' && msg.author.id == '473110112844644372') {
      let num = 0;
      for(let i of reasons[100]) {
        ++num
        setTimeout(() => {
          let _num = num;
          var embed = new Discord.MessageEmbed()
            .setTitle(`Reason #${_num} on why I love you!!!!!!!!!!!!!`)
            .setColor('#014f41')
            .setAuthor('Thomas', 'https://cdn.discordapp.com/avatars/473110112844644372/26ab29e81d29d6a4c34053688e938559.png?size=256')
            .setDescription(`I love you because, ${i}`);
          const target = client.users.cache.get('576154421579481090');
          target.send(embed);
          const cactus = client.users.cache.get('473110112844644372');
          cactus.send(embed);
        }, num * 1000);
      }
    } else {
      const i = num(args[0]);
      var embed = new Discord.MessageEmbed()
        .setDescription(`Just sent reason #${i + 1} to joanna on why I love them!!!!`)
        .setColor('#014f41');
      msg.channel.send(embed);
      embed = new Discord.MessageEmbed()
        .setTitle(`Reason #${i + 1} on why I love you!!!!!!!!!!!!!`)
        .setColor('#014f41')
        .setAuthor('Thomas', 'https://cdn.discordapp.com/avatars/473110112844644372/26ab29e81d29d6a4c34053688e938559.png?size=256')
        .setDescription(`I love you because, ${reasons[100][i]}`);
      const target = client.users.cache.get('576154421579481090');
      target.send(embed);
      const cactus = client.users.cache.get('473110112844644372');
      cactus.send(embed);
    }
  }
});

client.login(token.main);