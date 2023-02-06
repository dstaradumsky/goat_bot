mod commands;

use std::env;
use serenity::async_trait;
use serenity::prelude::*;
use serenity::model::channel::Message;
use serenity::framework::standard::macros::{command, group};
use serenity::framework::standard::{StandardFramework, CommandResult};

use commands:: {
    general::{ping::*,help::*,iq::*},
    games::{tic_tac_toe::*},
};
#[group]
#[commands(ping,help,iq)]
struct General;

#[group("Games")]
#[prefix = "game"]
#[commands(tic_tac_toe)]
struct Game;
struct Handler;

#[async_trait]
impl EventHandler for Handler {
}

#[tokio::main]
async fn main() {
    let framework = StandardFramework::new()
        .configure(|c| c.prefix("g!")) // set the bot's prefix to "g!"
        .group(&GENERAL_GROUP).group(&GAME_GROUP);

    // Login with a bot token from the environment
    let token = env::var("discord_token").expect("token");
    let intents = GatewayIntents::non_privileged() | GatewayIntents::MESSAGE_CONTENT;
    let mut client = Client::builder(token, intents)
        .event_handler(Handler)
        .framework(framework)
        .await
        .expect("Error creating client");

    // start listening for events by starting a single shard
    if let Err(why) = client.start().await {
        println!("An error occurred while running the client: {:?}", why);
    }
}
