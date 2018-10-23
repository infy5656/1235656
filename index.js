const Discord = require("discord.js");

const PREFIX = ">";

var eightball = [
    "Yes ^^",
    "No :c",
    "Maybe :o",
    "I don't care :/"
];

var hug = [
    "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
    "https://media.giphy.com/media/svXXBgduBsJ1u/giphy.gif",
    "https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif",
    "https://media.giphy.com/media/wnsgren9NtITS/giphy.gif",
    "https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif",
    "https://media.giphy.com/media/8oeFgfmiSa4BG/giphy.gif",
    "https://media.giphy.com/media/pXQhWw2oHoPIs/giphy.gif",
    "https://media.giphy.com/media/yziFo5qYAOgY8/giphy.gif"
];

var feed = [
    "https://66.media.tumblr.com/870763f03b4f4feba3f0bf7a44b8d9f7/tumblr_njt4s7BxpX1unbsixo1_500.gif",
    "https://thumbs.gfycat.com/RawLightInvisiblerail-size_restricted.gif",
    "https://media.indiedb.com/images/groups/1/1/84/kanzashi-eating.gif",
    "https://media.tenor.com/images/54112765b2c1b359ffc5f55bd0661b93/tenor.gif",
    "https://media1.tenor.com/images/187ff5bc3a5628b6906935232898c200/tenor.gif",
    "https://i.imgur.com/1vC0R20.gif",
    "https://i.makeagif.com/media/9-13-2015/gahRJw.gif",
    "https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/5/50/Tumblr_mwbflsTQoI1rkeknyo2_500.gif"
];

var bam = [
    "https://i.kym-cdn.com/photos/images/original/001/118/143/5ec.gif",
    "https://media1.tenor.com/images/4b50b752de350a02965e75ea04ded3fc/tenor.gif",
    "https://tenor.com/view/ban-banned-gif-8540518.gif",
    "https://i.kym-cdn.com/photos/images/original/001/191/461/1fe.gif",
    "https://thumbs.gfycat.com/ImpartialSecondIbis-max-1mb.gif",
    "https://vignette.wikia.nocookie.net/diepio/images/9/9e/BanAbove.GIF/revision/latest?cb=20160920161137.gif"
];

var kiss = [
    "https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif",
    "https://media.giphy.com/media/L3rumss7XR4QM/giphy.gif",
    "https://media.giphy.com/media/Ka2NAhphLdqXC/giphy.gif",
    "https://media.giphy.com/media/QweWddrIQxlfi/giphy.gif",
    "https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif",
    "https://media.giphy.com/media/JFmIDQodMScJW/giphy.gif",
    "https://media.giphy.com/media/JFnW2F8gvdACQ/giphy.gif",
    "https://media.giphy.com/media/CzCi6itPr3yBa/giphy.gif",
    "https://media.giphy.com/media/ofF5ftkB75n2/giphy.gif"
];

var slap = [
    "https://media.giphy.com/media/fO6UtDy5pWYwM/giphy.gif",
    "https://media.giphy.com/media/tX29X2Dx3sAXS/giphy.gif",
    "https://media.giphy.com/media/exaa8OED1vvq/giphy.gif",
    "https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif",
    "https://media.giphy.com/media/8UHRbvmsFVyS2VXJKU/giphy.gif",
    "https://media.giphy.com/media/QYT2VEOXVyVmE/giphy.gif",
    "https://media.giphy.com/media/yfrwZqRvJ5WFy/giphy.gif",
    "https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif"
];

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("I am ready!");
    bot.user.setActivity(`>help | ${bot.users.size} users | ${bot.guilds.size} guilds`);
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            const then = Date.now();
            message.channel.send("***Pinging...***").then(m => {
            m.edit(`:alarm_clock: | ***Pong!*** It took **${Date.now() - then}ms** to send that message!\n\n:hearts: | **Discord heartbeat:** ${bot.ping}ms.`);
        });
            break;
        case "help":
            var embed = new Discord.RichEmbed()
                .setTitle("__**Help Terminal**__")
                .setColor("#d63220")
                .addField("**Help 1**", "Help for moderation commands.\n*Example Usage:* `>help1`")
                .addField("**Help 2**", "Help for fun commands.\n*Example Usage:* `>help2`")
                .addField("**Help 3**", "Help for other commands.\n*Example Usage:* `>help3`")
                .setImage("https://imgur.com/MCpozCx.png")
                .setFooter("Type >invite to invite the bot!")
            message.channel.sendEmbed(embed);
            break;
        case "help1":
            var embed = new Discord.RichEmbed()
                .setTitle("__**Moderation Commands**__")
                .setColor("#d63220")
                .addField("**kick**", "Kicks the mentioned user. Need permission: `KICK_MEMBERS`.\n**Example Usage:** `>kick @user#0001`")
                .addField("**ban**", "Bans the mentioned user. Need permission: `BAN_MEMBERS`.\n**Example Usage:** `>ban @user#0001`")
                .setFooter("Type >invite to invite the bot!")
            message.channel.sendEmbed(embed);
            break;
        case "help2":
            var embed = new Discord.RichEmbed()
                .setTitle("__**Fun Commands**__")
                .setColor("#d63220")
                .addField("**hug**", "Sends the gif of hugging the mentioned user.\n**Example Usage:** `>hug @user#0001`")
                .addField("**feed**", "Sends the gif of feeding the mentioned user.\n**Example Usage:** `>feed @user#0001`")
                .addField("**slap**", "Sends the gif of slapping the mentioned user.\n**Example Usage:** `>slap @user#0001`")
                .addField("**kiss**", "Sends the gif of kissing the mentioned user.\n**Example Usage:** `>kiss @user#0001`")
                .addField("**bam**", "Sends the gif of banning the mentioned user with your hammer.\n**Example Usage:** `>bam @user#0001`")
                .addField("**8ball**", "Normal 8ball command, ask the bot any questions!\n**Example Usage:** `>8ball <question>`")
                .addField("**avatar**", "Posts your profile image.\n**Example Usage:** `>avatar`")
                .setFooter("Type >invite to invite the bot!")
            message.channel.sendEmbed(embed);
            break;
        case "help3":
            var embed = new Discord.RichEmbed()
                .setTitle("__**Other Commands**__")
                .setColor("#d63220")
                .addField("**ping**", "Tells the ping latency.\n**Example Usage:** `>ping`")
                .addField("**botinfo**", "Shows the bot info.\n**Example Usage:** `>botinfo`")
                .addField("**invite**", "Gives you the invite link to invite the bot.\n**Example Usage:** `>invite`")
                .addField("**server**", "Gives you the support server of SensitiveBot.\n**Example Usage:** `>server`")
                .addField("**vote**", "Gives you the link to vote the bot!.\n**Example Usage:** `>vote`")
                .addField("**donate**", "Gives you the link to donate the bot!.\n**Example Usage:** `>donate`")
                .setFooter("Type >invite to invite the bot!")
            message.channel.sendEmbed(embed);
            break;
        case "avatar":
            var embed = new Discord.RichEmbed()
                .setTitle("**Bam**, your profile image!")
                .setColor("#d63220")
                .setImage(message.author.avatarURL)
            message.channel.sendEmbed(embed);
            break;
        case "8ball":
            if (args[1]) {
                message.channel.sendMessage(eightball[Math.floor(Math.random() * eightball.length)]);
            } else {
                message.channel.sendMessage(":interrobang: | ***Invalid Usage***\nYou forgot the question after the command!");
            }
            break;
        case "hug":
            if(message.mentions.members.size == 1) {
                let member = message.mentions.members.first()
                message.channel.send(`${message.author} gave ${member} a hug!`, {
                    file: hug[Math.floor(Math.random() * hug.length)]
                });
            } else {
                message.channel.sendMessage(":interrobang: | ***Invalid Usage***\nYou forgot to mention the user you want to hug!")
            }
            break;
        case "kiss":
            if(message.mentions.members.size == 1) {
                let member = message.mentions.members.first()
                message.channel.send(`${message.author} gave ${member} a kiss!`, {
                    file: kiss[Math.floor(Math.random() * kiss.length)]
                });
            } else {
                message.channel.sendMessage(":interrobang: | ***Invalid Usage***\nYou forgot to mention the user you want to kiss!")
            }
            break;
        case "botinfo":
            var embed = new Discord.RichEmbed()
            .setColor("#d63220")
            .setTitle("__**Bot Information**__")
            .addField("**Guilds**", `${bot.guilds.size} servers`)
            .addField("**Users**", `${bot.users.size} users`)
            .addField("**Developer**", "infy#7333")
            .addField("**Bot created on**", "2018/10/16")
            message.channel.sendEmbed(embed);
            break;
        case "kick":
            if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply(":interrobang: | **You are missing the following permission!**\n`KICK_MEMBERS`");
            if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) return message.reply(":interrobang: | **I don't have the following permission!\n`KICK_MEMBERS`");
            let user = message.mentions.users.first();
            let modlog = bot.channels.find("name", "mod-logs");

            if(!modlog) return message.reply(":interrobang: | **I've detected that this server doesn't have a mod-logs channel.**\n*Please make a channel, `mod-logs` if you havn't made one yet.*");
            if (message.mentions.users.size < 1) return message.reply(":interrobang: | ***You must mention someone to use the command.***");
            if (!message.guild.member(user)
            .kickable) return message.reply(":interrobang: | ***I can't kick someone that has a higher role than me!***\n*Please fix my role position. And make the position higher.*");

            message.guild.member(user).kick();
            message.channel.send(":white_check_mark: ***Kicked the user successfully!***")
            const kickembed = new Discord.RichEmbed()
            .setAuthor(`${user.username}`, user.displayAvatarURL)
            .setColor("#d63220")
            .addField("__**Kick Information**__", `**Kicked user:** ${user.tag}\n**User kicked by:** ${message.author.tag}`);
            modlog.send({
                embed : kickembed
            });
            break;
        case "ban":
            if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply(":interrobang: | **You are missing the following permission!**\n`BAN_MEMBERS`");
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply(":interrobang: | **I don't have the following permission!\n`BAN_MEMBERS`");
            let buser = message.mentions.users.first();
            let bmodlog = bot.channels.find("name", "mod-logs");

            if(!bmodlog) return message.reply(":interrobang: | **I've detected that this server doesn't have a mod-logs channel.**\n*Please make a channel, `mod-logs` if you havn't made one yet.*");
            if (message.mentions.users.size < 1) return message.reply(":interrobang: | ***You must mention someone to use the command.***");
            if (!message.guild.member(buser)
            .bannable) return message.reply(":interrobang: | ***I can't ban someone that has a higher role than me!***\n*Please fix my role position. And make the position higher.*");

            message.guild.member(buser).ban();
            message.channel.send(":white_check_mark: ***Banned the user successfully!***")
            const banembed = new Discord.RichEmbed()
            .setAuthor(`${buser.username}`, buser.displayAvatarURL)
            .setColor("#d63220")
            .addField("__**Ban Information**__", `**Banned user:** ${buser.tag}\n**User banned by:** ${message.author.tag}`);
            bmodlog.send({
                embed : banembed
            });
            break;
        case "slap":
            if(message.mentions.members.size == 1) {
                let member = message.mentions.members.first()
                message.channel.send(`${message.author} gave ${member} a slap!`, {
                    file: slap[Math.floor(Math.random() * slap.length)]
                });
            } else {
                message.channel.sendMessage(":interrobang: | ***Invalid Usage***\nYou forgot to mention the user you want to slap!")
            }
            break;
        case "invite":
            var embed = new Discord.RichEmbed()
                .setColor("#d63220")
                .setTitle("__**Invite the bot using this link!**__")
                .addField("**Invite link**", "https://discordapp.com/oauth2/authorize?client_id=502252556182093827&scope=bot&permissions=805365822")
            message.channel.sendEmbed(embed);
            break;
        case "server":
            var embed = new Discord.RichEmbed()
                .setColor("#d63220")
                .setTitle("__**Join the bots support server!**__")
                .addField("**Invite link**", "https://discord.gg/bSgcaS5")
            message.channel.sendEmbed(embed);
            break;
        case "vote":
            var embed = new Discord.RichEmbed()
                .setColor("#d63220")
                .setTitle("__**Go vote the bot now!**__")
                .addField("**Vote Link**", "https://discordbots.org/bot/502252556182093827/vote")
            message.channel.sendEmbed(embed);
            break;
        case "donate":
            var embed = new Discord.RichEmbed()
                .setColor("#d63220")
                .setTitle("__**Go donate the bot now!**__")
                .addField("**Donate Link**", "https://donatebot.io/checkout/503678640391979008")
            message.channel.sendEmbed(embed);
            break;
        case "bam":
            if(message.mentions.members.size == 1) {
                let member = message.mentions.members.first()
                message.channel.send(`${message.author} banned ${member} with their hammer!`, {
                    file: bam[Math.floor(Math.random() * bam.length)]
                });
            } else {
                message.channel.sendMessage(":interrobang: | ***Invalid Usage***\nYou forgot to mention the user you want to bam!")
            }
            break;
        case "feed":
            if(message.mentions.members.size == 1) {
                let member = message.mentions.members.first()
                message.channel.send(`${message.author} feeded ${member}!`, {
                    file: feed[Math.floor(Math.random() * feed.length)]
                });
            } else {
                message.channel.sendMessage(":interrobang: | ***Invalid Usage***\nYou forgot to mention the user you want to feed!")
            }
            break;
    default:
        message.channel.sendMessage(":interrobang: | ***Invalid Command***\n*Please check if you had any typo!*");
    }
});

bot.login(process.env.BOT_TOKEN);
