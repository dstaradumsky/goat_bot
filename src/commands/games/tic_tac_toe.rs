use serenity::{
    client::Context,
    framework::standard::{macros::command, CommandResult},
    model::channel::Message
};
#[command]
#[aliases("tictactoe","ttt")]
async fn tic_tac_toe(ctx: &Context, msg: &Message) ->CommandResult{
    msg.channel_id.say(&ctx.http, "Test complete").await?;
    Ok(())
}