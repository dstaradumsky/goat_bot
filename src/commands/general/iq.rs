use serenity::{
    client::Context,
    framework::standard::{macros::command, CommandResult},
    model::channel::Message
};
use rand::Rng;
#[command]
async fn iq(ctx: &Context, msg: &Message) -> CommandResult {
    if msg.author.id.to_string() == "196072810815291392" {
        msg.reply(ctx, format!("Your iq is 5000")).await?;
        
    }
    else {
    let iq : u8 = rand::thread_rng().gen_range(0..100);
    msg.reply(ctx, format!("Your iq is {}",iq)).await?;
    }
    Ok(())
}