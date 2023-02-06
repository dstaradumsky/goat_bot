use serenity::{
    client::Context,
    framework::standard::{macros::command, CommandResult},
    model::channel::Message
};
#[command]
async fn help(ctx: &Context, msg: &Message) -> CommandResult{
    msg.channel_id.say(&ctx.http, "Commands: g!ping\n").await?;

    Ok(())
}