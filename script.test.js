const googleSearch = require('./script');   

dbMock = [
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
];


describe('googleSearch', () => {
    it('is a silly test', () => {
        expect(true).toBe(false);
        expect(true).toBe(true);
        //googleSearch('Testtest',dbMock);
    })
    
    it('is searching google', () => {
        expect(googleSearch('testest',dbMock)).toEqual([]);
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogs.com', 'doggos.com']);
    });
    
    it('Work with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    });
    
    it('does not return more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    })
})
