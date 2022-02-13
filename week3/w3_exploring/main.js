//key
//geres: Open World RPG, Sandbox Survival, FPS, RTS, Competive RTS/FPS, Dungeon Crawler, Rogue like, MMORPG, Home Builder,
//sub Genres: Fantasy, Modern, Scifi, Steam Punk, Post Apocalyptic, Horror, Medievil,
//Ratting : 1-5 star


const games = [
    {name:"Breath of the Wild", genre :"open world RPG", subGenre:"Fantasy", rating:5 },
    {name:"new world", genre :"MMORPG", subGenre:"Fantasy", rating:3 },
    {name:"League of Legends", genre :"Competive RTS/FPS", subGenre:"Fantasy", rating:2 },
    {name:"Terraria", genre :"Sandbox Survival", subGenre:"Fantasy", rating:5 },
    {name:"Minecraft", genre :"Sandbox Survival", subGenre:"Fantasy", rating:3 },
    {name:"Halo", genre :"FPS", subGenre:"Scifi", rating:4 },
    {name:"Call of Duty", genre :"FPS", subGenre:"Modern", rating:2 },
    {name:"fortnite", genre :"FPS", subGenre:"Scifi", rating:4 },
    {name:"Star Craft", genre :"RTS", subGenre:"Scifi", rating:4 },
    {name:"Stardew Valley", genre :"Home Builder", subGenre:"Fantasy", rating:5 },
    {name:"Connan Exile", genre :"Sandbox Survival", subGenre:"Fantasy", rating:4 },
    {name:"Valheim", genre :"Sandbox Survival", subGenre:"Fantasy", rating:4 },
    {name:"Age of Empires", genre :"RTS", subGenre:"Medievil", rating:3 },
    {name:"Diablo", genre :"Dungeon Crawler", subGenre:"Fantasy", rating:4 },
    {name:"Overwatch", genre :"Competive RTS/FPS", subGenre:"Scifi", rating:3 },
    {name:"Guild Wars 2", genre :"MMORPG", subGenre:"Fantasy", rating:2 },
    {name:"Risk of Rain", genre :"Rogue like", subGenre:"Scifi", rating:3 },
    {name:"Skyrim", genre :"Open World RPG", subGenre:"Fantasy", rating:5 },
    {name:"DoTa", genre :"Competive RTS/FPS", subGenre:"Fantasy", rating:2 },
];

const twoStarRating = rating.filter(2)
console.table(twoStarRating);