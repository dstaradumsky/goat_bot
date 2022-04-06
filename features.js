const GAMES = ["Geometry Dash","CSGO","Age","DOTA 2","Runescape",]
function horoscope(){
    promptStart = [
    'Consider ', 
    'The path is clear: ', 
    'As John would say ',
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
        ', and so the prophecy foretold',
        ' is worth dying for.'
    ]
   return promptStart[Math.floor(Math.random()*promptStart.length)] + nouns[Math.floor(Math.random()*nouns.length)] + promptEnd[Math.floor(Math.random()*promptEnd.length)]

}