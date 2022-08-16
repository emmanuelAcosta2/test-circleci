const googleDatabase = [
    'dog.com',
    'cat.com',
    'mouse.com',
    'rabbit.com',
    'hamster.com',
    'gerbil.com',
    'turtle.com',
    'chinchilla.com',
    'skunk.com',
    'parrot.com',
    'dogs.com',
    'cats.com',
    'mice.com',
    'doggos.com',
    'dogy.com',
    'doggo.com',
    'doggoes.com',
    'doggoooooo.com',
    'doggoooooooo.com',
    'doggooooooooo.com',
    'doggooooooooooo.com',
    'doggoooooooooooo.com',
];

const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => {
        return website.includes(searchInput,db);
    })
    return matches.length > 3 ? matches.slice(0, 3) : matches;
    
}
module.exports = googleSearch;