const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'ir.skyblock.uz',
  port: 25566,
  username: 'VENDIGO_AFK'
})
bot.once("spawn", () => {
    bot.chat("/login zedloop");
   
})


function lookAtNearestPlayer () {
  const playerFilter = (entity) => entity.type === 'player'
  const playerEntity = bot.nearestEntity(playerFilter)
  
  if (!playerEntity) return
  
  const pos = playerEntity.position.offset(0, playerEntity.height, 0)
  bot.lookAt(pos)
}


bot.on('physicTick', lookAtNearestPlayer)


