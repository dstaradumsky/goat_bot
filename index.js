const Discord = require('discord.js');
const client = new Discord.Client({intents: [intents.FLAGS.GUILDS]});
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
		case ("g!teez"):
		{
			var rand = Math.random();
			message.channel.send("<@"+message.author.id+"> I rate your teez "+ Math.floor(rand * 10)+"/10");
		};
			default:
	}
	switch (message.author.id) {
		case (charlesID):
			var rand = Math.random();
			if (rand <= .1) {
				message.channel.send("<@"+message.author.id+"> WE PLAY AGE?");
			}

			else if (rand <= .2) {
				message.channel.send("<@"+message.author.id+"> WE PLAY GEOMETRY TRASH?");
			}
			else if (rand <= .3) {
				message.channel.send("<@"+message.author.id+"> CSGO?");
			}
			break
		case (kareemID):
			var rand = Math.random();
			if (rand <= .1) {
				message.channel.send("<@"+message.author.id+"> we do a codes?");
			}
		default:
	}

});
