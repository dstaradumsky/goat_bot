const Discord = require('discord.js');
const Features = require('./features.js');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });
const sairoID = "167931077694980096";
const myID = "196072810815291392";
const wabbitID = "123751981016809475";
const charlesID = "264554908613738498";
const kareemID = "201145080621432832";
client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.API_KEY);


client.on('message', message => {

	messageArgs = message.content.split();

	switch (messageArgs[0]) {
		case ("g!help"): {
			message.channel.send(`Commands: \n 
			g!gay : See if you are gay\n 
			g!iq : Carefully analyzes and calculates your iq\n 
			g!teez : See how your teez rates on the teezy scale\n
			g!horoscope : See your fortune\n`)
		}
		break
		case ("g!gay"):
			if (message.author.id == myID) {
				message.channel.send(message.author.username + " is not gay");
			}
			else {
				message.channel.send(message.author.username + " is gay");
			}
			break

		case ("g!iq"):
			if (message.author.id != myID) {
				var rand = Math.random();
				message.channel.send("Your IQ is " + Math.floor(rand * 100))
			}
			else {
				message.channel.send("Your IQ is 500")
			};
		break
		case ("g!teez"):
		{
			var rand = Math.floor(Math.random()*11);
			if(rand<9){
			message.channel.send("<@"+message.author.id+"> I rate your teez "+ rand +"/10");
			}
			else {
				message.channel.send("<@"+message.author.id+"> I rate your teez "+ rand +"/10");
				message.channel.send("https://tenor.com/view/wowawewa-borat-wowwawewaa-gif-15656274");
			}
		}
		break
		case ("g!horoscope"):
			{
				message.channel.send("<@" + message.author.id + "> "+Features.horoscope());
			}
		break
			default:
	}
	switch (message.author.id) {
		case (charlesID):
			var rand = Math.random();
			if (rand <= .01) {
				message.channel.send("<@"+message.author.id+"> WE PLAY AGE?");
			}

			else if (rand <= .02) {
				message.channel.send("<@"+message.author.id+"> WE PLAY GEOMETRY TRASH?");
			}
			else if (rand <= .03) {
				message.channel.send("<@"+message.author.id+"> CSGO?");
			}
			break
		case (kareemID):
			var rand = Math.random();
			if (rand <= .025) {
				message.channel.send("<@"+message.author.id+"> we do a codes?");
			}
		default:
	}

});
