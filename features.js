const GAMES = ["Geometry Dash","CSGO","Age","DOTA 2","Runescape",]

function selectRandom(arr)
{
return arr[Math.floor(Math.random()*arr.length)]
}

module.exports.horoscope = function (){
    promptStart = [
    'Consider: ', 
    'The path is clear: ', 
    'As John would say: ',
    'You will find ']
    nouns = [
    'finger',
    'gussy',
    'DOTA',
    'homosexuality',
    'teez',
    'doing a codes',
    'Guilty Gears']
    promptEnd = [
    ' but hole.',
    ' is your destiny.',
    ', but only if you seize it.',
    ', and so the prophecy is foretold',
    ' is worth dying for.'
    ]
   return selectRandom(promptStart) + selectRandom(nouns) + selectRandom(promptEnd)

}
